var express = require("express");

var app=express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function(req,res){
    res.render('index');
})
// app.get('/result',function(req,res){
//     var context={name: data.name,location:data.location,language:data.language,comment:data.comment};
//     res.render('results',{data:context});
// })
app.post('/result',function(req,res){
    console.log(req.body);
    var data={name: req.body.name,location:req.body.location,language:req.body.language,comment:req.body.comment};
    res.render('results',{data:data});
})
app.listen(8000,function(){
    console.log("listening on port 8000")
})