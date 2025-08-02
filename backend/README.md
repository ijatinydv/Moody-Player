# Moody Player Backend

This is the backend server for the Moody Player project. It provides API endpoints for retrieving song recommendations based on detected mood from the frontend application.

## 🚀 Features

- RESTful API for mood-based song recommendations
- Express.js server with modular architecture
- Scalable structure for future enhancements

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime for the server
- **Express.js**: Web framework for building the API
- **Axios**: HTTP client for making requests

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🔧 Installation

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the server
   ```bash
   npm start
   ```

## 📁 Project Structure

```
├── src/                # Source files
│   ├── app.js          # Express application setup
│   ├── db/             # Database configuration
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   └── service/        # Business logic
├── server.js           # Server entry point
└── package.json        # Project dependencies and scripts
```

## 🔄 API Endpoints

### GET /song

Returns a list of songs based on the detected mood.

**Query Parameters:**

- `mood` (required): The detected mood from facial expression (e.g., happy, sad, angry, etc.)

**Example Request:**

```
GET http://localhost:3000/song?mood=happy
```

**Example Response:**

```json
{
  "mood": "happy",
  "songs": [
    {
      "title": "Happy Song",
      "artist": "Happy Artist",
      "audio": "https://example.com/happy-song.mp3"
    },
    {
      "title": "Joyful Tune",
      "artist": "Joy Band",
      "audio": "https://example.com/joyful-tune.mp3"
    }
  ]
}
```

## 🔒 Security Considerations

- The API only receives mood data, not actual facial images or video
- Implement proper CORS settings for production
- Consider rate limiting for public-facing deployments

## 🚀 Deployment

1. Build the application
   ```bash
   npm run build
   ```

2. Start the production server
   ```bash
   npm run start:prod
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

For more information about the entire project, please refer to the main [README.md](../README.md) file in the project root.