
const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
const db=require("../DataBase/index.js")
const studentrouter=require("../Routes/Students.js")
const instructorRoutes = require('../Routes/Instructor');
const cloudinary = require("../Cloudinary/Cloudinary.js")
const studentregisterrouter=require("../Routes/register.js")


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/student",studentrouter)
app.use("/api",instructorRoutes)
app.use("/api/register",studentregisterrouter)





app.listen(PORT, function () {
    console.log("listening on port 5000!");
});

module.exports = app;