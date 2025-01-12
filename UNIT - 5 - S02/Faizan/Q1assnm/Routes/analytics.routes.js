const { getUserAnalytics, getCourseAnalytics }
    = require("../controller/analytics.controller")

    const  CourseModel= require("../models/user.model")
const  UserModel  = require("../models/course.model")
      
const express = require("express")

const Router = express.Router()


Router.get("/user-count", getUserAnalytics)
Router.get("/course-count", getCourseAnalytics)

Router.get("/", async (req, res) => {
    try {
     
        const users = await UserModel.find();
        const courses = await CourseModel.find();
        res.status(200).json({ users ,courses });
    } catch (error) {
        console.error("Error in /analytics route:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});


module.exports=Router
