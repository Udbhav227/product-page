import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FiX } from 'react-icons/fi';

const LockBodyScroll = createGlobalStyle`
  body {
    overflow: ${props => props.$isOpen ? 'hidden' : 'auto'};
  }
`;

const SidebarBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-color: #f9f7f4;
  z-index: 1001;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
  }
`;

const SidebarBody = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FilterGroup = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 25px;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

const SortOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`;

const PriceRangeInputs = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  div {
    flex: 1;
    position: relative;
  }
  
  span {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
  
  input {
    width: 100%;
    padding: 10px 10px 10px 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  
  input {
    width: 1.2em;
    height: 1.2em;
  }
`;

const SidebarFooter = styled.footer`
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const ActionButton = styled.button`
  padding: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #1a1a1a;
  
  background-color: ${props => props.$primary ? '#1a1a1a' : '#f9f7f4'};
  color: ${props => props.$primary ? 'white' : '#1a1a1a'};
  
  &:hover {
    opacity: 0.8;
  }
`;


const FilterSidebar = ({ isOpen, onClose, onApply, currentParams, priceRange }) => {
  const [sort, setSort] = useState(currentParams.sort || 'default');
  const [minPrice, setMinPrice] = useState(currentParams.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(currentParams.maxPrice || '');
  const [onSale, setOnSale] = useState(currentParams.onSale || false);

  useEffect(() => {
    setSort(currentParams.sort || 'default');
    setMinPrice(currentParams.minPrice || '');
    setMaxPrice(currentParams.maxPrice || '');
    setOnSale(currentParams.onSale || false);
  }, [currentParams, isOpen]);

  const handleApply = () => {
    onApply({
      sort,
      minPrice,
      maxPrice,
      onSale,
    });
    onClose();
  };

  const handleClear = () => {
    setSort('default');
    setMinPrice('');
    setMaxPrice('');
    setOnSale(false);
    onApply({
      sort: 'default',
      minPrice: '',
      maxPrice: '',
      onSale: false,
    });
    onClose();
  };
  
  const { min: globalMin, max: globalMax } = priceRange;

  return (
    <>
      <LockBodyScroll $isOpen={isOpen} />
      <SidebarBackdrop $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <SidebarHeader>
          <h2>Filter and sort</h2>
          <button onClick={onClose} aria-label="Close filters">
            <FiX />
          </button>
        </SidebarHeader>

        <SidebarBody>
          <FilterGroup>
            <h3>Sort by</h3>
            <SortOptions>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="default"
                  checked={sort === 'default'}
                  onChange={(e) => setSort(e.target.value)}
                />
                Featured
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="price_asc"
                  checked={sort === 'price_asc'}
                  onChange={(e) => setSort(e.target.value)}
                />
                Price, low to high
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="price_desc"
                  checked={sort === 'price_desc'}
                  onChange={(e) => setSort(e.target.value)}
                />
                Price, high to low
              </label>
            </SortOptions>
          </FilterGroup>

          <FilterGroup>
            <h3>Price</h3>
            <PriceRangeInputs>
              <div>
                <span>Rs.</span>
                <input
                  type="number"
                  placeholder={`Min (${globalMin.toLocaleString('en-IN')})`}
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min="0"
                />
              </div>
              <div>
                <span>Rs.</span>
                <input
                  type="number"
                  placeholder={`Max (${globalMax.toLocaleString('en-IN')})`}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min="0"
                />
              </div>
            </PriceRangeInputs>
          </FilterGroup>
          
          <FilterGroup>
             <h3>Availability</h3>
             <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={onSale}
                  onChange={(e) => setOnSale(e.target.checked)}
                />
                On Sale
             </CheckboxLabel>
          </FilterGroup>

        </SidebarBody>

        <SidebarFooter>
          <ActionButton onClick={handleClear}>
            Clear
          </ActionButton>
          <ActionButton $primary onClick={handleApply}>
            Apply
          </ActionButton>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default FilterSidebar;