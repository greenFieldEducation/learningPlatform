import React, { useState } from 'react';

const RequestNotificationPermission = ({ onPermissionGranted, onPermissionDenied }) => {
  const [permission, setPermission] = useState(Notification.permission);

  const requestPermission = () => {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((result) => {
        setPermission(result);
        if (result === 'granted') {
          onPermissionGranted();
        } else {
          onPermissionDenied();
        }
      });
    } else {
      if (Notification.permission === 'granted') {
        onPermissionGranted();
      } else {
        onPermissionDenied();
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl mb-2">Notifications</h3>
      <p className="mb-4">To receive notifications about new enrollment requests, please allow notifications.</p>
      <button
        onClick={requestPermission}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        {permission === 'default' ? 'Enable Notifications' : 'Notification Permission'}
      </button>
      {permission === 'denied' && (
        <p className="text-red-500 mt-2">Notifications are blocked. Please allow notifications in your browser settings.</p>
      )}
    </div>
  );
};

export default RequestNotificationPermission;
