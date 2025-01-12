const { getUserCountAnalytics  , getCourseCountAnalytics} =
    require("../services/analytics.service")


const getUserAnalytics = async (req, res) => {
    try {
       let data =  await getUserCountAnalytics()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"error fetching UserAnalytics" , error})
    }
}

const getCourseAnalytics = async (req, res)=>{ 
try {
    let data = await getCourseCountAnalytics()
    res.status(200).json(data)
} catch (error) {
     res.status(500).json({message:"error fetching CourseAnalytics" , error})
    console.log(error)
}
}


module.exports = {getUserAnalytics , getCourseAnalytics}