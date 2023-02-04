import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import SongList from '../components/SongList'
import SongListHeader from '../components/SongListHeader'
import {setSongList } from '../redux/features/playerSlice'
import { useGetAlbumDetailsQuery } from '../redux/services/spotifyCore'

const SongListing = () => {
    const {id} = useParams()
    const {data, isFetching, error} = useGetAlbumDetailsQuery(id)
    const dispatch = useDispatch()

    useEffect(() => {
      if(data?.tracks?.items?.length > 0){
        dispatch(setSongList(data))
      }
    },[data])

  return (
    <div className='text-white'>
      <SongListHeader songDetail={
        {
          img: data?.images[1].url,
          title: data?.name,
          releaseDate: data?.release_date,
          artists: data?.artists.map((artist) => {return {name:artist.name,id:artist.id}}),
          totalTracks: data?.total_tracks
        }
        }/>
        <SongList songTracks={data?.tracks?.items}/>
    </div>
  )
}

export default SongListing