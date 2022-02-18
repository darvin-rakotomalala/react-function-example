import React, { useState } from "react";

const ExampleCallbackFunc2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setTimeout(() => setCount((currentCount) => currentCount + 1), 1000);

  const handleDecrement = () =>
    setTimeout(() => setCount((currentCount) => currentCount - 1), 1000);

  return (
    <div>
      <h2>6-2. React function component: callback function</h2>
      <hr />
      <h3>Exemple de comptage : {count}</h3>
      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

export default ExampleCallbackFunc2;
