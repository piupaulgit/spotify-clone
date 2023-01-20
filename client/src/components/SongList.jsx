import React from "react";
import { useState } from "react";
import { BsClock, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import PlayPause from "./PlayPause";

const SongList = () => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className="bg-black py-10 px-5">
      <div className="flex gap-8">
        <PlayPause
          isPlaying={false}
          activeSong={false}
          song={{}}
          handlePause={false}
          handlePlay={false}
        />
        <button onClick={() => setIsFav(!isFav)}>
          {isFav ? (
            <BsSuitHeartFill size={35} className="text-[#1CDF63]" />
          ) : (
            <BsSuitHeart size={35} className="text-white/20" />
          )}
        </button>
      </div>
      <table className="table-auto w-full mt-10">
        <thead className="uppercase border-b-2 border-white/10">
            <tr>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30"># Title</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">Album</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">DAte added</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30"><BsClock/></th>
            </tr>
        </thead>
      </table>
    </div>
  );
};

export default SongList;
