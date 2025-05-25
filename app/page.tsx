'use client';
import Image from "next/image";
import Cell from "./components/cell";
import { useEffect, useState } from "react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [winningMessage, setwinningMessage] = useState("");
  
  useEffect(() => {
    winningCombinations.forEach((combination) => {
      const circleWins = combination.every((cell) => cells[cell] === "circle");
      const crossWins = combination.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setwinningMessage("Circle wins!");
      } else if (crossWins) {
        setwinningMessage("Cross wins!");
      }
    })
  }, [cells]);

  useEffect(() => {
    if(cells.every((cell) => cell !== "" && winningMessage === "")){
      setwinningMessage("GameOver!");
    }
  });

  return (
      <main className="container">
        <div className="board">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              cells={cells}
              cell={cell}
              setCells={setCells}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              winningMessage={winningMessage}
            />
          ))}
        </div>
        <div>{winningMessage}</div>
        {!winningMessage && <div>Next player: {currentPlayer}</div>}
        </main>
  );
}
