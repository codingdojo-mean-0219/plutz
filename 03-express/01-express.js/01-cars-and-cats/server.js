var express = require("express");

var app=express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it



// app.get('/',function(request,response){
//     response.render('index')
// })
app.get('/cars.html',function(request,response){
    response.render('cars');
})
app.get('/cats.html',function(request,response){
    response.render('cats');
})
app.get('/form.html',function(request,response){
    response.render('form');
})
app.listen(8000,function(){
    console.log("listening on port 8000")
})