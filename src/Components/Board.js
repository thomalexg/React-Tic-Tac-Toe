import React from 'react';
import Square from './Square';

export default function Board({ onClick, squares }) {
  const style = {
    border: '4px solid black',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    display: 'grid',
  };
  return (
    <div style={style}>
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
}
