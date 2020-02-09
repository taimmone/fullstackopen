import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics/Statistics';
import Button from './components/Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div className="feedback">
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div class="statistics">
        <h1>statistics</h1>
        <Statistics stats={[good, neutral, bad]} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
