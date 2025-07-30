import { useState } from 'react'
import FacialExpression from './components/FacialExpression'
import Moodsongs from './components/MoodSongs'
import './App.css'

function App() {

  const [songs, setSongs] = useState([
          {
             
          }
      ])
  return (
    <>
      <FacialExpression setSongs={setSongs}/>
      <Moodsongs songs= {songs} />
    </>
  )
}

export default App
