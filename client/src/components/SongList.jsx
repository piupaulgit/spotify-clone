import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsClock, BsPlayFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongList = ({songTracks}) => {
  const { currentIndex } = useSelector((state) => state.player);
  const navigate = useNavigate()
  const [isFav, setIsFav] = useState(false);
  const moveToPage = (id) => {
    navigate(`/artist/${id}`)
  }
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
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">#</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">Title</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">Album</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">DAte added</th>
                <th className="font-light text-sm pb-2 text-left pl-4 text-white/30"><BsClock/></th>
            </tr>
        </thead>
        <tbody>
            {
              songTracks?.length && songTracks?.map((song,ind) => {
                return(
                  <tr key={ind} className="hover:bg-white/10">
                    <td className="text-center pr-5">
                      {
                        currentIndex === song.track_number ? <BsPlayFill className="text-white m-auto"/> : <span>{song.track_number}</span>
                      }
                      </td>
                    <td className="py-3">
                      <h3 className="text-sm">{song?.name}</h3>
                      {
                        song?.artists?.length && song?.artists?.map((artist,indx) => {
                          return(
                            <span key={artist?.id} className="text-gray-500 text-xs hover:cursor-pointer hover:underline" onClick={() => moveToPage(artist?.id)}> {artist?.name},</span>
                          )
                        })
                      }
                    </td>
                    <td className="py-3"></td>
                    <td className="py-3"></td>
                    <td className="py-3">{song.duration_ms}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
