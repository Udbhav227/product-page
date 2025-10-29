import React from "react";
import styled from "styled-components";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useScrollDirection from "../hooks/useScrollDirection";

const NAV_HEIGHT = "80px";

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: ${NAV_HEIGHT};
  
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #f9f7f4;
  transition: top 0.3s ease-in-out;

    top: ${(props) => (props.$scrollDirection === "down" ? `-${NAV_HEIGHT}` : "0")};
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.4rem;
  color: #333;

  & > * {
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
    position: relative;

    &:hover {
      color: #000;
    }
  }
`;

const Logo = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #1a1a1a;
  text-decoration: none;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #1a1a1a;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const Navbar = () => {
  const { cartCount } = useCart();
  const scrollDirection = useScrollDirection();

  return (
    <NavContainer $scrollDirection={scrollDirection}>
      <IconGroup>
        <FiMenu />
      </IconGroup>

      <Logo to="/products">Shop</Logo>

      <IconGroup>
        <FiSearch />
        <Link to="/cart">
          <FiShoppingBag />
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </Link>
      </IconGroup>
    </NavContainer>
  );
};

export default Navbar;