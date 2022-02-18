import React, { useState } from "react";

const ExampleState = () => {
  return (
    <div>
      <h2>4. React function component: state</h2>
      <hr />
      <Headline />
    </div>
  );
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    "Exemple STATE - Hello Function Component !"
  );
  return (
    <div>
      <h3>{greeting}</h3>

      <input
        type="text"
        value={greeting}
        onChange={(event) => setGreeting(event.target.value)}
      />
    </div>
  );
};

export default ExampleState;
