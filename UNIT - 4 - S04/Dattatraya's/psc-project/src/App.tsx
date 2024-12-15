import { useEffect } from "react";
import "./App.css";
import { AddPostForm } from "./components/addPostForm";
import { useDispatch } from "react-redux";
import { fetchPost } from "./redux/action";
import { PostList } from "./components/postList";
// import { Filter } from "./components/filter";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchPost());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AddPostForm />} />
        <Route path="/list" element={<PostList />} />
        {/* <Route path="/filter" element={<Filter />} /> */}
      </Routes>
    </>
  );
}

export default App;
