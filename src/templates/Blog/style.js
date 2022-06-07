import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Content = styled.section`
  max-width: 960px;
  margin: auto;
`;

export const Post = styled(Link)`
  background: #eee;
  border-radius: 0.5rem;
  color: #777;
  display: block;
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.3s linear;

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    background: #ddd;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const Description = styled.p``;

export const Date = styled.small``;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PageLink = styled(Link)`
  align-items: center;
  background: black;
  color: white;
  display: flex;
  height: 30px;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  width: 30px;

  ${({ active }) =>
    active === "true" &&
    css`
      background: #777;
    `}

  &:hover {
    color: white;
    background: #777;
  }

  &:first-child {
    border-radius: 0.4rem 0 0 0.4rem;
  }

  &:last-child {
    border-radius: 0 0.4rem 0.4rem 0;
  }
`;
