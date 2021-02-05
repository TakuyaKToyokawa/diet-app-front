import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-around;
  align-items: center;
`;

const Divider = styled.div`
  position: relative;
  top: -5px;
  height: 20%;
  width: 8px;
  background-color: #c4c4c4;
  border-radius: 20px;
`;

const Text = styled.p`
  color: #cccccc;
`;

// Icons use masking system to enable hover effect
const Icons = styled.div`
  width: 75px;
  height: 32px;
  background-color: #cccccc;
  transition: 0.1s ease-out;
`;

const ProgressIcon = styled(Icons)`
  -webkit-mask: url("icons/progress.svg") no-repeat center;
  mask: url("icons/progress.svg") no-repeat center;
`;

const DiaryIcon = styled(Icons)`
  -webkit-mask: url("icons/diary.svg") no-repeat center;
  mask: url("icons/diary.svg") no-repeat center;
`;

const IconCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  :hover ${Text} {
    color: #5b62ff;
  }
  :hover ${Icons} {
    background-color: #5b62ff;
  }
`;

const Footer = ({}) => {
  return (
    <>
      <Container>
        <IconCont>
          <Link to="/food">
            <ProgressIcon />
            <Text>Progress</Text>
          </Link>
        </IconCont>
        <Divider />
        <IconCont>
          <Link to="/">
            <DiaryIcon src="icons/diary.svg" />
            <Text>Diary</Text>
          </Link>
        </IconCont>
      </Container>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
