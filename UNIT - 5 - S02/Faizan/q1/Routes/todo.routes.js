const express = require("express")

const TodoModel= require("../models/todo.model")
const todoRouter = express.Router()

/////////// to add//////////////////////////////////// 
todoRouter.post("/add", async (req, res) => {
    try {
        //insert in todoModel (which has todo schema)
        let data = await TodoModel.insertMany(req.body)
     
    res.status(200).send("todo Added")
    } catch (error) {
        res.status(500).send("something wenttt wrong")
        console.log(error)
    }
})

// //////////////////////todo route that shows all



// todoRouter.get("/", async (req, res) => {
//     try {
//         let todos = await TodoModel.find()
//          res.status(200).send(todos)
//     } catch (error) {
//         res.status(500).send("serevre error")
//     }
// })

/////////////applying pagiantion skip and limit/////////////////////////////
todoRouter.get("/", async (req, res) => {
    try {
        let limit = req.query.limit
        let skip =( req.query.skip-1) * limit
        let todos = await TodoModel.find().skip(skip).limit(limit)
         res.status(200).send(todos)
    } catch (error) {
        res.status(500).send("serevre error")
    }
})
/////////////applying pagiantion skip and limit/////////////////////////////


/////////////// update a todo/////////////////////////////////////

todoRouter.patch("/:id", async (req, res) => {
    let id = req.params.id
    await TodoModel.findByIdAndUpdate(id, req.body)
    res.status(200).send("update Sucessful")
})

/////////////// update a todo/////////////////////////////////////


/////////////// delete todo/////////////////////////////////////

todoRouter.delete("/:id", async (req, res) => {
    let id = req.params.id
    await TodoModel.findByIdAndDelete(id)
    res.status(200).send("delte Sucessful")
})


/////////////// delete todo/////////////////////////////////////



//////////////////search and filter and sort query////////////////////////////////////
todoRouter.get("/search", async (req, res) => {
    // search based on name  ,  status ,  gender
    let queryobj = {}
    if (req.query.name) { 
        // queryobj.name = req.query.name  //or 
          queryobj.name = { $regex: `${req.query.name }`, $options :"i" }
    }
     if (req.query.status) { 
        queryobj.status = req.query.status
    }
     if (req.query.gender) { 
        queryobj.gender = req.query.gender
    }
    // sorting//////////////////////
    let sortObj = {}
    if (req.query.sort) {
        let sorting_case = req.query.sort;
          //obj[key]
       sortObj[sorting_case] = req.query.order=="asc" ? 1:-1
    }
    //sorting/////////////////////
    //http://localhost:8080/todos/search?sort=age&order=asc
    console.log(sortObj)//gives - 1 or  1
   let todos =  await TodoModel.find(queryobj).sort(sortObj)

    res.status(200).send(todos)
})

//////////////////search and filter and sort query////////////////////////////////////////////




// //////////get 1 todod by id////////////////////////////////////

todoRouter.get("/:id", async (req, res) => {
   let todos =  await TodoModel.find({_id:req.params.id})

    res.status(201).send(todos)
})
                                      //fromherer queries
// http://localhost:8080/todos/search?status=true&gender=female&sort=name&order=asc

// //////////get 1 todod by id////////////////////////////////////

module.exports=todoRouter