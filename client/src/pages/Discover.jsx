import { genres } from "../assets/constants";
import SongCard from '../components/SongCard'

const Discover = () => {
    const genreTitle = "Pop"
    console.log(genres)
  return (
    <div className="flex flex-col">
        <div className="w-full flex justify-between">
            <h2 className="font-bold text-white text-3xl">Discover {genreTitle}</h2>
            <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none">
                {
                    genres.length > 0 && genres.map((genre) => 
                            <option key={genre.value} value={genre.value}>{genre.title}</option>)
                }
            </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {
                [1,2,3,4,5,6].map((song,i) => <SongCard key={song.key} song={song} i={i}/>)
            }
        </div>
    </div>
  );
};

export default Discover;
