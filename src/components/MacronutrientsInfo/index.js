import React from "react";
import styled from "styled-components";
import Container from "components/Container";

const InnerCont = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Circle = styled.div`
  border-radius: 100%;
  background-color: ${(props) => (props.color ? props.color : "red")};
  width: 18px;
  height: 18px;
  margin-top: 10px;
  margin-right: 5px;
`;

const Text = styled.p`
  margin: 0;
`;

const MacronutrientsInfo = ({}) => {
  return (
    <Container direction="row">
      <InnerCont>
        <Circle />
        <TextCont>
          <Text>Carbs</Text>
          <Text>
            <b>120g</b>
          </Text>
        </TextCont>
      </InnerCont>
      <InnerCont>
        <Circle color="#FFDF3B" />
        <TextCont>
          <Text>Fat</Text>
          <Text>
            <b>250g</b>
          </Text>
        </TextCont>
      </InnerCont>
      <InnerCont>
        <Circle color="#7910FF" />
        <TextCont>
          <Text>Protein</Text>
          <Text>
            <b>1000g</b>
          </Text>
        </TextCont>
      </InnerCont>
    </Container>
  );
};

MacronutrientsInfo.defaultProps = {
  width: null,
  height: null,
  color: null,
};

export default MacronutrientsInfo;