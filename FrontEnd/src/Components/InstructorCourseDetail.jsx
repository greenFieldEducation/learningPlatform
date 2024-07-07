import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DeletePopUp from './PopUps/DeleteConfirmation';

const InstructorCourseDetail = () => {
    const { id: courseId } = useParams();
    const { id:instructorId } = useParams();

    const [course, setCourse] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState({
        title: '',
        category: '',
        content: '',
        note: ''
    });
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            try {

                const response = await axios.get(`http://localhost:5000/api/course/${courseId}`);
                setCourse(response.data);
                setUpdatedCourse(response.data); 
            } catch (error) {
                console.error('Failed to fetch course', error);


            }
        };

        fetchCourseDetail();
    }, [instructorId, courseId]); 

    

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/instructors/${instructorId}/courses/${courseId}`, updatedCourse);
            console.log(response.data);
            alert('Course updated successfully');
        } catch (error) {

            console.error('Failed to update course', error);

            alert('Failed to update course.');
        }
    };


    const handleDelete = () => {
        setShowDelete(true);
    };

    const confirmDelete = async () => {
        try {

            const response = await axios.delete(`http://localhost:5000/api/instructors/${instructorId}/courses/${courseId}`);
            console.log(response.data);
            alert('Course deleted successfully');
            // Optionally, redirect the user or perform any other action after deletion
        } catch (error) {
         
            console.error('cannot delete', error);
            alert('Failed to delete course.');
        }
        setShowDelete(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setUpdatedCourse(course);
        setEditing(true);
    };

    if (!course) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    const backgroundStyle = {
        backgroundImage: `url('https://wallpapercave.com/wp/wp9794604.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
    };

    return (
        <div className="relative">
            <div className="absolute inset-0 z-0" style={backgroundStyle} />
            <div className="relative z-10 flex justify-center items-center min-h-screen">
                <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl w-full mx-auto transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    {editing ? (
                        <>
                            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Edit Course</h1>
                            <form className="space-y-4" onSubmit={handleUpdate}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-1">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={updatedCourse.title}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-lg font-semibold text-gray-800 mb-1">Category</label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        value={updatedCourse.category}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="content" className="block text-lg font-semibold text-gray-800 mb-1">Content</label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        value={updatedCourse.content}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        rows="6"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="note" className="block text-lg font-semibold text-gray-800 mb-1">Note</label>
                                    <textarea
                                        id="note"
                                        name="note"
                                        value={updatedCourse.note}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        rows="4"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                                    >
                                        Update Course
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-yellow-500 text-white px-6 py-2 ml-4 rounded-lg hover:bg-yellow-600 transition duration-300"
                                        onClick={() => setEditing(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">{course.title}</h1>

                            <hr className="my-6 border-t border-gray-200" />

                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Category</h2>
                                <p className="text-gray-700">{course.category}</p>
                            </div>

                            <hr className="my-6 border-t border-gray-200" />

                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Content</h2>
                                <p className="text-gray-700 leading-relaxed">{course.content}</p>
                            </div>

                            {course.note && (
                                <>
                                    <hr className="my-6 border-t border-gray-200" />
                                    <div className="mb-8">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Note</h2>
                                        <p className="text-gray-700 italic">{course.note}</p>
                                    </div>
                                </>
                            )}

                            <div className="flex justify-center mt-6">
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                                    onClick={handleEdit}
                                >
                                    Edit Course
                                </button>
                                <button
                                    className="bg-red-500 text-white px-6 py-2 ml-4 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
                                    onClick={handleDelete}

                                >
                                    Delete Course
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <DeletePopUp
                isOpen={showDelete}
                onClose={() => setShowDelete(false)}
                onConfirm={confirmDelete}
                title="Delete Course"
                message="Are you sure you want to delete this course?"
            />
        </div>
    );
};

export default InstructorCourseDetail;
