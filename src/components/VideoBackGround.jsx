import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailer';

const VideoBackGround = ({movie_id}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // fetching trailor videos and updating store
  useMovieTrailor(movie_id);
  
  

  return (
    <div className='w-screen'>
       <iframe 
       className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackGround;
