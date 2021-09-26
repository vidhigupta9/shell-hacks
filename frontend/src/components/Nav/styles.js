import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  z-index: 1;

  width: 100%;
  height: 10vh;
`;

export const Logo = styled.h1`
  font-family: var(--primary-font);
  font-size: 18px;
  font-weight: 900;

  display: flex;
  flex-direction: column;

  color: black;

  & > span {
    line-height: 1;
    text-transform: uppercase;

    user-select: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
