import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({ parts }) => (
  <>
    {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}

    <strong>
      total of <Total parts={parts} /> exercises
      </strong>
  </>
);

export default Content;
