const mongoose = require("mongoose")
const express = require("express")
const app = express() //initialize

const todoRouter = require("./Routes/todo.routes")

app.use(express.json()) //middleware

app.get("/",(req,res)=>{
res.send("welcome123")    
})


app.use("/todos", todoRouter) // Mounting the router


// connect db
app.listen(8080, async () => {   
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/new")
         console.log("server success")
    } catch (error) {
        console.log("server failed")
    }
})

// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1




