import React, { useEffect } from 'react';
import axios from 'axios';

const SubscribeToNotifications = ({ serviceWorkerRegistration }) => {
  useEffect(() => {
    const subscribeUser = async () => {
      try {
        const subscription = await serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'BIZmMDCUNqOqtLiEEpyw87xYdoQai-mLI4Sqngqvv9_e5lJVj-AL5Nh9uABAx5TLdQZfQKJGa5tiRznhRg_lI5k', 
        });

        await axios.post('http://127.0.0.1:5000/api/notification/subscribe', subscription);
        console.log('User is subscribed:', subscription);
      } catch (error) {
        console.error('Failed to subscribe the user:', error);
      }
    };

    subscribeUser();
  }, [serviceWorkerRegistration]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Subscription Status</h2>
      <p className="text-green-600">You are subscribed to notifications.</p>
    </div>
  );
};

export default SubscribeToNotifications;
