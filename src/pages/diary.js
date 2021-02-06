import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoodList from "../components/FoodList";
import styled from "styled-components";

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

const Diary = () => {
  return (
    <div className="main">
      <Header>
        <div className="headerWelcome">
          <Text> Welcome back </Text>
          <Namediv> Pooneh! </Namediv>
        </div>
        <div className="center">
          <Currentdaytitle>
            <img src="arrow.png" /> Today
          </Currentdaytitle>
        </div>
      </Header>
      <h2 className="heading">Breakfast</h2>
      <FoodList />
      <h2 className="heading">Lunch</h2>
      <FoodList />
      <h2 className="heading">Dinner</h2>
      <FoodList />
    </div>
  );
};

export default Diary;
