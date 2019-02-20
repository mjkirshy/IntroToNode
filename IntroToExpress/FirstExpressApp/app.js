var express = require("express");
var app = express();
//console.log("our first express app");

app.get("/", function(req, res) {
    res.send("Hello"); // prints in browser
});

app.get("/bye", function(req, res) {
    res.send("Goodbye"); // prints in browser
});

app.get("/dog", function(req, res) {
    console.log("someone has made a request here"); // when someone go to this page a console log will print
    res.send("boobs"); // prints in browser
});

app.get("/r/:subreddit", function(req, res){
    console.log(req.params); // print out user path string
    var subredditD = req.params.subreddit; // dynamically changes page to include user path string
    res.send("Welcome to my " + subredditD.toUpperCase() + " TED talk");
});

app.get("*", function(req, res){
    res.send("no page here");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});