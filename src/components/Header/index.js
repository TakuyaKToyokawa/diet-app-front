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

const Title = styled.p`
  color: White;
  font-size: ${(props) => (props.size ? props.size : "24px")};
  text-align: center;
  padding-top: 50px;
`;

const Title2 = styled.p`
  color: White;
  text-align: center;
  padding-top: 50px;
  font-size: 36px;
`;

const Header = ({children}) => {
  return <Main>
        {children}
      </Main>
};

Header.defaultProps = {
  title: "",
  size: null,
  title2: "",
};

export default Header;
