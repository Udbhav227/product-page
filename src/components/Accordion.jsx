import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 20px 0;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: #121212;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  & > span {
    font-size: 1.2rem;
    color: #555;
    display: inline-flex;
    align-items: center;
  }
`;

const ToggleIcon = styled.span`
  font-size: 1.2rem;
`;

const AccordionContent = styled.div`
  display: grid;
  grid-template-rows: ${props => (props.$isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s ease-in-out;
  overflow: hidden;
`;

const ContentInner = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding-bottom: 20px;
`;

const Accordion = ({ title, children, icon, isOpenByDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <AccordionItem>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        <HeaderContent>
          {icon && <span>{icon}</span>}
          {title}
        </HeaderContent>
        <ToggleIcon>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </ToggleIcon>
      </AccordionHeader>
      
      <AccordionContent $isOpen={isOpen}>
        <ContentInner>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </ContentInner>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Accordion;