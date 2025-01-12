
// use mongo db queries here

const User = require("../models/course.model")
const Course = require("../models/user.model")

// users
const getUserCountAnalytics =async () => {
    totalUsers = await User.countDocuments();
    userCountByRole = await User.aggregate([
    
        { $group: { _id: "$role", count: { $sum: 1 } } },
        {$project:{role:"$_id" , count:1 , _id:0  } }
    ])
    return {totalUsers ,userCountByRole }
}

// courses

const getCourseCountAnalytics = async () => {
   let courseCountByCategory = await Course.aggregate([
        { $group: { _id: "$category", count: { $sum: 1 } } },
        {$sort:{count:-1}}, //desc
        { $project:{ category:"$_id", count: 1, _id: 0 }}
    ])
   
    return courseCountByCategory  

}

module.exports={getUserCountAnalytics , getCourseCountAnalytics}