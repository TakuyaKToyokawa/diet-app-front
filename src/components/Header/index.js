import React from "react";
import styled from "styled-components";

//Removed some min-heights for flexibility
const Main = styled.div`
  width: 100%;
  min-height: 219px;
  background: linear-gradient(103.11deg, #7910ff 16.98%, #ff2e00 102.4%);
  border-radius: 0px 0px 120px 120px;
  opacity: 0.85;
  margin-left: 20px;
`;


const Header = ({children}) => {
  return <Main>
        {children}
      </Main>
};

export default Header;
