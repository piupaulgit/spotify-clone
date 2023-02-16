import React from 'react';
import { BsArrowRepeat, BsCaretLeft, BsCaretRight, BsFillCaretLeftFill, BsFillCaretRightFill, BsFillPauseFill, BsFillPlayFill, BsPauseCircle, BsPauseCircleFill, BsPlayCircle, BsPlayCircleFill, BsShuffle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { playPause } from '../../redux/features/playerSlice';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSong,handlePlayPause,handleNextPrevSong }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {!currentSong?.length &&  <BsCaretLeft size={30} className="cursor-pointer text-white hover:text-[#1CDF63]" onClick={()=>handleNextPrevSong('prev')}  />}
    {isPlaying ? (
      <BsPauseCircleFill size={35} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsPlayCircleFill size={35} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {!currentSong?.length && <BsCaretRight size={30} className="cursor-pointer text-white hover:text-[#1CDF63]" onClick={()=>handleNextPrevSong('next')} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
  )
}
export default Controls;
