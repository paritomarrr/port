/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  {/* <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3> */}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Tiffany Teo
                        </h6>
                        <span className="author-details">
                          Finance Manager at Tata Chemicals International Pte Ltd
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh is friendly and fast in delivering results. Dipesh provides the technical corporate tax knowledge and its application just when needed.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/2.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Lokesh Shah
                        </h6>
                        <span className="author-details">
                          Partner at Saraf and Partners
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh is an excellent resource. Very easy to work with, out-of-the box thinking and delivering in stressed times, were some of the key qualities that Dipesh demonstrated during his BMR stint.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/3.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Vishal Agarwal
                        </h6>
                        <span className="author-details">
                          Partner at Deloitte
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  I have worked with Dipesh from the day he joined BMR as an intern. He has been a reliable and efficient support.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Ackruti Sharma
                        </h6>
                        <span className="author-details">
                          Indirect tax - Manager
                        </span>
                      </div>
                    </div>
                  </div>
                  <p  style={{fontSize: '20px'}}>
                  Dipesh is a person who brings his own ideas to the table. He does not accept anything just because someone says it. He believes in giving a chance to his juniors and encourages them to use their own approach to tackle any issue.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/4.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Rashmi Soans
                        </h6>
                        <span className="author-details">
                          Principal at PwC
                        </span>
                      </div>
                    </div>
                  </div>
                  <p  style={{fontSize: '20px'}}>
                  Dipesh and I worked on several high-profile assignments, during our time at BMR and Associates. He was always keen to do work involving different regulations. He has an eye for detail, and can look at issues from various angles. He is very diligent, and is a good team player. 
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/6.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Ryan Fernandes
                        </h6>
                        <span className="author-details">
                          Partner at Gandhi Fernandes and Associates LLP
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh&apos;s clarity and ability to de-construct the task at hand ensured that an assignment was enjoyable. His enthusiasm and hard work made tight deadlines a competitive challenge which was accepted by his juniors thus portraying good leadership skills.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/6.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Nirali Kothari 
                        </h6>
                        <span className="author-details">
                          Intern at BMR and Associates
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh is a practical and hands on manager who leads his team from the front. He supports his team members in difficult situations and hand holds them through the process to accomplish the desired goals / results. He is meticulous, well planned, resilient and thorough in his work.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/7.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Kaustubh Durgaoli 
                        </h6>
                        <span className="author-details">
                          Tax Manager
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh is a great team member. He is skillful in planning his assignments and endeavours to complete them in an efficient manner. He is always helpful and supportive towards his team members. Maintains a good rapport with his peers and clients. In short, a great resource for any organisation.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/8.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Jatan Pathak
                        </h6>
                        <span className="author-details">
                          Chief Operating Officer at Andium
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  As a junior and a newcomer in the consultancy world, Dipesh was instrumental in guiding me into the so called &apos;corporate culture&apos;. His skills of understanding client needs, planning and managing work assignments effectively with multiple staff was very effective. In addition, Dipesh&apos;s approach towards work was dynamic and to-the point, not restricted to any pre-determined criterias.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/9.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Madhav Kanhere
                        </h6>
                        <span className="author-details">
                          Partner at Deloitte India
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh has a very practical approach to things and questions the validity of established work procedures, with a view to improve on them. He exhibits entrepreneurial thinking and not just a straight jacketed &apos;tax consultant&apos; approach.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/10.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Nazneen Hussain
                        </h6>
                        <span className="author-details">
                          Corporate Communications, Public Relations, and Marketing in Banking and Financial Services
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh has proved time and again that he is a valuable team player, a go-getter and he has a &apos;never say die&apos; attitude and can keep encouraging you to get things done as well. I wish him the very best for his bright future.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/11.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Samuel Ellis FCCA
                        </h6>
                        <span className="author-details">
                          Head of Finance at InterWorks Europe / Chairman: ACCA Global Technology Forum / Member: ACCA
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{fontSize: '20px'}}>
                  Dipesh is helpful and easy to work with. Dipesh provides the results we need and guides us well in areas of taxation.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
