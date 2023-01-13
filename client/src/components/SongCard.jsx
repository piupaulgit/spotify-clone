import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongCard = (props) => {
  const song = props.song;
  return (
    <div className=" transition-all group flex flex-col w-[15%] p-4 bg-white/5 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer mb-6 hover:bg-white/20">
      <div className="w-full h-200  relative overflow-hidden">
        <span className=" opacity-0 transition-all absolute right-0 bottom-0 group-hover:bottom-3 group-hover:right-3 group-hover:opacity-100">
          <PlayPause
            isPlaying={false}
            activeSong={false}
            song={song}
            handlePause={false}
            handlePlay={false}
          />
        </span>

        <img
          alt="song_img"
          className="w-full h-full rounded-lg"
          src={song?.track?.album?.images[0]?.url}
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`j`}>{song?.track?.album?.name}</Link>
        </p>
        <div className="flex">
          {song?.track?.album?.artists?.map((artist, i) => (
            <p className="text-sm truncate text-gray-300 mt-1" key={i}>
              <Link to="">
                {artist.name}
                {i !== song?.track?.album?.artists.length - 1 && (
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
