import styled from "styled-components";
import { IoFilter } from "react-icons/io5";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  .left-section {
    color: rgb(168, 123, 36);
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 0.9;
    font-weight: 500;
  }

  .right-section {
    font-size: 0.9;
    color: rgb(18, 18, 18);
  }
`;

const FilterAndSortBar = ({ productCount }) => (
  <Bar>
    <div className="left-section">
      <IoFilter /> 
      Filter and sort
    </div>
    <div className="right-section">{productCount} products</div>
  </Bar>
);

export default FilterAndSortBar;
