import { useState } from "react";
import "./App.css";


function IncrementButton({ onIncrement }) {
  return (
    <div>
      <button className="box" onClick={() => onIncrement(1)}>+1</button>
      <button className="box" onClick={() => onIncrement(5)}>+5</button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);


  function increment(IncrementValue) {
    setCount(prevCount => prevCount + IncrementValue);
    setHistory([...history, count+IncrementValue]);
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <IncrementButton onIncrement={increment} />
      <h2>Histórico:</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        </ul>
    </div>
  );
}
