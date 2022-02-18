import React, { useState } from "react";

const ExampleEventHandler = () => {
  return (
    <div>
      <h2>5. React function component: event handler</h2>
      <hr />
      <Headline />
    </div>
  );
};

const Headline = () => {
  const [greeting, setGreeting] = useState("Hello Function Component !");

  const handleChange = (event) => setGreeting(event.target.value);

  return (
    <div>
      <h3>{greeting}</h3>

      <input type="text" value={greeting} onChange={handleChange} />
    </div>
  );
};

export default ExampleEventHandler;
