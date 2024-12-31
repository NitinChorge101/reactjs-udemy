import React, { useState } from 'react';
const Player = ({ name, symbol, isActive, onChangeName }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [userName, setUserName] = useState(name)

    const handleChange = (e) => {
        const value = e.target.value;
        setUserName(value)
    }

    const handleClick = () => {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing) {
            onChangeName(symbol, userName);
        }
    }
    let playerName = <span className='player-name'>{userName}</span>;

    if (isEditing) {
        playerName = <input type='text' value={userName} onChange={handleChange} />;
    }
    return (
        <>
            <li className={isActive ? "active" : null}>
                <span className='player'>
                    {playerName}
                    <span className='player-symbol'>{symbol}</span>
                </span>
                <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        </>
    );
}

export default Player;