import axios from "axios"
import React from "react"
import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import { AdminContext } from "./AdminContext"


const MoviesList=()=>{

    let [movies , setMovies] = useState([])




//********************************** */
    // its the last setup for conditional routing
    const {isadmin ,setisadmin} = useContext(AdminContext)
    //last step
//**************************************** */






//****************************************************** */
    // get movies first from addeed movies
    async function getMovies(){
        let res = await axios.get('https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json')
    //    console.log(res.data) // .data is imp
    // to store in form of arr of obj we need these steps
       let arr=[]
       for(let key in res.data){
          arr.push({id:key, ...res.data[key]}) // spreading after assigning id    
       }
       console.log(arr)
       setMovies([...arr]) // to deeply copy setMovies(arr) is also right but ...arr used for deep copying
    }

//****************************************************************************** */






//******************************************************** */
// to handle delete
     async function handleDelete(id){
       await axios.delete(`https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`)
       getMovies()
    }
// to handle delete
//*********************************************************** */

// to render first eleemt
    useEffect(()=>{
        getMovies()
    },[])



    return(

 // last step for admin **********************************************************
        <div>
            <button onClick={()=>setisadmin(!isadmin)}>{isadmin ? "you are admin" : "becomeAadmin"}</button>

{/* ************************************************************* ********************************/}








{/*SHOW ON DISPLAY ************************************************************* ********************************/}
           <h2> MoviesList</h2>
           
           <div>
           {
            movies.map((movie)=>(
               <div key={movie.id}> 
                  <h1> {movie.title} </h1>
                  <p> {movie.description} </p>
                  <p> {movie.year} </p>

  {/*SHOW ON DISPLAY ************************************************************* ********************************/}                



  {/*Edit ************************************************************* ********************************/}               
                  <Link to={`/edit/${movie.id}`} > Edit</Link>
     {/*Edit ************************************************************* ********************************/} 




 {/*last step to show delete if admin ************************************************************* ********************************/}                
                 { isadmin &&  <button onClick={()=>handleDelete(movie.id)}>delete</button> }
 {/*last step to show delete if admin ************************************************************* ********************************/}                         

               </div>
            ))
           }
                
            
           </div>

        </div>
    )
}

export default MoviesList


// 1 get movies to fetch //
//set state inside  get movies to copy array created to fetch data as thats in json form it needs to convert to array of obj
//  arr.push({id:key, ...res.data[key]})  this step is necessary to assign unique id(bcdhgbcghs) to id and ... to add remaing

// 2 after retun map the data created