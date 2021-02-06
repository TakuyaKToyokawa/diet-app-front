import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FoodList from "../components/FoodList";
import styled from "styled-components";
import List from "../components/FoodList/list";
import { meals } from "../database/sampleMeals";

const Namediv = styled.h1`
  margin-top: 0px;
  color: white;
`;

const Headingnumber = styled.h1`
  font-weight: normal;
`;

const Currentdaytitle = styled.h1`
  font-weight: normal;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 150px;
  color: white;
`;

const Text = styled.p`
  color: white;
`;

const Diary = ({ user }) => {
  const [categories, setCategories] = useState([]);

  //Get Categories for filter purposes on diffrentiating meal types during mapping
  function GetCategories() {
    let result = [];
    for (let i = 0; i < meals.length; i++) {
      let category = meals[i].category;
      if (!result.includes(category)) {
        result.push(category);
      }
    }
    setCategories(result);
  }

  useEffect(() => {
    GetCategories();
  }, []);

  return (
    <div className="main">
      <Header>
        <div className="headerWelcome">
          <Text> Welcome back </Text>
          <Namediv> {user} </Namediv>
        </div>
        <div className="center">
          <Currentdaytitle>
            <img src="arrow.png" /> Today
          </Currentdaytitle>
        </div>
      </Header>
      <h2 className="heading">Breakfast</h2>
      <FoodList>
        {meals.map((o) => {
          if (o.meal === "breakfast") {
            return <List foodName={o.name} foodCalories={o.cal} />;
          }
        })}
        ;
      </FoodList>
      <h2 className="heading">Lunch</h2>
      <FoodList>
        {meals.map((o) => {
          if (o.meal === "lunch") {
            return <List foodName={o.name} foodCalories={o.cal} />;
          }
        })}
        ;
      </FoodList>
      <h2 className="heading">Dinner</h2>
      <FoodList>
        {meals.map((o) => {
          if (o.meal === "dinner") {
            return <List foodName={o.name} foodCalories={o.cal} />;
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
