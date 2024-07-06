import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaImage, FaSave, FaArrowLeft } from 'react-icons/fa';
import { Image } from 'cloudinary-react';
import axios from 'axios';

const EditInstructorProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  const handleSave = async () => {
    const data = {
      username,
      email,
      password,
      gender,
      phone,
      image 
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/instructors", data);
      console.log("Added successfully:", response.data);
    } catch (error) {
      console.error("Error adding instructor:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/instructors/1/upload-image", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Upload successful:", res.data);
      setImage(res.data.secure_url); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Learniverse Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Learniverse</h1>

      {/* Edit Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full md:w-2/3 lg:w-1/2">
        {/* Circular Profile Image */}
        <div className="mx-auto mb-4 w-32 h-32 overflow-hidden rounded-full border-4 border-blue-500 relative">
          {image ? (
            <Image
              cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
              publicId={profileImage}
              width="150"
              crop="scale"
            />
          ) : (
            <img
              src="/path/to/default-profile-image.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          )}
        </div>

        {/* Edit Form */}
        <form className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500 flex-1 py-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500 flex-1 py-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaImage className="text-gray-400" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaSave className="mr-2 text-gray-400" /> {/* Placeholder for Password input */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500 flex-1 py-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaSave className="mr-2 text-gray-400" /> {/* Placeholder for Gender input */}
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Gender"
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500 flex-1 py-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <FaSave className="mr-2 text-gray-400" /> {/* Placeholder for Phone input */}
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500 flex-1 py-2"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <FaSave className="mr-2" /> Save Changes
          </button>
        </form>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md flex items-center hover:bg-gray-700 transition duration-300"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>
    </div>
  );
};

export default EditInstructorProfile;
