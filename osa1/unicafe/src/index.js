import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div className="feedback">
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <div className="statistics">
        <h1>statistics</h1>
        <Statistics stats={[good, neutral, bad]} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
