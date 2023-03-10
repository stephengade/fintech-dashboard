import React, { useState } from "react";
import design from "./Utils.module.scss";

import { GrNext, GrPrevious } from "react-icons/gr";
import { GetPageNumbers } from "./SetPageNumber";


const nextIcon = <GrNext color="#213F7D" />;
const prevIcon = <GrPrevious color="#213F7D" />;

interface iPage {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: number | any;
  setItemsPerPage: any;
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setItemsPerPage,
  setCurrentPage
}: iPage) => {


  const [selectedItemsPerPage, setSelectedItemsPerPage] =
    useState(itemsPerPage);

  const totalPages = Math.ceil(totalItems / selectedItemsPerPage);

  // for pagination
  // const pageNumbers = Array.from(Array(totalPages).keys()).map((i) => i + 1);
  const pageNumbers = GetPageNumbers(currentPage, totalPages)
  // click events
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleItemsPerPageChange = (event: any) => {
    setSelectedItemsPerPage(event.target.value);
    setItemsPerPage(event.target.value);
  };

  return (
    <div className={design.pagination}>
      <label>
        Showing
        <select
          value={selectedItemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        out of {totalItems}
      </label>

      <div className={design.buttons}>
        <button
          className={design.skip}
          disabled={currentPage === 1}
          onClick={handlePrevClick}
        >
          {prevIcon}
        </button>

        {pageNumbers.map((pageNumber: any) => (
          <p
            key={pageNumber}
            className={
              currentPage === pageNumber ? design.active : design.notActive
            }
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </p>
        ))}

        <button
          className={design.skip}
          disabled={currentPage === totalPages}
          onClick={handleNextClick}
        >
          {nextIcon}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
