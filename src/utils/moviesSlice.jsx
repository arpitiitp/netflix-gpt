import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies : null,
    trailerVideo:null,
    popularMovies:null,
    topRated:null,
  },
  reducers:{
    addNowPlayingMovies : (state,action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos:(state,action)=>{
      state.trailerVideo= action.payload;
    },
    addPopularMovies :(state,action) =>{
      state.popularMovies= action.payload;
    },
    addTopRated:(state,action) =>{
      state.topRated= action.payload;
    }
  },
});

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addTopRated} = moviesSlice.actions;

export default moviesSlice.reducer;
