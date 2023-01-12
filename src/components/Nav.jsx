import React from "react";
// import SearchBar from "./SearchBar";
import styled from "styled-components";

const NavStyle = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
  padding: 8px;
  background-color: #3c3e44;
`;

const Nav = ({ children }) => {
  return (
    <NavStyle>
      {children}
      {/* <SearchBar onSearch={onSearch} /> */}
    </NavStyle>
  );
};

export default Nav;
