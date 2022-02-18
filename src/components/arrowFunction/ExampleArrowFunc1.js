import React from "react";

const ExampleProps1 = () => {
  const greeting = "Exemple 1 - Hello Function Component - Arrow function !";

  return (
    <div>
      <h2>3-1. React arrow function component</h2>
      <hr />
      <Headline value={greeting} />
    </div>
  );
};

const Headline = ({ value }) => {
  return <h3>{value}</h3>;
};

export default ExampleProps1;
