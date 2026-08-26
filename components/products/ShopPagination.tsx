import { Dispatch } from "react";
import { setCurrentPage } from "../reducer/filterActions";
import { FilterState, FilterAction } from "@/types";

export default function ShopPagination({
  state,
  dispatch,
}: {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
}) {
  const totalPages = Math.ceil(state.sorted.length / state.itemPerPage);

  const setPage = (page: number) => {
    setCurrentPage(page, dispatch);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="rbt-pagination">
        {/* Previous */}
        <li>
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              if (state.currentPage > 1) setPage(state.currentPage - 1);
            }}
            aria-label="Previous"
          >
            <i className="fa-regular fa-chevron-left" />
          </a>
        </li>

        {/* Page numbers */}
        {pages.map((page) => (
          <li key={page} className={page === state.currentPage ? "active" : ""}>
            <a
              href="#!"
              className={page === state.currentPage ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setPage(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}

        {/* Next */}
        <li>
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              if (state.currentPage < totalPages)
                setPage(state.currentPage + 1);
            }}
            aria-label="Next"
          >
            <i className="fa-regular fa-chevron-right" />
          </a>
        </li>
      </ul>{" "}
    </nav>
  );
}
