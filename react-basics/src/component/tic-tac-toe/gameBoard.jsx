

import React, { useState } from 'react';
const GameBoard = ({ onSelectSquare, board }) => {
    return (<>
        <ol id='game-board'>
            {board.map((row, rowIndex) => (
                <li key={rowIndex} className='outer-wrap'>
                    <ol className='inner-wrap'>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))
            }
        </ol>
    </>);
}

export default GameBoard;