import React from 'react'
import ArtistCard from './ArtistCard'

const Artists = ({list,title}) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="font-bold text-white text-2xl">{title}</h2>
      </div>

      <div className="flex flex-wrap justify-between">
        {list?.map((artist, i) => {
            return(
              <ArtistCard artist={artist} />
            )
        })}
      </div>
    </div>
  )
}

export default Artists