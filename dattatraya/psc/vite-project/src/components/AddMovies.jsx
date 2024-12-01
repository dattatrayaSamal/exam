import React, { useState } from "react";
import axios from "axios";

export let AddMovies = () => {
  let [movie, setMovie] = useState({ title: "", description: "", year: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  async function handleAdd() {
    await axios.post(
      `https://masai-86fa7-default-rtdb.firebaseio.com/Movies.json`,
      movie
    );
  }

  return (
    <div>
      <h1>Add Movie</h1>
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
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
};
