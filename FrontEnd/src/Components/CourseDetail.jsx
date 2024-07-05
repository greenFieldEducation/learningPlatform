import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      details: 'Learn the basics of programming with this introductory course. This course covers fundamental concepts and helps you build a strong foundation in programming.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/programming.jpg'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      details: 'Master the intricacies of JavaScript and become a pro. This course dives deep into advanced topics and best practices.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/javascript.jpg'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      details: 'Become a full-stack web developer with our comprehensive bootcamp. This course covers everything from HTML and CSS to backend development and deployment.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/web-development.jpg'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      details: 'Explore the world of data science with Python. This course teaches you how to analyze and visualize data using powerful Python libraries.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/data-science.jpg'
    }
  ];

  const course = courses.find(course => course.id === parseInt(id));

  return (
    <div className="container mx-auto py-12">
      {course ? (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-64 object-cover mb-8 rounded-lg"
          />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700">{course.details}</p>
        </div>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default CourseDetail;