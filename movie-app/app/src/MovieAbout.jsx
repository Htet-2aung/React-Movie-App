// MovieAbout.js
import React from "react";

const MovieAbout = ({ movie }) => {
  return (
    <div className="movie-about">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />
      <div>
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Plot: {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieAbout;
