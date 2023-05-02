const express = require("express");
const app = express();
const http = require("https");
app.get("/", function(req, res) {


    const url = "http://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=5824f2ad4c9418f41164e05388442c21&units=metric";

    http.get(url, function(response) {
        console.log(response);
    });


});











app.listen(3000, function() {

    console.log("workingg...");
})