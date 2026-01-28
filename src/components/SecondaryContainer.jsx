import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-40 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
      </div>
      {/*
         MovieList - popular
            moviecard - n
         MovieList - Now Playing
         MovieList - Trending
         MovieList - Horror
      */}
    </div>
  );
};
export default SecondaryContainer;
