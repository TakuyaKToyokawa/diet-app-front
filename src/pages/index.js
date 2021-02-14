import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from "../components/Header";
import HorizontalProgress from "../components/HorizontalProgress";
import MacronutrientsInfo from "../components/MacronutrientsInfo";
import Container from "../components/Container";
import ProgressReport from "../components/ProgressReport";

const Homepage = () => {
  const [meals, setMeals] = useState([]);
  //Get foods from heroku database
  const GetMeals = async () => {
    let resp = await axios.get(
      "https://diet-app-backend.herokuapp.com/api/meals"
    );
    setMeals(resp.data.meals);
    console.log(resp.data.meals);
  };

  useEffect(() => {
    GetMeals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //add all macronutrients and dispaly them. Probably need to change to useState later
  let totalFat = 0;
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalCalories = 0;

  function AddMacronutrients(arr) {
    for (let i = 0; i < arr.length; i++) {
      let fat = arr[i].fat;
      let calories = arr[i].calories;
      let carbs = arr[i].carbs;
      let protein = arr[i].protein;
      totalCalories += calories;
      totalFat += fat;
      totalProtein += protein;
      totalCarbs += carbs;
    }
  }

  function ProgressBar(calories){
    return (Math.ceil((calories/1500)*100));
  }

  AddMacronutrients(meals);
  useEffect(()=>{

  },[])
  return (
    <div className="main">
      <Header>
        <div className="headerWelcome">
          <p className="Text"> Welcome back </p>
          <h1 className="Namediv"> Pooneh! </h1>
        </div>
        <div className="center">
          <h1 className="Currentdaytitle">
            <img src="arrow.png" alt="arrow.png"/> Today
          </h1>
        </div>
      </Header>
      <h2 className="heading">Calories Goals</h2>
      <Container>
        <HorizontalProgress width={ProgressBar(totalCalories)+"%"}> </HorizontalProgress>
        <h1 className="Headingnumber"> {totalCalories}/1500 </h1>
      </Container>
      <h2 className="heading">Macronutrients</h2>
      <MacronutrientsInfo
        carbs={totalCarbs}
        protein={totalProtein}
        fat={totalFat}
      >
        {" "}
      </MacronutrientsInfo>
      <h2 className="heading">Progress Report</h2>
      <ProgressReport> </ProgressReport>
    </div>
  );
};

export default Homepage;
