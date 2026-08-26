"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/context/authStore";

export default function HeaderUserButton({
  className = "rbt-round-btn rbt-bg-static-gray",
}: {
  className?: string;
}) {
  const { user, token, clearAuth } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — auth state comes from localStorage
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLoggedIn = mounted && !!token;

  if (!isLoggedIn) {
    return (
      <a
        className={className}
        href="#!"
        data-bs-toggle="modal"
        data-bs-target="#signinModal"
      >
        <i className="fa-regular fa-user" />
      </a>
    );
  }

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <div className="dropdown">
      <button
        className={`${className} dropdown-toggle border-0 d-flex align-items-center gap-1`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: "transparent", padding: 0 }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "var(--color-primary, #333)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {initials}
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end"
        style={{ minWidth: 180, zIndex: 9999 }}
      >
        <li>
          <span
            className="dropdown-item-text fw-semibold"
            style={{ fontSize: "0.875rem" }}
          >
            {user?.name}
          </span>
          <span
            className="dropdown-item-text text-muted"
            style={{ fontSize: "0.75rem" }}
          >
            {user?.email}
          </span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={clearAuth}
            style={{ fontSize: "0.875rem" }}
          >
            <i className="fa-regular fa-right-from-bracket me-2" />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}
