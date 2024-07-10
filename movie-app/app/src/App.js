import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieAbout from "./MovieAbout";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?apikey=ba5240c7";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    searchMovies("Naruto");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      console.error("Error fetching movies:", data.Error);
      setMovies([]);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(!movie);
  };

  return (
    <div className="app">
      <h1>Movie.com</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={() => handleMovieClick(movie)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      {selectedMovie && <MovieAbout movie={selectedMovie} />}
    </div>
  );
};

export default App;
