import React from 'react';

function Navbar({ Song, toggleSidebar }) {
  return (
    <div className='flex justify-between'>
      <h1 className='text-orange-600 text-2xl'>Orange</h1>
      <div className='flex bg-orange-600 gap-3 px-2 py-1 rounded-lg text-white'>
        <button onClick={toggleSidebar} className='text-sm'>Favourite</button>
        <p>{Song.filter(item => item.fav).length}</p>
      </div>
    </div>
  );
}

export default Navbar;