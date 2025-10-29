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

  const createPageLink = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    return `?${newParams.toString()}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const pageBuffer = 2;
    
    if (totalPages <= 1) return null;

    if (currentPage > 1) {
      pages.push(
        <PageLink key="prev" to={createPageLink(currentPage - 1)}>
          &lt;
        </PageLink>
      );
    }

    let startPage = Math.max(1, currentPage - pageBuffer);
    let endPage = Math.min(totalPages, currentPage + pageBuffer);

    if (currentPage - pageBuffer <= 1) {
      endPage = Math.min(totalPages, maxPagesToShow);
    }
    if (currentPage + pageBuffer >= totalPages) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }
    
    if (startPage > 1) {
      pages.push(
        <PageLink key={1} to={createPageLink(1)} $active={1 === currentPage}>
          1
        </PageLink>
      );
      if (startPage > 2) {
         pages.push(<Ellipsis key="start-ellipsis">...</Ellipsis>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageLink key={i} to={createPageLink(i)} $active={i === currentPage}>
          {i}
        </PageLink>
      );
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<Ellipsis key="end-ellipsis">...</Ellipsis>);
      }
      pages.push(
        <PageLink key={totalPages} to={createPageLink(totalPages)} $active={totalPages === currentPage}>
          {totalPages}
        </PageLink>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <PageLink key="next" to={createPageLink(currentPage + 1)}>
          &gt;
        </PageLink>
      );
    }

    return pages;
  };

  return <PaginationContainer>{renderPageNumbers()}</PaginationContainer>;
};

export default Pagination;