import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle" 
import VideoBackGround from "./VideoBackGround"

const MainContainer = () =>{ 
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);
  if(!movies) return ;
  // const x = Math.floor(Math.random()*10)+1;
  const mainMovie = movies[9];
  console.log(mainMovie);
  const {original_title,overview,id} = mainMovie;
  return <div>
    <VideoTitle title={original_title} overview={overview}></VideoTitle>
    <VideoBackGround  movie_id={id}></VideoBackGround>
  </div>
};
export default MainContainer;