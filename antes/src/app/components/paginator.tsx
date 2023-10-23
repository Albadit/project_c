import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Paginator = (props: Props) => {
  const pagesToShow = Array.from({ length: props.totalPages }, (_, index) => index + 1);
  return (
    <nav>
      <ul>
        <li><a href="#">Previous</a></li>
        {pagesToShow.map((page) => (
        <li key={page}
          className={page === props.currentPage ? 'active' : ''}
          onClick={() => props.onPageChange(page)}
        >
          <a href="#">{page}</a>
        </li>
        ))}
        <li><a href="#">Next</a></li>
      </ul>
    </nav>
  );
}
