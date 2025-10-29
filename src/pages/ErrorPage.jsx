import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalErrorStyle = createGlobalStyle`
  body {
    background-color: #f9f7f4;
  }
`;

const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f7f4;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: rgb(168, 123, 36);
  line-height: 1;
  margin-bottom: 0;
`;

const ErrorTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 20px 0 10px 0;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 400px;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: #1a1a1a;
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f9f7f4;
    color: #1a1a1a;
  }
`;

const ErrorPage = () => {
  return (
    <>
      <GlobalErrorStyle />
      <ErrorContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorMessage>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </ErrorMessage>
        <HomeButton to="/products">Continue Shopping</HomeButton>
      </ErrorContainer>
    </>
  );
};

export default ErrorPage;