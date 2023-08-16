//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//we use ejs to render our html page with dynamic content
//we use this line which goes to the views folder to look for files to be sent
app.set('view engine',"ejs");


app.get("/", function(req,res){
    var todaysdate = new Date()  
    var day = todaysdate.getDay();
    /*.render ("list") looks for a file called list inside the views folder */
    res.render("list",{Kindofday:day});
    /*the name is the name of var inside the ejs name specifier and value is the value we want to be shown inside that variable */
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});