import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

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
  background-color: ${(props) => (props.$active ? "#f0f0f0" : "white")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Ellipsis = styled.span`
  padding: 8px;
`;

const Pagination = ({ totalPages }) => {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 1) {
      return null;
    }

    if (currentPage > 1) {
      pageNumbers.push(
        <PageLink key="prev" to={`/?page=${currentPage - 1}`}>
          &lt;
        </PageLink>
      );
    }

    pageNumbers.push(
      <PageLink key={1} to="/?page=1" $active={1 === currentPage}>
        1
      </PageLink>
    );

    if (currentPage > 2) {
      pageNumbers.push(<Ellipsis key="start-ellipsis">...</Ellipsis>);
    } else if (currentPage === 1 && totalPages > 2) {
      pageNumbers.push(
        <PageLink key={2} to="/?page=2" $active={false}>
          2
        </PageLink>
      );
    }

    if (currentPage > 1 && currentPage < totalPages) {
      pageNumbers.push(
        <PageLink key={currentPage} to={`/?page=${currentPage}`} $active={true}>
          {currentPage}
        </PageLink>
      );
    }

    if (currentPage < totalPages - 1) {
      pageNumbers.push(<Ellipsis key="end-ellipsis">...</Ellipsis>);
    } else if (currentPage === totalPages && totalPages > 2) {
      pageNumbers.push(
        <PageLink
          key={totalPages - 1}
          to={`/?page=${totalPages - 1}`}
          $active={false}
        >
          {totalPages - 1}
        </PageLink>
      );
    }

    pageNumbers.push(
      <PageLink
        key={totalPages}
        to={`/?page=${totalPages}`}
        $active={totalPages === currentPage}
      >
        {totalPages}
      </PageLink>
    );

    if (currentPage < totalPages) {
      pageNumbers.push(
        <PageLink key="next" to={`/?page=${currentPage + 1}`}>
          &gt;
        </PageLink>
      );
    }

    return pageNumbers;
  };

  return <PaginationContainer>{renderPageNumbers()}</PaginationContainer>;
};

export default Pagination;
