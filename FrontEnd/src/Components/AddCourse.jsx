import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        category: '',
        content: '',
        note: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
           
    // navigate('/instructor-dashboard');
        
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold text-blue-700 mb-6">Add New Course</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" id="title" name="title" value={courseData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" name="description" value={courseData.description} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select id="category" name="category" value={courseData.category} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
                            <option value="">Select Category</option>
                            <option value="Math">Math</option>
                            <option value="Economy">Economy</option>
                            <option value="Management">Management</option>
                            <option value="Science">Science</option>
                            <option value="History&Geography">History & Geography</option>
                            <option value="Art&Literature">Art & Literature</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea id="content" name="content" value={courseData.content} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
                        <textarea id="note" name="note" value={courseData.note} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Course</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
