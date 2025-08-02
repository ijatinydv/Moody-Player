# Moody Player Frontend

This is the frontend application for the Moody Player project, built with React and Vite. The application uses facial expression recognition to detect user mood and recommend appropriate music.

## 🚀 Features

- Real-time facial expression detection using face-api.js
- Dynamic song recommendations based on detected mood
- Interactive music player with play/pause functionality and progress tracking
- Responsive design for all device sizes
- Modern UI with visual feedback for user actions

## 🛠️ Tech Stack

- **React**: UI library for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **face-api.js**: JavaScript API for face detection and recognition
- **Remix Icon**: Icon library for UI elements
- **CSS3**: Custom styling with CSS variables and modern techniques

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Webcam access
- Modern web browser with JavaScript enabled

## 🔧 Installation

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the development server
   ```bash
   npm run dev
   ```

3. Build for production
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── public/              # Public assets
│   ├── models/          # face-api.js model files
│   └── vite.svg         # Vite logo
├── src/                 # Source files
│   ├── assets/          # Static assets
│   ├── components/      # React components
│   │   ├── FacialExpression.jsx  # Webcam and mood detection
│   │   ├── FacialExpression.css  # Styling for facial detection
│   │   ├── MoodSongs.jsx         # Song recommendations display
│   │   └── MoodSongs.css         # Styling for song display
│   ├── App.jsx          # Main application component
│   ├── App.css          # Main application styling
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
└── package.json         # Project dependencies and scripts
```

## 🧩 Components

### FacialExpression

Handles webcam access, facial expression detection, and mood analysis. Uses face-api.js to detect expressions and sends the detected mood to the backend API to fetch song recommendations.

### MoodSongs

Displays the recommended songs based on the detected mood. Includes an interactive music player with play/pause functionality and progress tracking.

## 🔄 API Integration

The frontend communicates with the backend API to fetch song recommendations based on the detected mood:

```javascript
// Example API call in FacialExpression.jsx
const response = await axios.get(`http://localhost:3000/song?mood=${expressionName}`);
songs = response.data.songs;
```

## 🎨 Styling

The application uses CSS variables for consistent theming and responsive design:

```css
:root {
  --primary-color: #6c63ff;
  --secondary-color: #4a41da;
  --text-color: #f5f5f5;
  --background-dark: #121212;
  /* ... other variables */
}
```

## 📱 Responsive Design

The application is designed to work on various screen sizes with responsive breakpoints.

## 🔒 Privacy

All facial expression processing happens locally in the browser. Only the detected mood (not the video or images) is sent to the backend API.

## 📝 Vite Configuration

This project uses Vite for fast development and optimized production builds. Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

For more information about the entire project, please refer to the main [README.md](../README.md) file in the project root.
