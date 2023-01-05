import { useState } from "react";

export const usePagination = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // for pagination
  const pageNumbers = Array.from(Array(totalPages).keys()).map((i) => i + 1);

  // click events
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return {
    currentPage,
    setCurrentPage,
    pageNumbers,
    handlePrevClick,
    handleNextClick,
    totalPages,
    itemsPerPage
  };
};
