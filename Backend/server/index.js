const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors');
const multer = require('multer');
const db = require("../DataBase/index.js");
const studentrouter = require("../Routes/Students.js");
const instructorRoutes = require('../Routes/Instructor');
const enrollementRoute = require("../Routes/enrollementRoutes.js");
const authenticationRoutes = require('../Routes/Authentication.js');

const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentrouter);
app.use("/api", instructorRoutes);
app.use('/api', enrollementRoute);
app.use('/api/authentication', authenticationRoutes);

app.listen(PORT, function () {
    console.log("listening on port 5000!");
});

module.exports = app;
