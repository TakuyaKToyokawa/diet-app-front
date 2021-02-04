import React from "react";
import styled from "styled-components";
import Search from './search.png';

const Container = styled.input`
min-width:314px;
min-height:39px;
background-color:#E5E5E5;
border:none;
border-radius:100px;
font-size:18px;
font-color:#919191;
display:flex;
flex-direction:row;
`;

const IconImg = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 16px;
height: 17px;
`;

const SearchPNG = {
  src: Search
}

const SearchBar = ({}) => {
  return <Container placeholder="Search for a food">
    <IconImg source={SearchPNG}/>
  </Container>
};

SearchBar.defaultProps = {};

export default SearchBar;
