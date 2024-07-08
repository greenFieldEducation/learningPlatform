import React from 'react'

const userFeedbacksData = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'This platform has completely transformed my learning experience. The courses are top-notch!',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'I love the interactive elements of the courses. Highly recommend to everyone!',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    feedback: 'The instructors are very knowledgeable and the content is very engaging.',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    feedback: 'A great variety of courses to choose from. I have learned so much already.',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
]

const UserFeedbacks = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">User Feedbacks</h2>
      <div className="flex flex-wrap -mx-4">
        {userFeedbacksData.map((feedback) => (
          <div
            key={feedback.id}
            className="w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={feedback.imageUrl}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="text-lg font-bold">{feedback.name}</h3>
              </div>
              <p className="text-gray-700">{feedback.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserFeedbacks
