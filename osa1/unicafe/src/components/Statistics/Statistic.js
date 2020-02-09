import React from 'react';

const Statistic = ({ text, value }) => (
  <div className={text}>
    {text} {value}
  </div>
);

export default Statistic;
