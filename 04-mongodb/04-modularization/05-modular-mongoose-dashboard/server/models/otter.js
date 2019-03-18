const mongoose = require('mongoose');
module.exports=function(){
    const OtterSchema=new mongoose.Schema({
        name:String,
        age:Number
    });
    mongoose.model('Otter',OtterSchema);
};