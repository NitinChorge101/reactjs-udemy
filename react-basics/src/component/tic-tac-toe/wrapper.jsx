import React, { useState } from 'react';

import "./gameStyle.css";
import Player from './player';
import GameBoard from './gameBoard';
import Log from './log';

import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from './gameOver';


function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const Wrapper = () => {

    const [players, setPlayers] = useState({
        X: "Player-1",
        O: "Player-2"
    })
    const [gameTurns, setGameTurns] = useState([]);
    // const [activePlayer, setActivePlayer] = useState('X');
    // const [hasWinner, setHasWinner] = useState(false);

    let gameBoard = [...initialGameBoard.map(array => [...array])]; //=> Deep copy 

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;

    }

    const activePlayer = deriveActivePlayer(gameTurns)

    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurns(prevTurns => {

            const activePlayer = deriveActivePlayer(prevTurns)

            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer },
            ...prevTurns];

            return updatedTurns;
        });
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    const handleRestart = () => {
        setGameTurns([])
    }

    const handlePlayerNameChange = (symbol, newName) => {

        setPlayers(prevPlayers => {
            return { ...prevPlayers, [symbol]: newName }
        }
        )
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player
                        name="player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        name="player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart} />}

                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
                <Log logDetail={gameTurns} />
            </div>
        </main>
    );
}

export default Wrapper;