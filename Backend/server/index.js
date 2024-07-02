const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors')
const db=require("../DataBase/index.js")
const studentrouter=require("../Routes/Students.js")


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",studentrouter)



app.listen(PORT, function () {
    console.log("listening on port 5000!");
});

module.exports = app;