import styled, { css } from "styled-components";

const commonStyles = css`
  max-width: 960px;
  margin: 32px auto;
`;

export const Wrapper = styled.div`
  > h1,
  > p {
    ${commonStyles}
  }
`;

export const Content = styled.div`
  ${commonStyles}
`;
