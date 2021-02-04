import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: ${(props) => (props.width ? props.width : "415px")};
  max-width: ${(props) => (props.width ? props.width : "20%")};
  min-height: ${(props) => (props.height ? props.height : "180px")};
  max-height: ${(props) => (props.height ? props.height : "300px")};
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
`;

const Img = styled.img``;

const ContLeft = styled.div`
  display: flex;
  flex: 3;

  flex-direction: column;
  margin-left: 20px;
  margin-top: 10px;
`;

const ContRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-top: 10px;

  text-align: right;
`;

const Text = styled.p``;

const Button = styled.button`
  background-color: #cd407d;
  color: white;
  width: 145px;
  min-height: 41px;
  border-radius: 20px;
  border: none;
`;

const FoodList = ({}) => {
  return (
    <>
      <Container>
        <ContLeft>
          <Text>
            <img src="minus.png" /> 1 Skinny Vanilla Latte
          </Text>
          <Text>
            <img src="minus.png" /> 1 Pancake
          </Text>
          <Button>
            <img src="+.png" />
            Add Food
          </Button>
          <Text></Text>
        </ContLeft>
        <ContRight>
          <Text>
            <b>120</b>
          </Text>

          <Text>
            <b>227</b>
          </Text>
          <Text>
            <b> Total 347</b>
          </Text>
        </ContRight>
      </Container>
    </>
  );
};

FoodList.defaultProps = {};

export default FoodList;
