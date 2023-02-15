import React from 'react';
import { BsArrowRepeat, BsFillCaretLeftFill, BsFillCaretRightFill, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { playPause } from '../../redux/features/playerSlice';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePrevSong, handleNextSong }) => {
  const dispatch = useDispatch()
  const handlePlayPause = () => {
    dispatch(playPause(!isPlaying))
  };
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {!currentSongs?.length && <BsFillCaretLeftFill size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {!currentSongs?.length && <BsFillCaretRightFill size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
  )
}
export default Controls;
