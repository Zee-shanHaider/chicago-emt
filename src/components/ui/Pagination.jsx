import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const MyPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination
      className="fixed-bottom-right"
      aria-label="Page navigation example"
    >
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink first href="#" onClick={() => onPageChange(1)} />
      </PaginationItem>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          href="#"
          previous
          onClick={() => onPageChange(currentPage - 1)}
        />
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page} active={page === currentPage}>
          <PaginationLink href="#" onClick={() => onPageChange(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink
          href="#"
          next
          onClick={() => onPageChange(currentPage + 1)}
        />
      </PaginationItem>
      <PaginationItem disabled={currentPage === totalPages}>
        <PaginationLink
          href="#"
          last
          onClick={() => onPageChange(totalPages)}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default MyPagination;
