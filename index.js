const express = required("express");
const app = express();
const mongoose = required("mongoose");


//schema

const studentSchema = new mongoose.Schema({
    name: {
        type: string,
        unique: false,
        required: true,
    },
    middlename: {
        type:string,
        required: false,
        unique: false,
    },
    lastname: {
        type: string,
        required: true,
        unique: false,
    },
    rollno: {
        type: integer,
        required: true,
        unique: true,
    },
    email: {
        type: string,
        required: true,
        unique: true,
    },
    DOB: {
        type: Character,
        required: true,
        unique: true,
    },
    address: {
        type: string,
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