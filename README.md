# Sahil Sharma – Portfolio

A professional portfolio built with **React + Vite** (frontend) and **Node.js + Express** (backend).

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 19, Vite, Tailwind CSS v3   |
| Backend  | Node.js, Express 5, CORS          |

## Project Structure

```
myportfolio/
├── client/          # React + Vite frontend
│   ├── public/
│   │   └── assets/  # images, resume PDF
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── Contact.jsx
│       │   └── Footer.jsx
│       └── App.jsx
└── server/          # Express API server
    └── index.js
```

## Getting Started

### 1. Start the backend

```bash
cd server
npm install
npm start          # runs on http://localhost:5000
```

### 2. Start the frontend (development)

```bash
cd client
npm install
npm run dev        # runs on http://localhost:5173
```

### 3. Build for production

```bash
cd client
npm run build      # output in client/dist/
```

## API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | /api/projects  | Returns all projects |
| GET    | /api/skills    | Returns skills data  |
| GET    | /api/about     | Returns about info   |
