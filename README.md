# Moody Player

![Moody Player](https://img.shields.io/badge/Moody%20Player-1.0.0-6c63ff)

Moody Player is an innovative web application that uses facial expression recognition to detect your mood and recommend music that matches how you're feeling. The application leverages machine learning to analyze facial expressions in real-time and provides personalized song recommendations based on your emotional state.

## ✨ Features

- **Real-time Mood Detection**: Uses face-api.js to analyze facial expressions through your webcam
- **Personalized Music Recommendations**: Suggests songs that match your detected mood
- **Interactive Music Player**: Play and pause songs directly in the application
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with visual feedback

## 🚀 Technologies Used

### Frontend
- React.js
- Vite
- face-api.js (TinyFace detector and expression recognition)
- Remix Icon
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- RESTful API architecture

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Webcam access
- Modern web browser with JavaScript enabled

## 🛠️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/ijatinydv/Moody-Player.git
   cd moody-player
   ```

2. Install dependencies for both frontend and backend
   ```bash
   # Install all dependencies at once
   npm run install:all
   
   # Or install them separately
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ..
   ```

3. Start both servers at once
   ```bash
   # From the project root
   npm start
   ```

   Or start them separately:
   ```bash
   # Start backend server
   npm run start:backend
   
   # Start frontend development server
   npm run start:frontend
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 How It Works

1. **Facial Expression Detection**:
   - The application uses your webcam to capture your facial expressions
   - face-api.js analyzes the expressions to determine your mood (happy, sad, angry, etc.)

2. **Mood-Based Song Recommendations**:
   - Your detected mood is sent to the backend API
   - The API returns a list of songs that match your mood

3. **Music Playback**:
   - You can play/pause songs directly in the application
   - The player shows progress and time information

## 📁 Project Structure

```
├── backend/                # Backend server code
│   ├── src/                # Source files
│   │   ├── app.js          # Express application setup
│   │   ├── db/             # Database configuration
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   └── service/        # Business logic
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
│
└── frontend/              # Frontend React application
    ├── public/            # Public assets
    │   └── models/        # face-api.js models
    ├── src/               # Source files
    │   ├── components/    # React components
    │   ├── assets/        # Static assets
    │   ├── App.jsx        # Main application component
    │   └── main.jsx       # Application entry point
    └── package.json       # Frontend dependencies
```

## 🔒 Privacy Considerations

Moody Player processes facial expressions locally in your browser. No video data is sent to our servers - only the detected mood is transmitted to fetch song recommendations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to contribute to this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [face-api.js](https://github.com/justadudewhohacks/face-api.js) for facial expression recognition
- [Remix Icon](https://remixicon.com/) for beautiful icons
- All the open-source libraries that made this project possible

---

Developed with ❤️ by the Moody Player Team