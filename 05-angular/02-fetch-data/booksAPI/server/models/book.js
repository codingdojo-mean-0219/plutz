const mongoose = require('mongoose');
const BookSchema=  new mongoose.Schema({
   title:{type:String,minlength:2},
   year:{type:Date,max:Date.now}
});

mongoose.model('Book',BookSchema);
module.exports=BookSchema;