import styled, { css } from "styled-components";

const commonStyles = css`
  max-width: 960px;
  margin: auto;
  padding: 0.5rem 0;
`;

export const Wrapper = styled.div`
  > p {
    ${commonStyles}
  }
`;

export const Content = styled.div`
  ${commonStyles}
`;
