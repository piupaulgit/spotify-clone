import { useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";

const PlayPause = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const handlePlayPause = () => {
    setIsplaying(!isPlaying);
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
