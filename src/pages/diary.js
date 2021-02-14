import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import FoodList from "../components/FoodList";
import List from "../components/FoodList/list";

const Diary = ({ user }) => {
  const [meals, setMeals] = useState([]);
  const [mealsLength, setMealsLength] = useState();
  const [breakfastTotal, setBreakfastTotal] = useState();
  const [lunchTotal, setLunchTotal] = useState();
  const [dinnerTotal, setDinnerTotal] = useState();

  //Get foods from heroku database
  const GetMeals = async () => {
    let resp = await axios.get(
      "https://diet-app-backend.herokuapp.com/api/meals"
    );
    setMeals(resp.data.meals);
    setMealsLength(meals.length);
  };

  function AddMacronutrients(mealType) {
    let totalCalories = 0;
    for (const meal of meals) {
      if (meal.meal === mealType) {
        let calories = meal.calories;
        totalCalories += calories;
      } else {
        return null;
      }
    }
    return totalCalories;
  }

  useEffect(() => {
    GetMeals();
    AddMacronutrients(meals);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main">
      <Header>
        <div className="headerWelcome">
          <p className="Text"> Welcome back </p>
          <h1 className="Namediv"> {user} </h1>
        </div>
        <div className="center">
          <h1 className="Currentdaytitle">
            <img src="arrow.png" alt="arrowIcon" /> Today
          </h1>
        </div>
      </Header>
      <h2 className="heading">Breakfast</h2>
      <FoodList
        link="/FoodSearchBreakfast"
        total={AddMacronutrients("breakfast")}
      >
         {meals.map((o, i) => {
          if (o.meal === "breakfast") {
            return (
              <List
                key={i}
                foodName={o.foodName}
                foodCalories={o.calories}
                onRemove={async () => {
                  await axios.delete(
                    "https://diet-app-backend.herokuapp.com/api/meals/" + o.id,
                    {
                      data: {
                        id: i,
                      },
                    }
                  );
                  GetMeals();
                }}
              />
            );
          } else {
            return null;
          }
        })}
      </FoodList>
      <h2 className="heading">Lunch</h2>
      <FoodList link="/FoodSearchLunch" total={AddMacronutrients("lunch")}>
      {meals.map((o, i) => {
          if (o.meal === "lunch") {
            return (
              <List
                key={i}
                foodName={o.foodName}
                foodCalories={o.calories}
                onRemove={async () => {
                  await axios.delete(
                    "https://diet-app-backend.herokuapp.com/api/meals/" + o.id,
                    {
                      data: {
                        id: i,
                      },
                    }
                  );
                  GetMeals();
                }}
              />
            );
          } else {
            return null;
          }
        })}
      </FoodList>
      <h2 className="heading">Dinner</h2>
      <FoodList link="/FoodSearchDinner" total={AddMacronutrients("dinner")}>
      {meals.map((o, i) => {
          if (o.meal === "dinner") {
            return (
              <List
                key={i}
                total={}
              
                foodName={o.foodName}
                foodCalories={o.calories}
                onRemove={async () => {
                  await axios.delete(
                    "https://diet-app-backend.herokuapp.com/api/meals/" + o.id,
                    {
                      data: {
                        id: i,
                      },
                    }
                  );
                  GetMeals();
                }}
              />
            );
          } else {
            return null;
          }
        })}
      </FoodList>
    </div>
  );
};

Diary.defaultProps = {
  user: "Pooneh",
};

export default Diary;
