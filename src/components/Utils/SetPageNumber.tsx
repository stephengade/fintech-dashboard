export const GetPageNumbers = (currentPage: number, totalPages: number) => {

      // Create an array of page numbers
  const pageNumbers = Array.from(Array(totalPages).keys()).map((i) => i + 1);

    if (totalPages <= 5) {
      // If there are 5 or fewer pages, return an array of all page numbers
      return pageNumbers
    }
    if (currentPage <= 3) {
      // If the current page is 3 or less, return the first 5 pages
      return [1, 2, 3, 4, 5];
    }
    if (currentPage >= totalPages - 2) {
      // If the current page is within 2 pages of the last page, return the last 5 pages
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    // Otherwise, return the first page, a ellipsis, the current page and the 2 pages before and after it, and a ellipsis followed by the last page
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };
  