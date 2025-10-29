import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

const GlobalCartStyle = createGlobalStyle`
  body {
    background-color: #f9f7f4;
  }
`;

const CartPageContainer = styled.main`
  max-width: 1050px;
  margin: 60px auto;
  padding: 0 25px;

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 0 15px;
  }
`;

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
    color: #121212;
  }

  a {
    color: #333;
    text-decoration: underline;
    font-size: 0.9rem;
    &:hover {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const CartGrid = styled.div`
  border-top: 1px solid #e0e0e0;
`;

const CartGridHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;

  span {
    color: #555;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  span:nth-child(2) {
    text-align: center;
  }
  span:nth-child(3) {
    text-align: right;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 25px 0;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 15px 0;
    padding: 20px 0;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    background-color: white;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 5px 0;
  }

  p {
    margin: 4px 0 0 0;
    color: #555;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    gap: 15px;

    img {
      width: 90px;
      height: 90px;
    }
    h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const QuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    justify-content: flex-start;
    gap: 15px;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  width: min-content;

  button {
    background: none;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #555;
  }

  span {
    padding: 8px 15px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    button {
      padding: 6px 10px;
      font-size: 1rem;
    }
    span {
      padding: 6px 10px;
      font-size: 0.9rem;
    }
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 1.1rem;
  padding: 5px;

  &:hover {
    color: #111;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LineTotal = styled.p`
  text-align: right;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: 768px) {
    grid-column: 2 / 3;
    align-self: center;
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

const CartFooter = styled.footer`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: stretch;
  }
`;

const EstimatedTotal = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10px;

  span {
    color: #555;
    margin-right: 20px;
  }

  strong {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;

const FinePrint = styled.p`
  color: #555;
  font-size: 0.8rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: right;
  }
`;

const CheckoutButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 14px 30px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #1a1a1a;
  cursor: pointer;
  min-width: 280px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 100px 20px;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <GlobalCartStyle />
        <CartPageContainer>
          <EmptyCartContainer>
            <h2>Your cart is empty</h2>
            <Link to="/products">Continue shopping</Link>
          </EmptyCartContainer>
        </CartPageContainer>
      </>
    );
  }

  return (
    <>
      <GlobalCartStyle />
      <CartPageContainer>
        <PageHeader>
          <h1>Your cart</h1>
          <Link to="/products">Continue shopping</Link>
        </PageHeader>

        <CartGrid>
          <CartGridHeader>
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
          </CartGridHeader>

          {cartItems.map((item) => (
            <ItemRow key={item.id}>
              <ProductDetails>
                <img src={item.image_url} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Rs. {item.sale_price.toLocaleString("en-IN")}.00</p>
                  <p>
                    Color:{" "}
                    {item.details.specifications.find(
                      (s) => s.label === "Base Metal"
                    )?.value || "N/A"}
                  </p>
                </div>
              </ProductDetails>

              <QuantityControl>
                <QuantitySelector>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </QuantitySelector>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  <FiTrash2 />
                </RemoveButton>
              </QuantityControl>

              <LineTotal>
                Rs. {(item.sale_price * item.quantity).toLocaleString("en-IN")}
                .00
              </LineTotal>
            </ItemRow>
          ))}
        </CartGrid>

        <CartFooter>
          <EstimatedTotal>
            <span>Estimated total</span>
            <strong>Rs. {total.toLocaleString("en-IN")}.00</strong>
          </EstimatedTotal>
          <FinePrint>Taxes and shipping calculated at checkout.</FinePrint>
          <CheckoutButton>Check out</CheckoutButton>
        </CartFooter>
      </CartPageContainer>
    </>
  );
};

export default CartPage;
