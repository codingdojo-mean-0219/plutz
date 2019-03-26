const mongoose = require('mongoose');
const BookSchema=require('./book');
const AuthorSchema=new mongoose.Schema({
   first_name:{type:String,minlength:2,required:true},
   last_name:{type:String,minlength:2,required:true},
   country:{type:String,minlength:3,required:true},
   birthday:{type:Date,max:Date.now(),required:true},
   books:[BookSchema]
});
module.exports=
    mongoose.model('Author',AuthorSchema);
