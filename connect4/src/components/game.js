import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router";

function Square({value, onSquareClick, color}) {
    return (
      <button className="square" style={{color: color}} onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(42).fill('O'));
    const [colors, setColors] = useState(Array(42).fill('black'));
    const [turnNumber, setTurn] = useState(0);
  
    function handleClick(i) {
      if (calculateWinner(colors) || colors[i] != 'black') {
        return;
      }
      const nextSquares = squares.slice();
      const nextColors = colors.slice();
      if (xIsNext) {
        for(let j = i; j<42; j+=7)
        {
          if(j>34) //Checks if current itterator is looking at bottom row
          {
            if(nextColors[j] == 'black') // if field on bottom row is null Fill it with X
            {
              nextSquares[j] = 'O';
              nextColors[j] = 'blue';
              
              break; // Exits for loop
            }
            break; //Exits for loop in situation with would cause overflow
          }
          
          if(nextColors[j + 7] != 'black') //Checks to see if next field down exists
          {
            nextSquares[j] = 'O'; //Fills current field if field one down is full.
            nextColors[j] = 'blue';
            break;
          }
        }
      } else {
        for(let j = i; j<42; j+=7)
        {
          if(j>34) //Checks if current itterator is looking at bottom row
          {
            if(nextColors[j] == 'black') // if field on bottom row is null Fill it with X
            {
              nextSquares[j] = 'O';
              nextColors[j] = 'red';
              break; // Exits for loop
            }
            break; //Exits for loop in situation with would cause overflow
          }
          
          if(nextColors[j + 7] != 'black') //Checks to see if next field down exists
          {
            nextSquares[j] = 'O'; //Fills current field if field one down is full.
            nextColors[j] = 'red';
            break;
          }
        }
      }
      setSquares(nextSquares);
      setColors(nextColors);
      setXIsNext(!xIsNext);
      setTurn(turnNumber+1);
    }
  
    const winner = calculateWinner(colors);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      alert(winner +" wins! You won in " + turnNumber + " turns. Please enter your info.");
      window.location.href = 'http://localhost:3000/create';
    } else {
      status = 'Next player: ' + (xIsNext ? 'Blue' : 'Red');
    }
  
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} color={colors[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} color={colors[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} color={colors[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} color={colors[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} color={colors[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} color={colors[5]}onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} color={colors[6]}onSquareClick={() => handleClick(6)} />
        </div>
        <div className="board-row">
          <Square value={squares[7]} color={colors[7]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[8]} color={colors[8]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[9]} color={colors[9]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[10]} color={colors[10]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[11]} color={colors[11]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[12]} color={colors[12]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[13]} color={colors[13]} onSquareClick={() => handleClick(6)} />
        </div>
        <div className="board-row">
          <Square value={squares[14]} color={colors[14]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[15]} color={colors[15]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[16]} color={colors[16]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[17]} color={colors[17]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[18]} color={colors[18]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[19]} color={colors[19]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[20]} color={colors[20]} onSquareClick={() => handleClick(6)} />
        </div>
        <div className="board-row">
          <Square value={squares[21]} color={colors[21]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[22]} color={colors[22]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[23]} color={colors[23]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[24]} color={colors[24]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[25]} color={colors[25]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[26]} color={colors[26]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[27]} color={colors[27]} onSquareClick={() => handleClick(6)} />
        </div>
        <div className="board-row">
          <Square value={squares[28]} color={colors[28]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[29]} color={colors[29]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[30]} color={colors[30]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[31]} color={colors[31]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[32]} color={colors[32]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[33]} color={colors[33]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[34]} color={colors[34]} onSquareClick={() => handleClick(6)} />
        </div>
        <div className="board-row">
          <Square value={squares[35]} color={colors[35]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[36]} color={colors[36]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[37]} color={colors[37]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[38]} color={colors[38]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[39]} color={colors[39]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[40]} color={colors[40]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[41]} color={colors[41]} onSquareClick={() => handleClick(6)} />
        </div>

        <a href="/highscore">Highscores</a>
      </>
    );
  }
  
  function calculateWinner(colors) {
    const lines = [
      [0, 1, 2, 3],
      [0, 7, 14, 21],
      [0, 8, 16, 24],
      [1, 2, 3, 4],
      [1, 8, 15, 22],
      [1, 9, 17, 25],
      [2, 3, 4, 5],
      [2, 9, 16, 23],
      [2, 10, 18, 36],
      [3, 4, 5, 6],
      [3, 10, 17, 24],
      [3, 9, 15, 21],
      [3, 11, 19, 27],
      [4, 10, 16, 22],
      [4, 11, 18, 25],
      [5, 11, 17, 23],
      [5, 12, 19, 26],
      [6, 12, 18, 24],
      [6, 13, 20, 27],
      [7, 8, 9, 10],
      [7, 14, 21, 28],
      [7, 15, 23, 31],
      [8, 9, 10, 11],
      [8, 15, 22, 29],
      [8, 16, 24, 32],
      [9, 10, 11, 12],
      [9, 16, 23, 30],
      [9, 17, 25, 33],
      [10, 11, 12, 13],
      [10, 16, 22, 28],
      [10, 17, 24, 31],
      [10, 18, 26, 34],
      [11, 17, 23, 29],
      [11, 18, 25, 32],
      [12, 18, 24, 30],
      [12, 19, 26, 33],
      [13, 19, 25, 31],
      [13, 20, 27, 34],
      [14, 15, 16, 17],
      [14, 21, 28, 35],
      [14, 22, 30, 38],
      [15, 16, 17, 18],
      [15, 22, 29, 36],
      [15, 23, 31, 39],
      [16, 17, 18, 19],
      [16, 23, 30, 37],
      [16, 24, 32, 40],
      [17, 18, 19, 20],
      [17, 23, 29, 35],
      [17, 24, 31, 38],
      [17, 25, 33, 41],
      [18, 24, 30, 36],
      [18, 25, 32, 39],
      [19, 25, 31, 37],
      [19, 26, 33, 40],
      [20, 26, 32, 38],
      [20, 27, 34, 41],
      [21, 22, 23, 24],
      [22, 23, 24, 25],
      [23, 24, 25, 26],
      [24, 25, 26, 27],
      [28, 29, 30, 31],
      [29, 30, 31, 32],
      [30, 31, 32, 33],
      [31, 32, 33, 34],
      [35, 36, 37, 38],
      [36, 37, 38, 39],
      [37, 38, 39, 40],
      [38, 39, 40, 41],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (colors[a] != 'black' && colors[a] === colors[b] && colors[a] === colors[c] && colors[a] === colors[d]) {
        return colors[a];
      }
    }
    for(let i = 0; i< colors.length; i++)
    {
      if(colors[i]=== 'black')
      {
        break;
      }
      else if(i == 41 )
      {
        return 'Tied';
      }
    }
    return null;
  }