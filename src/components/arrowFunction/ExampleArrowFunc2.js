import React from "react";

const ExampleProps2 = () => {
  const greeting = "Exemple 2 - Hello Function Component - Arrow function !";

  return (
    <div>
      <h2>3-1. React arrow function component</h2>
      <hr />
      <Headline value={greeting} />
    </div>
  );
};

const Headline = ({ value }) => <h3>{value}</h3>;

export default ExampleProps2;
