"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useAuthStore } from "@/shared/store/authStore";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

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
      className="modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable max-w-[550px] w-full mx-auto h-[100dvh] sm:h-auto my-0 sm:my-8">
        <div className="modal-content border-0 sm:rounded-3xl overflow-hidden shadow-2xl relative bg-white h-full sm:h-auto flex flex-col">
          
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-20">
            <button
              ref={dismissRef}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-black hover:text-white transition-all"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>
          </div>

          <div className="relative z-10 w-full flex flex-col pt-10 overflow-y-auto overflow-x-hidden flex-1">
            <div className="px-8 md:px-12 pb-8">
              <div className="flex flex-col items-center mb-8">
                <div className="mb-6">
                  <Link href={`/`}>
                    <Image
                      alt="Ecommerce Logo Images"
                      src="/assets/images/logo/logo.svg"
                      width={140}
                      height={32}
                    />
                  </Link>
                </div>
                <h6
                  className="text-2xl font-bold text-gray-900 m-0"
                  id="signupModalLabel"
                >
                  Create an Account
                </h6>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label
                    className="text-sm font-medium text-gray-700 flex items-center gap-1"
                    htmlFor="modal_register_name"
                  >
                    Full Name
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    className="h-12 px-4 rounded-xl border-gray-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm transition-all bg-gray-50 focus:bg-white"
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
                <div className="flex flex-col gap-2">
                  <Label
                    className="text-sm font-medium text-gray-700 flex items-center gap-1"
                    htmlFor="modal_register_email"
                  >
                    Email Address
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    className="h-12 px-4 rounded-xl border-gray-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                    type="email"
                    id="modal_register_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label
                    className="text-sm font-medium text-gray-700 flex items-center gap-1"
                    htmlFor="modal_register_password"
                  >
                    Password
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    className="h-12 px-4 rounded-xl border-gray-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm transition-all bg-gray-50 focus:bg-white"
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
                <div className="flex flex-col gap-2">
                  <Label
                    className="text-sm font-medium text-gray-700 flex items-center gap-1"
                    htmlFor="modal_register_phone"
                  >
                    Phone Number
                    <span className="text-xs text-gray-400 font-normal ml-1">(optional)</span>
                  </Label>
                  <Input
                    className="h-12 px-4 rounded-xl border-gray-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your phone number"
                    type="tel"
                    id="modal_register_phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                  />
                </div>
                {error && (
                  <p className="m-0 text-sm font-medium text-red-500">
                    {error}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <input
                    id="modal_login_checked2"
                    type="checkbox"
                    name="login"
                    className="rounded text-primary focus:ring-primary border-gray-300 w-4 h-4"
                  />
                  <Label htmlFor="modal_login_checked2" className="text-sm text-gray-600 font-normal cursor-pointer">
                    Stay Logged In
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all mt-2"
                  disabled={loading}
                >
                  {loading ? "Creating account..." : "Create Account"}
                </Button>
              </form>

              {/* Separator */}
              <div className="flex items-center justify-center gap-4 my-8">
                <span className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-bold text-gray-400 tracking-wider">OR</span>
                <span className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social Login */}
              <div className="flex flex-col gap-3">
                <Button
                  type="button"
                  className="w-full h-12 rounded-xl border-gray-200 text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 font-semibold shadow-sm transition-all" 
                  variant="outline"
                >
                  <Image
                    alt="Facebook"
                    src="/assets/images/icons/fb-icon.webp"
                    width={20}
                    height={20}
                  />
                  Continue with Facebook
                </Button>
                <Button
                  type="button"
                  className="w-full h-12 rounded-xl border-gray-200 text-gray-700 bg-white hover:bg-gray-50 flex items-center justify-center gap-3 font-semibold shadow-sm transition-all" 
                  variant="outline"
                >
                  <Image
                    alt="Google"
                    src="/assets/images/icons/google-icon.webp"
                    width={20}
                    height={20}
                  />
                  Continue with Google
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-600">
                Already a customer?
                <button
                  className="font-bold text-primary hover:underline underline-offset-4 transition-all"
                  data-bs-toggle="modal"
                  data-bs-target="#signinModal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="bg-gray-50 p-8 border-t border-gray-100 overflow-hidden shrink-0 mt-auto">
              <div className="swiper rbt-log-slide-activation w-full">
                <div className="swiper-wrapper">
                  {[1, 2, 3, 4].map((i) => (
                    <div className="swiper-slide w-full flex-shrink-0" key={i}>
                      <div className="flex flex-col items-center text-center max-w-[400px] mx-auto">
                        <ul className="flex items-center justify-center gap-1 text-orange-400 text-sm mb-3">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <li key={s}>
                              <i className="fa-solid fa-star" />
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm font-medium text-gray-600 italic mb-4 leading-relaxed">
                          &ldquo;The shirt fits great, very good quality of
                          the material. Training in it is pure
                          pleasure.&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-2 text-xs">
                          <h6 className="m-0 font-bold text-gray-900">Szilágyi Erik</h6>
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 rounded-full font-semibold">
                            <i className="fa-sharp fa-solid fa-shield-check" />
                            Verified
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination mt-6 flex justify-center gap-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
