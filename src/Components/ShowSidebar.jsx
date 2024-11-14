import React from 'react'

function ShowSidebar({Song ,showSidebar ,handleClick,toggleSidebar}) {
  return (
      <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-5 transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <h2 className='text-xl font-bold mb-4'>Favourite Songs</h2>
        {Song.filter(item => item.fav).length > 0 ? (
          Song.filter(item => item.fav).map((value, idx) => (
            <div key={idx} className='flex gap-3 mb-4 relative'>
              <img src={value.imgUrl} alt='' className='w-12 h-12 object-cover rounded-lg' />
              <div>
                <h3 className='text-lg'>{value.songName}</h3>
                <p className='text-sm text-gray-600'>{value.artistName}</p>
              </div>
              <button onClick={()=>handleClick(value.id)} className='text-orange-600 absolute right-0'>Remove</button>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No favorite songs added yet!</p>
        )}
        <button onClick={toggleSidebar} className='mt-5 text-orange-600'>Close</button>
    </div>
  )
}

export default ShowSidebar
