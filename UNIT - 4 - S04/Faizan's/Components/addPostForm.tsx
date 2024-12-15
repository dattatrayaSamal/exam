import React, { useState } from "react";
import { postData } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export let AddPostForm: React.FC = () => {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let dispatch = useDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (title && body) {
      dispatch<any>(postData({ title, body }));
      setTitle("");
      setBody("");
    }
  }

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
      <Link to={"/list"}>View List</Link>
    </div>
  );
};
