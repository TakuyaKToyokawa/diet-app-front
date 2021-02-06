import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 383px;
  height: 503px;
  display: flex;
  background: linear-gradient(to bottom, #ffffff 51%, #fafafa 50%);
  border-radius: 15px;
  filter: drop-shadow(0 0 0.75rem black);
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
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
  z-index:2;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 20px;
`;

const FoodName = styled.div`
  font-weight: bold;
  font-size: 36px;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 72px;
  color: #4c4c4c;
`;

const Calories = styled.div`
  font-size: 36px;
  color: #4c4c4c;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;
`;

const MacroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  position: relative;
  top: 10px;
  flex: 1;
  justify-content: center;
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100px;
`;

const GreenCircle = styled(Circle)`
  background-color: #39d389;
`;

const YellowCircle = styled(Circle)`
  background-color: #ffdf3b;
`;

const PurpleCircle = styled(Circle)`
  background-color: #7910ff;
`;

const Macro = styled.div`
  font-size: 18px;
  color: #333333;
  text-indent: 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: column;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 90px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

const MacroInfo = styled.div`
  font-size: 20px;
  color: #333333;
  font-weight: bold;
  display: flex;
  flex: 1;
`;

const MacroNum = styled.div`
  font-size: 20px;
  color: #000000;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  text-align: right;
  margin-right: 15px;
`;

const Bar = styled.div`
  width: ${(props) => (props.width ? props.width : "184px")};
  height: 19px;
  ${(props) => props.bgcolor && "background-color:" + props.bgcolor + ";"}
  border-radius:100px;
  display: flex;
  flex: 2;
`;

const MacronutrientsInfo = ({
  Name,
  CaloriesNumber,
  protein, fat, carbs,
  onClose,
  visibility,
}) => {
  return (
    <Main visibility={visibility}>
      <Container>
        <CloseIcon onClick={onClose} src="./close.png" />
        <InfoContainer>
          <FoodName>{Name}</FoodName>
          <Number>{CaloriesNumber}</Number>
          <Calories>Calories</Calories>
        </InfoContainer>

        <LegendContainer>
          <MacroContainer>
            <GreenCircle />
            <Macro>Carbs</Macro>
          </MacroContainer>

          <MacroContainer>
            <YellowCircle />
            <Macro>Fat</Macro>
          </MacroContainer>

          <MacroContainer>
            <PurpleCircle />
            <Macro>Protein</Macro>
          </MacroContainer>
        </LegendContainer>

        <BottomContainer>
          <BarContainer>
            <MacroInfo>Carbs</MacroInfo>
            <MacroNum>{carbs}</MacroNum>
            <Bar width="184px" bgcolor="#39d389" />
          </BarContainer>

          <BarContainer>
            <MacroInfo>Fat</MacroInfo>
            <MacroNum>{fat}</MacroNum>
            <Bar width="82px" bgcolor="#ffdf3b" />
          </BarContainer>

          <BarContainer>
            <MacroInfo>Protein</MacroInfo>
            <MacroNum>{protein}</MacroNum>
            <Bar width="48px" bgcolor="#7910ff" />
          </BarContainer>
        </BottomContainer>

        {/* <Button /> */}
      </Container>
    </Main>
  );
};

MacronutrientsInfo.defaultProps = {
  Name: "Yogurt",
  CaloriesNumber: "227",
  MacroNumb: "28g",
  width: null,
  bgcolor: null,
  onClose: () => {},
};

export default MacronutrientsInfo;
