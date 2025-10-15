import React from "react";
import styled from "styled-components";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 80px;
  /* position: sticky;
  top: 0;
  z-index: 10; */
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.4rem;
  color: #333;

  & > svg {
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #000;
    }
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #1a1a1a;
`;

const Header = () => {
  return (
    <NavContainer>
      <IconGroup>
        <FiMenu />
      </IconGroup>

      <Logo>Shop</Logo>

      <IconGroup>
        <FiSearch />
        <FiShoppingBag />
      </IconGroup>
    </NavContainer>
  );
};

export default Header;
