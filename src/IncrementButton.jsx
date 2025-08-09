export default function IncrementButton({ onIncrement }) {
    return (
      <div className="counter">
        <button  onClick={() => onIncrement(1)}>+1</button>
        <button  onClick={() => onIncrement(5)}>+5</button>
        <button  onClick={() => onIncrement(-5)}>-5</button>
        <button  onClick={() => onIncrement(-1)}>-1</button>
      </div>
    );
  }