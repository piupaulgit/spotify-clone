/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ currentSong,isPlaying }) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  // if (ref.current) {
  //   if (isPlaying) {
  //     ref.current.play();
  //   } else {
  //     ref.current.pause();
  //   }
  // }

  useEffect(() => {
    isPlaying ? ref.current.play() : ref.current.pause()
    
  },[isPlaying,currentSong])

  // useEffect(() => {
  //   ref.current.volume = volume;
  // }, [volume]);
  // // updates audio element only on seekTime change (and not on each rerender):
  // useEffect(() => {
  //   ref.current.currentTime = seekTime;
  // }, [seekTime]);
  useEffect(() => {
    console.log(currentSong,'p')
  },[])

  return (
    <audio
      src={currentSong?.preview_url}
      ref={ref}
      controls
    />
    
  );
};

export default Player;
