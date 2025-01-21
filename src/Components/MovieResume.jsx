import React, { useState } from "react";
import "./movieResume.css";
import { Link } from "react-router-dom";

export function MovieResume({ movie }) {
  const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const [showInfo, setShowInfo] = useState(false);

  const truncateDescription = (description) => {
    const limit = 130;
    return description.length > limit
      ? description.substring(0, limit) + " (Ver más...)"
      : description;
  };

  return (
    <li
      className="movieCard"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className="posterMovie"
          src={imgURL}
          alt={movie.title}
        />
        <div className="posterMovie__title">{movie.title}</div>

        {showInfo && (
          <div className="info-popup">
            <p>Año: {movie.release_date.split("-")[0]}</p> {}
            <p>{truncateDescription(movie.overview)}</p> {}
          </div>
        )}
      </Link>
    </li>
  );
}
