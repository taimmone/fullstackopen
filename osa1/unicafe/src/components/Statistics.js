import React from 'react';

const Statistics = ({ stats }) => {
  const [good, neutral, bad] = stats;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;

  return (
    <>
      <div>
        <h1>statistics</h1>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {all}<br />
        average {average}<br />
        positive {positive} %
      </div>
    </>
  );
};

export default Statistics;
