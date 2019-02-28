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



// app.get('/',function(request,response){
//     response.render('index')
// })
app.get('/cars',function(request,response){
    response.render('cars');
})
app.get('/cats',function(request,response){
    response.render('cats');
})
app.get('/cars/new',function(request,response){
    response.render('new');
})
app.listen(8000,function(){
    console.log("listening on port 8000")
})