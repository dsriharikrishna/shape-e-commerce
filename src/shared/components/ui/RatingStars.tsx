import React from "react";

export default function RatingStars({ rating = 5, starClass = "" }: { rating?: number; starClass?: string }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className={`fa-solid fa-star${i < rating ? " rbt-rated-icon" : ""} ${starClass}`} />
      </li>
    );
  }
  return <>{stars}</>;
}
