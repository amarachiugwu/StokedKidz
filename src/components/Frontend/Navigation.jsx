import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header id="nft-header" className="nft-header-section">
      <div className="container">
        <div className="nft-main-navigation-wrapper d-flex justify-content-between position-relative">
          <div className="nft-brand-logo">
            <Link to="#nft-banner">
              <img src="assets/img/nft/logo/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="nft-navigation-menu d-flex align-items-center">
            <nav className="nft-main-navigation  clearfix ul-li">
              <ul id="nft-main-nav" className="nav navbar-nav clearfix">
                <li>
                  {" "}
                  <Link className="nav-link" to="#nft-banner">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="nav-link" to="#about">
                    About
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="nav-link" to="#roadmap">
                    Roadmap
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="nav-link" to="#nft-gallery">
                    Nft Gallery
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="nav-link" to="#team">
                    Team
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="nav-link" to="#nft-faq-video">
                    FAQ
                  </Link>
                </li>
                {/* <li>
                  {" "}
                  <a
                    className="nav-link"
                    target="_blank"
                    href="/whitepaper.txt"
                  >
                    Whitepaper
                  </a>
                </li> */}
              </ul>
            </nav>
            <div className="nft-btn text-center">
              <Link
                className="d-flex justify-content-center align-items-center"
                to="#"
              >
                <img src="assets/img/nft/icon/ic1.png" alt="wallet" />
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
        <div className="nft-mobile_menu position-relative">
          <div className="nft-mobile_menu_button nft-open_mobile_menu">
            <i className="fas fa-bars"></i>
          </div>
          <div className="nft-mobile_menu_wrap">
            <div className="mobile_menu_overlay nft-open_mobile_menu"></div>
            <div className="nft-mobile_menu_content">
              <div className="nft-mobile_menu_close nft-open_mobile_menu">
                <i className="fas fa-times"></i>
              </div>
              <div className="m-brand-logo text-center">
                <Link to="#nft-banner">
                  <img src="assets/img/nft/logo/logo.png" alt="Logo" />
                </Link>
              </div>
              <nav className="nft-mobile-main-navigation  clearfix ul-li">
                <ul
                  id="m-main-nav"
                  className="navbar-nav text-capitalize clearfix"
                >
                  <li>
                    {" "}
                    <Link className="nav-link" to="#nft-banner">
                      Home
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="nav-link" to="#about">
                      About
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="nav-link" to="#roadmap">
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="nav-link" to="#nft-gallery">
                      Nft Gallery
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="nav-link" to="#team">
                      Team
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="nav-link" to="#nft-faq-video">
                      FAQ
                    </Link>
                  </li>
                  {/* <li>
                    {" "}
                    <a
                      className="nav-link"
                      target="_blank"
                      href="whitepaper.txt"
                    >
                      Whitepaper
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
