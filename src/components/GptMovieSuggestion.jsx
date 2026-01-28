import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestion= () => {
  const {movieResults,movieNames} = useSelector(store => store.gpt); 
  if(!movieNames){
    // add simmer ui
    print('movie sug. ui')
    return null;
  }
 
  return  (
  <div className="p-4 m-4 bg-black text-white">
          <div>
            {movieNames.map((movie,index) => (<MovieList title={movie} movies={movieResults[index]} />))};
          </div>
    </div>
  );
};

export default GptMovieSuggestion;
