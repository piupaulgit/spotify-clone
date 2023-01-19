import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAlbumDetailsQuery } from '../redux/services/spotifyCore'

const SongListing = () => {
    const {id} = useParams()
    const {data, isFetching, error} = useGetAlbumDetailsQuery(id)
    useEffect(() => {
        console.log(data)
    },[])
  return (
    <div className='text-white'>SongListing</div>
  )
}

export default SongListing