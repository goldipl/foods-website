import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  scrollTargetId?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  scrollTargetId,
}) => {
  const changePage = (page: number) => {
    onPageChange(page);

    if (!scrollTargetId) return;

    document.getElementById(scrollTargetId)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  const prevPage = () => {
    if (currentPage > 1) changePage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) changePage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={prevPage}>
        <span className="arrow-icon left">&#10132;</span> Poprzednia
      </button>

      <span className="pages">
        Strona {currentPage} z {totalPages}
      </span>

      <button disabled={currentPage === totalPages} onClick={nextPage}>
        Następna <span className="arrow-icon right">&#10132;</span>
      </button>
    </div>
  );
};

export default Pagination;
