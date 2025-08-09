export default function ResetButton({ reset }) {
    return (
      <div className="counter">
        <button onClick={reset}>Reset</button>
      </div>
    );
  }