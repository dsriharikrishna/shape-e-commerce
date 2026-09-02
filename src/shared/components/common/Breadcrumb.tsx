import Link from "next/link";
export default function Breadcrumb({
  subtitle = "Products",
  title = "Compare",
  className = "rbt-breadcrumb-two rbt-bg-color-white",
  hasHrLine = false,
  align = "left", // "left" | "center"
  dataBlackOverlay,
  subtitleHref = "/shop", // Default redirect for "Products"
}: {
  subtitle?: string | null;
  subtitleHref?: string;
  title?: string;
  className?: string;
  hasHrLine?: boolean;
  align?: "left" | "center";
  dataBlackOverlay?: number;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${className}`}
      {...(dataBlackOverlay ? { "data-black-overlay": dataBlackOverlay } : {})}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`rbt-breadcrumb-inner text-${
                isCenter ? "center" : "left"
              }`}
            >
              {isCenter && (
                <h2 className="rbt-breadcrumb-title h1">
                  <span>{title}</span>
                </h2>
              )}
              <ul
                className={`rbt-breadcrumb-page-list flex flex-row items-center flex-wrap gap-2 ${
                  !isCenter ? "justify-content-start mt--0" : ""
                }`}
              >
                <li className="rbt-breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </li>

                {subtitle ? (
                  <>
                    <li className="rbt-breadcrumb-item">
                      {subtitleHref ? (
                        <Link href={subtitleHref}>{subtitle}</Link>
                      ) : (
                        <span>{subtitle}</span>
                      )}
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </li>{" "}
                  </>
                ) : (
                  ""
                )}
                <li className="rbt-breadcrumb-item active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
        {hasHrLine ? (
          <hr className="rbt-separator rbt-separator-gray100 mt--24 mb--0" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
