import { useState } from "react";
import ResetButton from "./ResetButton";
import IncrementButton from "./IncrementButton";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);


  function increment(IncrementValue) {
    setCount(prevCount => prevCount + IncrementValue);
    setHistory([...history, count+IncrementValue]);
  }

  function reset(){
    setCount(prevCount => prevCount * 0);
    setHistory([...history, 0]);
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <IncrementButton onIncrement={increment} />
      <ResetButton reset={reset} />
      <h2>Histórico:</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        </ul>
    </div>
  );
}
