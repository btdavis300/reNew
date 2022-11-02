import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./features/NavBar";
import HomeContainer from "./features/home-page/HomeContainer";
import TopicContainer from "./features/topics/TopicContainer";

function App() {
  const articles = useSelector(state => state.newsTopic.entities)
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path=''>
              { articles.length > 0 && <TopicContainer /> } 
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;