# 🧩 Jigsaw Image Puzzle

A responsive and interactive **Jigsaw Image Puzzle Game** built with React and Vite. Users can choose from preset images or upload their own pictures, select a difficulty level, and solve puzzles by arranging shuffled pieces in their correct positions.

The application provides an engaging puzzle-solving experience with drag-and-drop interactions, a timer, move tracking, and a completion message.

---

## ✨ Features

- **Image Selection:** Choose from a collection of preset puzzle images.
- **Custom Image Upload:** Upload your own images to create personalized puzzles.
- **Multiple Difficulty Levels:** Select from different grid sizes, including 4×4, 9×9, and 12×12.
- **Interactive Gameplay:** Drag and drop puzzle pieces to their correct positions.
- **Shuffle & Restart:** Shuffle pieces or restart the game whenever needed.
- **Timer:** Track the time taken to complete the puzzle.
- **Move Counter:** Keep track of every move made during gameplay.
- **Completion Detection:** Automatically detect when all puzzle pieces are correctly arranged.
- **Responsive Design:** Enjoy a smooth gaming experience across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| API | REST API |
| Package Manager | npm |
| Version Control | Git & GitHub |

---

## 📁 Project Structure

```text
jigsaw-puzzle/
│
├── client/                  # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── assets/           # Images and static assets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/                  # Node.js + Express backend
│   ├── routes/               # API routes
│   ├── uploads/              # Uploaded images
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- npm (Node Package Manager)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/jigsaw-puzzle.git
```

Navigate to the project directory:

```bash
cd jigsaw-puzzle
```

### 2. Configure the Backend

Navigate to the server directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
```

Start the backend server:

```bash
npm start
```

The backend server will run at:

`http://localhost:5000`

### 3. Configure the Frontend

Open a new terminal and navigate to the client directory:

```bash
cd client
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend application will be available at the URL displayed in your terminal, typically:

`http://localhost:5173`

---

## ⚙️ How It Works

The application follows a simple and interactive puzzle-solving workflow:

1. **Select an Image:** Choose a predefined image or upload a custom picture.
2. **Choose Difficulty:** Select the desired puzzle grid size.
3. **Generate Puzzle:** The selected image is divided into multiple pieces based on the chosen grid.
4. **Shuffle Pieces:** Puzzle pieces are randomly rearranged to create the challenge.
5. **Solve the Puzzle:** Drag and drop pieces into their corresponding positions.
6. **Track Progress:** Monitor your moves and completion time while playing.
7. **Complete the Game:** A success message appears when all pieces are placed correctly.

---

## 🔌 API Endpoints

The Express.js backend provides REST API endpoints for image management.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/images` | Retrieve available preset images |
| POST | `/api/upload` | Upload a custom puzzle image |

---

## 🔐 Environment Configuration

The backend uses environment variables for configuration.

**Server `.env` file:**

```env
PORT=5000
```

Make sure the `.env` file is included in `.gitignore` to avoid committing sensitive configuration details.

---

## 🔮 Future Enhancements

The following features can be considered for future releases:

- 🏆 Leaderboard to display top scores and completion times.
- 👤 User authentication and personalized profiles.
- 💡 Hint functionality to help players solve difficult puzzles.
- 💾 Save and resume puzzle progress.
- 🌐 Multiplayer puzzle-solving experience.
- 📊 Game statistics and performance tracking.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch to your fork.
5. Submit a Pull Request.

---

## 👩‍💻 Author

**Yogita Sawant**

- GitHub: [yogita-create](https://github.com/yogita-create)
- LinkedIn: [Yogita Sawant](https://www.linkedin.com/in/yogita-sawant-webdev/)

---

<p align="center">
  ⭐ If you find this project interesting, consider giving it a star!
</p>

<p align="center">
  Built with ❤️ using React, Vite, and Node.js.
</p>
