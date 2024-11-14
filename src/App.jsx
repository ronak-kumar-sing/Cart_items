import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import ShowSidebar from './Components/ShowSidebar'
function App() {

const songData = [
  {
    id: 0,
    songName: 'Shape of You',
    artistName: 'Ed Sheeran',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png',
    fav: false,
  },
  {
    id: 1,
    songName: 'Blinding Lights',
    artistName: 'The Weeknd',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
    fav: false,
  },
  {
    id: 2,
    songName: 'Levitating',
    artistName: 'Dua Lipa',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Dua_Lipa_Levitating_%28DaBaby_Remix%29.png',
    fav: false,
  },
  {
    id: 3,
    songName: 'Bad Habits',
    artistName: 'Ed Sheeran',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Ed_Sheeran_-_Bad_Habits_2.png',
    fav: false,
  },
  {
    id: 4,
    songName: 'Stay',
    artistName: 'The Kid LAROI & Justin Bieber',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png',
    fav: false,
  },
  {
    id: 5,
    songName: 'Peaches',
    artistName: 'Justin Bieber ft. Daniel Caesar & Giveon',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Justin_Bieber_-_Peaches.png',
    fav: false,
  },
  {
    id: 6,
    songName: 'Montero',
    artistName: 'Lil Nas X',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Montero_%28Call_Me_by_Your_Name%29.png',
    fav: false,
  },
  {
    id: 7,
    songName: 'Watermelon Sugar',
    artistName: 'Harry Styles',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Watermelon_Sugar_-_Harry_Styles.png',
    fav: false,
  },
  {
    id: 8,
    songName: 'Drivers License',
    artistName: 'Olivia Rodrigo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/09/Drivers_License_by_Olivia_Rodrigo.png',
    fav: false,
  },
  {
    id: 9,
    songName: 'Good 4 U',
    artistName: 'Olivia Rodrigo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Olivia_Rodrigo_-_Good_4_U.png',
    fav: false,
  },
];
  const [Song, setSong] = useState(songData);
    const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = (idxx) => {
    setSong(prev => {
      return prev.map((value, idx) => {
        return idx === idxx ? { ...value, fav:!value.fav } : value;
      })
    })
  }
const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='w-full h-screen bg-zinc-300 p-8 relative'>
      <Navbar Song={Song} toggleSidebar={toggleSidebar} />
      <div className='mt-10 flex gap-8 flex-wrap'>
        {Song.map((value, idx) => (
          <Card key={idx} api={idx} handleClick={handleClick} value={value} />
        ))}
      </div>
      {showSidebar ? <ShowSidebar Song={Song} handleClick={handleClick} showSidebar={ShowSidebar} toggleSidebar={toggleSidebar} /> : null}

    </div>
  );
}

export default App;