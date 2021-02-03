import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  display: flex;
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
  transition: .1s ease-out;
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
  cursor:pointer;
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
          <ProgressIcon />
          <Text>Progress</Text>
        </IconCont>
        <Divider />
        <IconCont>
          <DiaryIcon src="icons/diary.svg" />
          <Text>Diary</Text>
        </IconCont>
      </Container>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
