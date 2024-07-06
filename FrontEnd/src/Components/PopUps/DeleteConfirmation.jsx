import React from 'react';

const DeletePopUp = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto z-50">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-800 mb-6">{message}</p>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mr-2"
                                onClick={onConfirm}
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeletePopUp;
