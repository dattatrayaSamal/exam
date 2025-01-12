
const mongoose = require("mongoose")

// New course schema +  model

const courseSchema = new mongoose.Schema({
    title: String,
    category:String  // math science etc
})

const Course = mongoose.model("Course", courseSchema)

module.exports=Course