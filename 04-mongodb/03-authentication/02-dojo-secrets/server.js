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
var session = require('express-session');
app.use(session({
  secret: 'asdfsadfasfsdfasfdsafa',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
// require body-parser
var bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
// use it!
app.use(bodyParser.urlencoded({extended: true}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/secrets');

const UserSchema = new mongoose.Schema({
    name:{type:String,minlength:2},
    email:{type:String,minlength:2},
    password:{type:String,minlength:2},
})
const CommentSchema= new mongoose.Schema({
    comment:{type:String,minlength:2}
})
const SecretSchema=new mongoose.Schema({
    secret:{type:String,minlength:2},
    comments:[CommentSchema],
    creator:{type:String,minlength:2}
});


const User= mongoose.model("User",UserSchema);
const Secret= mongoose.model("Secret",SecretSchema);
const Comment=mongoose.model("Comment",CommentSchema);


app.get('/',function(req,res){
    res.render('index');
})
app.get('/dashboard',function(req,res){
    if (!req.session.userid){
        res.redirect('/');
    }
    else{
        Secret.find({},function(err,result){
            if (err){
                console.log(err);
            }
            res.render('dashboard',{secrets:result,userid:req.session.userid})
        })
    }
})
app.post('/secret',function(req,res){
    Secret.create(req.body,function(err,result){
        if (err){
            console.log("Could not make secret");
        }
        res.redirect('/dashboard');
    })
})
app.post('/register',function(req,res){
    User.find({email:req.body.email},function(err,result){
        if (err){console.log(err)}
        if(result.length!=0){
            res.redirect('/');
        }
        else{
        bcrypt.hash(req.body.password, 10)
            .then(hashed_password => {
                User.create({name:req.body.name,email:req.body.email,password:hashed_password},function(err,result){
                    if (err){
                        console.log(err);
                    }
                    else{
                        req.session.name=result.name;
                        req.session.userid=result._id;
                        res.redirect('/dashboard');
                    }
            })
            .catch(error => {
                console.log(error);
            })
           
    })
}
})
})
app.get('/secret/:id',function(req,res){
    Secret.find({_id:req.params.id},function(err,result){
        if (err){
            console.log(err)
        }
        console.log(result[0]);
        res.render('show',{secret:result[0]});
    })
})
app.get('/delete/:id',function(req,res){
    if(req.session.userid!==req.params.id){
        res.redirect('/dashboard')
    }
    Secret.remove({_id:req.params.id},function(err,result){
        if (err){
            console.log(err)
        }
        res.redirect('/dashboard');
    })
})
app.post('/comment',function(req,res){
    Comment.create({comment:req.body.comment},function(err,comment){
        if (err){
            console.log(err);
        }
        else{
            Secret.findOneAndUpdate({_id:req.body.id},{$push:{comments:comment}},function(err,data){
                if (err){
                    console.log(err);
                }
                else{
                    res.redirect('/secret/'+req.body.id);
                }
            })
        }
    })
})
app.post('/login',function(req,res){
    User.find({email:req.body.email},function(err,user){
        if (err){
            console.log("Could not find user");
        }
        else{
            bcrypt.compare(req.body.password,user[0].password)
            .then(result=>{
                    req.session.name=user[0].name;
                    req.session.userid=user[0]._id;
                    res.redirect('/dashboard');

            })
        
            .catch(error=>{
                console.log(error);
            })
        }
    })
})
