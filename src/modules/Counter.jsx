import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count">{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Press Me
      </button>
    </div>
  );
};

export default Counter;
