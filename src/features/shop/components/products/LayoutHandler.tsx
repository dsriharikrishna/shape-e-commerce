export default function LayoutHandler() {
  return (
    <>
      <a
        href="#"
        className="tooltips"
        data-tooltip="List Style"
        data-tooltip-position="top"
      >
        <i className="fa-regular fa-list" />
      </a>
      <a
        href="#"
        className="tooltips"
        data-tooltip="Two Column"
        data-tooltip-position="top"
      >
        <i className="fa-regular fa-grid-2" />
      </a>
      <a
        className="active tooltips"
        href="#"
        data-tooltip="Three Column"
        data-tooltip-position="top"
      >
        <i className="fa-sharp fa-light fa-grid" />
      </a>
      <a
        href="#"
        className="tooltips"
        data-tooltip="Four Column"
        data-tooltip-position="top"
      >
        <i className="fa-sharp fa-light fa-grid-4" />
      </a>
    </>
  );
}
