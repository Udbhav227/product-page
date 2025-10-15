import styled from "styled-components";
import FadeInOnScroll from "./FadeInOnScroll";

const StyledCard = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;

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
    padding-top: 10px;
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
    margin: 0;
  }
`;

const ProductCard = ({ product }) => (
  <FadeInOnScroll>
    <StyledCard>
      <div className="product-image-container">
        <span className="sale-badge">Sale</span>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="original-price">
          Rs. {product.originalPrice.toLocaleString("en-IN")}.00
        </p>
        <p className="sale-price">
          Rs. {product.salePrice.toLocaleString("en-IN")}.00
        </p>
      </div>
    </StyledCard>
  </FadeInOnScroll>
);

export default ProductCard;
