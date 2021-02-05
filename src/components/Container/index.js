import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  min-width: ${(props) => (props.width ? props.width : "374px")};
  max-width: ${(props) => (props.width ? props.width : "20%")};
  min-height: ${(props) => (props.height  ? props.height : "159px")};
  max-height: ${(props) => (props.height ? props.height : "300px")};
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content:center;
  align-items:center;
`;


const Container = ({ width, height, direction, children }) => {
  return (
    <>
      <Cont width={width} height={height} direction={direction}>
        {children}
      </Cont>
    </>
  );
};

Container.defaultProps = {
  width: null,
  height: null,
  direction: null,
};

export default Container;
