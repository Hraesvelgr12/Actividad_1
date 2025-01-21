import React from "react";
import styles from "./youTubeVideo.module.css";

export const YTVideo = ({ videoUrl }) => {
  if (!videoUrl) return "No video";

  return (
    <div className={styles.videoContainer}>
      <iframe
        width="100%"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
