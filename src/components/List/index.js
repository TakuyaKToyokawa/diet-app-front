import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 57px;
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.79, 0.41);
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const Fooditem = styled.div`
  margin-left: 20px;
`;

const Calorienumber = styled.div`
  margin-right: 20px;
`;

const List = ({ text, number, onClick }) => {
  return (
    <>
      <Main onClick={onClick}>
        <Fooditem>{text}</Fooditem>
        <Calorienumber>{number}</Calorienumber>
      </Main>
    </>
  );
};

List.defaultProps = {
  text: "Yogurt",
  number: "350",
  onClick: () => {},
};

export default List;
