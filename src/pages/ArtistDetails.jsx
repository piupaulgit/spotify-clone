import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAlbumDetailsQuery } from '../redux/services/spotifyCore'

const ArtistDetails = () => {
  const {id} = useParams()
  const {data, isFetching, error} = useGetAlbumDetailsQuery({type:window.location.href.split("/")[3],id:id})

  console.log(data,'data')
  return (
    <div>ArtistDetails</div>
  )
}

export default ArtistDetails
