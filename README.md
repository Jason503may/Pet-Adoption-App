# Pet Adoption Website (MERN Stack)

A full-stack web application for pet adoption built using the MERN stack (MongoDB, Express.js, React, Node.js) with Vite as the build tool.

## Features

- User Authentication (Login/Register)
- Pet CRUD Operations
- Modern UI with Material-UI
- RESTful API Backend

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/pet-adoption
   JWT_SECRET=your-secret-key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Pets
- GET /api/pets - Get all pets
- GET /api/pets/:id - Get a single pet
- POST /api/pets - Create a new pet
- PUT /api/pets/:id - Update a pet
- DELETE /api/pets/:id - Delete a pet

## Technologies Used

- Frontend:
  - React (with Vite)
  - React Router DOM
  - Material-UI
  - Axios

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT Authentication
  - bcryptjs

## Project Structure

```
pet-adoption-mern/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── README.md
```
