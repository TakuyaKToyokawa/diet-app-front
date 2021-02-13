import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import FoodInfo from "../components/FoodInfo";
import List from "../components/List";


const FoodSearch = () => {
  const [expanded, setExpanded] = useState("hidden");
  const [categories, setCategories] = useState([]);
  const [carbs, setCarbs] = useState();
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [fat, setFat] = useState();
  const [name, setName] = useState();
  const [foods, setFoods] = useState([]);

  //Displays onclick for FoodInfo Component
  const FoodInfoVisibility = () => {
    if (expanded === "hidden") {
      setExpanded("visible");
    } else {
      setExpanded("hidden");
    }
  };

  //Get foods from heroku database
  const GetFoods = async () => {
    let resp = await axios.get(
      "https://diet-app-backend.herokuapp.com/api/foods"
    );
    setFoods(resp.data.foods);
    console.log(resp.data.foods);
  };

  //Get Categories for filter purposes during mapping
  const GetCategories = () => {
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      let category = foods[i].category;
      if (!result.includes(category)) {
        result.push(category);
      }
    }
    setCategories(result);
  };

  //Sort by calories function
  const SortCals = () => {
    setFoods(foods.sort(sortByCalories));
    console.log(foods);
  };

  function sortByCalories(a, b) {
    if (a.calories > b.calories) {
      console.log(a.calories, b.calories);
      return 1;
    }
    if (a.calories < b.calories) {
      console.log(a.calories, b.calories);
      return -1;
    } else {
      console.log(a.calories, b.calories);
      return 0;
    }
  }

  // Sort by Alphabetical order
  function sortByName(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }

  const SortName = () => {
    setFoods(foods.sort(sortByName));
  };

  //Searchbar Function for filters
  const updateInput = async (input) => {
    setFoods(
      foods.filter((o) => {
        return o.foodName.toLowerCase().includes(input.toLowerCase());
      })
    );
    console.log(foods);
    if (input === "") {
      GetFoods();
    }
  };

  useEffect(() => {
    GetCategories();
    GetFoods();
  }, []);

  return (
    <div className="main">
      <button onClick={SortCals}>Sort by Cals</button>
      <button onClick={SortName}>Sort by Name</button>
      <FoodInfo
        Name={name}
        CaloriesNumber={calories}
        protein={protein}
        carbs={carbs}
        fat={fat}
        visibility={expanded}
        onClose={FoodInfoVisibility}
      ></FoodInfo>
      <Header>
        <div className="headerCenter">
          <h2 className="title">Breakfast</h2>
        </div>
      </Header>
      <div className="search">
        <SearchBar
          onChange={(e) => {
            updateInput(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="filterIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </div>
      <div className="dropdown">
        <div className="ddmenu">
          <div className="food">
            {categories.map((o, i) => {
              let currentCategory = o;
              return (
                <>
                  <Dropdown key={i} category={o} />
                  {foods.map((o) => {
                    if (o.category === currentCategory) {
                      return (
                        <List
                          key={i}
                          text={o.foodName}
                          number={o.calories}
                          onClick={() => {
                            setExpanded("visible");
                            setCarbs(o.carbs);
                            setProtein(o.protein);
                            setCalories(o.calories);
                            setFat(o.fat);
                            setName(o.foodName);
                          }}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                </>
              );
            })}
            {/* {categories.map((o, i) => {
              let currentCategory = o;
              return <Dropdown key={i} category={currentCategory} />;
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;
