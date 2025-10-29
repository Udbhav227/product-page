import styled from "styled-components";
import { IoFilter } from "react-icons/io5";

const BarButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px; 
  width: 100%;
  background-color: #f9f7f4;
  border: none;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  .left-section {
    color: rgb(168, 123, 36);
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .right-section {
    font-size: 0.9rem;
    color: rgb(18, 18, 18);
  }
`;

const FilterAndSortBar = ({ productCount, onClick }) => (
  <BarButton onClick={onClick}>
    <div className="left-section">
      <IoFilter />
      Filter and sort
    </div>
    <div className="right-section">{productCount} products</div>
  </BarButton>
);

export default FilterAndSortBar;