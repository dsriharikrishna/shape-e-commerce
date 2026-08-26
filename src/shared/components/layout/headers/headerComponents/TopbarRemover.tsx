"use client";

export default function TopbarRemover() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Find the closest .rbt-header-campaign ancestor and add the "deactivate" class
    const headerCampaign = e.currentTarget.closest(".rbt-header-campaign");
    if (headerCampaign) {
      headerCampaign.classList.add("deactivate");
    }
  };

  return (
    <button
      className="rbt-round-btn btn-white-off bg-section-activation"
      onClick={handleClick}
    >
      <i className="fa-solid fa-xmark" />
    </button>
  );
}
