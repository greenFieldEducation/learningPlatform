const EnrollmentRequest = require('../DataBase/Models/EnrollmentRequest');
const Course = require('../DataBase/Models/Courses');
const Student = require('../DataBase/Models/Students');

async function createEnrollmentRequest(req, res) {
  const { studentId, courseId } = req.body;

  try {
    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const enrollmentRequest = await EnrollmentRequest.create({
      studentId,
      courseId,
      status: 'pending',
    });

    return res.status(201).json(enrollmentRequest);
  } catch (error) {
    console.error('Error creating enrollment request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function acceptEnrollmentRequest(req, res) {
  const { enrollmentRequestId } = req.params;

  try {
    const enrollmentRequest = await EnrollmentRequest.findByPk(enrollmentRequestId);

    if (!enrollmentRequest) {
      return res.status(404).json({ error: 'Enrollment request not found' });
    }

    await enrollmentRequest.update({ status: 'accepted' });

    return res.status(200).json({ message: 'Enrollment request accepted successfully' });
  } catch (error) {
    console.error('Error accepting enrollment request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function rejectEnrollmentRequest(req, res) {
  const { enrollmentRequestId } = req.params;

  try {
    const enrollmentRequest = await EnrollmentRequest.findByPk(enrollmentRequestId);

    if (!enrollmentRequest) {
      return res.status(404).json({ error: 'Enrollment request not found' });
    }

    await enrollmentRequest.update({ status: 'rejected' });

    return res.status(200).json({ message: 'Enrollment request rejected successfully' });
  } catch (error) {
    console.error('Error rejecting enrollment request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

const getEnrollmentRequestsByCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const enrollmentRequests = await EnrollmentRequest.findAll({
      where: {
        courseId,
        status: 'pending',
      },
      include: [
        {
          model: Student,
          attributes: ['id', 'username', 'email', 'image'],
        },
      ],
    });

    return res.status(200).json(enrollmentRequests);
  } catch (error) {
    console.error('Error fetching enrollment requests:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createEnrollmentRequest,
  acceptEnrollmentRequest,
  rejectEnrollmentRequest,
  getEnrollmentRequestsByCourse,
};
