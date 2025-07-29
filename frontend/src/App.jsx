import { useState } from 'react'
import FacialExpression from './components/FacialExpression'
import Moodsongs from './components/MoodSongs'
import './App.css'

function App() {

  const [songs, setSongs] = useState([
          {
              title:"test song",
              artist:"test artist",
              url:"test-url",
          }
      ])
  return (
    <>
      <FacialExpression setSongs={setSongs}/>
      <Moodsongs Songs= {songs} />
    </>
  )
}

export default App
