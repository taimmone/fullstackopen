import React from 'react';

const Statistics = ({ stats }) => {
  const [good, neutral, bad] = stats;
  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <>
        No feedback given
      </>
    );
  }

  const average = (good - bad) / all;
  const positive = good / all;

  return (
    <>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {all}<br />
      average {average}<br />
      positive {positive} %
    </>
  );
};

export default Statistics;
