import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoodList from "../components/FoodList";

const Dairy = () => {
  return (
    <div className="main">
      <div className="title">
        <Header title="Tell us what you had today" title2="Today"></Header>
      </div>
      <h2>Breakfast</h2>
      <FoodList></FoodList>
      <div className="title"></div>
      <h2>Lunch</h2>
      <FoodList></FoodList>
      <div className="title"></div>
      <h2>Dinner</h2>
      <FoodList></FoodList>
      <Footer></Footer>
    </div>
  );
};

export default Dairy;
