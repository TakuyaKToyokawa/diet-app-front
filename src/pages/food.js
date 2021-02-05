import React, { useState, useEffect } from "react";
import axios from "axios";
import Confirmation from "../components/Confirmation";
import List from "../components/List";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import HorizontalProgress from "../components/HorizontalProgress";
import VerticalProgress from "../components/VerticalProgress";
import MacronutrientsInfo from "../components/MacronutrientsInfo";
import FoodList from "../components/FoodList";

const Food = () => {
  return (
    <div className="main">
      <Confirmation> </Confirmation>
      <List></List>
      <Header></Header>
      <Dropdown></Dropdown>
      <Footer></Footer>
      <HorizontalProgress></HorizontalProgress>
      <VerticalProgress></VerticalProgress>
      <FoodList></FoodList>
      <MacronutrientsInfo></MacronutrientsInfo>
    </div>
  );
};

export default Food;
