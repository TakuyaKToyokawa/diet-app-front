import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import MacronutrientsInfo from "../components/MacronutrientsInfo";
import FoodList from "../components/FoodList";

const Main = () => {
  return (
    <div className="main">
      <Dropdown></Dropdown>
      <FoodList></FoodList>
      <MacronutrientsInfo></MacronutrientsInfo>
    </div>
  );
};

export default Main;
