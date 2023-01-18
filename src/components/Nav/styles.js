import { ButtonStyle } from "../SearchBar/styles";
import styled, { keyframes } from "styled-components";


export const NavStyle = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  background-color: #3c3e44;
`;

export const LinkContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const SectionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: end;
`;

export const ButtonLogOut = styled(ButtonStyle)`
  font-size: 1rem;
`;

export const spand = keyframes`
  0% {
    height: 0px;
  }

  100% {
    height: 41px;
  }
`;
export const P = styled.p`
  position: relative;
  &:hover {
    &::after {
      content: " ";
      width: 3px;
      height: 41px;
      position: absolute;
      transform: rotate(90deg);
      top: 11px;
      left: 26px;
      background-color: #fff;
      border-radius: 2px;
      animation: ${spand} 1s forwards;
      transition: all 0.3s;
    }
  }
`;
