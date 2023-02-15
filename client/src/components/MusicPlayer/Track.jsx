import React from 'react';
import { dvd } from '../../assets';

const Track = ({ isPlaying, isActive, activeSong,currentSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={dvd} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {currentSong?.name ? currentSong?.name : 'No active Song'}
      </p>
      <p className="truncate text-gray-300 font-thin">
        {activeSong?.subtitle ? activeSong?.subtitle : 'Subtitle not available'}
      </p>
    </div>
  </div>
);

export default Track;
