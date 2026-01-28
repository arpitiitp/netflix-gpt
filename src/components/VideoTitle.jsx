import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-3/5 text-lg opacity-80">{overview}</p>
      <div className="pt-6 flex gap-4">
        <button className="bg-white text-black px-4 py-2 font-bold rounded-lg flex items-center gap-2 hover:bg-gray-400 transition">
          ▶️ Play
        </button>

        <button className="bg-gray-700 text-white px-4 py-2 font-bold rounded-lg flex items-center gap-2 hover:bg-gray-600 transition">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
