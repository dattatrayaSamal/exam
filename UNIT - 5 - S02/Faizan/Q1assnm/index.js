const express = require("express")

const AnalyticRoutes = require("./Routes/analytics.routes")
const mongoose = require("mongoose")

let app = express()
// middleware
app.use(express.json())

app.use("/analytics" ,AnalyticRoutes )

let PORT = 8080

//connect db
app.listen(PORT, async()=> {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test")
         console.log("server success")
    } catch (error) {
        console.log("server failed")
    }
})
    

