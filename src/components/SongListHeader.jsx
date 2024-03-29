import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { millisToMinutesAndSeconds } from '../services/commonFunctions.';

const SongListHeader = ({songDetail}) => {
  const navigate = useNavigate()
  const { songList } = useSelector((state) => state.player);
  const calculateTotalTime = () => {
    let total = 0;
    songList.map((song) => {
      total = total+song.duration_ms;
    })
   return millisToMinutesAndSeconds(total,true)
  }
  return (
    <div className='flex p-4 bg-[#23D3EC]/5 gap-10 items-end '>
        <div className='shadow-lg'>
             <img
          alt="song_img"
          className="rounded-lg w-[230px]"
          src={songDetail?.img}
        />
        </div>
        <div>
          <h2 className='font-bold text-5xl'>{songDetail?.title}</h2>
          <ul className='flex items-center mt-4 header-list-style text-sm'>
            <li>
                <img
              alt="song_img"
              className="rounded-full w-[30px]"
              src={songDetail?.img}
            />
            </li>
            {songDetail?.artists?.length && songDetail?.artists?.map((artist) => {
              return(
                <li key={artist.id} onClick={() => navigate(`/artist/${artist.id}`)} className="hover:underline cursor-pointer">{artist?.name}</li>
              )
            })}
            <li>{songDetail?.releaseDate?.split("-")[0]}</li>
            <li>{songDetail?.totalTracks} Songs</li>
            <li>
              {calculateTotalTime()}
            </li>
          </ul>
        </div>
        
    </div>
  )
}

export default SongListHeader