# Book Management Application

A full-stack Book Management System built with a modern tech stack.
This project includes frontend + backend, CRUD operations, validation, pagination, responsive UI, and clean architecture.

# Tech Stack Used
Frontend
React (TypeScript)
Tailwind CSS
Zustand (State Management)
React Router DOM
Axios
Lucide Icons

Backend
Node.js
Express.js
MongoDB
Mongoose
dotenv
CORS

# Project Structure
root/
│
├── backend/
│   ├── src/
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── .env
│   └── package.json
│
└── README.md

# Frontend Setup
1️⃣ Go to frontend folder
cd front

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Create a file named .env inside the frontend folder.

VITE_BACKEND_URL=http://localhost:5000


Replace the URL if your backend runs on a different port or domain.

4️⃣ Start frontend
npm run dev

# Backend Setup
1️⃣ Go to backend folder
cd back

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Create a file named .env inside the backend folder.

PORT=5000
MONGODB_URL=mongodb://localhost:27017/book-management


If using MongoDB Atlas, replace MONGODB_URL with your Atlas connection string.

4️⃣ Start backend
npm run start