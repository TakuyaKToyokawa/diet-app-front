import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Imported Container Component to keep consistency between pages
import Container from "components/Container";

//Seperated List from Container for future axios/REST api/mapping capabilites
import List from "components/FoodList/list";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  background-color: #cd407d;
  color: white;
  padding: 0px 20px;
  min-width: 120px;
  min-height: 50px;
  border-radius: 100px;
  border: none;
  transition: 0.1s ease-out;
  &:hover {
    background-color: #a22a5e;
  }
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & a {
    text-decoration: none;
  }
`;

const FoodList = ({ total, link, children }) => {
  return (
    <>
      <Container>
        {children}
        <ButtonCont>
          <Link to={link}>
            <Button>
              <img src="+.png"></img>Add Food
            </Button>
          </Link>
          <p>
            Total <b>{total}</b>
          </p>
        </ButtonCont>
      </Container>
    </>
  );
};

FoodList.defaultProps = {
  total: "200",
  children: <List/>,
  link: "/FoodSearchPage"
};

export default FoodList;
