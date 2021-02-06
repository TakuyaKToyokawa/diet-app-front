import React from "react";
import styled from "styled-components";

//Use prop height to adjust how much the bar is filled.
const ProgressBar = styled.div`
  position: relative;
  height: 200px;
  width: 15px;
  background-color: #cccccc;
  border-radius: 20px;
  transform:rotate(180deg);
  margin-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    background-color: #db1e1e;
    height: ${(props) => (props.height ? props.height : "50%")};
    width: 15px;
    border-radius: 20px;
  }
`;

const VerticalProgress = ({ height }) => {
  return (
    <>
      <ProgressBar height={height}/>
    </>
  );
};

VerticalProgress.defaultProps = {};

export default VerticalProgress;
