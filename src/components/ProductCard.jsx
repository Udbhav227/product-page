import styled from "styled-components";
import { Link } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import { useCart } from "../context/CartContext";

const CardLinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  height: 100%;

  .sale-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #d17800;
    color: white;
    padding: 2px 10px;
    border-radius: 25px;
    font-size: 0.75rem;
    font-weight: bold;
    z-index: 10;
  }

  .product-image-container {
    background-color: white;
    border: 1px solid #b0883a;
    border-radius: 8px;
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 5px;
  }

  .product-name {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 5px 0;
  }

  .original-price {
    font-size: 0.9rem;
    color: #888;
    text-decoration: line-through;
    margin: 0;
  }

  .sale-price {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin: 0 0 10px 0;
  }
`;

const AddToCartButton = styled.button`
  background-color: #333;
  color: white;
  border: 1px solid #333;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
  margin-top: auto;
  z-index: 5;
  position: relative;

  &:hover {
    background-color: white;
    color: #333;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <FadeInOnScroll>
      <StyledCard>
        <CardLinkWrapper to={`/products/${product.id}`}>
          <div className="product-image-container">
            {product.is_sale && <span className="sale-badge">Sale</span>}
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <div>
              <p className="product-name">{product.name}</p>
              {product.is_sale ? (
                <>
                  <p className="original-price">
                    Rs. {product.original_price.toLocaleString("en-IN")}.00
                  </p>
                  <p className="sale-price">
                    Rs. {product.sale_price.toLocaleString("en-IN")}.00
                  </p>
                </>
              ) : (
                <p className="sale-price">
                  Rs. {product.original_price.toLocaleString("en-IN")}.00
                </p>
              )}
            </div>
          </div>
        </CardLinkWrapper>
        
        <div style={{ padding: "0 5px" }}>
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
        </div>
        
      </StyledCard>
    </FadeInOnScroll>
  );
};

export default ProductCard;