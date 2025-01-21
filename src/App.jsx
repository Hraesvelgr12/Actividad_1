import { useState } from "react";

import { Home } from "./Pages/Home.jsx";
import { MovieDetails } from "./Pages/MovieDetails.jsx";
import { Login } from "./Pages/Login.jsx";

import { MoviesGrid } from "./Components/Movies.jsx";
import { Link, Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie/:movieId" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
