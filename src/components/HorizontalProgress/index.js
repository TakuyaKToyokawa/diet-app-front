import React from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: relative;
  height: 15px;
  width: 70%;
  background-color: #cccccc;
  border-radius: 20px;
  &::after {
    content:"";
    position:absolute;
    background-color: #DB1E1E;
    width: ${props=>props.width ? props.width : "50%"};
    height: 15px;
    border-radius: 20px;
  }
`;

const HorizontalProgress = ({width}) => {
  return (
    <>
      <ProgressBar width={width}/>
    </>
  );
};

HorizontalProgress.defaultProps = {};

export default HorizontalProgress;
