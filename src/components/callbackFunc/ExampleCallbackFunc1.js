import React, { useState } from "react";

const ExampleCallbackFunc1 = () => {
  const [greeting, setGreeting] = useState(
    "Exemple callback function - 1 - Hello Function Component !"
  );

  const handleChange = (event) => setGreeting(event.target.value);

  return (
    <div>
      <h2>6-1. React function component: callback function</h2>
      <hr />
      <Headline headline={greeting} onChangeHeadline={handleChange} />
    </div>
  );
};

const Headline = ({ headline, onChangeHeadline }) => (
  <div>
    <h3>{headline}</h3>
    <input type="text" value={headline} onChange={onChangeHeadline} />
  </div>
);

export default ExampleCallbackFunc1;
