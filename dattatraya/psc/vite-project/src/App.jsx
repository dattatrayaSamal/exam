import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AddMovies } from "./components/AddMovies";
import { MoviesList } from "./components/MoviesList";
import { EditMovie } from "./components/EditMovie";
import { NotAdmin } from "./components/NotAdmin";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/add" element={<AddMovies />} />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditMovie />
            </PrivateRoute>
          }
        />
        <Route path="/not-admin" element={NotAdmin} />
      </Routes>
    </>
  );
}

export default App;
