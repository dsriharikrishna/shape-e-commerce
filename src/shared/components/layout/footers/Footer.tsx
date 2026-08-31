"use client";

import Image from "next/image";
import Link from "next/link";
import { letUsHelpYouLinks, makeMoneyWithUsLinks, getToKnowUsLinks } from "@/shared/data/footerLinks";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-50 pt-12">
        <div className="w-full pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-10 mt-[-24px]">
              <div className="w-full md:w-1/2 mt-6">
                <div className="footer-widget">
                  <div className="flex justify-start">
                    <ul className="flex items-center text-sm text-gray-500 gap-2 m-0 p-0 list-none">
                      <li>
                        <Link href={`/`} className="hover:text-primary transition-colors">Home</Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-chevron-right text-[10px]" />
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary transition-colors">Products</a>
                      </li>
                      <li>
                        <i className="fa-solid fa-chevron-right text-[10px]" />
                      </li>
                      <li className="text-gray-900 font-medium">Shop</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-6">
                <div className="footer-widget">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-4">
                    <p className="font-medium mb-0 text-sm">Follow Us :</p>
                    <ul className="flex items-center gap-3 text-gray-600 list-none p-0 m-0">
                      <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
                          <i className="fa-brands fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-all">
                          <i className="fa-brands fa-telegram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start WaterMark */}
            <div className="row">
              <div className="col-12">
                <div className="rbt-watermark-text rbt-watermark-color-var-1">
                  <span>Follow@TryShape</span>
                </div>
              </div>
            </div>
            {/* End WaterMark */}
            <div className="row mt_dec--24">
              <div className="col-12">
                <hr className="rbt-separator m-0" />
              </div>
            </div>
            <div className="row row--12 pt--8 justify-content-between rbt-footer-nav-wrapper mt_dec--24">
              <div className="col-12 col-sm-6 col-lg-2 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Let Us Help You</h5>
                                    <ul className="ft-link">
                    {letUsHelpYouLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-2 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Make Money with Us</h5>
                                    <ul className="ft-link">
                    {makeMoneyWithUsLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 col-xxl-2 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">Contact Us</h5>
                  <ul className="ft-link">
                    <li>
                      <span>
                        <i className="fa-regular fa-phone mr--4" />
                        <span className="rbt-text-bold"> Phone:</span>
                        <a className="contact-link" href="tel:+1234567890">
                          +1234 567 890
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-envelope mr--4" />
                        <span className="rbt-text-bold"> Email:</span>
                        <a
                          className="contact-link"
                          href="mailto:someone@example.com"
                        >
                          info@rbtshop.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-location-dot mr--4" />
                        <span className="rbt-text-bold">Location:</span>
                        401 Broadway, 24th floor, orchard view london, UK
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid pt--56">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-bg-color-gray-100" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 pb--32 pt--32">
          <div className="container">
            <div className="row align-items-center justify-content-between row--12 mt_dec--24">
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright 2026 ®
                  <a
                    href="https://rainbowthemes.net/"
                    className="rbt-text-semi-bold"
                  >
                    TryShape
                  </a>
                  Nextjs Template.
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-12 mt--24">
                <ul className="payment-img-link">
                  <li>
                    <a href="#!">
                      <Image
                        alt="eCommerce Brand Image"
                        src="/assets/images/payment-brand/image-01.webp"
                        width={812}
                        height={64}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt--24">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-start justify-content-xl-end mt_sm--12 mt_md--12 mt_lg--12">
                  <li>
                    <Link href={`/return-policy`}>Refund policy</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link href={`/terms-policy`}>Terms &amp; conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Copyright Area  */}
      </footer>{" "}
    </>
  );
}
