import styled, { createGlobalStyle } from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import FilterAndSortBar from '../components/FilterAndSortBar';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';
import mockProducts from '../components/mockProducts';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9f7f4;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

const ITEMS_PER_PAGE = 16;

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = mockProducts.slice(startIndex, endIndex);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <FilterAndSortBar productCount={mockProducts.length} />
        <ProductGrid products={currentProducts} />
        <Pagination totalPages={totalPages} />
      </MainContainer>
    </>
  );
};

export default ProductListingPage;