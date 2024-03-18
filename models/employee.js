const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phonenumber:{
        type:Number,
        required:true,
        minlength:10,
    },
    designation:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true,
    },
    course:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:false,
        trim:true,
    },
})
const Employeemodel = mongoose.model("employee", EmployeeSchema);
module.exports = Employeemodel;