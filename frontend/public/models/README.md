# Face-API.js Models

This directory contains the pre-trained models used by face-api.js for facial detection, landmark recognition, and expression analysis in the Moody Player application.

## Models Overview

### Face Detection Models

- **SSD MobileNet V1**: A robust face detector that provides good accuracy with reasonable performance.
  - `ssd_mobilenetv1_model-shard1`
  - `ssd_mobilenetv1_model-shard2`
  - `ssd_mobilenetv1_model-weights_manifest.json`

- **Tiny Face Detector**: A lightweight face detector optimized for performance on mobile devices and browsers.
  - `tiny_face_detector_model-shard1`
  - `tiny_face_detector_model-weights_manifest.json`

- **MTCNN (Multi-task Cascaded Convolutional Networks)**: A more accurate but computationally intensive face detector.
  - `mtcnn_model-shard1`
  - `mtcnn_model-weights_manifest.json`

### Face Landmark Models

- **Face Landmark 68 Model**: Detects 68 points on a face that mark important facial features.
  - `face_landmark_68_model-shard1`
  - `face_landmark_68_model-weights_manifest.json`

- **Face Landmark 68 Tiny Model**: A lightweight version of the 68 point landmark detector.
  - `face_landmark_68_tiny_model-shard1`
  - `face_landmark_68_tiny_model-weights_manifest.json`

### Face Recognition Model

- **Face Recognition Model**: Used for face recognition and comparison.
  - `face_recognition_model-shard1`
  - `face_recognition_model-shard2`
  - `face_recognition_model-weights_manifest.json`

### Face Expression Model

- **Face Expression Model**: Detects facial expressions and emotions (happy, sad, angry, etc.).
  - `face_expression_model-shard1`
  - `face_expression_model-weights_manifest.json`

### Age and Gender Model

- **Age and Gender Model**: Estimates age and detects gender from facial images.
  - `age_gender_model-shard1`
  - `age_gender_model-weights_manifest.json`

## Usage in Moody Player

The Moody Player application primarily uses the Tiny Face Detector model for face detection and the Face Expression Model for mood detection. These models are loaded asynchronously when the application starts and are used to analyze the user's facial expressions in real-time through the webcam feed.

## Model Loading

The models are loaded in the `FacialExpression.jsx` component using the following pattern:

```javascript
await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
await faceapi.nets.faceExpressionNet.loadFromUri('/models');
```

## Privacy Note

All model processing happens locally in the browser. No facial image data is sent to any server - only the detected mood is transmitted to fetch song recommendations.

## Credits

These models are part of the [face-api.js](https://github.com/justadudewhohacks/face-api.js) library, which is built on top of [tensorflow.js](https://www.tensorflow.org/js).