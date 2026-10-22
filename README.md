# React + Vite
# 🧩 Jigsaw Image Puzzle

A web-based jigsaw puzzle game. Pick or upload an image, choose a difficulty, and drag the pieces into place. Built with React on the frontend and Node.js + Express on the backend.

## Features

- Choose from preset images 
- Multiple difficulty levels (4x4, 9x9,12x12 etc.)
- Drag and drop pieces to solve the puzzle
- Shuffle / restart anytime
- Timer and move counter
- Win message when the puzzle is complete
- Responsive layout (desktop and mobile)

## Tech Stack

| Layer    | Tech                          |
| -------- | ----------------------------- |
| Frontend | React, HTML, CSS              |
| Backend  | Node.js, Express.js           |
| Tooling  | npm, Git                      |

## Project Structure

```
jigsaw-puzzle/
├── client/               # React app
│   ├── public/
│   └── src/
│       ├── components/   # Board, Piece, Controls, etc.
│       ├── App.js
│       └── index.css
├── server/               # Express API
│   ├── routes/
│   ├── uploads/          # Uploaded images
│   └── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/jigsaw-puzzle.git
cd jigsaw-puzzle
```

### 2. Setup the backend

```bash
cd server
npm install
npm start
```

Server runs on `http://localhost:5000`.

### 3. Setup the frontend

```bash
cd client
npm install
npm start
```

App runs on `http://localhost:3000`.

## How It Works

1. The user selects an image and a grid size.
2. The image is split into equal pieces (rows x columns) in the browser.
3. Pieces are shuffled randomly and placed on the board.
4. The user drags pieces to swap or place them in the correct position.
5. When every piece is in the right spot, the game ends and shows the time and moves.

## API Endpoints

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | `/api/images`     | Get list of preset images |
| POST   | `/api/upload`     | Upload a custom image    |

## Environment Variables

Create a `.env` file inside `server/`:

```
PORT=5000
```

## Future Improvements

- Leaderboard with best times
- User login and saved progress
- Hint button
- Multiplayer mode
