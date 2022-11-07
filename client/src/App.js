import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./features/navigation/NavBar";
import HomeContainer from "./features/home-page/HomeContainer";
import TopicContainer from "./features/topics/TopicContainer";
import Article from "./features/topics/Article";
import SearchContainer from "./features/search-results/SearchContainer";

function App() {
  const articles = useSelector(state => state.newsTopic.entities)
  const showArticle = useSelector(state => state.showArticle.set)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/topic">
              {!showArticle ?
                (articles.length > 0 && <TopicContainer />)
                :
                <Article />
              }
            </Route>
            <Route exact path="/results">
              <SearchContainer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;