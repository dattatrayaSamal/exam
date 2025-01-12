
// for making schema

// const express = require("express")

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{type:String , required:true} ,
    role: String,    
})

const User = mongoose.model("User", UserSchema)

module.exports =  User ;