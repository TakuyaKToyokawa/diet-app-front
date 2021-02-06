import React from "react";
import styled from "styled-components";
import VerticalProgress from "components/VerticalProgress";
import Container from "components/Container";

const Progressbarsdiv = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
`;

const Date = styled.div``;

const ProgressReport = ({ height }) => {
  return (
    <Container direction="row">
      <Progressbarsdiv>
        <VerticalProgress />
        <Date> Jan 18</Date>
      </Progressbarsdiv>
      <Progressbarsdiv>
        <VerticalProgress />
        <Date> Jan 19</Date>
      </Progressbarsdiv>
      <Progressbarsdiv>
        <VerticalProgress />
        <Date>
          <b>Today</b>
        </Date>
      </Progressbarsdiv>

    </Container>
  );
};

VerticalProgress.defaultProps = {};

export default ProgressReport;
