import { useState, React, useEffect } from "react";
import "./App.css";
import { TfiTwitterAlt } from "react-icons/tfi";
import {styled, ThemeProvider } from "styled-components";
 


function App() {
  let totalGridSize = 20;

  const AppleFood = styled.span`
  background-color: green;
  color: green;
  `
  const theme = {
    bg: "#fff"
  }

  let initialSnakePosition = [
    { x: totalGridSize / 2, y: totalGridSize / 2 },
    { x: totalGridSize / 2 + 1, y: totalGridSize / 2 },
    { x: totalGridSize / 2 + 2, y: totalGridSize / 2 },
  ];

  const [score, setScore] = useState(0);
  const [food, setFood] = useState({ x: 5, y: 5 });

  const [snake, setSnake] = useState(initialSnakePosition);
  const [direction, setDirection] = useState("LEFT");

  function renderBoard() {
    let CellArray = [];
    for (let row = 0; row < totalGridSize; row++) {
      for (let col = 0; col < totalGridSize; col++) {
        let className = "cell";

        let isFood = food.x === row && food.y === col;

        let isSnake = snake.some((ele) => ele.x === row && ele.y === col);

        let isSnakeHead = snake[0].x === row && snake[0].y === col;


        if (isFood) {
          
          
            // className =  <AppleFood>
              
            //   {className + " food"} 
            // </AppleFood>
   
            className = className + " food";
          

          
        }

        if (isSnake) {
          className = className + " snake";
        }

        if (isSnakeHead) {
          className = className + " snakeHead";
        }

        let cell = <div className={className} key={`${row} - ${col}`}></div>;
        CellArray.push(cell);
      }
    }

    return CellArray;
  }

  function renderFood() {
    let xPosition = Math.floor(Math.random() * totalGridSize);
    let yPosition = Math.floor(Math.random() * totalGridSize);

    setFood({ x: xPosition, y: yPosition });
  }

  function gameOver() {
    setSnake(initialSnakePosition);
    setScore(0);
  }

  function updateGame() {
    if (
      snake[0].x < 0 ||
      snake[0].x > 20 ||
      snake[0].y < 0 ||
      snake[0].y > 20
    ) {
      gameOver();
      return;
    }

    // Checking If snake bit itself
    const isBit = snake
      .slice(1)
      .some((ele) => ele.x === snake[0].x && ele.y === snake[0].y);
    if (isBit) {
      gameOver();
      return;
    }

    let newSnake = [...snake];

    switch (direction) {
      case "UP":
        newSnake.unshift({ x: newSnake[0].x - 1, y: newSnake[0].y });
        break;

      case "DOWN":
        newSnake.unshift({ x: newSnake[0].x + 1, y: newSnake[0].y });
        break;

      case "RIGHT":
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y + 1 });
        break;

      case "LEFT":
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y - 1 });
        break;
    }

    let isAteFood = newSnake[0].x === food.x && newSnake[0].y === food.y;

    if (isAteFood) {
      setScore((prev) => prev + 1);
      renderFood();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  function updateDirection(e) {
    let code = e.code;

    switch (code) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;

      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;

      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;

      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
    }
  }

  useEffect(() => {
    let interval = setInterval(updateGame, 150);
    return () => clearInterval(interval, updateGame);
  });

  useEffect(() => {
    document.addEventListener("keydown", updateDirection);
    return () => clearInterval("keydown", updateDirection);
  });

  return (
    <>
    <ThemeProvider theme={theme}>

      <div className="container">
        <div className="score">
          score : <span>{score}</span>
        </div>
        <div className="board">{renderBoard()}</div>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
