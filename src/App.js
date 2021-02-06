import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/index";
import Footer from "./components/Footer";
import Diary from "./pages/diary";
import FoodSearchPage from "./pages/FoodSearchPage";

  // test; create; food
  // useEffect(()=>{
  //   (async ()=>{
  //       const foods = await getFoodList("");
  //       console.log(foods[0]);
  //     })()
  // }, [])

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/FoodSearchPage">
            <FoodSearchPage></FoodSearchPage>
          </Route>
          <Route path="/diary">
            <Diary></Diary>
          </Route>
          <Route path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
