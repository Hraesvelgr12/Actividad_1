import { Encabezado } from "../Components/Encabezado";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpCliente.jsx";
import styles from "./MovieDetails.module.css";
import { Modal } from "../Components/ModalCheck.jsx";
import { YTVideo } from "../Components/YouTubeVideo.jsx";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <>
      <Encabezado />
      <div className={styles.detailsContainer}>
        <div>
          <img
            className={`${styles.col} ${styles.movieImage}`}
            src={imageUrl}
            alt={movie.title}
          />
          <button className={styles.button} onClick={handleOpenModal}>
            Comprar/Alquilar
          </button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
        </div>
        <div className={`${styles.col} ${styles.movieDetails}`}>
          <p className={styles.firstItem}>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
          <YTVideo videoUrl={movie.yt} />
        </div>
      </div>
    </>
  );
}
