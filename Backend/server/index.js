const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));









app.listen(PORT, function () {
    console.log("listening on port 3000!");
});

module.exports = app;