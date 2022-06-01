const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // console.log('post recieved');
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    // const apiKey = ''
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&appid=21050aa06cdd2e9c0d983bf97500628f&units=metric";

    https.get(url, function (response) {
        // console.log(response.statusCode);
        response.on("data", function (data) {
            // console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            // console.log(temp);
            const weatherDescription = weatherData.weather[0].description;
            // console.log(weatherDescription);
            res.send(
                "<h1>The tempratue in " + query + " is " + temp + " Degree Celcius</h1>"
            ); //we send only one res
        });
    });
    // res.send('<h1>The tempratue in London is ' + temp + ' Degree Celcius</h1>'); //we send only one res
});

app.listen(3000, function () {
    console.log("server is running on port 3000");
});
