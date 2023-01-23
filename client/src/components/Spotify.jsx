import React from "react";
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { TopBar, Sidebar, MusicPlayer, TopPlay } from './index';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from '../pages';
import SongListing from "../pages/SongListing";

const Spotify = () => {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br px-5 from-black to-[#111013]">
        <TopBar />

        <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/song/:id" element={<SongListing/>} />
              <Route path="/artist/:id" element={<SongListing />} />
              
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default Spotify;
