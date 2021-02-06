import React from "react";
import styled from "styled-components";

const ContFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListCont = styled(ContFlex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 20px;
`;

const Text = styled.p`
  margin: 0px;
`;

const Img = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const List = ({onRemove, listAmount, foodName, foodCalories}) => {
  return (
    <>
      <ListCont>
        <ContFlex>
          <Img onClick={onRemove} src="minus.png"></Img>
          <Text>{listAmount} {foodName}</Text>
        </ContFlex>
        <Text></Text>
        <Text>
          <b>{foodCalories}</b>
        </Text>
      </ListCont>
    </>
  );
};

List.defaultProps = {
    listAmount: "1",
    foodName: "Skinny Vanilla Latte",
    foodCalories: "120"
};

export default List;
