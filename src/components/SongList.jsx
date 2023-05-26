import React from "react";
import { useState } from "react";
import {
  BsClock,
  BsPauseFill,
  BsPlayFill,
  BsSuitHeart,
  BsSuitHeartFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import { millisToMinutesAndSeconds } from "../services/commonFunctions.";

const SongList = ({ albumDetail }) => {
  const { currentSongIndex,currentSong,isPlaying } = useSelector((state) => state.player);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const moveToPage = (id) => {
    navigate(`/artist/${id}`);
  };
  const selectSong = (song) => {
    dispatch(setCurrentSong({song:song,albumDetail:albumDetail}))
  };

  return (
    <div className="bg-black py-10 px-5">
      <div className="flex gap-8">
        <PlayPause songId={albumDetail?.id} albumDetail={albumDetail}/>
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
            <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">
              #
            </th>
            <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">
              Title
            </th>
            <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">
              Album
            </th>
            <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">
              Date added
            </th>
            <th className="font-light text-sm pb-2 text-left pl-4 text-white/30">
              <BsClock />
            </th>
          </tr>
        </thead>
        <tbody>
          {albumDetail?.tracks.items?.length &&
            albumDetail?.tracks.items?.map((song, ind) => {
              return (
                <tr key={ind} className={(currentSong.name === song.name ? 'bg-white/10': '')}>
                  <td className="text-center pr-5">
                    {currentSong.name === song.name && !isPlaying ? (
                      <BsPlayFill className="m-auto" />
                    ) : currentSong.name === song.name && isPlaying ? (
                      <BsPauseFill className="text-white m-auto" />
                    ): (
                      <span>{song.track_number}</span>
                    )}
                  </td>
                  <td className="py-3">
                    <h3
                      className={"text-sm cursor-pointer hover:underline " + (currentSong.name === song.name && 'text-[#1CDF63]')}
                      onClick={() => selectSong(song)}
                    >
                      {song?.name}
                    </h3>
                    {song?.artists?.length &&
                      song?.artists?.map((artist, indx) => {
                        return (
                          <span
                            key={artist?.id}
                            className="text-gray-500 text-xs hover:cursor-pointer hover:underline"
                            onClick={() => moveToPage(artist?.id)}
                          >
                            {" "}
                            {artist?.name},
                          </span>
                        );
                      })}
                  </td>
                  <td className="py-3"></td>
                  <td className="py-3"></td>
                  <td className="py-3">
                    {" "}
                    {millisToMinutesAndSeconds(song.duration_ms, false)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
