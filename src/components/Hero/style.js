import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;

  > div:first-child {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
`;

export const Content = styled.div`
  align-items: center;
  background: #ffffff80;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 1rem;
`;

export const Heading = styled.h1`
  margin: 0 0 0.5rem;
`;

export const SubHeading = styled.h4`
  margin: 0;
`;
