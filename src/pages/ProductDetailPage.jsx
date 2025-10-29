import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useCart } from '../context/CartContext';
import mockProducts from '../components/mockProducts';
import Accordion from '../components/Accordion';
import ProductGrid from '../components/ProductGrid';
import ProductCarousel from '../components/ProductCarousel';
import { 
  FiShoppingCart,
  FiList,
  FiFileText,
  FiTruck,
  FiRepeat,
  FiPackage
} from 'react-icons/fi';

const GlobalProductPageStyle = createGlobalStyle`
  body {
    background-color: #f9f7f4;
  }
`;

const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  background-color: white;
  
  @media (min-width: 768px) {
    position: sticky;
    top: 100px;
    align-self: flex-start;
    max-height: calc(100vh - 120px);
  }
`;

const DetailsColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f9f7f4;

  @media (min-width: 768px) {
    padding: 0 15px;
  }
`;

const ProductName = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 15px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const SalePrice = styled.span`
  font-weight: bold;
  color: #333;
`;

const OriginalPrice = styled.span`
  color: #888;
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 14px;
  margin: 20px 0;
  background-color: #1a1a1a;
  color: white;
  border: 1px solid #1a1a1a;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

const AccordionGroup = styled.div`
  border-top: 1px solid #e0e0e0;
`;

const SpecTable = styled.div`
  p {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 5px 0;
    font-size: 0.9rem;
    color: #333;

    span:first-child {
      color: #555;
    }
  }
`;

const GenericContent = styled.div`
  font-size: 0.9rem;
  color: #333;
  line-height: 1.6;

  h4 {
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  
  p, ul {
    margin-bottom: 10px;
  }
  
  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`;

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const RecommendedWrapper = styled.section`
  max-width: 1400px;
  margin: 40px auto;
  padding: 0 20px;
  
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 25px;
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    padding: 0 50px;
  }

  & > div {
    padding: 0;
    @media (min-width: 1024px) {
      padding: 0;
    }
  }
`;

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const product = mockProducts.find(p => p.id.toString() === productId);

  useEffect(() => {
    if (productId) {
      const otherProducts = mockProducts.filter(
        (p) => p.id.toString() !== productId
      );
      const shuffled = otherProducts.sort(() => 0.5 - Math.random());
      setRecommendedProducts(shuffled.slice(0, 4));
      
      window.scrollTo(0, 0);
    }
  }, [productId]);

  if (!product) {
    return (
      <NotFoundContainer>
        <h2>Product not found</h2>
        <Link to="/products">Continue shopping</Link>
      </NotFoundContainer>
    );
  }
  
  const {
    name,
    image_url,
    original_price,
    sale_price,
    is_sale,
    details
  } = product;

  return (
    <>
      <GlobalProductPageStyle />
      <PageWrapper>
        <ProductContainer>
          <ImageColumn>
            <ProductCarousel imageUrl={image_url} altText={name} />
          </ImageColumn>

          <DetailsColumn>
            <ProductName>{name}</ProductName>
            
            <PriceContainer>
              <SalePrice>Rs. {sale_price.toLocaleString('en-IN')}.00</SalePrice>
              {is_sale && (
                <OriginalPrice>
                  Rs. {original_price.toLocaleString('en-IN')}.00
                </OriginalPrice>
              )}
            </PriceContainer>

            <AddToCartButton onClick={() => addToCart(product)}>
              <FiShoppingCart /> Add to Cart
            </AddToCartButton>

            <AccordionGroup>
              <Accordion 
                title="Specification" 
                icon={<FiList />} 
                isOpenByDefault={true}
              >
                <SpecTable>
                  {details.specifications.map(spec => (
                    <p key={spec.label}>
                      <span>{spec.label}</span>
                      <span>{spec.value}</span>
                    </p>
                  ))}
                </SpecTable>
              </Accordion>
              
              <Accordion 
                title="Description" 
                icon={<FiFileText />}
              >
                <GenericContent>
                  <p>{details.description}</p>
                </GenericContent>
              </Accordion>

              <Accordion 
                title="Shipping" 
                icon={<FiTruck />}
              >
                 <GenericContent>
                  <h4>{details.shipping.title}</h4>
                  <ul>
                    {details.shipping.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <p>{details.shipping.footer}</p>
                </GenericContent>
              </Accordion>
              
              <Accordion 
                title="Returns & Exchange" 
                icon={<FiRepeat />}
              >
                <GenericContent>
                  <h4>{details.returns.title}</h4>
                  <ul>
                    {details.returns.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <p>{details.returns.footer}</p>
                </GenericContent>
              </Accordion>
              
              <Accordion 
                title="Manufactured, Packed & Marketed by" 
                icon={<FiPackage />}
              >
                <GenericContent>
                  {details.manufacturer.sections.map((sec, index) => (
                    <div key={index}>
                      <h4>{sec.title}</h4>
                      <p>{sec.address.join(', ')}</p>
                    </div>
                  ))}
                  <p>{details.manufacturer.footer}</p>
                </GenericContent>
              </Accordion>
            </AccordionGroup>
          </DetailsColumn>
        </ProductContainer>
      </PageWrapper> {/* <-- TYPO FIXED HERE */}

      <RecommendedWrapper>
        <h2>You may also like</h2>
        <ProductGrid products={recommendedProducts} />
      </RecommendedWrapper>
    </>
  );
};

export default ProductDetailPage; 