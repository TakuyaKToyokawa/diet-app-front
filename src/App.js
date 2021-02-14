import "./App.scss";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Pages
import Homepage from "./pages/index";
import Diary from "./pages/Diary.js";
import FoodSearch from "./pages/FoodSearch";

//Components
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/FoodSearchBreakfast">
            <FoodSearch type="breakfast"></FoodSearch>
          </Route>
          <Route path="/FoodSearchLunch">
            <FoodSearch type="lunch"></FoodSearch>
          </Route>
          <Route path="/FoodSearchDinner">
            <FoodSearch type="dinner"></FoodSearch>
          </Route>
          <Route path="/Diary">
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
