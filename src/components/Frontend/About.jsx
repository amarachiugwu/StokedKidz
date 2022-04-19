import React from 'react'

function About() {
  return (
<section id="nft-live-bid" class="nft-live-bid-section">
    <div class="container">
        <div class="nft-section-title text-center  nft-headline pera-content">
            <h2> About <span class="right-icon"><img src="assets/img/nft/icon/title-icon4.png" alt="about image" /></span></h2>
            <p>Secure, Rewarding, Lowest Fees and Unlimited Rewards. We Have it all to provide you the best experience to mint your first StokedKidz NFT.</p>
        </div>
        <div class="nft-live-bid-content position-relative">
            <span class="nft-shape1 position-absolute"><img src="assets/img/nft/shape/cir2.png" alt="about image" /></span>
            <span class="nft-shape2 position-absolute"><img src="assets/img/nft/shape/sh3.png" alt="about image" /></span>
            <div class="nft-live-bid-slider owl-carousel">
                <div class="nft-live-bid-items d-flex">
                    <div class="thx-inner-item nft-headline">
                        <div class="thx-inner-title-text d-flex justify-content-between">
                            <div class="thx-inner-title">
                                <h3><a href="#">Diamond Horses Art #57</a></h3>
                            </div>
                            <div class="thx-inner-social d-flex">
                                <div class="nft-heart-count d-flex align-items-center justify-content-center">
                                    <i class="fas fa-heart"></i> 22
                                </div>
                                <div class="nft-social-share d-flex align-items-center justify-content-center">
                                    <i class="fas fa-share-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="thx-inner-author d-flex align-items-center">
                            <div class="author-img">
                                <img src="assets/img/nft/creator/bid-ath.png" alt="about image" />
                            </div>
                            <div class="author-text nft-headline">
                                <span>Created By</span>
                                <a href="#">@ Kevin Funes</a>
                            </div>
                        </div>
                        <div class="thx-inner-countdown">
                            <h3>Project's Ending:</h3> 
                            <div class="coming-countdown ul-li">
                                <ul class="countdown_timer clearfix" data-countdown="2022/8/24"></ul>
                            </div>    
                        </div>
                        <div class="thx-floor-price">
                            <h3>Floor Price:</h3>
                            <div class="thx-floor-price-btn d-flex">
                                <a class="d-flex justify-content-center align-items-center" href="#">8.803 ETH</a>
                                <a class="d-flex justify-content-center align-items-center" href="#">Place a Bid</a>
                            </div>
                        </div>
                    </div>
                    <div class="nft-live-bid-img">
                        <img src="assets/img/nft/banner/bid.png" alt="about image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 
  )
}

export default About