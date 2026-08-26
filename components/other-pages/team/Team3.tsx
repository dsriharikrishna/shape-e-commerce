"use client";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { useState } from "react";

export default function Team3() {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);
  return (
    <div className="rbt-team-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5">
          {/* Start Single Team  */}
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <a
                  className="rbt-team-thumbnail"
                  href="#"
                  onClick={(e) => {
                    setActiveMember(member);
                    e.preventDefault();
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div className="thumb">
                    {member.img && (
                      <Image
                        alt="Testimonial Images"
                        src={member.img}
                        width={415}
                        height={555}
                      />
                    )}
                  </div>
                </a>
              </div>
            </div>
          ))}
          {/* End Single Team  */}

          {/* Start Single Team  */}
          {teamMembers.slice(4, 10).map((member, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-12">
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <a
                  className="rbt-team-thumbnail"
                  href="#"
                  onClick={(e) => {
                    setActiveMember(member);
                    e.preventDefault();
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div className="thumb">
                    {member.img && (
                      <Image
                        alt="Testimonial Images"
                        src={member.img}
                        width={415}
                        height={555}
                      />
                    )}
                  </div>
                </a>
              </div>
            </div>
          ))}
          {/* End Single Team  */}
        </div>
        <div
          className="rbt-team-modal modal fade rbt-modal-default has-rbt-top-folder-shape"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
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
                  type="button"
                  className="rbt-round-btn rbt-modal-dis-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body rbt-top-folder-shape-wrapper">
                <div className="inner rbt-content-trs-portion">
                  <div className="row row--12">
                    <div className="col-lg-4">
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          {activeMember.img && (
                            <Image
                              className="w-100"
                              alt="Testimonial Images"
                              src={activeMember.img}
                              width={415}
                              height={555}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="rbt-team-details">
                        <div className="author-info">
                          <h4 className="title">{activeMember.name}</h4>
                          <span className="designation theme-gradient">
                            {activeMember.role}
                          </span>
                          <span className="team-form">
                            <i className="fa-regular fa-location-dot" />
                            <span className="location">CO Miego, AD,USA</span>
                          </span>
                        </div>
                        <p className="mb--16">
                          You can run Unimart easily. Any School, University,
                          College can be use this unimart E-commerce template
                          for their Commercial purpose. A university can be
                          success you.
                        </p>
                        <ul className="social-icon rbt-social-default mt--20 justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="fa-brands fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <i className="fa-brands fa-tiktok" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="fa-brands fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkdin.com/">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <ul className="rbt-information-list mt--24">
                          <li>
                            <a href="#">
                              <i className="fa-regular fa-phone" />
                              +1-202-555-0174
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@example.com">
                              <i className="fa-regular fa-envelope" />
                              example@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="top-circle-shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
