import React from "react";

function ExampleFunction2() {
  return (
    <div>
      <h2>1-2. React function component example</h2>
      <hr />
      <Headline />
    </div>
  );
}

function Headline() {
  const greeting = "Hello Function Component!";
  return <h3>Example 2 - {greeting}</h3>;
}

export default ExampleFunction2;
