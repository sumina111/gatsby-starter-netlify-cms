import React from "react";
import navSvg from "../img/img/nav.svg";
import nav1Svg from "../img/img/nav1.svg";

const Navbar = class extends React.Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <div className="top-menu  scroll-reveal">
              <div className="menu">
                <div
                  className="title-bar"
                  data-responsive-toggle="main-nav"
                  data-hide-for="medium"
                >
                  <button
                    className="menu-icon dark"
                    type="button"
                    data-toggle="main-nav"
                  />
                  <div className="title-bar-title">Menu</div>
                </div>
                <nav
                  id="main-nav"
                  data-animate="menu-in menu-out"
                  style={{ zIndex: 10 }}
                >
                  <ul className="main-navigation">
                    <li>
                      <a className="m-anim" href="#" data-text="Home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="m-anim"
                        href="https://kriticraft.trustpass.alibaba.com"
                        target="-blank"
                        data-text="Specials"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a className="m-anim" href="#about-us" data-text="About">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="m-anim"
                        href="#testimonial"
                        data-text="Testimonial"
                      >
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <a
                        className="m-anim"
                        href="#contact-us"
                        data-text="Contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="a-slide slide1">
            <div className="container">
              <div
                className="bottom-section scroll-reveal"
                data-origin="right"
                data-distance="20%"
              >
                <h1 className="header-txt">
                  Best quality for respectable price
                </h1>
                <div className="divider">
                  <img src={navSvg} alt="nav bar" />
                </div>
              </div>
            </div>
          </div>
          <div className="a-slide slide2">
            <div className="container">
              <div className="bottom-section">
                <h1 className="header-txt">
                  We use high quality raw products.
                </h1>
                <div className="divider">
                  <img src={nav1Svg} alt="nav bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Navbar;
