# Detectify - Real-Time Object Detection System

Detectify is a real-time object detection web application that identifies objects in a live webcam feed. Built with **TensorFlow.js** and **Next.js**, the system focuses on detecting human presence for enhanced security monitoring. It features real-time classification, bounding box rendering, and an automated alert system for human detection.

---

## 🔥 Features

- **Real-Time Object Detection**: Detects and classifies objects in the webcam feed with minimal latency.
- **Human Detection Alerts**: Triggers audio alerts upon detecting human presence, ideal for security use cases.
- **Bounding Box Visualization**: Highlights detected objects with color-coded bounding boxes.
- **Responsive Design**: Optimized for various screen sizes and devices.
- **Low-Latency Processing**: Processes video input with a detection interval of 10ms.

---

## 🚀 Demo

Check out a working demo of the application here: [Detectify Demo](#).

---

## 🛠️ Core Technologies

- **TensorFlow.js**: COCO-SSD model for object detection and classification.
- **Next.js**: Framework for server-rendered React applications.
- **React Webcam**: For video capture from the webcam.
- **Canvas API**: For drawing bounding boxes and object labels on the video feed.
- **Tailwind CSS**: For responsive and visually appealing design.

---

## 🧩 Key Components

### **1. TensorFlow.js Integration**
- Model: COCO-SSD pre-trained model for object detection.
- Efficient loading and inference pipeline for smooth real-time detection.

### **2. Frontend Development**
- Built with Next.js and React.
- Styled using Tailwind CSS for responsive and modern UI.
- Modular component architecture for maintainability.

### **3. Video Processing**
- Captures webcam feed using React Webcam.
- Renders bounding boxes and object labels with the Canvas API.
- Uses `RequestAnimationFrame` for efficient frame-by-frame processing.

### **4. Alert System**
- Detects human presence and triggers audio alerts.
- Implements throttling to prevent overlapping alerts.

---


