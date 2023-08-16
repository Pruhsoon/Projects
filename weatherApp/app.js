
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
res.sendFile(__dirname+"/index.html")
});


app.post("/", function(req,res){
    //we store the cityName entered by the user 
    const cityName = req.body.cityName

    const unit = "metric"
    const keyId = "Use your own API from open weather APP"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+keyId+"&units="+unit;


    https.get(url, function(response){
        //console logs the status in terminal: 200 if successful
        console.log(response.statusCode);
        
        response.on("data", function(data){
                //the result we get from api is in string form, so we parse it into a Json 
                const weatherData = JSON.parse(data);
                const temp = weatherData.main.temp;
                //we access the different element of the JSON
                const weatherDes = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                //
                res.write("<img src = " + imageUrl +">");
                res.write("<p>The weather in "+cityName+" is " + weatherDes + " today.</p>");
                res.write("<h1>The temperature is " + temp + " degree celsius today.</h1>");
                //
                res.send();
            })
    });
})

app.listen(3000, function(){
    console.log("server is live on port 3000");
})