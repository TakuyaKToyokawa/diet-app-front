import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import FoodInfo from "../components/FoodInfo";
import List from "../components/List";

const FoodSearchPage = () => {
  const [expanded, setExpanded] = useState("hidden");

  const FoodInfoVisibility = () => {
    if (expanded == "hidden") {
      setExpanded("visible");
    } else {
      setExpanded("hidden");
    }
  };

  return (
    <div className="main">
      <FoodInfo visibility={expanded} onClose={FoodInfoVisibility}></FoodInfo>
      <Header>
        <div class="headerCenter">
          <h2 className="title">Breakfast</h2>
        </div>
      </Header>
      <div className="search">
        <SearchBar />
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
          <Dropdown category="Dairy" />
          <div className="food">
            <List onClick={FoodInfoVisibility} text="Cheese" number="120" />
            <List onClick={FoodInfoVisibility} text="Cheese" number="120" />
            <List onClick={FoodInfoVisibility} text="Milk" number="193" />
          </div>
        </div>
        <div className="ddmenu">
          <Dropdown category="Meat" />
        </div>
        <div className="ddmenu">
          <Dropdown category="Vegetables" />
        </div>
      </div>
    </div>
  );
};

export default FoodSearchPage;
