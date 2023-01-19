import React from 'react'

const SongListHeader = ({songHeaderDetail}) => {
  return (
    <div className='flex py-4 px-2 bg-[#23D3EC]/5'>
        <div>
             <img
          alt="song_img"
          className="w-full h-full rounded-lg"
          src={songHeaderDetail.image}
        />
        </div>
        <h2></h2>
    </div>
  )
}

export default SongListHeader