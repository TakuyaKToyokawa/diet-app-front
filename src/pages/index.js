import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";

import HorizontalProgress from "../components/HorizontalProgress";
import MacronutrientsInfo from "../components/MacronutrientsInfo";
import Container from "../components/Container";
import ProgressReport from "../components/ProgressReport";

const Welcomediv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

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
const Homepage = () => {
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
      <h2 className="heading">Calories Goals</h2>
      <Container>
        <HorizontalProgress> </HorizontalProgress>
        <Headingnumber> 200/1500 </Headingnumber>
      </Container>
      <h2 className="heading">Macronutrients</h2>
      <MacronutrientsInfo> </MacronutrientsInfo>
      <h2 className="heading">Progress Report</h2>
      <ProgressReport> </ProgressReport>
    </div>
  );
};

export default Homepage;
