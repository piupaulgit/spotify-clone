import React from "react";
import SongCard from "./SongCard";
import { genres } from "../assets/constants";

const Tracks = ({ songList, hasDropdown,title }) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="font-bold text-white text-2xl">{title}</h2>
        <button className="text-white/20 hover:underline uppercase text-sm">Show All</button>
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
        {songList?.map((song, i) => {
          const songItems = {
            title : song.name,
            image: song.images[1].url,
            artists: song.artists,
            id: song.id
          }
            return(
              <SongCard key={i} song={songItems} i={i} />
            )
        })}
      </div>
    </div>
  );
};

export default Tracks;
