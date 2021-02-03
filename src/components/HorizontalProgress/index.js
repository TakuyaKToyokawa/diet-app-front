import React from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background-color: #cccccc;
  border-radius: 20px;
  &::after {
    content:"";
    position:absolute;
    background-color: #DB1E1E;
    width: ${props=>props.width ? props.width : "50%"};
    height: 10px;
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
