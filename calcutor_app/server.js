// jshint esverion:6

const express = require('express');
// this const requires the package named express present in the package.jsonfoler

const bodyParser = require('body-parser');
//package for accessing the html body data on the server
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
//urlencoded is used to access the form data

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
//sendFile is used to send file when user accesses the home route and __dirname gives the name name of the directory in which the server.js file resides and the html file is on the same level as the server.js file so we directly append the name 

})


app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    //without the number we get text so adding them just concatenates which is not req, SO we change them to no
    var result = num1 + num2;
    res.send("The sum is :" + result);
})

app.listen(port, function(){
    console.log("The server is live on port 3000");
})
