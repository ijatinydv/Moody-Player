import { useState } from 'react'
import FacialExpression from './components/FacialExpression'
import Moodsongs from './components/MoodSongs'
import './App.css'

function App() {
  const [songs, setSongs] = useState([])
  const [currentMood, setCurrentMood] = useState('')
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Moody Player</h1>
        <p>Discover music that matches your mood</p>
      </header>
      
      <main className="app-content">
        <FacialExpression setSongs={setSongs} setCurrentMood={setCurrentMood} />
        <Moodsongs songs={songs} currentMood={currentMood} />
      </main>
    </div>
  )
}

export default App
