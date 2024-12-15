import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export let EditMovie = () => {
  const { id } = useParams();
  let [movie, setMovie] = useState({ title: "", description: "", year: "" });

  async function getMovies() {
    let res = await axios.get(
      `https://masai-86fa7-default-rtdb.firebaseio.com/Movies/${id}.json`
    );
    setMovie(res.data);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  async function handleUpdate() {
    await axios.put(
      `https://masai-86fa7-default-rtdb.firebaseio.com/Movies/${id}.json`,
      movie
    );
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>EditMovie</h1>
      <input
        type="text"
        name="title"
        placeholder="Enter Movie Name"
        value={movie.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Enter Description"
        value={movie.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Mention The Release Year"
        value={movie.year}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update Movie</button>
    </div>
  );
};
