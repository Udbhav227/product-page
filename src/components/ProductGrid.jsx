import styled from 'styled-components';
import ProductCard from './ProductCard';

const GridContainer = styled.div`
  display: grid;
  
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  padding: 15px; 

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 50px;
  }
`;

const ProductGrid = ({ products }) => (
  <GridContainer>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </GridContainer>
);

export default ProductGrid;