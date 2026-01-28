import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { background_image } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 fixed">
        <img
          className="w-full h-full object-cover"
          src={background_image}
          alt="background"
        />
      </div>
      <div className="">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </div>
  );
};

export default GptSearch;
