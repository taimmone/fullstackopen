import React from 'react';

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <p>{part1.title} {part1.exercises}</p>
      <p>{part2.title} {part2.exercises}</p>
      <p>{part3.title} {part3.exercises}</p>
    </>
  );
};

export default Content;
