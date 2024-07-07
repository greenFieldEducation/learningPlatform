import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaImage, FaSave, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const UpdateInstructorProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset'); // Replace with your upload preset

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData); // Replace with your Cloudinary cloud name
            setImageUrl(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSave = async () => {
        const data = {
            username,
            email,
            password,
            gender,
            phone,
            image: imageUrl,
        };
        const token = localStorage.getItem('token');

        try {
            const response = await axios.put('http://127.0.0.1:5000/api/updateInstructor', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error updating instructor:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">Edit Instructor Profile</h2>
                <form className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <FaUser className="text-gray-500" />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-gray-500" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-gray-500" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-gray-500" />
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            placeholder="Gender"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-gray-500" />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaImage className="text-gray-500" />
                        <input
                            type="file"
                            onChange={handleImageUpload}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                            <FaSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateInstructorProfile;
