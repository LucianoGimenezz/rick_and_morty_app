import React from "react";
// import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const NavStyle = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  background-color: #3c3e44;
`;

const LinkContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Nav = ({ children }) => {
  const location = useLocation();
  return (
    <NavStyle>
      <LinkContainer>
        <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
          <p>Home</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
          <p>About</p>
        </Link>
      </LinkContainer>
      {location.pathname === "/home" && children}
      {/* <SearchBar onSearch={onSearch} /> */}
    </NavStyle>
  );
};

export default Nav;
