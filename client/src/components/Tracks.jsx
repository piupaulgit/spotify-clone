import React from "react";
import SongCard from "./SongCard";
import { genres } from "../assets/constants";

const Tracks = ({ songList, hasDropdown }) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="font-bold text-white text-2xl">Discover Tracks</h2>
        {hasDropdown && (
          <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none">
            {genres.length > 0 &&
              genres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.title}
                </option>
              ))}
          </select>
        )}
      </div>

      <div className="flex flex-wrap justify-between">
        {songList?.items.map((song, i) => (
          <SongCard key={i} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
