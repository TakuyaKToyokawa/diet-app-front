import './App.scss';
import Main from './pages/index';
import FoodSearchPage from './pages/FoodSearchPage';
import FoodSearchInfo from './pages/FoodSearchInfo';
import SearchBar from './components/SearchBar';
import MacronutrientsInfo from './components/MacronutrientsInfo';

function App() {
  return (
    <div className="App">
      <FoodSearchPage />
    </div>
  );
}

export default App;
