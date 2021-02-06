import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 120px;
  background-color: white;
  filter: drop-shadow(0px -2px 15px rgba(0, 0, 0, 0.08));
`;

const Divider = styled.div`
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
  cursor: pointer;
  & a {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
  }
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
          <Link to="/">
            <ProgressIcon />
            <Text>Progress</Text>
          </Link>
        </IconCont>
        <Divider />
        <IconCont>
          <Link to="/Diary">
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
