import React from "react";

function Footer() {
  return (
    <>
      <section id="nft-cta-2" className="nft-cta-section-2">
        <div className="container">
          <div className="nft-cta-content-2 nft-headline pera-content text-center">
            <div className="nft-section-title text-center  nft-headline pera-content">
              <h2>Join Our Treehouse</h2>
              <p>
                Rewarding Lowest Fees and Unlimited Rewards. We Have it all to
                best experience to buy your first StokedKidz NFT.
              </p>
            </div>
            <div className="nft-btn d-flex justify-content-center">
              <a
                target="_blank"
                className="d-flex align-items-center justify-content-center"
                href="https://discord.gg/yf5Hs5VYDa"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="nft-footer" className="nft-footer-section">
        <div className="nft-footer-content">
          <div className="container">
            <div className="nft-footer-widget-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="nft-footer-widget nft-headline pera-content ul-li">
                    <div className="logo-widget">
                      <div className="site-logo">
                        <a href="#">
                          <img
                            src="assets/img/nft/logo/logo.png"
                            alt="footer image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="nft-footer-widget nft-headline pera-content ul-li">
                    <div className="menu-widget">
                      <h3 className="widget-title">Useful LInks</h3>
                      <ul>
                        <li>
                          <a href="#nft-banner">Home</a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#roadmap">Roadmap</a>
                        </li>
                        <li>
                          <a href="#nft-gallery">Gallery</a>
                        </li>
                        {/* <li>
                          <a href="#nft-faq-video">FAQ</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="nft-footer-widget nft-headline pera-content ul-li">
                    <div className="menu-widget">
                      <h3 className="widget-title">Community</h3>
                      <ul>
                        {/* <li>
                          <a href="#">Facebook</a>
                        </li> */}
                        {/* <li>
                          <a href="#">Instagram</a>
                        </li> */}
                        <li>
                          <a
                            target="_blank"
                            href="https://twitter.com/stokedkidznft"
                          >
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://discord.gg/yf5Hs5VYDa"
                          >
                            Discord
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">Behance</a>
                        </li> */}
                        {/* <li>
                          <a href="#">Youtube</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft-footer-copyright">
          <div className="container">
            <div className="nft-footer-copyright-content  d-flex justify-content-between">
              <div className="copyright-text">
                Copyright@StokedKidz 2022. All rights reserved.
              </div>
              <div className="copyright-menu ul-li">
                {/* <ul>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
