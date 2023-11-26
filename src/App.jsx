import { useState, React, useEffect } from "react";
import "./App.css";

import {styled, ThemeProvider, keyframes, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Sidebar from "./sidebar";
// import ScoreBoard from "./components/scoreBoard";
 


function App() {
  
  
  
  let totalGridSize = 20;

  
    let initialSnakePosition = [
    { x: totalGridSize / 2, y: totalGridSize / 2 },
    { x: totalGridSize / 2 + 1, y: totalGridSize / 2 },
    { x: totalGridSize / 2 + 2, y: totalGridSize / 2 },
  ];

  const [score, setScore] = useState(0);
  const [food, setFood] = useState({ x: 5, y: 5 });

  const [snake, setSnake] = useState(initialSnakePosition);
  const [direction, setDirection] = useState("LEFT");
  
  const [theme, setTheme] = useState('light')
 
    function ToggleTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  
  
    const light = {
    backgroundColor: '#fff',
      
      
  }
  
  const ThemeButton = {

    width: '300px',
    height: '20px',
    borderRadius: '30%' 
  }
  
  const cellStyle = {
    backgroundColor: '#fff',
    width: '20px',
    height: '20px' 
      } 

  const container = {
    backgroundColor: '#000',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
  
  const scoreStyle = {
    color: '#fff'
 }
 
 
 
 

const dark = {
    backgroundColor: '#2C2C2C'
  }

  const snakeStyle = {

    backgroundColor: 'limegreen',
    color: '#fff'
  }
    
  const board = {
    display: 'grid',
    gridTemplateColumns: 'repeat(20,20px)',
    gridTemplateRows: 'repeat(20,20px)',
    gap: '1px',
    width: 'maxContent'
    }
  
  const snakeHeadStyle = {

    backgroundColor: '#000',
    borderRadius: '30%'
  }
  
  

  
  
  const FoodStyle = {

    animationName: 'food',
    transformationDuration: '5s',
    transformationTimingFunction: 'ease-in-out',
    transformIterationCount: '10',
    backgroundColor: '#B60000',
    borderRadius: '100%',
    border: '2px solid #FFFC1B'
      // animation: ${foodAnimation} 2s linear;
  }
  

  


 
 
  
  
  function renderBoard() {
    let CellArray = [];
    for (let row = 0; row < totalGridSize; row++) {
      for (let col = 0; col < totalGridSize; col++) {
        
     let className = 'cell';           
      
        

          
   
    
    let isSnakeHead = snake[0].x === row && snake[0].y === col;
    let isSnake = snake.some((ele) => ele.x === row && ele.y === col);
    let isFood = food.x === row && food.y === col;
    
  
         
        if (isFood) {
          
          className = className + " food";
             
        }

        if (isSnake) {
          className = className + " snake";
          

        }

        if (isSnakeHead) {
          className = className + " snakeHead";
          
        }
         
        
        let cell = <div  className={className} key={`${row} - ${col}`}></div>;
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
    
   <ThemeProvider theme={theme === 'light' ? dark : light}>
      {/* <button  onClick={ToggleTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button> */}
    
      <Header>
      
      
      </Header>
    
    
      
      <Sidebar/>
      <div className="container">
        <div className="score">
          score : <span>{score}</span>
        </div>
        <div className="board">{renderBoard()}</div>
      </div>
    
      {/* <ScoreBoard/>  */}
    </ThemeProvider>           
    </>
  );
}

export default App;
