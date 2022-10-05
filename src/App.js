import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1)
  }

  function count5up() {
    setCount(count + 5);
  }

  function count10up() {
    setCount(count + 10)
  }

  function subtractCount() {
    setCount(count - 1)
  }
  
  function count5down() {
    setCount(count - 5);
  }

  function count10down() {
    setCount(count - 10);
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Counter </h1>
      <hr/>
      <button onClick={addCount}>+</button>
      <button onClick={count5up}>++</button>
      <button onClick={count10up}>+++</button>
      <h2>{count}</h2>
      <button onClick={subtractCount}>-</button>
      <button onClick={count5down}>--</button>
      <button onClick={count10down}>---</button>
      <hr/>
      <button onClick={resetCount}>Reset</button>
      <hr/>
    </div>
  );
}

export default App;
