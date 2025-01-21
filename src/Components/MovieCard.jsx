import "./movieCard.css";

export function MovieCard({ movie }) {
  const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="movieCard">
      <img
        width={230}
        height={345}
        className="posterMovie"
        src={imgURL}
        alt={movie.title}
      />

      <div>{movie.title} </div>
    </li>
  );
}
