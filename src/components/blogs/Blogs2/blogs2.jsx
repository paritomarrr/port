/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Latest</h6>
              <h3>Trending Blogs</h3>
              {/* <p>
                We provide company and finance service for startups and company
                business.
              </p> */}
              <Link href="blog-list/blog-list-light/">
                <a>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/1.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a className="date">
                        <span>
                          <i>23</i> February 2020
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a className="tag">
                        <span>DEV</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a>
                      Flash Loans | Make profit in almost 14 secs - if you are smart enough. People have already started doing it.
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/2.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="https://dev.to/a_mature_dev/erc20-vs-erc777-quick-understanding-and-why-erc777-is-not-being-used-4lle">
                      <a className="date">
                        <span>
                          <i>15</i> February 2020
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://dev.to/a_mature_dev/erc20-vs-erc777-quick-understanding-and-why-erc777-is-not-being-used-4lle">
                      <a className="tag">
                        <span>DEV</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                      ERC20 vs ERC777 | Quick Understanding and why ERC777 is not being used
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/3.png" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>04</i> February 2020
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://dev.to/a_mature_dev/defining-roles-in-smart-contract-19l4">
                      <a className="tag">
                        <span>DEV</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="https://dev.to/a_mature_dev/defining-roles-in-smart-contract-19l4">
                      <a>
                      Defining Roles in Smart Contract | Why do we need Roles? | What are Roles? | How to do it?
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
