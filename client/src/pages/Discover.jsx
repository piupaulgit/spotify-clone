import {useGetPlayListQuery} from '../redux/services/spotifyCore'
import {Loader, Error} from '../components'
import Tracks from "../components/Tracks";

const Discover = () => {
    const {data, isFetching, error} = useGetPlayListQuery()
    if(isFetching) return <Loader title="Loading your Songs..."/>
    if(error) return <Error/>
    
  return (
    <div className="flex flex-col">
        <Tracks songList={data} hasDropdown={true}/>
    </div>
  );
};

export default Discover;
