var express = require("express");

var app=express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/cats',function(request,response){
    response.render('cats');
})

app.get('/chester',function(request,response){
    var cat_details={name: "Chester",picture:"images/cat1.jpg",age:2,food:["tuna","pasta"]};
    response.render('details',{cat:cat_details});
})
app.get('/carl',function(request,response){
    var cat_details={name: "carl",picture:"images/cat2.jpg",age:4,food:["salmon","catnip"]};
    response.render('details',{cat:cat_details});
})
app.get('/steve',function(request,response){
    var cat_details={name: "Steve",picture:"images/cat3.jpg",age:1,food:["chicken","pasta"]};
    response.render('details',{cat:cat_details});
})
app.get('/kevin',function(request,response){
    var cat_details={name: "Kevin",picture:"images/cat4.jpg",age:5,food:["tuna","pasta","salmon","catnip","cheese"]};
    response.render('details',{cat:cat_details});
})
app.listen(8000,function(){
    console.log("listening on port 8000")
})