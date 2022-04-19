import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section id="nft-banner" className="nft-banner-section position-relative">
      <span className="nft-shape1 position-absolute">
        <img src="assets/img/nft/banner/b-sh1.png" alt="banner content" />
      </span>
      <span className="nft-shape3 position-absolute">
        <img src="assets/img/nft/banner/b-sh2.png" alt="banner content" />
      </span>
      <span
        className="nft-shape4 position-absolute"
        data-parallax='{"x" : -250}'
      >
        <img src="assets/img/nft/banner/b-sh7.png" alt="banner content" />
      </span>
      <span
        className="nft-shape5 position-absolute"
        data-parallax='{"y" : 100, "rotateY":500}'
      >
        <img src="assets/img/nft/banner/b-sh6.png" alt="banner content" />
      </span>
      <div className="container">
        <div className="nft-banner-content position-relative">
          <div className="nft-banner-text nft-headline pera-content  position-relative">
            <span className="nft-shape2 position-absolute">
              <img src="assets/img/nft/banner/b-sh3.png" alt="banner content" />
            </span>
            <h1
              className="wow fadeFromUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              Welcome to Stocked KIDZ Club <span>NFTs.</span>
            </h1>
            <p
              className="wow fadeFromUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
             3000 Stocked KIDZ Club NFT utility collection, For your membership to the Treehouse Community, gives you exclusive access to member’s only Merch, Airdrops, upcoming Events, and much more, mint Now.
            </p>
            <div
              className="nft-btn wow fadeFromUp"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <Link
                className="d-flex justify-content-center align-items-center"
                to="#nft-gallery"
              >
                Discover Collection
              </Link>
            </div>
          </div>
          <div className="nft-banner-img position-absolute">
            <img
              data-tilt
              data-tilt-max="10"
              src="assets/img/nft/banner/b-sh8.png"
              alt="banner content"
            />
            <span className="img-shape position-absolute">
              <img src="assets/img/nft/banner/b-sh5.png" alt="banner content" />
            </span>
            <span className="img-shape2 position-absolute">
              <img src="assets/img/nft/banner/b-sh4.png" alt="banner content" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
