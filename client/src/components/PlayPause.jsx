import { useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setCurrentSong } from "../redux/features/playerSlice";

const PlayPause = ({songId,albumDetail}) => {
  const { isPlaying,activeAlbumId,currentSong } = useSelector((state) => state.player);
  const dispatch = useDispatch()
  const handlePlayPause = () => {
    if(Object.keys(currentSong).length === 0){
      dispatch(setCurrentSong({song:albumDetail?.tracks?.items[0],albumDetail:albumDetail}))
    }else{
      if(albumDetail.id === activeAlbumId){
        dispatch(playPause(!isPlaying))
      }else{
        dispatch(setCurrentSong({song:albumDetail?.tracks?.items[0],albumDetail:albumDetail}))
      }
    }
  };
  return (
    <>
      {isPlaying && activeAlbumId === songId ? (
        <BsFillPauseCircleFill
          size={55}
          className="text-[#1CDF63] rounded-full bg-black"
          onClick={handlePlayPause}
        />
      ) : (
        <BsFillPlayCircleFill
          size={55}
          className="text-[#1CDF63] rounded-full bg-black"
          onClick={handlePlayPause}
        />
      )}
    </>
  );
};

export default PlayPause;
