import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/feedbacks'); // Adjust the URL as necessary
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="flex flex-wrap">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="p-4 m-4 border rounded-md shadow-md">
          <h3 className="font-bold">{feedback.title}</h3>
          <p>{feedback.content}</p>
          <p className="text-gray-500 text-sm">{feedback.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
