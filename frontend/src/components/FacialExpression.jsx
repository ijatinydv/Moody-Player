import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

export default function FacialExpression({ setSongs, setCurrentMood }) {
  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const loadModels = async () => {
    try {
      setIsLoading(true);
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setIsModelLoaded(true);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load facial recognition models');
      setIsLoading(false);
      console.error("Error loading models: ", err);
    }
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        setError('Unable to access camera. Please check permissions.');
        console.error("Error accessing webcam: ", err);
      });
  };

  async function detectMood() {
    if (!isModelLoaded) {
      setError('Models are still loading. Please wait.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceExpressions();

      if (!detections || detections.length === 0) {
        setError('No face detected. Please ensure your face is visible.');
        setIsLoading(false);
        return;
      }

      let mostProbableExpression = 0;
      let expressionName = '';

      for (const expression in detections[0].expressions) {
        if (detections[0].expressions[expression] > mostProbableExpression) {
          mostProbableExpression = detections[0].expressions[expression];
          expressionName = expression;
        }
      }

      // Format mood name for display
      const formattedMood = expressionName.charAt(0).toUpperCase() + expressionName.slice(1);
      setCurrentMood(formattedMood);

      // Get songs based on mood
      const response = await axios.get(`http://localhost:3000/song?mood=${expressionName}`);
      setSongs(response.data.songs);
      setIsLoading(false);
    } catch (err) {
      setError('Error detecting mood. Please try again.');
      setIsLoading(false);
      console.error("Error in mood detection: ", err);
    }
  }

  useEffect(() => {
    loadModels().then(startVideo);
    
    // Cleanup function
    return () => {
      const video = videoRef.current;
      const stream = video?.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="mood-detector-container">
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="user-video-feed"
        />
        {isLoading && <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Processing...</p>
        </div>}
      </div>
      
      <div className="controls">
        <button 
          className="detect-button" 
          onClick={detectMood} 
          disabled={isLoading || !isModelLoaded}
        >
          {isLoading ? 'Detecting...' : 'Detect My Mood'}
          <i className="ri-emotion-line"></i>
        </button>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="instructions">
          <h3>How it works</h3>
          <ol>
            <li>Position your face clearly in the camera</li>
            <li>Click the "Detect My Mood" button</li>
            <li>Get personalized song recommendations based on your mood</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
