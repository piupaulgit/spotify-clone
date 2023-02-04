import { useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setCurrentSong } from "../redux/features/playerSlice";

const PlayPause = () => {
  const { isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch()
  const handlePlayPause = () => {
    dispatch(setCurrentSong(true))
    dispatch(playPause(!isPlaying))
  };
  return (
    <>
      {!isPlaying ? (
        <BsFillPlayCircleFill
          size={55}
          className="text-[#1CDF63] rounded-full bg-black"
          onClick={handlePlayPause}
        />
      ) : (
        <BsFillPauseCircleFill
          size={55}
          className="text-[#1CDF63] rounded-full bg-black"
          onClick={handlePlayPause}
        />
      )}
    </>
  );
};

export default PlayPause;
