import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  background: white;
  width: 100%;
  padding: 20px 0px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

//Added Container for child to make sure spacing is correct and not go over screen size

const ChildCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


   //Props for: width, height, and flex-direction
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  align-items: ${(props) => (props.align ? props.align : null)};
  justify-content: ${(props) => (props.justify ? props.justify : null)};
  min-width: ${(props) => (props.width ? props.width : "auto")};
  max-width: ${(props) => (props.width ? props.width : "auto")};
  min-height: ${(props) => (props.height ? props.height : "auto")};
  max-height: ${(props) => (props.height ? props.height : "auto")};
  &:first-child {
    margin: 0px 20px;
  }
`;
const Container = ({ width, height, direction, children, align, justify }) => {
  return (
    <>
      <Cont>
        <ChildCont width={width} height={height} direction={direction} align={align} justify={justify}>
          {children}
        </ChildCont>
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
