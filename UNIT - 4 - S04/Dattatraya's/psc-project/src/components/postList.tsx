import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import axios from "axios";
import { setFilter } from "../redux/action";

export let PostList: React.FC = () => {
  const { posts, filter, error, loading } = useSelector(
    (state: RootState) => state.posts
  );

  const dispatch = useDispatch();

  const createdPosts = posts.filter(
    (post) =>
      post.title &&
      post.title.toLocaleLowerCase().includes(filter.toLowerCase())
  );

  function handleFilter(e: any) {
    dispatch(setFilter(e.target.value));
  }

  // Render error or loading states
  if (error) {
    return <p>Something Went Wrong</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  async function handleDelete(postId: number) {
    try {
      const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      await axios.delete(URL);

      // Dispatch action to update the Redux store
      dispatch({ type: "DELETE_POST", payload: postId });

      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting the post:", error);
      alert("Failed to delete the post.");
    }
  }
  return (
    <div>
      <h2>Posts</h2>
      <div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Filter Data"
              onChange={handleFilter}
            />
          </div>
        </div>
        <ul>
          {createdPosts.map((post) => {
            return (
              <li key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
