import React from "react";

function ExampleProps1() {
  const greeting = "Example 1 - Hello Function Component - Props !";
  return (
    <div>
      <h2>2-1. React function component: props</h2>
      <hr />
      <p>
        Dans React, les props sont utilisés pour transmettre des informations
        d'un composant à un autre.
      </p>
      <Headline value={greeting} />
    </div>
  );
}

function Headline(props) {
  return <h3>{props.value}</h3>;
}

export default ExampleProps1;
