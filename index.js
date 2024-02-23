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

//routing



app.post("/student-details", async(req, res)=>{
    const body = req.body;
    if(
     !body||
     !body.first_name||
     !body.middle_name||
     !body.last_name||
     !body.roll||
     !body.email||
     !body.DOB||
     !body.address

    ){
        res.status(400).json({msg:"All fields are req..."})
    }
    const result = await Student.create({
        firstname: body.first_name,
        middlename: body.middle_name,
        lastname: body.last_name,
        rollno: body.roll,
        email:body.email,
        DOB: body.DOB,
        address: body.address,
    });
    console.log("result", result);
    return res.status(201).json({msg:"success"});
});

app.listen(5600, ()=> console.log("server listening to 5600 for mongodb"))