const express = require("express");
const app = express();
const mongoose = require("mongoose");


//schema

const students = new mongoose.Schema({
    name: {
        type: string,
        unique: false,
        requre: true,
    },
    middlename: {
        type:string,
        require: false,
        unique: false,
    },
    lastname: {
        type: string,
        require: true,
        unique: false,
    },
    rollno: {
        type: integer,
        require: true,
        unique: true,
    },
    email: {
        type: string,
    }
})