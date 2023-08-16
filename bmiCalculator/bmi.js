//jshint esversion:6

const express = require('express');

const bodyParser = require('body-parser');

const app =express();
const port =3000;
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")});

app.post("/", function(req,res){
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);
    var result = num1/(num2*num2);
    res.send("The Bmi is :"+ result);
});

app.listen(port,function(){
    console.log("the server is live on port 3000");
});


