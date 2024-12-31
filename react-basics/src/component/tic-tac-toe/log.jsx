import React from 'react';
const Log = ({ logDetail }) => {

    return (
        <>
            <ol id="log">
                {logDetail.map((item, i) => (
                    <li key={i}>Player:{item.player} || row : {item.square.row + 1}, col : {item.square.col + 1}</li>
                ))}
            </ol>
        </>
    );
}

export default Log;