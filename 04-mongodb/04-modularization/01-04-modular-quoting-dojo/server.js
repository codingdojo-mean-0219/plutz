var express = require("express");

var app=express();
var server=app.listen(8000,function(){
    console.log("listening on port 8000")
})
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
const io = require('socket.io')(server);
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema= new mongoose.Schema({
    name:{type:String,minlength:2},
    quote:{type:String,minlength:4},
}, {timestamps:true});

var Quote=mongoose.model('Quote',QuoteSchema);

require('./server/config/routes.js')(app);