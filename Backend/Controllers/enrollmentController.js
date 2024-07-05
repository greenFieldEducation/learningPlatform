const EnrollmentRequest = require("../DataBase/Models/EnrollmentRequest");
const Course = require("../DataBase/Models/Courses");
const Instructor = require("../DataBase/Models/Instructor");
const webpush = require("../config/webPush");
const { Op } = require("sequelize");

// Function to send notification to instructor
async function sendNotificationToInstructor(instructorId, courseId) {
  try {
    // Retrieve instructor's subscription details from database
    const instructor = await Instructor.findByPk(instructorId);
    const subscription = instructor.subscription; // Example field from your Instructor model

    // Example notification payload
    const notificationPayload = {
      title: "New Enrollment Request",
      body: `You have a new enrollment request for course ${courseId}`,
      // Add any additional data or URLs as needed
    };

    // Send notification using web-push
    await webpush.sendNotification(
      subscription,
      JSON.stringify(notificationPayload)
    );
  } catch (error) {
    console.error("Error sending notification to instructor:", error);
    throw error;
  }
}

// Controller methods
const enrollmentRequestController = {
  // Create enrollment request
  async createEnrollmentRequest(req, res) {
    const { studentId, courseId } = req.body;

    try {
      // Create enrollment request
      const enrollmentRequest = await EnrollmentRequest.create({
        studentId,
        courseId,
        status: "pending",
      });

      // Optionally, retrieve course details
      const course = await Course.findByPk(courseId);

      // Notify instructor (web-push notification)
      if (course) {
        const instructorId = course.instructorId;

        // Send notification to instructor
        await sendNotificationToInstructor(instructorId, courseId);

        // Update course state to 'pending' (if needed)
        await Course.update({ state: "pending" }, { where: { id: courseId } });

        return res.status(201).json(enrollmentRequest);
      } else {
        throw new Error("Course not found");
      }
    } catch (error) {
      console.error("Error creating enrollment request:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  // Accept enrollment request
  async acceptEnrollmentRequest(req, res) {
    const { enrollmentRequestId, courseId } = req.params;

    try {
      // Update enrollment request status to 'accepted'
      await EnrollmentRequest.update(
        { status: "accepted" },
        {
          where: { id: enrollmentRequestId, courseId },
        }
      );

      // Update course state to 'accepted'
      await Course.update({ state: "accepted" }, { where: { id: courseId } });

      // Optionally, notify student (web-push notification)
      // Example: sendNotificationToStudent(studentId, courseId, 'accepted');

      return res
        .status(200)
        .json({ message: "Enrollment request accepted successfully" });
    } catch (error) {
      console.error("Error accepting enrollment request:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = enrollmentRequestController;
