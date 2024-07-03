const Student = require('../DataBase/Models/Students');
const Course = require('../DataBase/Models/Courses');
const EnrollmentRequest = require('../DataBase/Models/EnrollmentRequest');

async function enrollStudent(req, res, next) {
  const { studentId, courseId } = req.body;

  try {
    //  Student and Course instances
    const student = await Student.findByPk(studentId);  //* by primary key 
    const course = await Course.findByPk(courseId); 
      
    if (!student || !course) {
      return res.status(404).json({ error: 'Student or Course not found' });
    }

    // Create EnrollmentRequest
    const enrollmentRequest = await EnrollmentRequest.create({
      studentId: student.id,
      courseId: course.id,
      status: 'pending', //*Setting the initial status of an enrollment request to 'pending':
                            //*It provides a default state for newly created records until further actions are taken.
    });

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
