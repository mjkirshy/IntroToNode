var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // using style sheet for whole app
app.set("view engine", "ejs"); // set file extension for app so dont have to use ".ejs"

var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 3", author: "Tyler"},
        {title: "Post 2", author: "Jared"}
       ] ;

app.get("/", function(req,res){
    res.render("index");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    res.render("posts.ejs", {posts: posts});
});

// npm install bodyParser --save // to 
app.post("/addauthor", function(req, res){
    posts.push({title: req.body.postsPost, author: req.body.authorPost});
    res.redirect("/posts");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});