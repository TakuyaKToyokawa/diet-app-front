import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import HorizontalProgress from "components/HorizontalProgress";
import MacronutrientsInfo from "components/MacronutrientsInfo";
import VerticalProgress from "components/VerticalProgress";
import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import ProgressReport from "components/ProgressReport";


const Main = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Heading = styled.h2`
`;

const Welcomediv = styled.div`
display:flex;
flex-direction:column;
margin-left:25px;
`;

const Namediv = styled.h1`
margin-top:0px;

`;

const Headingnumber = styled.h1`
font-weight:normal;
`;

const Currentdaytitle = styled.h1`
font-weight:normal;
align-items:center;
justify-content:space-between;
display:flex;
width:150px;
`;

const Centerdiv = styled.div`
justify-content:center;
display:flex;

`;

const Homepage = () => {
  return (
    <Main>

    <Header> 
    <Welcomediv> 
    <p> Welcome back </p> 
    <Namediv> Pooneh! </Namediv>
    </Welcomediv>

    <Centerdiv>
    <Currentdaytitle> 
        <img src="arrow.png"/> Today 
    </Currentdaytitle>
    </Centerdiv>


    </Header>

    <Heading>Calorie Goal</Heading>

    <Container> 
        <HorizontalProgress> </HorizontalProgress>
        <Headingnumber> 200/1500 </Headingnumber>
    </Container>

    <Heading>Macronutrients</Heading>
    <MacronutrientsInfo> </MacronutrientsInfo>

    <Heading>Progress Report</Heading>
    <ProgressReport> </ProgressReport>


    <Footer> </Footer>

  
    
    </Main>
  );
};

export default Homepage;