import React from "react"
import { useState } from "react"
import axios from 'axios'


 const AddMovie=()=>{ 
    const [movie , setMovie] = useState({title:"" , description :"" , year : "" })

   //input handle change 
    function handleChange(e){
        const {name , value} = e.target //destructuring obj prenst in e.target
        setMovie({...movie , [name] : value})  //...movie to copy old ones 
    }

    // add movie function and send yo firebase
    async function handeAdd(){
        await axios.post('https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json' , movie) // sending to movie state
        alert("movies added sucessfuly")
        
    }

    return(
       <div>
        <h2>Add movie</h2>
        <input type="text" placeholder="title" name="title"  value={movie.title} onChange={handleChange}/>
        <input type="text" placeholder="description" name="description"  value={movie.description } onChange={handleChange}/>
        <input type="text" placeholder="year" name="year"  value={movie.year}  onChange={handleChange}/>
        <button onClick={handeAdd}>Add movie</button>
       </div>
    )
}

export default AddMovie