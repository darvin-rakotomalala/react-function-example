import React, { useState } from "react";

const ExamplePureComponent = () => {
  const [greeting, setGreeting] = useState("Hello React!");
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  const handleChange = (event) => setGreeting(event.target.value);

  return (
    <div>
      <h2>8. Pure react function component</h2>
      <hr />
      <h3>{greeting}</h3>
      <input type="text" onChange={handleChange} />

      <Count count={count} />

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

const Count = ({ count }) => {
  console.log("Does it (re)render?");
  return <h3>Exemple de comptage : {count}</h3>;
};

export default ExamplePureComponent;
