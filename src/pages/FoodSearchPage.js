import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import FoodInfo from "../components/FoodInfo";
import List from "../components/List";
import { foods } from "../database/sampleFoods";
import { meals } from "database/sampleMeals";

const FoodSearchPage = () => {
  const [expanded, setExpanded] = useState("hidden");
  const [categories, setCategories] = useState([]);
  const [carbs, setCarbs] = useState();
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [fat, setFat] = useState();
  const [name, setName] = useState();
  const [foodsarr, setFoodsarr] = useState([]);

  //Displays onclick for FoodInfo Component
  const FoodInfoVisibility = () => {
    if (expanded == "hidden") {
      setExpanded("visible");
    } else {
      setExpanded("hidden");
    }
  };

  //Get Categories for filter purposes during mapping
  function GetCategories(foods) {
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      let category = foods[i].category;
      if (!result.includes(category)) {
        result.push(category);
      }
    }
    setCategories(result);
  }

  // //Filter
  // const FilterPage = (text) => {
  //   setName(
  //     allname.filter((o)=>{
  //       return o.name.includes(text);
  //     })
  //   )
  // }


  // Sort by caloreis


  const SortCals = () => {
    setFoodsarr(
      foodsarr.sort(sortByCalories)
    )
    console.log(foodsarr)
  }

  // Sort by Alphabetical order
  function sortByName(a,b){
    if(a.name > b.name){
      return 1
    }
    if(a.name < b.name){
      return -1;
    } else {
      return 0;
    }
  }

  const SortName = () => {
    setFoodsarr(
      foodsarr.sort(sortByName)
    )
  }

  const getFoods = async () => {
    setFoodsarr(foods)
    console.log(foodsarr)
  }

  const updateInput = async (input) => {
    setFoodsarr(foodsarr.filter((o) => {
      return o.name.toLowerCase().includes(input.toLowerCase())
     }))
     console.log(foodsarr)
     if (input == ""){
       setFoodsarr(foods)
     }
  }

  useEffect(() => {
    GetCategories();
    getFoods();
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
        <div class="headerCenter">
          <h2 className="title">Breakfast</h2>
        </div>
      </Header>
      <div className="search">
        <SearchBar onChange={(e) => {
          updateInput(e.target.value)
        }}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="filterIcon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </div>
      <div className="dropdown">
        <div className="ddmenu">
          <div className="food">
            {/* mapping for all the categories and lists */}
            {categories.map((o) => {
              let currentCategory = o;
              return (
                <>
                  <Dropdown category={o} />
                  {foodsarr.map((o) => {
                    if (o.category === currentCategory) {
                      return (
                        <List
                          text={o.name}
                          number={o.calories}
                          onClick={() => {
                            setExpanded("visible");
                            setCarbs(o.carbs);
                            setProtein(o.protein);
                            setCalories(o.calories);
                            setFat(o.fat);
                            setName(o.name);
                          }}
                        />
                      );
                    }
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSearchPage;

  function sortByCalories(a, b) {
    if (a.calories > b.calories) {
      console.log(a.calories, b.calories)
      return 1
    }
    if (a.calories < b.calories) {
      console.log(a.calories, b.calories)
      return -1;
    } else {
      console.log(a.calories, b.calories)
      return 0;
    }
    console.log(a.calories, b.calories)
  }
