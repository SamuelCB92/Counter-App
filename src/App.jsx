import { useState } from "react";
import ResetButton from "./ResetButton";
import IncrementButton from "./IncrementButton";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);


  function increment(IncrementValue) {
    setCount(prevCount => {
      const newCount = prevCount + IncrementValue;
      setHistory(prevHistory => [...prevHistory, newCount]);
      return newCount;
    });
  }
  
  function reset() {
    setCount(() => {
      const newCount = 0;
      setHistory(prevHistory => [...prevHistory, newCount]);
      return newCount;
    });
  }
  
  

  return (
    <div className="app-container">
      <h1>Contador: {count}</h1>
      <div className="buttons-container">
  <IncrementButton onIncrement={increment} />
  <ResetButton reset={reset} />
</div>

      <h2>Histórico:</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        </ul>
    </div>
  );
}
