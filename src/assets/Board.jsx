import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaStop,
  FaUndo,
  FaRedo,
  FaLightbulb,
  FaGamepad,
} from "react-icons/fa";
import "./Board.css";

const IMAGES = Array.from({ length: 15 }, (_, i) => `/src/assets/img${i + 1}.jpg`);
[
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img2.png",
  "/assets/img5.jpg",
  "/assets/img6.jpg",
  "/assets/img7.jpg",
  "/assets/img8.jpg",
  "/assets/img9.jpg",
  "/assets/img10.jpg",
  "/assets/img11.jpg",
  "/assets/img12.jpg",
  "/assets/img13.jpg",
  "/assets/img14.jpg",
  "/assets/img3.jpg",
  "/assets/img7.jpg",
]


const Board = () => {
  const [size, setSize] = useState(3);
  const [tiles, setTiles] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [level, setLevel] = useState("easy");
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [hintTileIndex, setHintTileIndex] = useState(null);

  useEffect(() => {
    if (!isActive || isWin || isLose) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setIsActive(false);
          setIsLose(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, isWin, isLose]);

  useEffect(() => {
    resetGame(size);
  }, [size]);

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const resetGame = (n) => {
    const total = n * n;
    const arr = Array.from({ length: total - 1 }, (_, i) => i + 1);
    arr.push(null);
    const shuffled = shuffleArray(arr);
    setTiles(shuffled);
    setEmptyIndex(shuffled.indexOf(null));
    setMoves(0);
    setIsActive(false);
    setIsWin(false);
    setIsLose(false);
    setUndoStack([]);
    setRedoStack([]);
    setHintTileIndex(null);

    // Rotate through 15 images
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    setCurrentImage(IMAGES[randomIndex]);

    if (level === "easy") setTimeLeft(120);
    else if (level === "medium") setTimeLeft(240);
    else if (level === "hard") setTimeLeft(360);
  };

  const canMove = (index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyIndex / size);
    const emptyCol = emptyIndex % size;
    return (
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)
    );
  };

  const moveTile = (index) => {
    if (!canMove(index) || isWin || isLose) return;
    if (!isActive) setIsActive(true);

    const newTiles = [...tiles];
    [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];

    setUndoStack([...undoStack, tiles]);
    setRedoStack([]);
    setTiles(newTiles);
    setEmptyIndex(index);
    setMoves((m) => m + 1);
    setHintTileIndex(null);

    if (checkWin(newTiles)) {
      setIsActive(false);
      setIsWin(true);
    }
  };

  const checkWin = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== i + 1) return false;
    }
    return true;
  };

  const undo = () => {
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    setRedoStack([...redoStack, tiles]);
    setTiles(prev);
    setEmptyIndex(prev.indexOf(null));
    setUndoStack(undoStack.slice(0, -1));
    setHintTileIndex(null);
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack([...undoStack, tiles]);
    setTiles(next);
    setEmptyIndex(next.indexOf(null));
    setRedoStack(redoStack.slice(0, -1));
    setHintTileIndex(null);
  };

  const handleLevelChange = (lvl) => {
    setLevel(lvl);
    if (lvl === "easy") setSize(3);
    else if (lvl === "medium") setSize(4);
    else if (lvl === "hard") setSize(5);
    setShowLevelMenu(false);
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  const showHint = () => {
    if (isWin || isLose) return;
    const wrongIndex = tiles.findIndex((val, idx) => val !== null && val !== idx + 1);
    if (wrongIndex === -1) return;
    setHintTileIndex(wrongIndex);
    setTimeout(() => setHintTileIndex(null), 2000);
  };

  return (
    <div className="puzzle-container">
      <div className="game-area">
        <h1 className="title">🧩 Image Jigsaw Puzzle</h1>

        <div className="stats-controls">
          <div className="stats">
            <span>⏱ {formatTime(timeLeft)}</span>
            <span>🎯 {moves}</span>
          </div>

          <div className="controls">
            <div className="dropdown">
              <button
                className="icon-btn"
                onClick={() => setShowLevelMenu(!showLevelMenu)}
                title="Level"
              >
                <FaGamepad />
              </button>
              {showLevelMenu && (
                <div className="submenu">
                  <button onClick={() => handleLevelChange("easy")}>Easy</button>
                  <button onClick={() => handleLevelChange("medium")}>Medium</button>
                  <button onClick={() => handleLevelChange("hard")}>Hard</button>
                </div>
              )}
            </div>

            <button className="icon-btn" onClick={() => resetGame(size)} title="Restart">
              <FaPlay />
            </button>
            <button className="icon-btn" onClick={() => setIsActive(false)} title="Pause">
              <FaStop />
            </button>
            <button className="icon-btn" onClick={undo} title="Undo">
              <FaUndo />
            </button>
            <button className="icon-btn" onClick={redo} title="Redo">
              <FaRedo />
            </button>
            <button className="icon-btn" onClick={showHint} title="Hint">
              <FaLightbulb />
            </button>
          </div>
        </div>

        <div
          className="board"
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gridTemplateRows: `repeat(${size}, 1fr)`,
          }}
        >
          {tiles.map((val, i) => (
            <div
              key={i}
              className={`tile ${val === null ? "empty" : ""} ${
                hintTileIndex === i ? "hint" : ""
              }`}
              onClick={() => moveTile(i)}
              style={
                val
                  ? {
                      backgroundImage: `url(${currentImage})`,
                      backgroundSize: `${size * 100}% ${size * 100}%`,
                      backgroundPosition: `${
                        ((val - 1) % size) * (100 / (size - 1))
                      }% ${Math.floor((val - 1) / size) * (100 / (size - 1))}%`,
                    }
                  : {}
              }
            ></div>
          ))}
        </div>

        {isWin && <div className="message win">🎉 You Win! 🎉</div>}
        {isLose && <div className="message lose">❌ Time’s Up! ❌</div>}
      </div>
    </div>
  );
};

export default Board;
