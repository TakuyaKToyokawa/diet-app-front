import React from "react";
import styled from "styled-components";

const Buttondiv = styled.h3`
visibility: ${(props) => (props.visibility ? props.visibility : "hidden")};
background: #39D389;
border-radius: 10px;
width:237px;
height:64px;
color:white;
display:flex;
justify-content:center;
align-items:center;
`;

const Plusicon = styled.div`

`;

const Wrapped = styled.div`
width:180px;
flex-direction:row;
display:flex;
justify-content:space-between;
align-items:center;
margin-right:10px;
`;

const Confirmation = ({visibility}) => {
  return <>
  <Buttondiv visibility={visibility}> 
    <Wrapped>
      <Plusicon> <img src="plusicon.png"/> </Plusicon> Food Added!
      </Wrapped>
  </Buttondiv>
  </>;
};

Confirmation.defaultProps = {};

export default Confirmation;
