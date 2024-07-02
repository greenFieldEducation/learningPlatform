const express = require("express");
const app = express();
const PORT = 5000;
const db=require("../DataBase/index.js")

app.use(express.json());
app.use(express.urlencoded({extended:true}));









app.listen(PORT, function () {
    console.log("listening on port 5000!");
});

module.exports = app;