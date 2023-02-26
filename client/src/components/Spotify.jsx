import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { TopBar, Sidebar, MusicPlayer, TopPlay } from "./index";
import {
  ArtistDetails,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "../pages";
import SongListing from "../pages/SongListing";
import { useEffect } from "react";

const Spotify = () => {
  const { currentSong, isPlaying,currentSongIndex,songList } = useSelector((state) => state.player);
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br px-5 from-black to-[#111013]">
        <TopBar />

        <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/albums/:id" element={<SongListing />} />
              <Route path="/artists/:id" element={<SongListing />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>
      {Object.keys(currentSong).length > 1 && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#000] backdrop-blur-lg rounded-t-sm z-10">
          <MusicPlayer currentSong={currentSong} isPlaying={isPlaying} currentSongIndex={currentSongIndex} songList={songList}/>
        </div>
      )}
    </div>
  );
};

export default Spotify;
