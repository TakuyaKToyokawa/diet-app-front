import React from "react";
import styled from "styled-components";
import VerticalProgress from "components/VerticalProgress";

const Main = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width:374px;
height:252px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-bottom:15px;

`;

const Progressbarsdiv = styled.div`
width:280px;
flex-direction:row;
display:flex;
justify-content:space-between;
margin:15px;
align-items:center;
transform:rotate(180deg);
`;

const Datesdiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:320px;

`;

const Date = styled.div`

`;




const ProgressReport = ({ height }) => {
  return (
    <Main>
        <Progressbarsdiv>
      <VerticalProgress></VerticalProgress>
      <VerticalProgress></VerticalProgress>
      <VerticalProgress></VerticalProgress>
      </Progressbarsdiv>

      <Datesdiv> 
          <Date> Jan 18</Date>
          <Date> Jan 19</Date>
          <Date> <b>Today</b></Date>
      </Datesdiv>
     
     

    </Main>
  );
};

VerticalProgress.defaultProps = {};

export default ProgressReport;
