import { useState, useEffect } from 'react';
import { fetchpost } from './redux/actions';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostList from './components/PostList';
import Filter from './components/filter';
import AddPostForm from './components/addform';
import './App.css';

// Home Component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <Filter />
    <AddPostForm />
    <PostList />
  </div>
);

// NotHome Component (simple placeholder)
const NotHome = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchpost());
  }, [dispatch]);

  return (
    <Router>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/not-home">Not Home</Link>
      </nav>

      <Routes>
        {/* Routes for Home and NotHome */}
        <Route path="/" element={<Home />} />
        <Route path="/not-home" element={<NotHome />} />
      </Routes>
    </Router>
  );
}

export default App;
