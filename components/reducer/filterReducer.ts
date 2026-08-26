import { FilterState, FilterAction, Product } from "@/types";

export const initialState: FilterState = {
  price: [0, 1000],
  colors: [], // changed from single "color"
  size: "All",
  tag: [],
  activeFilterOnSale: false,
  brands: [],
  categories: [],
  ratings: [], // e.g. [4, 3]
  services: [], // e.g. ['Free Delivery', 'Hot Deals']
  filtered: [],
  sortingOption: "Sort by (Default)",
  sorted: [],
  currentPage: 1,
  itemPerPage: 15,
};

function matchesAllFilters(product: Product, state: FilterState): boolean {
  if (
    state.brands.length &&
    !state.brands.every((b) => product.filterBrands?.includes(b))
  )
    return false;

  if (
    state.categories.length &&
    !state.categories.every((c) => product.filterCategory?.includes(c))
  )
    return false;

  if (state.tag.length && !state.tag.some((t) => product.tags?.includes(t)))
    return false;

  if (
    state.colors.length &&
    !state.colors.some((color) => product.filterColor?.includes(color))
  )
    return false;

  const effectiveMin = state.price[0];
  const effectiveMax = state.price[1];
  if (product.price < effectiveMin || product.price > effectiveMax)
    return false;

  if (
    state.ratings.length &&
    !state.ratings.some((minRating) => product.rating ?? 0 >= minRating)
  )
    return false;

  if (
    state.services.length &&
    !state.services.every((s) => product.services?.includes(s))
  )
    return false;

  return true;
}

export function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };

    case "SET_CUSTOM_MIN":
      return { ...state, customMin: action.payload };

    case "SET_CUSTOM_MAX":
      return { ...state, customMax: action.payload };

    case "SET_COLORS":
      return { ...state, colors: action.payload };
    case "SET_TAGS":
      return { ...state, tag: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };

    case "SET_BRANDS":
      return { ...state, brands: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_RATINGS":
      return { ...state, ratings: action.payload };

    case "SET_SERVICES":
      return { ...state, services: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload, currentPage: 1 };

    case "FILTER_PRODUCTS": {
      const productsToFilter = [...action.payload];
      const filtered = productsToFilter.filter((product) =>
        matchesAllFilters(product, state)
      );
      return { ...state, filtered, currentPage: 1 };
    }

    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };

    case "SORT_PRODUCTS": {
      const sorted = [...state.filtered];
      switch (state.sortingOption) {
        case "Price Ascending":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "Price Descending":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "Title Ascending":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Title Descending":
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
      return { ...state, sorted, currentPage: 1 };
    }

    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload, currentPage: 1 };

    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };

    case "CLEAR_FILTER":
      return {
        ...state,
        price: [0, 1000],

        colors: [], // changed from single "color"
        size: "All",
        tag: [],
        activeFilterOnSale: false,
        brands: [],
        categories: [],
        ratings: [], // e.g. [4, 3]
        services: [], // e.g. ['Free Delivery', 'Hot Deals']

        sortingOption: "Sort by (Default)",
      };

    default:
      return state;
  }
}
