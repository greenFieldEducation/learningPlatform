const Student = require('../DataBase/Models/Students.js');
const Course = require('../DataBase/Models/Courses.js');
const EnrollmentRequest = require('../DataBase/Models/EnrollmentRequest.js');
const Instructor = require('../DataBase/Models/Instructor.js');
const webpush = require('../config/webPush');
const { Op } = require('sequelize');

async function enrollStudent(req, res) {
  const { studentId, courseId } = req.body;

  try {
    // Fetch Student and Course instances
    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
      return res.status(404).json({ error: 'Student or Course not found' });
    }

    // Create EnrollmentRequest
    const enrollmentRequest = await EnrollmentRequest.create({
      studentId: student.id,
      courseId: course.id,
      status: 'pending',
    });

    // Notify the instructor
    const instructor = await Instructor.findOne({
      where: { id: course.instructorId },
    });

    if (instructor && instructor.pushSubscription) {
      const payload = JSON.stringify({
        title: 'New Enrollment Request',
        body: `Student ${studentId} has requested to enroll in ${course.title}`,
      });

      webpush.sendNotification(instructor.pushSubscription, payload)
        .then(() => {
          console.log('Notification sent successfully');
        })
        .catch(err => {
          console.error('Error sending notification:', err);
        });
    }

    console.log(`Enrollment request created for Student ${student.id} in Course ${course.id}`);

    return res.status(201).json(enrollmentRequest);
  } catch (error) {
    console.error('Error creating enrollment request:', error);
    return res.status(500).json({ error: 'Failed to create enrollment request' });
  }
}

module.exports = {
  enrollStudent,
};
