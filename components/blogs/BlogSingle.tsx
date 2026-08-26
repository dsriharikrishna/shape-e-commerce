import Image from "next/image";
import React from "react";
import BlogSidebar from "./BlogSidebar";

export default function BlogSingle() {
  return (
    <div className="rbt-component-area rbt-section-gap3Top rbt-blog-details-area rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--12">
          <div className="col-xl-9">
            {/* start thumbnail part */}
            <div className="rbt-blog-thumbnail rbt-curved-style-box">
              <div className="rbt-curved-style-box rbt-thumbnail-inner-image">
                <Image
                  alt="Blog thumbnail"
                  src="/assets/images/blog-details/blog-thumb-img-1.webp"
                  width={1872}
                  height={916}
                />
              </div>
            </div>
            {/* end thumbnail part */}
            {/* start meta part */}
            <div className="rbt-blog-post-meta">
              <ul className="rbt-blog-details-meta-list">
                <li>Hi-Fi Sound</li>
                <li className="single-post-meta-post-views">14 Nov 2022</li>
              </ul>
            </div>
            {/* end meta part */}
            <div className="rbt-blog-details-content">
              <div className="rbt-entry-content">
                {/* Start heading part */}
                <h1>
                  Amazfit GTR Titanium Edition and Austrian Zircon Version will
                  Officially on Exclusive Global Sale
                </h1>
                {/* End heading part */}
                {/* Start normal paragraph part */}
                <p>
                  Donec rhoncus quis diam sit amet faucibus. Vivamus
                  pellentesque, sem sed convallis ultricies, ante eros laoreet
                  libero, vitae suscipit lorem turpis sit amet lectus. Quisque
                  egestas lorem ut mauris ultrices, vitae sollicitudin quam
                  facilisis. Vivamus rutrum urna non ligula tempor aliquet.
                  Fusce tincidunt est magna, id malesuada massa imperdiet ut.
                  Nunc non nisi urna. Nam consequat est nec turpis eleifend
                  ornare. Vestibulum eu justo lobortis mauris commodo efficitur.
                  Nunc pulvinar pulvinar.
                </p>
                <p>
                  Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus,
                  vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel
                  auctor felis interdum at. Praesent quis fringilla justo. Ut
                  non dui at mi laoreet gravida vitae eu elit. Aliquam in elit
                  eget purus scelerisque efficitur vel ac sem. Etiam ante magna,
                  vehicula et vulputate in, aliquam sit amet metus. Donec mauris
                  eros, aliquet in nibh quis, semper suscipit nunc. Phasellus
                  ornare nibh vitae dapibus tempor.
                </p>
                {/* End normal paragraph part */}
                {/* Start blockquote part */}
                <blockquote className="rbt-block-quote">
                  <p>
                    Aliquam purus enim, fringilla vel nunc imperdiet, consequat
                    ultricies massa. Praesent sed turpis sollicitudin, dignissim
                    justo vel, fringilla mi.
                  </p>
                  <cite>
                    <a href="https://rainbowthemes.net/">Mark Twain</a>
                  </cite>
                </blockquote>
                {/* End blockquote part */}
                {/* Start normal paragraph part */}
                <p>
                  Donec rhoncus quis diam sit amet faucibus. Vivamus
                  pellentesque, sem sed convallis ultricies, ante eros laoreet
                  libero, vitae suscipit lorem turpis sit amet lectus. Quisque
                  egestas lorem ut mauris ultrices, vitae sollicitudin quam
                  facilisis. Vivamus rutrum urna non ligula tempor aliquet.
                  Fusce tincidunt est magna, id malesuada massa imperdiet ut.
                  Nunc non nisi urna. Nam consequat est nec turpis eleifend
                  ornare. Vestibulum eu justo lobortis mauris commodo efficitur.
                  Nunc pulvinar pulvinar.
                </p>
                <p>
                  Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus,
                  vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel
                  auctor felis interdum at. Praesent quis fringilla justo. Ut
                  non dui at mi laoreet gravida vitae eu elit. Aliquam in elit
                  eget purus scelerisque efficitur vel ac sem. Etiam ante magna,
                  vehicula et vulputate in, aliquam sit amet metus. Donec mauris
                  eros, aliquet in nibh quis, semper suscipit nunc. Phasellus
                  ornare nibh vitae dapibus tempor.
                </p>
                {/* End normal paragraph part */}
                <hr />
                {/* Start table part */}
                <h2>Tables</h2>
                <table>
                  <tbody>
                    <tr>
                      <th>Employee</th>
                      <th className="views">Salary</th>
                      <th />
                    </tr>
                    <tr className="odd">
                      <td>
                        <a href="http://john.do/">John Saddington</a>
                      </td>
                      <td>$1</td>
                      <td>
                        Because that’s all Steve Job’ needed for a salary.
                      </td>
                    </tr>
                    <tr className="even">
                      <td>
                        <a href="http://tommcfarlin.com/">Tom McFarlin</a>
                      </td>
                      <td>$100K</td>
                      <td>For all the blogging he does.</td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <a href="http://jarederickson.com/">Jared Erickson</a>
                      </td>
                      <td>$100M</td>
                      <td>
                        Pictures are worth a thousand words, right? So Tom x
                        1,000.
                      </td>
                    </tr>
                    <tr className="even">
                      <td>
                        <a href="http://chrisam.es/">Chris Ames</a>
                      </td>
                      <td>$100B</td>
                      <td>With hair like that?! Enough said…</td>
                    </tr>
                  </tbody>
                </table>
                {/* End table part */}
                {/* Start Definition Lists part */}
                <h2>Definition Lists</h2>
                <dl>
                  <dt>Definition List Title</dt>
                  <dd>Definition list division.</dd>
                  <dt>Startup</dt>
                  <dd>
                    A startup company or startup is a company or temporary
                    organization designed to search for a repeatable and
                    scalable business model.
                  </dd>
                  <dt>#dowork</dt>
                  <dd>
                    Coined by Rob Dyrdek and his personal body guard Christopher
                    “Big Black” Boykins, “Do Work” works as a self motivator, to
                    motivating your friends.
                  </dd>
                  <dt>Do It Live</dt>
                  <dd>
                    I’ll let Bill O’Reilly will
                    <a
                      title="We'll Do It Live"
                      href="https://www.youtube.com/watch?v=O_HyZ5aW76c"
                    >
                      explain
                    </a>
                    this one.
                  </dd>
                </dl>
                {/* Start Typography part */}
                <h2>Typography</h2>
                <h1>Header Level 3</h1>
                <h2>Header Level 2</h2>
                <h3>Header Level 3</h3>
                <h4>Header Level 4</h4>
                <h5>Header Level 5</h5>
                <h6>Header Level 6</h6>
                <h2>Unordered Lists (Nested)</h2>
                <ul>
                  <li>
                    List item one
                    <ul>
                      <li>
                        List item one
                        <ul>
                          <li>List item one</li>
                          <li>List item two</li>
                          <li>List item three</li>
                          <li>List item four</li>
                        </ul>
                      </li>
                      <li>List item two</li>
                      <li>List item three</li>
                      <li>List item four</li>
                    </ul>
                  </li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ul>
                <h2>Ordered List (Nested)</h2>
                <ol>
                  <li>
                    List item one
                    <ol>
                      <li>
                        List item one
                        <ol>
                          <li>List item one</li>
                          <li>List item two</li>
                          <li>List item three</li>
                          <li>List item four</li>
                        </ol>
                      </li>
                      <li>List item two</li>
                      <li>List item three</li>
                      <li>List item four</li>
                    </ol>
                  </li>
                  <li>List item two</li>
                  <li>List item three</li>
                  <li>List item four</li>
                </ol>
                <h2>HTML Tags</h2>
                <p>
                  These supported tags come from the WordPress.com code
                  <a title="Code" href="http://en.support.wordpress.com/code/">
                    FAQ
                  </a>
                  .
                </p>
                <p>
                  <strong>Address Tag</strong>
                </p>
                <address>
                  1 Infinite Loop
                  <br />
                  Cupertino, CA 95014
                  <br />
                  United States
                </address>
                <p>
                  <strong>Anchor Tag (aka. Link)</strong>
                </p>
                <p>
                  This is an example of a
                  <a title="Apple" href="http://apple.com">
                    link
                  </a>
                  .
                </p>
                <p>
                  <strong>Abbreviation Tag</strong>
                </p>
                <p>
                  The abbreviation <abbr title="Seriously">srsly</abbr> stands
                  for “seriously”.
                </p>
                <p>
                  <strong>Acronym Tag</strong>
                </p>
                <p>
                  The acronym <abbr title="For The Win">ftw</abbr> stands for
                  “for the win”.
                </p>
                <p>
                  <strong>Big Tag</strong>
                </p>
                <p>
                  These tests are a <big>big</big> deal, but this tag is no
                  longer supported in HTML5.
                </p>
                <p>
                  <strong>Cite Tag</strong>
                </p>
                <p>
                  “Code is poetry.” —<cite>Automattic</cite>
                </p>
                <p>
                  <strong>Code Tag</strong>
                </p>
                <p>
                  You will learn later on in these tests that
                  <code>word-wrap: break-word;</code> will be your best friend.
                </p>
                <p>
                  <strong>Delete Tag</strong>
                </p>
                <p>
                  This tag will let you <del>strikeout text</del>, but this tag
                  is no longer supported in HTML5 (use the
                  <code>&lt;strike&gt;</code> instead).
                </p>
                <p>
                  <strong>Emphasize Tag</strong>
                </p>
                <p>
                  The emphasize tag should <em>italicize</em> text.
                </p>
                <p>
                  <strong>Insert Tag</strong>
                </p>
                <p>
                  This tag should denote <ins>inserted</ins> text.
                </p>
                <p>
                  <strong>Keyboard Tag</strong>
                </p>
                <p>
                  This scarsly known tag emulates <kbd>keyboard text</kbd>,
                  which is usually styled like the
                  <code>&lt;code&gt;</code> tag.
                </p>
                <p>
                  <strong>Preformatted Tag</strong>
                </p>
                <p>This tag styles large blocks of code.</p>
                <pre>
                  .post-title {"{"}
                  {"\n"}
                  {"                                "}margin: 0 0 5px;{"\n"}
                  {"                                "}font-weight: bold;{"\n"}
                  {"                                "}font-size: 38px;{"\n"}
                  {"                                "}line-height: 1.2;{"\n"}
                  {"                                "}
                  {"}"}
                  {"\n"}
                  {"                            "}
                </pre>
                <p>
                  <strong>Quote Tag</strong>
                </p>
                <p>
                  <q>Developers, developers, developers…</q> –Steve Ballmer
                </p>
                <p>
                  <strong>Strong Tag</strong>
                </p>
                <p>
                  This tag shows{" "}
                  <strong>
                    bold<strong> text.</strong>
                  </strong>
                </p>
                <p>
                  <strong>Subscript Tag</strong>
                </p>
                <p>
                  Getting our science styling on with H<sub>2</sub>O, which
                  should push the “2” down.
                </p>
                <p>
                  <strong>Superscript Tag</strong>
                </p>
                <p>
                  Still sticking with science and Albert Einstein’s&nbsp;E = MC
                  <sup>2</sup>, which should lift the “2” up.
                </p>
                <p>
                  <strong>Teletype Tag</strong>
                </p>
                <p>
                  This rarely used tag emulates <code>teletype text</code>,
                  which is usually styled like the <code>&lt;code&gt;</code>{" "}
                  tag.
                </p>
                <p>
                  <strong>Variable Tag</strong>
                </p>
                <p>
                  This allows you to denote <var>variables</var>.
                </p>
                <div className="rbt-blog-categories-share">
                  {/* Start category part */}
                  <div className="rbt-blog-categories">
                    <ul className="rbt-blog-categories-list">
                      <li>
                        <a href="#">Cameras</a>
                      </li>
                      <li>
                        <a href="#">Gaming</a>
                      </li>
                      <li>
                        <a href="#">Mobile</a>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                    </ul>
                  </div>
                  {/* End category part */}
                  {/* Start social share */}
                  <ul className="rbt-blog-social-share">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest">
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="whatsapp">
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="discord">
                        <i className="fa-brands fa-discord" />
                      </a>
                    </li>
                  </ul>
                  {/* End social share */}
                </div>
                <hr />
                {/* Start comment part */}
                <div className="rbt-blog-comment-area">
                  <ul className="rbt-comment-list">
                    {/* Start Single Comment  */}
                    <li className="comment">
                      <div className="comment-body">
                        <div className="single-comment">
                          <div className="comment-img">
                            <Image
                              alt="Author Images"
                              src="/assets/images/blog-details/blog-commenter-1.webp"
                              width={96}
                              height={96}
                            />
                          </div>
                          <div className="comment-inner">
                            <h6 className="commenter">
                              <a href="#">Cameron Williamson</a>
                            </h6>
                            <div className="comment-meta">
                              <div className="time-spent">
                                Nov 23, 2018 at 12:23 pm
                              </div>
                            </div>
                            <div className="comment-text">
                              <p className="b1">
                                Duis hendrerit velit scelerisque felis tempus,
                                id porta libero venenatis. Nulla facilisi.
                                Phasellus viverra magna commodo dui lacinia
                                tempus. Donec malesuada nunc non dui posuere,
                                fringilla vestibulum urna mollis. Integer
                                condimentum ac sapien quis maximus.
                              </p>
                            </div>
                            <div className="reply-edit">
                              <div className="reply">
                                <a className="comment-reply-link" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="rbt-child-comment">
                        {/* Start Single Comment  */}
                        <li className="comment">
                          <div className="comment-body">
                            <div className="single-comment">
                              <div className="comment-img">
                                <Image
                                  alt="Author Images"
                                  src="/assets/images/blog-details/blog-commenter-2.webp"
                                  width={96}
                                  height={96}
                                />
                              </div>
                              <div className="comment-inner">
                                <h6 className="commenter">
                                  <a href="#">John Due</a>
                                </h6>
                                <div className="comment-meta">
                                  <div className="time-spent">
                                    Nov 23, 2018 at 12:23 pm
                                  </div>
                                </div>
                                <div className="comment-text">
                                  <p className="b1">
                                    Pellentesque habitant morbi tristique
                                    senectus et netus et malesuada fames ac
                                    turpis egestas. Suspendisse lobortis cursus
                                    lacinia. Vestibulum vitae leo id diam
                                    pellentesque ornare.
                                  </p>
                                </div>
                                <div className="reply-edit">
                                  <div className="reply">
                                    <a className="comment-reply-link" href="#">
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* End Single Comment  */}
                      </ul>
                    </li>
                    {/* End Single Comment  */}
                    {/* Start Single Comment  */}
                    <li className="comment">
                      <div className="comment-body">
                        <div className="single-comment">
                          <div className="comment-img">
                            <Image
                              alt="Author Images"
                              src="/assets/images/blog-details/blog-commenter-3.webp"
                              width={96}
                              height={96}
                            />
                          </div>
                          <div className="comment-inner">
                            <h6 className="commenter">
                              <a href="#">Rafin Shuvo</a>
                            </h6>
                            <div className="comment-meta">
                              <div className="time-spent">
                                Nov 23, 2018 at 12:23 pm
                              </div>
                            </div>
                            <div className="comment-text">
                              <p className="b1">
                                Duis hendrerit velit scelerisque felis tempus,
                                id porta libero venenatis. Nulla facilisi.
                                Phasellus viverra magna commodo dui lacinia
                                tempus. Donec malesuada nunc non dui posuere,
                                fringilla vestibulum urna mollis. Integer
                                condimentum ac sapien quis maximus.
                              </p>
                            </div>
                            <div className="reply-edit">
                              <div className="reply">
                                <a className="comment-reply-link" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* End Single Comment  */}
                  </ul>
                </div>
                {/* End comment part */}
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
