import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import FoodList from "../components/FoodList";
import List from "../components/FoodList/list";

const Diary = ({ user }) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  //Get foods from heroku database
  const GetMeals = async () => {
    let resp = await axios.get(
      "https://diet-app-backend.herokuapp.com/api/meals"
    );
    setMeals(resp.data.meals);
    console.log(resp.data.meals);
  };
  // //Get Categories for filter purposes on diffrentiating meal types during mapping
  // function GetCategories() {
  //   let result = [];
  //   for (let i = 0; i < meals.length; i++) {
  //     let category = meals[i].category;
  //     if (!result.includes(category)) {
  //       result.push(category);
  //     }
  //   }
  //   setCategories(result);
  // }

  // useEffect(() => {
  //   GetCategories();
  // }, []);

  useEffect(() => {
    GetMeals();
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
      <FoodList>
        {meals.map((o, i) => {
          if (o.meal === "breakfast") {
            return <List key={i} foodName={o.foodName} foodCalories={o.calories} />;
          } else {
            return null;
          }
        })}
        ;
      </FoodList>
      <h2 className="heading">Lunch</h2>
      <FoodList>
        {meals.map((o, i) => {
          if (o.meal === "lunch") {
            return <List key={i} foodName={o.foodName} foodCalories={o.calories} />;
          } else {
            return null;
          }
        })}
        ;
      </FoodList>
      <h2 className="heading">Dinner</h2>
      <FoodList>
        {meals.map((o, i) => {
          if (o.meal === "dinner") {
            return <List key={i} foodName={o.foodName} foodCalories={o.calories} />;
          } else {
            return null;
          }
        })}
        ;
      </FoodList>
    </div>
  );
};

Diary.defaultProps = {
  user: "Pooneh",
};

export default Diary;
