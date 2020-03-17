import React from 'react';

const Total = ({ parts }) => (
  <>
    {parts.reduce((acc, part) => (acc + part.exercises), 0)}
  </>
);

export default Total;
