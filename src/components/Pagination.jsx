import styled from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 8px;
`;

const PageLink = styled(Link)`
  padding: 8px 12px;
  border: 1px solid #ddd;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  background-color: ${(props) => (props.$active ? '#f0f0f0' : 'white')};
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Ellipsis = styled.span`
  padding: 8px;
`;

const Pagination = ({ totalPages }) => {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PageLink key={i} to={`/?page=${i}`} $active={i === currentPage}>
            {i}
          </PageLink>,
        );
      }
    } else {
      if (currentPage > 1) {
        pageNumbers.push(
            <PageLink key="prev" to={`/?page=${currentPage - 1}`}>
                &lt;
            </PageLink>
        )
      }
      pageNumbers.push(
        <PageLink key={1} to="/?page=1" $active={1 === currentPage}>
          1
        </PageLink>,
      );

      if (currentPage > 3) {
        pageNumbers.push(<Ellipsis key="start-ellipsis">...</Ellipsis>);
      }

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        startPage = 2
        endPage = 4
      }

      if (currentPage >= totalPages -1) {
          startPage = totalPages -3
          endPage = totalPages -1
      }


      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <PageLink key={i} to={`/?page=${i}`} $active={i === currentPage}>
            {i}
          </PageLink>,
        );
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push(<Ellipsis key="end-ellipsis">...</Ellipsis>);
      }

      pageNumbers.push(
        <PageLink
          key={totalPages}
          to={`/?page=${totalPages}`}
          $active={totalPages === currentPage}
        >
          {totalPages}
        </PageLink>,
      );

      if (currentPage < totalPages) {
        pageNumbers.push(
            <PageLink key="next" to={`/?page=${currentPage + 1}`}>
                &gt;
            </PageLink>
        )
      }
    }

    return pageNumbers;
  };

  return <PaginationContainer>{renderPageNumbers()}</PaginationContainer>;
};

export default Pagination;