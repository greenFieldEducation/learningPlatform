import React from "react";

const StudentProfileCard = () => {
  // Dummy student data for testing
  const student = {
    username: "John Doe",
    email: "john.doe@example.com",
    gender: "Men",
    phone: "123-456-7890",
    fields: "Math",
    role: "student",
    image: "https://randomuser.me/api/portraits/men/10.jpg", // Sample image URL
  };

  return (
    <div className="w-40 bg-transparent absolute  right-5 ">
      <div className="flex items-center">
      <div className="flex items-center flex-col">
  <img
    src={student.image}
    alt={student.username}
    className="w-12 h-12 rounded-full mb-2"
  />
  <div className="text-center">
    <h3 className="text-md font-semibold">{student.username}</h3>
    <p className="text-sm text-white font-semibold">{student.email}</p>
  </div>
</div>

   
      </div>
    </div>
  );
};

export default StudentProfileCard;
