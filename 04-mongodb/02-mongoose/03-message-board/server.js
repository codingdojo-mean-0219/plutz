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
mongoose.connect('mongodb://localhost/message_board');

const CommentSchema = new mongoose.Schema({
    name:String,
    comment:String
});
const MessageSchema = new mongoose.Schema({
    name:String,
    message:String,
    comments:[CommentSchema]
});
const Message=mongoose.model("Message",MessageSchema);
const Comment=mongoose.model("Comment",CommentSchema);

app.get('/',function(req,res){
    Message.find({},function(err,results){
        if (err){console.log(err);}
        res.render('index',{messages:results});
    })

});

app.post('/message',function(req,res){
    Message.create(req.body,function(err,result){
        if (err){console.log(err);}
        res.redirect('/');
    })
})

app.post('/comment',function(req,res){
    Comment.create(req.body,function(err,result){
        if (err){console.log(err);}
        else{
            console.log(req.params.id);
            Message.findOneAndUpdate({_id:req.params.id},{$push:{comments:result}},function(err,data){
                if (err){
                    console.log(err)
                }
                else{
                    res.redirect('/'); 
                }
            })
        }
    })
})

