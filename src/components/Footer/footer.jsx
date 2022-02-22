/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Singapore</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>me@dipeshsukhani.dev</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Blogs</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a>
                        <img src="/img/blog/1.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a>
                        <p>
                        Flash Loans | Make profit in almost 14 secs - if you are smart enough. People have already started doing it.
                        </p>
                      </a>
                    </Link>
                    <Link href="https://dev.to/a_mature_dev/flash-loans-make-profit-in-almost-14-secs-if-you-are-smart-enough-people-have-already-started-doing-it-3hge">
                      <a>
                        <span className="date">23 Feb 2020</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="https://dev.to/a_mature_dev/erc20-vs-erc777-quick-understanding-and-why-erc777-is-not-being-used-4lle">
                      <a>
                        <img src="/img/blog/2.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="https://dev.to/a_mature_dev/erc20-vs-erc777-quick-understanding-and-why-erc777-is-not-being-used-4lle">
                      <a>
                        <p>
                        ERC20 vs ERC777 | Quick Understanding and why ERC777 is not being used
                        </p>
                      </a>
                    </Link>
                    <Link href="https://dev.to/a_mature_dev/erc20-vs-erc777-quick-understanding-and-why-erc777-is-not-being-used-4lle">
                      <a>
                        <span className="date">15 Feb 2020</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.darkLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://github.com/amateur-dev">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/amateurdev2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/dipeshsukhani/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://dev.to/a_mature_dev">
                <i className="fab fa-google"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © Last updated Feb 2022
                  {/* <Link
                    href="https://themeforest.net/user/themescamp/portfolio"
                    
                  >
                    <a target="_blank">ThemesCamp</a>
                  </Link> */}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
