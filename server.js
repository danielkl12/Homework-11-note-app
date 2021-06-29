

//const http = require("http");

const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");



const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

let routes = require('./routes.js');
app.use(routes);


app.listen(PORT, function() {
    console.log("App listening PORT: " + PORT)
} );