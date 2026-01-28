import React from "react";
import MovieCard from "../components/MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null; // Prevents errors if movies is undefined or empty

  return (
    <div className=" px-2">
        <h1 className="text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
