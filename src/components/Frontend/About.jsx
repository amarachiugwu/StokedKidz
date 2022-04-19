import React from "react";

function About() {
  return (
    <section id="about" className="nft-live-bid-section">
      <div className="container">
            <div className="nft-section-title text-center  nft-headline pera-content">
            <h2 style={{ marginBottom : '30px' }}>
                About
            </h2>

            </div>
            <div className="nft-live-bid-items d-flex">
                <div className="thx-inner-item nft-headline">
                    
                    <p style={{ marginBottom : '20px' }}>
                    The Stocked KIDZ Club is a collection of 3000 NFT each with their own unique characteristics living on the Ethereum blockchain. your Stocked Kid acts as your membership to the Treehouse Community, and gives you exclusive access to member’s only Merch, Airdrops, upcoming Events, and much more.
                    </p>

                    <p style={{ marginBottom : '20px' }}>
                    We will also be working on a  play to earn game based on our NFT. Holders earn more reward playing games as compared to non-holders. Play in-game leagues and stand a chance to win awesome prizes.
                    </p>

                    <p >
                        Secure, Rewarding, Lowest Fees and Unlimited Rewards. We Have it all
                        to provide you the best experience to mint your first StokedKidz
                        NFT.
                    </p>

                </div>
                <div className="nft-live-bid-img">
                    <img src="assets/img/nft/banner/bid.png" alt="about image" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
