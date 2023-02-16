import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {prevSong, playPause, setCurrentSong } from '../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = ({currentSong,isPlaying,currentSongIndex,songList}) => {
  const [duration, setDuration] = useState(29);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();


  const handlePlayPause = () => {
    dispatch(playPause(!isPlaying))
  };

  const handleNextPrevSong = (type) => {
    if(type==='next'){
      getActiveSong(currentSongIndex+1)
    }else{
      getActiveSong(currentSongIndex-1)
    }
  };

  const getActiveSong = (trackNumber) => {
    const songToBeActive = songList.filter(song => song.track_number === trackNumber)
    dispatch(setCurrentSong(songToBeActive[0]))
  }


  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={true} activeSong={true} currentSong={currentSong} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          isActive={true}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSong={currentSong}
          handlePlayPause={handlePlayPause}
          handleNextPrevSong={handleNextPrevSong}
        />
       <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player currentSong={currentSong} 
        isPlaying={isPlaying} 
        seekTime={seekTime} 
        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
        onLoadedData={(event) => setDuration(event.target.duration)}/>
      </div>
      <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
    </div>
  );
};

export default MusicPlayer;
