import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const IconImg = styled.img`
  position: absolute;
  top: 11px;
  left: 10px;
  width: 16px;
  height: 17px;
`;

const Input = styled.input`
  min-width: 314px;
  min-height: 39px;
  background-color: #e5e5e5;
  border: none;
  border-radius: 100px;
  font-size: 18px;
  color: #919191;
  display: flex;
  padding-left: 10px;
  flex-direction: row;
`;

const SearchBar = ({}) => {
  return (
    <Container placeholder="Search for a food">
      <Input></Input>
      <IconImg src="./search.png" />
    </Container>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
