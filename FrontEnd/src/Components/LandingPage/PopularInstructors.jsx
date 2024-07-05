import React from 'react';
import { NavLink } from 'react-router-dom';


const PopularInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Jane Doe',
      description: 'Expert in web development with over 10 years of experience.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/instructor1.jpg'
    },
    {
      id: 2,
      name: 'John Smith',
      description: 'Specialist in data science and machine learning.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/instructor2.jpg'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      description: 'Renowned instructor in advanced JavaScript.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/instructor3.jpg'
    },
    {
      id: 4,
      name: 'Michael Brown',
      description: 'Experienced in backend development and database management.',
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1625245567/instructor4.jpg'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Popular Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={instructor.imageUrl}
                alt={instructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-gray-600 mb-4">{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;