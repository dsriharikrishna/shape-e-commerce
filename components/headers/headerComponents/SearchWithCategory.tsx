"use client";
import TypeAnimation from "@/components/common/TypeAnimation";
import { useState } from "react";
const categories = [
  "All Categories",
  "Fashion",
  "Furniture",
  "Electronics",
  "Beauty",
];

export default function SearchWithCategory({
  parentClass = "rbt-search-with-category uni-header-swc-one uni-header-swc-md",
}) {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchParams, setSearchParams] = useState("");

  return (
    <div className={parentClass}>
      <form>
        <div className="rbt-inner-search-field border-0">
          <div className="rbt-search-input-section has-left-catagory-section rbt-inner-search-label-animate-activation">
            <div className="filter-select rbt-modern-select search-by-category">
              <div className="dropdown bootstrap-select rbt-select-activation">
                <button
                  type="button"
                  tabIndex={-1}
                  className="btn dropdown-toggle btn-light"
                  data-bs-toggle="dropdown"
                  aria-owns="bs-select-1"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  title="All Categories"
                >
                  <div className="filter-option">
                    <div className="filter-option-inner">
                      <div className="filter-option-inner-inner">
                        {activeCategory}
                      </div>
                    </div>{" "}
                  </div>
                </button>
                <div
                  className="dropdown-menu"
                  data-popper-placement="bottom-start"
                >
                  <div className="bs-searchbox">
                    <input
                      type="search"
                      onChange={(e) => setSearchParams(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div
                    className="inner show"
                    role="listbox"
                    id="bs-select-1"
                    tabIndex={-1}
                  >
                    <ul
                      className="dropdown-menu inner show"
                      role="presentation"
                      style={{ marginTop: 0, marginBottom: 0 }}
                    >
                      {categories
                        .filter((el) =>
                          el.toLowerCase().includes(searchParams.toLowerCase()),
                        )
                        .map((category) => (
                          <li
                            key={category}
                            className={`${
                              activeCategory === category
                                ? "selected active"
                                : ""
                            }`}
                            onClick={() => setActiveCategory(category)}
                          >
                            <a
                              className={`dropdown-item ${
                                activeCategory === category
                                  ? "selected active"
                                  : ""
                              }`}
                            >
                              <span className="text">{category}</span>
                            </a>
                          </li>
                        ))}
                      {!categories.filter((el) =>
                        el.toLowerCase().includes(searchParams.toLowerCase()),
                      ).length && (
                        <li className="no-results">
                          No results matched &quot;{searchParams}&quot;
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <input type="text" placeholder="" />
            <span className="cd-headline clip is-full-width">
              <TypeAnimation
                strings={[
                  "Search for something...",
                  "Looking for something specific?",
                  "Explore what you need...",
                ]}
              />
            </span>
          </div>
          <button className="rbt-round-btn search-btn" type="submit">
            <i className="fa-sharp fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>
    </div>
  );
}
