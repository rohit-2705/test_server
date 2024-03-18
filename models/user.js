const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email:{
        type: String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    username:{
        type: String,
        required:true,
        trim:true
    },
    phonenumber:{
      type:Number,
      required:true,
      trim:true,
    },
});

const Usermodel = mongoose.model("user", UserSchema);

module.exports = Usermodel;