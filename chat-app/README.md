# 💬 Realtime Chat App

A full-stack realtime chat application built with **React**, **Node.js**, **Express**, **Socket.IO**, **MongoDB**, and **Cloudinary**. Supports user authentication, image uploads, and real-time messaging.

---

## ✨ Features

- 🔐 JWT-based user authentication with secure cookie storage
- 💬 Real-time messaging using Socket.IO
- 🖼️ Image upload support (Cloudinary)
- 📱 Mobile-friendly UI with [TailwindCSS](https://tailwindcss.com/)
- 🌙 Theme support via [daisyUI](https://daisyui.com/)
- ✅ Online user detection
- ⚡ Powered by Vite for fast frontend builds

---

## ⚙️ Getting Started

### 🧩 Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 🔧 Backend Setup
```bash
cd backend
npm install
npm run dev

---

PORT=5002
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
