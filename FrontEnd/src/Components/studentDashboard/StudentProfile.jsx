import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RequestNotificationPermission from './RequestNotificationPermission';
import SubscribeToNotifications from './SubscribeToNotifications';

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [serviceWorkerRegistration, setServiceWorkerRegistration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Fetch student profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/student/profile');
        setStudent(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    // Register service worker for notifications
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(reg => {
        console.log('Service worker registered:', reg);
        setServiceWorkerRegistration(reg);
      }).catch(error => {
        console.error('Service worker registration failed:', error);
      });
    }
  }, []);

  const handlePermissionGranted = () => {
    setNotificationsEnabled(true);
  };

  const handlePermissionDenied = () => {
    setNotificationsEnabled(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="Profile p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
        {student && (
          <div>
            <img
              src={student.image || 'default-profile.png'}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4"
            />
            <p className="mb-2"><strong>Username:</strong> {student.username}</p>
            <p className="mb-2"><strong>Email:</strong> {student.email}</p>
            <p className="mb-2"><strong>Gender:</strong> {student.gender}</p>
            <p className="mb-2"><strong>Phone:</strong> {student.phone}</p>
            <p className="mb-2"><strong>Field:</strong> {student.fields}</p>
            <p className="mb-2"><strong>Role:</strong> {student.role}</p>
            <RequestNotificationPermission 
              onPermissionGranted={handlePermissionGranted}
              onPermissionDenied={handlePermissionDenied}
            />
            {notificationsEnabled && serviceWorkerRegistration && (
              <SubscribeToNotifications 
                serviceWorkerRegistration={serviceWorkerRegistration} 
                studentId={student.id} 
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfile;
