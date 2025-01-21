import { MovieResume } from "./MovieResume.jsx";
import { Routes } from "react-router-dom";
import movies from "./movies.json";
import "./movie.css";
import "./MovieResume.css";

export function MoviesGrid() {
  return (
    <ul className="movieGrid">
      {movies.map((movie) => (
        <MovieResume key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
