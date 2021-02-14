import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: 2px solid #cccccc;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 20px;
  transition: 0.1s ease-out;
  :hover {
    background-color: #eeeeee;
  }
`;

const Arrow = styled.img`
  width: 15px;
`;

const DropdownBox = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
      <Arrow src="./icons/down_arrow.svg" />
    </Container>
  );
};

DropdownBox.defaultProps = {
  text: "Vegetable",
};

export default DropdownBox;
