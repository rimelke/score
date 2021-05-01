import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.li`
  display: flex;
  height: 9rem;
  padding: 0.5rem;

  img {
    object-fit: cover;
    width: 8rem;
  }

  span {
    font-size: small;
    color: #696969;
    margin-top: 0.25rem;
  }

  &:hover {
    background: #f5f5f5;
  }

  & > div {
    margin-left: 1rem;
    justify-content: space-between;
    flex: 1;
  }

  section > svg:hover {
    color: ${(props) => shade(0.2, "#D95D39")};
  }
`;

export const IconsSpace = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  }

  div a {
    color: black;
  }

  div svg {
    display: block;
    width: 1.5rem;
    height: auto;
    cursor: pointer;
  }

  & > svg {
    position: absolute;
    display: block;
    width: 3rem;
    height: auto;
    color: #d95d39;
    cursor: pointer;
    right: 0;
    bottom: 0;
  }

  & > svg:hover {
    color: ${(props) => shade(0.2, "#D95D39")};
  }

  svg.heart:hover {
    color: #b1303c;
  }

  svg.heart.fav {
    color: #b1303c;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
