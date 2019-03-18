const mongoose = require('mongoose');
const OtterSchema=new mongoose.Schema({
    name:String,
    age:Number
});
module.exports=
    mongoose.model('Otter',OtterSchema);
