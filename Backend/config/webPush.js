
const webpush = require('web-push');

// VAPID keys should be generated only once.
const vapidKeys = {
    publicKey: 'BIZmMDCUNqOqtLiEEpyw87xYdoQai-mLI4Sqngqvv9_e5lJVj-AL5Nh9uABAx5TLdQZfQKJGa5tiRznhRg_lI5k',
    privateKey: 'O5GU58xtaMSOiEBpeb2OxrZh02ZxBdjnf3M2oFfOYNc',
  };

webpush.setVapidDetails(
  'mailto:yosrjdly@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


module.exports = webpush;

