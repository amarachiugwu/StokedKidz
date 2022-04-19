import React from "react";

function FAQ() {
  return (
    <section id="nft-faq-video" className="nft-faq-video-section">
      <div className="container">
        <div className="nft-faq-video-content">
          <div className="nft-section-title  nft-headline pera-content">
            <h2>
              FAQs.{" "}
              <span className="right-icon">
                <img src="assets/img/nft/icon/title-icon4.png" alt="" />
              </span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="nft-faq-content">
                <div className="nft-faq-accordion position-relative">
                  <div className="accordion" id="accordionExample">
                    <div className="nft-faq">
                      <div className="nft-faq-header" id="headingOne">
                        <span>Q1</span>
                        <button
                          className=""
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-controls="collapseOne"
                        >
                          Public Sale, Raffle Draws & Crate Subscriptions
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="nft-faq-body">
                          <p>- V1 Stoked Kidz public sale is live</p>

                          <p>
                            - Once-a-week raffle draws in our discord where
                            community members holding our NFT stand a chance to
                            win different prizes.
                          </p>

                          <p>
                            - launch of the 1st Stoked Kidz crate subscriptions.
                            Lucky community members get exclusive crates with
                            varied rewards.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="nft-faq">
                      <div className="nft-faq-header" id="headingtwo">
                        <span>Q2</span>
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsetwo"
                          aria-controls="collapsetwo"
                        >
                          Marketing, Merch Store, Game Development & Hiring
                        </button>
                      </div>
                      <div
                        id="collapsetwo"
                        className="collapse"
                        data-parent="#accordionExample"
                      >
                        <div className="nft-faq-body">
                          <p>
                            - Intensified marketing, including reaching out to
                            prominent fashion brands for collaborations.
                          </p>

                          <p>- Merch Store to open for Stoked Kidz holders.</p>

                          <p>- Development of our game.</p>

                          <p>
                            - Hiring within the community for various positions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="nft-faq">
                      <div className="nft-faq-header" id="headingthree">
                        <span>Q3</span>
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsethree"
                          aria-controls="collapsethree"
                        >
                          Beta Game Deployment/Testing, V2 Airdrop & Clothing
                          line
                        </button>
                      </div>
                      <div
                        id="collapsethree"
                        className="collapse"
                        data-parent="#accordionExample"
                      >
                        <div className="nft-faq-body">
                          <p>
                            - Game developed and prototype ready for beta
                            testing.
                          </p>

                          <p>
                            - Beta testing period ( with rewards for beta
                            testers).
                          </p>

                          <p>- V2 Airdrop exclusive to holders.</p>

                          <p>- First drop from the Clothing line.</p>
                        </div>
                      </div>
                    </div>

                    <div className="nft-faq">
                      <div className="nft-faq-header" id="headingfour">
                        <span>Q4</span>
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          aria-controls="collapsefour"
                        >
                          Alpha Game Deployment, Car giveway & V2 Roadmap
                        </button>
                      </div>
                      <div
                        id="collapsefour"
                        className="collapse"
                        data-parent="#accordionExample"
                      >
                        <div className="nft-faq-body">
                          <p>- Our game will be finalized and goes live.</p>

                          <p>- Tesla Model 3 giveway to a lucky holder.</p>

                          <p>- V2 Road Map released.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
