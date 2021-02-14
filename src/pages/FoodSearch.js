import React, { useState, useEffect, Callback } from "react";
import axios from "axios";
import Header from "../components/Header";
import DropdownBox from "../components/DropdownBox";
import SearchBar from "../components/SearchBar";
import FoodInfo from "../components/FoodInfo";
import FilterInfo from "../components/FilterInfo";
import Confirmation from "../components/Confirmation";
import List from "../components/List";

const FoodSearch = ({ type }) => {
  const [expandedFilter, setExpandedFilter] = useState("hidden");
  const [expanded, setExpanded] = useState("hidden");
  const [confirmation, setConfirmation] = useState("hidden");
  const [carbs, setCarbs] = useState();
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [category, setCategory] = useState();
  const [id, setId] = useState();
  const [fat, setFat] = useState();
  const [name, setName] = useState();
  const [meal, setMeal] = useState();
  const [foods, setFoods] = useState([]);
  let categoryArray = [];
  let mealType = type.charAt(0).toUpperCase() + type.slice(1);

  //Displays onclick for FoodInfo Component
  const FoodInfoVisibility = () => {
    if (expanded === "hidden") {
      setExpanded("visible");
    } else {
      setExpanded("hidden");
      setConfirmation("hidden");
    }
  };

  const FilterInfoVisibility = () => {
    if (expandedFilter === "hidden") {
      setExpandedFilter("visible");
    } else {
      setExpandedFilter("hidden");
    }
  };

  //Get foods from heroku database
  const GetFoods = async () => {
    let resp = await axios.get(
      "https://diet-app-backend.herokuapp.com/api/foods/"
    );
    setFoods(resp.data.foods);
    console.log(resp.data.foods);
  };

  //Post selected food
  const AddtoMeals = async () => {
    console.log(meal.type, carbs, protein, calories, fat, name, category, id);
    var resp = await axios
      .post("https://diet-app-backend.herokuapp.com/api/meals/", {
        category: category,
        meal: meal.type,
        foodName: name,
        calories: calories,
        protein: protein,
        carbs: carbs,
        fat: fat,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    setConfirmation("visible");
  };

  //Sort by calories function
  const SortCals = () => {
    setFoods(foods.sort(sortByCalories));
    console.log(foods);
  };

  const SortName = () => {
    setFoods(foods.sort(sortByName));
    console.log(foods);
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
    GetFoods();
    console.log(mealType);
  }, []);

  return (
    <div className="main">
      <FoodInfo
        Name={name}
        CaloriesNumber={calories}
        protein={protein}
        carbs={carbs}
        fat={fat}
        visibility={expanded}
        onClose={() => {
          FoodInfoVisibility();
        }}
        onClick={() => {
          AddtoMeals();
        }}
      ></FoodInfo>
      <FilterInfo
        SortCals={SortCals}
        SortName={SortName}
        visibility={expandedFilter}
        onClose={() => {
          FilterInfoVisibility();
        }}
      ></FilterInfo>
      <Header>
        <div className="headerCenter">
          <h2 className="title">{mealType}</h2>
        </div>
      </Header>
      <div className="search">
        <SearchBar
          onChange={(e) => {
            updateInput(e.target.value);
          }}
        />
        <svg
          onClick={() => {
            FilterInfoVisibility();
          }}
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
            {foods.map((o, i) => {
              let currentCategory = o.category;
              if (
                o.category === currentCategory &&
                !categoryArray.includes(currentCategory)
              ) {
                return (
                  <>
                    <DropdownBox key={i} text={o.category} />
                    {foods.map((o, i) => {
                      if (!categoryArray.includes(currentCategory)) {
                        categoryArray.push(currentCategory);
                      }
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
                              setCategory(o.category);
                              setMeal({ type });
                              setId(o.id);
                              console.log(
                                { type },
                                carbs,
                                protein,
                                calories,
                                fat,
                                name,
                                category,
                                id
                              );
                            }}
                          />
                        );
                      }
                    })}
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="confirmation">
        <Confirmation visibility={confirmation}></Confirmation>
      </div>
    </div>
  );
};

export default FoodSearch;

//Sort Functions
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

function sortByName(a, b) {
  if (a.foodName > b.foodName) {
    return 1;
  }
  if (a.foodName < b.foodName) {
    return -1;
  } else {
    return 0;
  }
}
