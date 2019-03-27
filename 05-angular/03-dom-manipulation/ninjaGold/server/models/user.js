const mongoose =require('mongoose');

const UserSchema=new mongoose.Schema({
    gold:{type:Number,minlength:4,default:0},
    name:{type:String,minlength:2},
    log:[{type:String}]
},{timestamps:true});

module.exports= mongoose.model("User",UserSchema);

