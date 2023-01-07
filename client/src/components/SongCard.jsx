import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongCard = (props) => {
  const song = props.song;
  return (
    <div className="flex flex-col w-[180px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-200 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-10 group-hover:flex`}>
          <PlayPause
            isPlaying={false}
            activeSong={false}
            song={song}
            handlePause={false}
            handlePlay={false}
          />
        </div>
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
            <Link to="">{artist.name}{i !== song?.track?.album?.artists.length-1 && <span>,&nbsp;</span>}</Link>
          </p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
