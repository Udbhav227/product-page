import { useState, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useSearchParams } from "react-router-dom";
import FilterAndSortBar from "../components/FilterAndSortBar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import mockProducts from "../components/mockProducts";
import FilterSidebar from "../components/FilterSidebar";

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

const getPriceRange = (products) => {
  if (products.length === 0) {
    return { min: 0, max: 0 };
  }
  const prices = products.map((p) => p.sale_price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

const ProductListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const sort = searchParams.get("sort") || "default";
  const minPrice = searchParams.get("min_price");
  const maxPrice = searchParams.get("max_price");
  const onSale = searchParams.get("on_sale") === "true";

  const currentParams = { sort, minPrice, maxPrice, onSale };

  const priceRange = useMemo(() => getPriceRange(mockProducts), []);

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts];

    if (onSale) {
      products = products.filter((p) => p.is_sale);
    }
    if (minPrice) {
      products = products.filter((p) => p.sale_price >= Number(minPrice));
    }
    if (maxPrice) {
      products = products.filter((p) => p.sale_price <= Number(maxPrice));
    }

    if (sort === "price_asc") {
      products.sort((a, b) => a.sale_price - b.sale_price);
    } else if (sort === "price_desc") {
      products.sort((a, b) => b.sale_price - a.sale_price);
    }

    return products;
  }, [sort, minPrice, maxPrice, onSale]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleApplyFilters = (newParams) => {
    const newSearchParams = new URLSearchParams();

    newSearchParams.set("page", "1");

    if (newParams.sort && newParams.sort !== "default") {
      newSearchParams.set("sort", newParams.sort);
    }
    if (newParams.minPrice) {
      newSearchParams.set("min_price", newParams.minPrice);
    }
    if (newParams.maxPrice) {
      newSearchParams.set("max_price", newParams.maxPrice);
    }
    if (newParams.onSale) {
      newSearchParams.set("on_sale", "true");
    }

    setSearchParams(newSearchParams);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <FilterAndSortBar
          productCount={filteredProducts.length}
          onClick={() => setIsSidebarOpen(true)}
        />
        <ProductGrid products={currentProducts} />
        <Pagination totalPages={totalPages} />
      </MainContainer>

      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onApply={handleApplyFilters}
        currentParams={currentParams}
        priceRange={priceRange}
      />
    </>
  );
};

export default ProductListingPage;
