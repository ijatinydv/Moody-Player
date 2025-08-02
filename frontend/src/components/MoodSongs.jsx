import './MoodSongs.css'
import { useState, useEffect } from 'react';

const Moodsongs = ({ songs, currentMood }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioElement, setAudioElement] = useState(null);

  const handlePlayPause = (index, audioSrc) => {
    if (isPlaying === index) {
      audioElement?.pause();
      setIsPlaying(null);
    } else {
      // Stop currently playing audio if any
      audioElement?.pause();
      
      // Create new audio element
      const audio = new Audio(audioSrc);
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(null);
      });
      
      audio.play();
      setAudioElement(audio);
      setIsPlaying(index);
    }
  };

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  // Format time from seconds to MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Calculate progress percentage
  const getProgressPercentage = () => {
    if (!duration) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <div className="mood-songs-container">
      <div className="mood-header">
        <h2>Recommended Songs</h2>
        {currentMood && (
          <div className="current-mood">
            <span>Based on your mood:</span>
            <span className="mood-badge">{currentMood}</span>
          </div>
        )}
      </div>

      {songs.length === 0 ? (
        <div className="no-songs-message">
          <i className="ri-music-2-line"></i>
          <p>Click "Detect My Mood" to get personalized song recommendations</p>
        </div>
      ) : (
        <div className="songs-list">
          {songs.map((song, index) => (
            <div 
              className={`song-card ${isPlaying === index ? 'playing' : ''}`} 
              key={index}
            >
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              
              <div className="song-controls">
                {isPlaying === index && (
                  <div className="progress-container">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                    <div className="time-display">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                )}
                
                <button 
                  className="play-button" 
                  onClick={() => handlePlayPause(index, song.audio)}
                  aria-label={isPlaying === index ? 'Pause' : 'Play'}
                >
                  {isPlaying === index ? (
                    <i className="ri-pause-fill"></i>
                  ) : (
                    <i className="ri-play-fill"></i>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Moodsongs;

