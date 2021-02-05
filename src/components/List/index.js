import React from "react";
import styled from "styled-components";


const Main = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
height:57px;
width:319px;
justify-content:center;
align-items:center;
display:flex;
`;

const Fooditem = styled.div`
`;

const Calorienumber = styled.div`
`;

const Wrapped = styled.div`
flex-direction:row;
display:flex;
width:250px;
justify-content:space-between;
align-items:center;
`;

const List = ({text, number}) => {
  return <>
  <Main> 
    <Wrapped>
    <Fooditem>{text}</Fooditem> 
    <Calorienumber>{number}</Calorienumber>
    </Wrapped>
  </Main>
  </>;
};

List.defaultProps = {
  text:"Yogurt",
  number:"350"
};

export default List;
