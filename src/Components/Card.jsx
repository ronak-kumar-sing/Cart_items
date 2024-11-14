import React from 'react'

function Card({ value,handleClick ,api}) {
  const { songName, artistName, imgUrl,fav } = value;
  return (
    <div  className='w-60 h-36 px-4 py-5 bg-white rounded-lg flex gap-4 relative mt-5'>
      <div className='size-20 bg-orange-400 rounded-lg'>
        <img className=" object-cover "src={imgUrl} alt='' />
      </div>
      <div className='mt-3 w-1/2'>
        <h1 className='text-lg'>{songName}</h1>
        <p className='text-sm'>{artistName}</p>
      </div>
      <button onClick={() => handleClick(api)} className={` text-white text-md absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ${fav ? "bg-sky-600" : "bg-orange-500"} px-2.5 py-1 rounded-full whitespace-nowrap ${fav ? "hover:bg-blue-600" : "hover:bg-orange-600"} duration-300 `}>{ fav ? 'Remove': 'Add to favourite'}</button>
    </div>
  )
}

export default Card
