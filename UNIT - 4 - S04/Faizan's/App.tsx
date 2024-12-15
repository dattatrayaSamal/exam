import { useEffect } from "react";
import "./App.css";
import { AddPostForm } from "./components/addPostForm";
import { useDispatch } from "react-redux";
import { fetchPost } from "./redux/action";
import { PostList } from "./components/postList";
import { Filter } from "./components/filter";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchPost());
  }, [dispatch]);

  return (
    <>
      {/* Navigation Bar */}
      <nav>
       
            <Link to="/">Home</Link> {/* Link to Home route */}
         
            <Link to="/list">View List</Link> {/* Link to View List route */}
        
            <Link to="/filter">Filter</Link> {/* Link to Filter route */}
        
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<AddPostForm />} /> 
        <Route path="/list" element={<PostList />} /> 
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </>
  );
}

export default App;
