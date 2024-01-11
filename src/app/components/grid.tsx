import React from 'react';
import GridCell from './gridCell';

const Grid = () => {
  return (
    <div className="grid grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <GridCell key={index} />
      ))}
    </div>
  );
};

export default Grid;