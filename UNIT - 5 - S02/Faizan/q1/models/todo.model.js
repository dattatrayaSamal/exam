const mongoose = require("mongoose");

// wew can destructure schema if we want
// const { Schema } = mongoose;


// creating schema
// const TodoSchema = new mongoose.Schema({
//     name: {type:String ,required:true},
//     status: Boolean,
//     description: String,
//     Deadline: String,
    
// })

const TodoSchema = new mongoose.Schema({
    name: {type:String, required:true},
    status: {type:Boolean, default:false}, 
    description: String,
    deadline: String,
    user:String, 
    gender:{type:String, enum:["male", "female"]},
    age:{type:Number, min:20, max:100}
})

//connecting schema to models

                                //name      //schema
const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = TodoModel;