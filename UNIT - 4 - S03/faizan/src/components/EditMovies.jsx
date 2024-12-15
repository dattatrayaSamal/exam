import React from "react"
import {useParams} from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const EditMovies=()=>{
    const {id}= useParams() // to get id from url
    const [movie , setMovie] = useState({title:"" , description :"" , year : "" }) //copied addmovie


     // first get movies data with id as identifier
    async function getMovie() {
        let res =await axios.get(`https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`)
        setMovie(res.data)
    }

  // copied from addmovie
    function handleChange(e){
        const {name , value} = e.target //destructuring obj prenst in e.target
        setMovie({...movie , [name] : value})  //...movie to copy old ones 
    }

  // update function
  async function HandleUpdate(){
    await axios.put(`https://firebasse-32aeb-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json` , movie)
  }

    useEffect(()=>{
        getMovie()
    }, [])

  // copied from addmovie   
    return(
        <>
         <h2> Edit Movies</h2>
        <input type="text" placeholder="title" name="title"  value={movie.title} onChange={handleChange}/>
        <input type="text" placeholder="description" name="description"  value={movie.description } onChange={handleChange}/>
        <input type="text" placeholder="year" name="year"  value={movie.year}  onChange={handleChange}/>
        <button onClick={HandleUpdate}>Update</button>
        </>
    )
}

export default EditMovies