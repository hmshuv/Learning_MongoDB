const express = require("express");
const app = express();
const mongoose = require("mongoose");


//schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        required: true,
    },
    middlename: {
        type: String,
        required: false,
        unique: false,
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
    },
    rollno: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    DOB: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        unique: false,
    },
}); 


// model
const Student = mongoose.model("students", studentSchema);

//connecting 
mongoose.connect("mongodb://127.0.0.1:27017/students-details")
.then(()=> console.log("MongoDB connected!"))
.catch((err)=> console.log("Mongo Error", err));