import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/index";
import Food from "./pages/food";
import Footer from "./components/Footer";
import Homepage from './pages/homepage';
import Dairy from "./pages/Dairy";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/food">
             <Dairy></Dairy>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
