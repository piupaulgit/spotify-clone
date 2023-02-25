import { Link, useNavigate } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongCard = ({song}) => {
  const navigate = useNavigate()
  const moveToPage = () => {
    navigate(`/song/${song.id}`)
  }
  return (
    <div className="transition-all group flex flex-col w-[15%] p-4 bg-white/5 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer mb-6 hover:bg-white/20" onClick={moveToPage}>
      <div className="w-full h-200  relative overflow-hidden">
        <span className=" opacity-0 transition-all absolute right-0 bottom-0 group-hover:bottom-3 group-hover:right-3 group-hover:opacity-100">
          <PlayPause songId={song.id} />
        </span>

        <img
          alt="song_img"
          className="w-full h-full rounded-lg"
          src={song?.image}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`j`}>{song?.title}</Link>
        </p>
        <div className="flex">
          {song?.artists?.map((artist, i) => (
            <p className="text-sm truncate text-gray-300 mt-1" key={i}>
              <Link to="">
                {artist.name}
                {i !== song?.artists.length - 1 && (
                  <span>,&nbsp;</span>
                )}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
