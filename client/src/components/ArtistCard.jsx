import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlayPause from "./PlayPause";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate()
  const moveToArtistPage = () => {
    navigate(`/artists/${artist.id}`)
  }
  return (
    <div className="transition-all group flex flex-col w-[15%] p-4 bg-white/5 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer mb-6 hover:bg-white/20" onClick={() => moveToArtistPage()}>
      <div className="w-full h-200  relative overflow-hidden">
        <span className=" opacity-0 transition-all absolute right-0 bottom-0 group-hover:bottom-3 group-hover:right-3 group-hover:opacity-100">
          <PlayPause songId={artist.id} />
        </span>

        <img
          alt="Artist Image"
          className="w-full h-full rounded-full"
          src={artist?.image}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`j`}>{artist?.name}</Link>
        </p>
        <div className="flex">
          <p className="text-sm truncate text-gray-300 mt-1">Artist</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
