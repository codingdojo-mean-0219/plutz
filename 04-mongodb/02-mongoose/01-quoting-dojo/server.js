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

app.get('/',function(req,res){
    res.render('index');
})

app.get('/quotes',function(req,res){
    Quote.find({},function(err,quotes){
        console.log(quotes);
        res.render('results',{context:quotes});
    })
})

app.post('/quotes',function(req,res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  quote.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
      for(var key in err.errors){
        req.flash('registration', err.errors[key].message);
    }
      res.redirect('/');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
      console.log(req.body);
      res.redirect('/quotes');
    }
  })
})

