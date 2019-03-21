const mongoose =require('mongoose');

const TaskSchema=new mongoose.Schema({
    title:{type:String,minlength:4},
    description:{type:String,default:""},
    completed:{type:Boolean,default:false}
},{timestamps:true});

module.exports= mongoose.model("Task",TaskSchema);

