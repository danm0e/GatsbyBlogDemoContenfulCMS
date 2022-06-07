import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const menuItemLink = css`
  color: white;
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease-in;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover > a {
    background: #444;
  }

  a {
    ${menuItemLink};
  }

  &:hover {
    > div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const SubMenuItem = styled.div`
  background: #444;
  opacity: 0;
  position: absolute;
  top: 50px;
  visibility: hidden;
  white-space: nowrap;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  a {
    ${menuItemLink}

    &:hover {
      background: #222;
    }
  }
`;
