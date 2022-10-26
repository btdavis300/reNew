import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/testing">
              <h1 className="text-3xl font-bold underline">Test Route</h1>
            </Route>
            <Route exact path="/">
              <h1 className="text-3xl font-bold underline">Page Count: {count}</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;