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
const axios = require('axios');
app.get('/people', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get('http://swapi.co/api/people')
    .then(data => {
        // log the data before moving on! 
        console.log(data.data);
        // rather than rendering, just send back the json data!
        res.json(data.data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});
app.get('/planet', function(req, res){
        // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        axios.get('http://swapi.co/api/planets')
        .then(data => {
            // log the data before moving on! 
            console.log(data.data);
            // rather than rendering, just send back the json data!
            res.json(data.data);
        })
        .catch(error => {
            // log the error before moving on!
            console.log(error);
            res.json(error);
        })
    });
app.get('/next', function(req, res){
            // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        console.log(req.query);
            axios.get(req.query.context)
            .then(data => {
                // log the data before moving on! 
                console.log(data.data);
                // rather than rendering, just send back the json data!
                res.json(data.data);
            })
            .catch(error => {
                // log the error before moving on!
                console.log(error);
                res.json(error);
            })
        });
    app.get('/prev', function(req, res){
                // use the axios .get() method - provide a url and chain the .then() and .catch() methods
            console.log(req.query);
                axios.get(req.query.context)
                .then(data => {
                    // log the data before moving on! 
                    console.log(data.data);
                    // rather than rendering, just send back the json data!
                    res.json(data.data);
                })
                .catch(error => {
                    // log the error before moving on!
                    console.log(error);
                    res.json(error);
                })
            });
            app.get('/all', function(req, res){
                    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
                console.log(req.query);
                    axios.get(req.query.context)
                    .then(data => {
                        // log the data before moving on! 
                        console.log(data.data);
                        // rather than rendering, just send back the json data!
                        res.json(data.data);
                    })
                    .catch(error => {
                        // log the error before moving on!
                        console.log(error);
                        res.json(error);
                    })
                });
app.get('/',function(req,res){
    res.render('index');
})


app.listen(8000,function(){
    console.log("listening on port 8000")
})