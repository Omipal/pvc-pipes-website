interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center gap-1 mt-10 mb-4"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center justify-center min-w-8 h-8 px-2 text-sm font-medium border border-transparent rounded bg-transparent text-muted-foreground hover:text-primary hover:border-border disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        aria-label="Previous page"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`inline-flex items-center justify-center min-w-8 h-8 px-2 text-sm font-medium rounded transition-all cursor-pointer ${
            currentPage === page
              ? "border border-border bg-card text-foreground"
              : "border border-transparent bg-transparent text-muted-foreground hover:text-primary hover:border-border"
          }`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center justify-center min-w-8 h-8 px-2 text-sm font-medium border border-transparent rounded bg-transparent text-muted-foreground hover:text-primary hover:border-border disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        aria-label="Next page"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
