import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 383px;
  height: 503px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #ffffff 51%, #fafafa 50%);
  border-radius: 15px;
  filter: drop-shadow(0 0 0.75rem black);
  flex-direction: column;
`;

const Main = styled.div`
  position: relative;
  top: -350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 150vh;
  visibility: ${(props) => (props.visibility ? props.visibility : "hidden")};
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 15px;
  height: 15px;
  z-index: 2;
  cursor: pointer;
`;

const Button = styled.div`
  border-radius: 20px;
  border:3px solid #CCCCCC;
  cursor: pointer;
  padding: 20px;
  margin: 20px 0px;
  width: 50%;
  text-align:center;
  font-weight:bold;
  color:#111;
  transition: .1s ease-out;
  :hover{
    background-color:#AAA;
  }
`

const FilterInfo = ({
  SortCals,
  SortName,
  onClose,
  visibility,

}) => {
  return (
    <Main visibility={visibility}>
      <Container>
        <CloseIcon onClick={onClose} src="./close.png" />
        <Button onClick={SortCals}>Sort by Cals</Button>
      <Button onClick={SortName}>Sort by Name</Button>
      </Container>
    </Main>
  );
};

FilterInfo.defaultProps = {
  Name: "Yogurt",
  CaloriesNumber: "227",
  MacroNumb: "28g",
  width: null,
  bgcolor: null,
  onClose: () => {},
  onClick: () => {},
};

export default FilterInfo;
