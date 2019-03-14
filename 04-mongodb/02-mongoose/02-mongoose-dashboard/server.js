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

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dash');
const OtterSchema=new mongoose.Schema({
    name:String,
    age:Number
});

const Otter= mongoose.model('Otter',OtterSchema);

//index route
app.get('/',function(req,res){
    Otter.find({},function(err,results){
        if (err){console.log(err);}
        res.render('index',{otters:results});
    })
})
//load new page
app.get('/new',function(req,res){
    res.render('new');
});
//create route
app.post('/otters',function(req,res){
    Otter.create(req.body,function(err,result){
        if (err){console.log(err)};
        res.redirect('/')
    })
})

//show route
app.get('/:id', function(req, res){
    Otter.find({ _id: req.params.id }, function(err, results) {
      if (err) { console.log(err); }
      res.render('show', { otter: results[0] });
    });
  });

//route for edit page
app.get('/:id/edit',function(req,res){
    Otter.find({_id:req.params.id},function(err,results){
        if (err){console.log(err);}
        res.render('edit',{otter:results[0]});
    });
});
//update route
app.post('/:id', function(req, res){
    Otter.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });
//delete
app.post('/:id/delete', function(req, res){
    Otter.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });

