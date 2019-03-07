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
app.get('/',function(req,res){
    res.render('index');
})
io.on('connection',function(socket){
    socket.on("posting_form",function(data){
        var random = Math.floor((Math.random()*1000)+1);
        socket.emit('updated_message',{data:data});
        socket.emit('random_number',{data:random});
    })
})
