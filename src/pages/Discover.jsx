import {useGetPlayListQuery} from '../redux/services/spotifyCore'
import {Loader, Error} from '../components'
import Tracks from "../components/Tracks";
import Artists from '../components/Artists'; 
import { topArtists } from '../assets/constants';

const Discover = () => {
    const {data, isFetching, error} = useGetPlayListQuery()
    if(isFetching) return <Loader title="Loading your Songs..."/>
    if(error) return <Error/>
  return (
    <div className="flex flex-col">
        <Tracks songList={data.albums.items} hasDropdown={false} title="New Release"/>
        <hr className=' opacity-10 my-10'/>
        <Artists list={topArtists} title="My Fav Artists" />
    </div>
  );
};

export default Discover;
