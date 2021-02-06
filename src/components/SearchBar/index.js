import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width:100%;
`;

const IconImg = styled.img`
  position: absolute;
  top: 11px;
  left: 10px;
  width: 16px;
  height: 17px;
`;

const Input = styled.input`
  width:98%;
  min-height: 39px;
  background-color: #e5e5e5;
  border: none;
  border-radius: 100px;
  font-size: 18px;
  color: #919191;
  display: flex;

  flex-direction: row;
  text-indent: 30px;
  outline:none;
`;

const SearchBar = ({}) => {
  return (
    <Container>
      <Input placeholder="Search for a food"/>
      <IconImg src="./search.png" />
    </Container>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
