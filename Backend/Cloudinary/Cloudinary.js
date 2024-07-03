
const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_NAME, 
    api_secret: process.env.CLOUDINARY_APISECRET 
});



// cloud_name: 'dqxgt3yvu', 
// api_key: '859684633942652', 
// api_secret: '<your_api_secret>' 
module.exports = cloudinary