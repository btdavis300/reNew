import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./features/NavBar";
import HomeContainer from "./features/HomeContainer";

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/testing">
              <h1 className="text-3xl font-bold underline">Test Route</h1>
            </Route>
            <Route exact path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;