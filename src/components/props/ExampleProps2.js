import React from "react";

function ExampleProps2() {
  const greeting =
    "Example 2 - En utilisant JavaScript object destructuring - Hello Function Component - Props !";
  return (
    <div>
      <h2>2-2. React function component: props</h2>
      <hr />
      <p>
        Dans React, les props sont utilisés pour transmettre des informations
        d'un composant à un autre.
      </p>
      <Headline value={greeting} />
    </div>
  );
}

// En utilisant JavaScript object destructuring
function Headline({ value }) {
  return <h3>{value}</h3>;
}

export default ExampleProps2;
