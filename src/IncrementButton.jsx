export default function IncrementButton({ onIncrement }) {
    return (
      <div>
        <button className="box" onClick={() => onIncrement(1)}>+1</button>
        <button className="box" onClick={() => onIncrement(5)}>+5</button>
        <button className="box" onClick={() => onIncrement(-5)}>-5</button>
        <button className="box" onClick={() => onIncrement(-1)}>-1</button>
      </div>
    );
  }