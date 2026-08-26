import Image from "next/image";

export default function Faqs() {
  return (
    <div className="rbt-accordion-area accordion-style-1 rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-start">
                <span className="subtitle bg-pink-opacity">FAQ</span>
                <h2 className="title">
                  Have a Question with <br />
                  Unimart E-commerce Website?
                </h2>
                <p className="description has-medium-font-size mt--20 mb--40">
                  <strong>Its an e-commerce platform</strong> Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since
                </p>
              </div>
              <div className="rbt-accordion-style rbt-accordion-02 accordion">
                <div className="accordion" id="accordionExampleb2">
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo1"
                        aria-expanded="true"
                        aria-controls="collapseTwo1"
                      >
                        What is Unimart ? How does it work?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo1"
                      data-bs-parent="#accordionExampleb2"
                    >
                      <div className="accordion-body card-body">
                        You can run Unimart easily. Any School, E-commerce
                        Website, College can be use this Unimart E-commerce
                        template for their e-commerce purpose. A Ecommerce can
                        be run their online leaning management system by Unimart
                        E-commerce template.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo2"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        How can I get the customer support?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo2"
                      data-bs-parent="#accordionExampleb2"
                    >
                      <div className="accordion-body card-body">
                        After purchasing the product need you any support you
                        can be share with us with sending mail to
                        <a href="mailto:rainbowit10@gmail.com">
                          rainbowit10@gmail.com
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo3"
                        aria-expanded="false"
                        aria-controls="collapseTwo3"
                      >
                        Can I get update regularly and For how long do I get
                        updates?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo3"
                      data-bs-parent="#accordionExampleb2"
                    >
                      <div className="accordion-body card-body">
                        Yes, We will get update the Unimart. And you can get it
                        any time. Next time we will comes with more feature. You
                        can be get update for unlimited times. Our dedicated
                        team works for update.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item card">
                    <h2
                      className="accordion-header card-header"
                      id="headingTwo4"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo4"
                        aria-expanded="false"
                        aria-controls="collapseTwo4"
                      >
                        15 Things To Know About E-commerce?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo4"
                      data-bs-parent="#accordionExampleb2"
                    >
                      <div className="accordion-body card-body">
                        If you're looking for random paragraphs, you've come to
                        the right place. When a random word or a random sentence
                        isn't quite enough, the next logical step is to find a
                        random paragraph.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail rbt-image-gallery-1 mb--80 text-end">
              <Image
                className="image-1 rbt-rounded--8 image-auto"
                data-parallax='{"x": 0, "y": 30}'
                alt="E-commerce Images"
                src="/assets/images/about/about-01.webp"
                width={992}
                height={1200}
              />
              <Image
                className="image-2 rbt-rounded--8 image-auto"
                data-parallax='{"x": 0, "y": 80}'
                alt="E-commerce Images"
                src="/assets/images/about/about-10.webp"
                width={816}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
