import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export let MoviesList = () => {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    let res = await axios.get(
      `https://masai-86fa7-default-rtdb.firebaseio.com/Movies.json`
    );
    // console.log("fetched Data", res.data);

    let arr = [];
    for (let key in res.data) {
      arr.push({ id: key, ...res.data[key] });
    }
    setMovies(arr);
  }

  async function handleDelete(id) {
    await axios.delete(
      `https://masai-86fa7-default-rtdb.firebaseio.com/Movies/${id}.json`
    );
    getMovies();
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Movies List</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.title}</h4>
            <p>{movie.description}</p>
            <p>{movie.year}</p>
            <Link to={`/edit/${movie.id}`}>Edit</Link>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
