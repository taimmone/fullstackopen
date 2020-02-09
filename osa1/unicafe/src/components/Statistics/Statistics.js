import React from 'react';
import Statistic from './Statistic';

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
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="bad" value={bad} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive + '%'} />
      </tbody>
    </table>
  );
};

export default Statistics;
