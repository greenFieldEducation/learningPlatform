    import React, { useState } from 'react';
    import axios from 'axios';

    const UpdateInstructorProfile = () => {
        const instructorId = 1; 
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [gender, setGender] = useState('');
        const [phone, setPhone] = useState('');
        const [image, setImage] = useState('');
        const [imagePreview, setImagePreview] = useState('');

        const handleUpdateProfile = async (e) => {
            e.preventDefault();
            const formData = {
                username,
                email,
                password,
                gender,
                phone,
                image,
            };

            try {
                await axios.put(`http://127.0.0.1:5000/api/instructor/instructors/${instructorId}`, formData);
                alert('Profile updated successfully');
            } catch (error) {
                console.error('Error updating profile:', error);
                alert('Failed to update profile');
            }
        };

        const handleImageChange = async (e) => {
            const file = e.target.files[0];
            setImagePreview(URL.createObjectURL(file));
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await axios.post(`http://127.0.0.1:5000/api/instructor/instructors/${instructorId}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setImage(response.data.secure_url);
                console.log(response.data.secure_url)
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Failed to upload image');
            }
        };

        return (
            <div 
                className="min-h-screen flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: "url('https://ccrc.tc.columbia.edu/images/lesson-study-webinar-blog.png')" }}
            >
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Gender</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Profile Image</label>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {imagePreview && <img src={imagePreview} alt="Profile Preview" className="mt-4 w-full h-48 object-cover rounded" />}
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default UpdateInstructorProfile;
