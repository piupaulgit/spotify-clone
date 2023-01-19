import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SongListHeader from '../components/SongListHeader'
import { useGetAlbumDetailsQuery } from '../redux/services/spotifyCore'

const SongListing = () => {
    const {id} = useParams()
    const {data, isFetching, error} = useGetAlbumDetailsQuery(id)
  return (
    <div className='text-white'>
      <SongListHeader songDetail={songHeaderDetail}/>
    </div>
  )
}

export default SongListing