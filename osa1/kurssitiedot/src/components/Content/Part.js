import React from 'react';

const Part = ({ part }) => {
  return (
    <>
      <p>{part.title} {part.exercises}</p>
    </>
  );
};

export default Part;
