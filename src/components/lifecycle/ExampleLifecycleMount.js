import React, { useState, useEffect } from "react";

const ExampleLifecycleMount = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  useEffect(() => setCount((currentCount) => currentCount + 1), []);

  return (
    <div>
      <h2>7-1. React function component: lifecycle</h2>
      <hr />
      <h3>Exemple de comptage : {count}</h3>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default ExampleLifecycleMount;
