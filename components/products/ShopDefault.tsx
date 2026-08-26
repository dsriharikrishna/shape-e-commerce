"use client";
import Image from "next/image";
import { useEffect, useMemo, useReducer } from "react";
import { initialState, reducer } from "../reducer/filterReducer";
import { electronicsCardData } from "@/data/products/electronics";
import {
  setItemPerPage,
  setSorting,
  toggleTag,
} from "../reducer/filterActions";
import ProductCard9 from "../productCards/ProductCard9";
import FilterByTag from "./filterComponents/FilterByTag";
import DropdownSelect from "../common/DropdownSelect";
import ShopPagination from "./ShopPagination";
import FilterMeta from "./FilterMeta";
import Sidebar from "./Sidebar";
import LayoutHandler from "./LayoutHandler";
import SidebarScrollable from "./SidebarScrollable";

export default function ShopDefault({
  rightSidebar = false,
  stickyTop = false,
  sidebarScrollAble = false,
  loaderType = "pagination",
  column = 3,
  containerFull = false,
  defaultFilterTag = [] as string[],
}) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filtered: electronicsCardData,
    sorted: electronicsCardData,
    itemPerPage: column >= 4 ? column * 3 : column * 5,
    tag: defaultFilterTag,
  });
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: electronicsCardData });
  }, [
    state.brands,
    state.categories,
    state.colors,
    state.size,

    state.activeFilterOnSale,
    state.services,
    state.ratings,
    state.price,
    state.tag,
  ]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortingOption, state.filtered]);

  const visibleProducts = useMemo(() => {
    return state.sorted.slice(
      (state.currentPage - 1) * state.itemPerPage,
      state.currentPage * state.itemPerPage,
    );
  }, [state.sorted, state.currentPage, state.itemPerPage]);
  function getFilterCount(
    filterFunction: (product: (typeof electronicsCardData)[0]) => boolean,
  ) {
    return electronicsCardData.filter((product) => filterFunction(product))
      .length;
  }
  return (
    <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gapBottom">
      <div
        className={`${containerFull ? "rbt-full-width-wrapper" : "container"}`}
      >
        <div
          className={`row row--16 mt_dec--24  ${
            rightSidebar ? "flex-row-reverse" : ""
          } `}
        >
          <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt--24">
            <aside
              className={`rbt-sidebar has-rbt-fshape ${
                stickyTop ? "sticky-top" : ""
              }`}
            >
              <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one position-relative">
                <div className="rbt-sidebar-top">
                  <h6 className="rbt-sidebar-title">
                    <i className="fa-sharp fa-regular fa-filter-list mr--4" />
                    Filter &amp; Refine
                    <span className="rbt-fshape-right-portion">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={40}
                        viewBox="0 0 52 50"
                        fill="none"
                      >
                        <path
                          d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                          fill="var(--color-white)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                          fill="var(--color-gray-200)"
                        />
                      </svg>
                    </span>
                  </h6>
                </div>
                {sidebarScrollAble ? (
                  <SidebarScrollable
                    getFilterCount={getFilterCount}
                    state={state}
                    dispatch={dispatch}
                  />
                ) : (
                  <Sidebar
                    getFilterCount={getFilterCount}
                    state={state}
                    dispatch={dispatch}
                  />
                )}
              </div>
              <div className="rbt-sidebar-widget-wrapper">
                <div className="rbt-sidebar-widget-img">
                  <a href="#">
                    <Image
                      alt="Sidebar Banner"
                      src="/assets/images/sidebar/sidebar-banner-one.webp"
                      width={628}
                      height={840}
                    />
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 mt--24">
            <div className="row row--12">
              <div className="col-md-12">
                <div className="rbt-shop-tools-wrapper">
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper w-100">
                    <h6 className="rbt-shop-tools-title">Fast FIlter :</h6>
                    <div className="rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-rounded rbt-tag-list-var-one">
                      <FilterByTag
                        selectedItems={state.tag}
                        onChange={(value) =>
                          toggleTag(value, dispatch, state.tag)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="rbt-shop-tools-wrapper rbt-shop-tools-wrapper-var-one mt--20">
                  <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                    <h6 className="rbt-shop-tools-title">
                      Showing {(state.currentPage - 1) * state.itemPerPage + 1}–
                      {Math.min(
                        state.currentPage * state.itemPerPage,
                        state.sorted.length,
                      )}{" "}
                      of {state.sorted.length ?? 0} results
                    </h6>
                    <div className="rbt-shop-view-btn-list rbt-tag-list-rounded rbt-shop-view-menu">
                      <LayoutHandler />
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-view-sort-wrapper">
                    <div className="rbt-tools-select-single">
                      <h6 className="rbt-shop-tools-title">Sort :</h6>
                      <div className="rbt-modern-select rbt-shop-view-sort-select-one">
                        <DropdownSelect
                          selected={state.sortingOption}
                          onChange={(value) => setSorting(value, dispatch)}
                        />
                      </div>
                    </div>
                    <div className="rbt-tools-select-single">
                      <h6 className="rbt-shop-tools-title">Show :</h6>
                      <div className="rbt-modern-select rbt-shop-view-sort-select-two">
                        <DropdownSelect
                          selected={`${state.itemPerPage} Items`}
                          options={[
                            "15 Items",
                            "12 Items",
                            "9 Items",
                            "6 Items",
                            "3 Items",
                          ]}
                          onChange={(value) =>
                            setItemPerPage(
                              Number(value.split(" ")[0]),
                              dispatch,
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                    <div className="rbt-inner-search-field style-one rbt-search-field-rounded">
                      <input type="text" placeholder="Search for products" />
                      <button
                        className="rbt-round-btn search-btn"
                        type="submit"
                      >
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rbt-shop-tools-wrapper mt--20">
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper">
                    <FilterMeta state={state} dispatch={dispatch} />
                  </div>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="row row--12">
              {/* Start Single Card  */}
              {visibleProducts.map((product, i) => (
                <div
                  key={i}
                  className={`col-xxl-${
                    12 / column
                  } col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 prouduct-col mt--24`}
                >
                  <ProductCard9 product={product} />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
            <div className="row mt--40 mt_sm--16">
              <div className="col-12">
                {loaderType == "pagination" ? (
                  <ShopPagination state={state} dispatch={dispatch} />
                ) : (
                  <div className="rbt-load-morebtn-area text-center">
                    <a href="#" className="rbt-btn">
                      Load More <i className="fa-solid fa-spinner ml--4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
