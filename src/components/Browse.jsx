import { useSelector } from 'react-redux';
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import GptSearch from './GptSearch';
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  // fetching movies data
   useNowPlayingMovies();
   usePopularMovies();
   useTopRated();
  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/>:
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
      {
        /*
           container -1 
              - movie background
              - movie title
           container - 2
              - movie list * n 
              - card * n
        */
      } 
    </div>
  )
}

export default Browse;
