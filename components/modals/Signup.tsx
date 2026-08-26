"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useAuthStore } from "@/context/authStore";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dismissRef = useRef<HTMLButtonElement>(null);
  const setAuth = useAuthStore((s) => s.setAuth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          ...(phone ? { phone } : {}),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed. Please try again.");
      } else {
        setAuth(data.data.user, data.data.token);
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setError("");
        dismissRef.current?.click();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="rbt-default-modal has-rbt-top-folder-shape modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog rbt-register-form-modal modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="modal-header">
            <button
              ref={dismissRef}
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="modal-body p-0" style={{ overflowY: "auto" }}>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-login-form rbt-bg-color-white rbt-content-trs-portion">
              <div className="rbt-login-form-inner">
                <div className="rbt-login-form-top">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <h6
                    className="rbt-title rbt-text-bold mb--16"
                    id="signupModalLabel"
                  >
                    Create an Account
                  </h6>
                  <form onSubmit={handleSubmit}>
                    <div className="rbt-input-field-grp">
                      <label
                        className="rbt-field-label"
                        htmlFor="modal_register_name"
                      >
                        Full Name
                        <span className="rbt-text-color-danger">*</span>
                      </label>
                      <input
                        className="rbt-input-field"
                        placeholder="Enter your full name"
                        type="text"
                        id="modal_register_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        minLength={2}
                        autoComplete="name"
                      />
                    </div>
                    <div className="rbt-input-field-grp mt--16">
                      <label
                        className="rbt-field-label"
                        htmlFor="modal_register_email"
                      >
                        Email Address
                        <span className="rbt-text-color-danger">*</span>
                      </label>
                      <input
                        className="rbt-input-field"
                        placeholder="Enter your email"
                        type="email"
                        id="modal_register_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="rbt-input-field-grp mt--16">
                      <label
                        className="rbt-field-label"
                        htmlFor="modal_register_password"
                      >
                        Password
                        <span className="rbt-text-color-danger">*</span>
                      </label>
                      <input
                        className="rbt-input-field"
                        placeholder="Minimum 6 characters"
                        type="password"
                        id="modal_register_password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        autoComplete="new-password"
                      />
                    </div>
                    <div className="rbt-input-field-grp mt--16">
                      <label
                        className="rbt-field-label"
                        htmlFor="modal_register_phone"
                      >
                        Phone Number
                        <span className="pl--4" style={{ fontSize: "0.8em", opacity: 0.6 }}>(optional)</span>
                      </label>
                      <input
                        className="rbt-input-field"
                        placeholder="Enter your phone number"
                        type="tel"
                        id="modal_register_phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                    {error && (
                      <p
                        className="mt--12 mb--0"
                        style={{ color: "#e53e3e", fontSize: "0.875rem" }}
                      >
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="rbt-btn d-block w-100 mt--24 mb--16"
                      disabled={loading}
                    >
                      {loading ? "Creating account..." : "Create Account"}
                    </button>
                    <div className="rbt-check-group">
                      <input
                        id="login_checked2"
                        type="checkbox"
                        name="login"
                      />
                      <label htmlFor="login_checked2">Stay Logged In</label>
                    </div>
                  </form>
                  {/* Separator */}
                  <div className="d-flex align-items-center justify-content-center mb--24 mt--24">
                    <hr className="rbt-separator rbt-bg-color-gray-light mb--0" />
                    <span className="pl--8 pr--8 b4 rbt-text-medium">OR</span>
                    <hr className="rbt-separator rbt-bg-color-gray-light mb--0" />
                  </div>
                  {/* Start social login button */}
                  <button
                    type="button"
                    className="rbt-btn rbt-btn-border rbt-social-login-btn d-block w-100 mb--16 rbt-social-login-btn"
                  >
                    <Image
                      className="icon"
                      alt="Icon"
                      src="/assets/images/icons/fb-icon.webp"
                      width={37}
                      height={36}
                    />
                    Continue with Facebook
                  </button>
                  <button
                    type="button"
                    className="rbt-btn rbt-btn-border rbt-social-login-btn d-block w-100 rbt-social-login-btn"
                  >
                    <Image
                      className="icon"
                      alt="Icon"
                      src="/assets/images/icons/google-icon.webp"
                      width={36}
                      height={36}
                    />
                    Continue with Google
                  </button>
                  {/* End social login button */}
                  <div className="rbt-login-system-switch rbt-link-hover">
                    Already a customer?
                    <button
                      className="rbt-switch-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#signinModal"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span>Sign In</span>
                    </button>
                  </div>
                </div>
                {/* Start slider */}
                <div className="rbt-login-form-bottom rbt-swiper-container-pagination position-relative">
                  <div className="swiper rbt-log-slide-activation pb--40">
                    <div className="swiper-wrapper">
                      {[1, 2, 3, 4].map((i) => (
                        <div className="swiper-slide" key={i}>
                          <div className="rbt-client-review">
                            <ul className="rbt-rating-icon-list d-flex justify-content-center">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <li key={s}>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                              ))}
                            </ul>
                            <p className="rbt-review-text mt--8 mb--12">
                              &ldquo;The shirt fits great, very good quality of
                              the material. Training in it is pure pleasure.&rdquo;
                            </p>
                            <div className="d-flex flex-wrap justify-content-center rbt-gap--8">
                              <h6 className="mb--0">Szilágyi Erik</h6>
                              <div className="rbt-verified-badge badge-rounded">
                                <i className="fa-sharp fa-solid fa-shield-check" />
                                Verified Reviewer
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-pagination rbt-swiper-progress rbt-swiper-pagination-dot-extend" />
                  </div>
                </div>
                {/* End slider */}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
