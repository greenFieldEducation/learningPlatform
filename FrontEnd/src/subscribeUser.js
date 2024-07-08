// src/subscribeUser.js

// Function to request permission and subscribe user to push notifications
export async function subscribeUser() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
            });

            // Send subscription to the backend
            await sendSubscriptionToServer(subscription);

            console.log('User is subscribed:', subscription);
        } catch (error) {
            console.error('Failed to subscribe the user: ', error);
        }
    } else {
        console.warn('Push messaging is not supported');
    }
}

// Utility function to convert the VAPID public key to a Uint8Array
export function urlBase64ToUint8Array(base64String) {
    // Implementation details for conversion
}

// Function to send subscription details to the backend server
async function sendSubscriptionToServer(subscription) {
    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscription),
        });

        if (!response.ok) {
            throw new Error('Failed to send subscription to server.');
        }

        console.log('Subscription sent to server successfully.');
    } catch (error) {
        console.error('Error sending subscription to server:', error);
    }
}
