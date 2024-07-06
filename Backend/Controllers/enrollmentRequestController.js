const EnrollmentRequest = require('../DataBase/Models/EnrollmentRequest');
const Course = require('../DataBase/Models/Courses');
const Instructor = require('../DataBase/Models/Instructor');
const webpush = require('../config/webPush');
const { Op } = require('sequelize');

// Function to send notification to instructor
async function sendNotificationToInstructor(instructorId, courseId) {
    try {
        const instructor = await Instructor.findByPk(instructorId);

        if (instructor && instructor.subscription) {
            const subscription = instructor.subscription;

            const notificationPayload = {
                title: 'New Enrollment Request',
                body: `You have a new enrollment request for course ID ${courseId}`,
            };

            await webpush.sendNotification(subscription, JSON.stringify(notificationPayload));
        }
    } catch (error) {
        console.error('Error sending notification to instructor:', error);
        throw error;
    }
}

const enrollmentRequestController = {
    async createEnrollmentRequest(req, res) {
        const { studentId, courseId } = req.body;

        try {
            const enrollmentRequest = await EnrollmentRequest.create({
                studentId,
                courseId,
                status: 'pending',
            });

            const course = await Course.findByPk(courseId);

            if (course) {
                const instructorId = course.instructorId;

                await sendNotificationToInstructor(instructorId, courseId);

                await Course.update({ state: 'pending' }, { where: { id: courseId } });

                return res.status(201).json(enrollmentRequest);
            } else {
                throw new Error('Course not found');
            }
        } catch (error) {
            console.error('Error creating enrollment request:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    async acceptEnrollmentRequest(req, res) {
        const { enrollmentRequestId, courseId } = req.params;

        try {
            await EnrollmentRequest.update({ status: 'accepted' }, {
                where: { id: enrollmentRequestId, courseId }
            });

            await Course.update({ state: 'accepted' }, { where: { id: courseId } });

            return res.status(200).json({ message: 'Enrollment request accepted successfully' });
        } catch (error) {
            console.error('Error accepting enrollment request:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = enrollmentRequestController;
