import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/pages/Home";

import ExampleFunction1 from "./components/example/ExampleFunction1";
import ExampleFunction2 from "./components/example/ExampleFunction2";

import ExampleProps1 from "./components/props/ExampleProps1";
import ExampleProps2 from "./components/props/ExampleProps2";

import ExampleArrowFunc1 from "./components/arrowFunction/ExampleArrowFunc1";
import ExampleArrowFunc2 from "./components/arrowFunction/ExampleArrowFunc2";

import Footer from "./components/pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exampleFunc-1">
                  1-1. React function component example
                </Link>
              </li>
              <li>
                <Link to="/exampleFunc-2">
                  1-2. React function component example
                </Link>
              </li>
              <li>
                <Link to="/exampleProps-1">
                  2-1. React function component: props
                </Link>
              </li>
              <li>
                <Link to="/exampleProps-2">
                  2-2. React function component: props
                </Link>
              </li>
              <li>
                <Link to="/exampleArrowFunc-1">
                  3-1. React arrow function component
                </Link>
              </li>
              <li>
                <Link to="/exampleArrowFunc-2">
                  3-2. React arrow function component
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/exampleFunc-1" component={ExampleFunction1} />
            <Route path="/exampleFunc-2" component={ExampleFunction2} />

            <Route path="/exampleProps-1" component={ExampleProps1} />
            <Route path="/exampleProps-2" component={ExampleProps2} />

            <Route path="/exampleArrowFunc-1" component={ExampleArrowFunc1} />
            <Route path="/exampleArrowFunc-2" component={ExampleArrowFunc2} />

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
