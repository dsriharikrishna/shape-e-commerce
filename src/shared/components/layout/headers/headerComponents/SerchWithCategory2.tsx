export default function SerchWithCategory2() {
  return (
    <div className="rbt-header-content d-none d-xl-block">
      <div className="header-info">
        <div className="rbt-search-with-category uni-header-swc-one uni-header-swc-lg">
          <form>
            <div className="rbt-inner-search-field border-0">
              <div className="rbt-search-input-section has-right-catagory-section rbt-inner-search-label-animate-activation">
                <div className="filter-select rbt-modern-select search-by-category">
                  <select className="rbt-select-activation">
                    <option>All Categories</option>
                    <option>Fashion</option>
                    <option>Furniture</option>
                    <option>Electronics</option>
                    <option>Beauty</option>
                  </select>
                </div>
                <input type="text" />
                <span className="cd-headline clip is-full-width">
                  <span className="cd-words-wrapper">
                    <b className="is-visible">Search for something...</b>
                    <b className="is-hidden">Looking for something specific?</b>
                    <b className="is-hidden">Explore what you need...</b>
                  </span>
                </span>
              </div>
              <button className="rbt-round-btn search-btn" type="submit">
                <i className="fa-sharp fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
