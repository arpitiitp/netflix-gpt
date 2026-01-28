import React, { useRef, useState } from "react";
import lang from "../utils/languageContants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constants";
import { queryGemini } from './gemini';
import {addGptMovieResult} from '../utils/gptSlice'


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);


   const searchMovieTMDB = async (movie) =>{
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

     const json = await data.json();
     return json.results;
    }

  // ----------         OPEN - API KEY                             ---------------------------------------------

  // OPEN - API KEY 
  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);
  //     const gptQuery = "act like movie recomdation and suggest " +  
  //     searchText.current.value + "only give name of 5 movie in commas seperated eg:{sholay,DON,GOLMAL}" ;
      
  //     const gptResults = await openai.chat.completions.create({
  //       messages: [{ role: "user", content:gptQuery}],
  //       model: "gpt-3.5-turbo",
  //     });
     
  //   console.log("xcc");
  //    console.log(gptResults.choices);
  // };
// ----------             GEMINI - API KEY                         ---------------------------------------------

   // GEMINI - API KEY 
  const handleGptSearchClick = async () => {
    const query = `Act as movie recommendation system. Suggest 5 movies similar to: ${searchText.current.value}. 
                  Reply only with comma-separated names in this format: Sholay,Don,Golmaal`;
  
    try { 
      const response = await queryGemini(query);
      const gptMovies = response.split(',').map(movie => movie.trim());
      console.log('dk');
      console.log('Recommended Movies:', gptMovies);
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      // ['promise','promise','promise','promise','promise']
     
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));  
    } 
    catch (error) {
      console.error("Search failed:", error);
    }


  };
   
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-black p-4 rounded-lg shadow-lg flex gap-2 w-full max-w-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 w-full rounded-md border border-white text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />

        <button
          className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
