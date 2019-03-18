const mongoose=require('mongoose');
const Quote=mongoose.model('Quote');

module.exports=function(app){
    
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


}