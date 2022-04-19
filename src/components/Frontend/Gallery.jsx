import React from 'react'

function Gallery() {
  return (
    <section id="nft-gallery" className="nft-market-place-section position-relative">
        <span className="nft-shape1 position-absolute"><img src="assets/img/nft/shape/sh1.png" alt="NFT image" /></span>
        <div className="container">
            <div className="nft-section-title text-center nft-headline pera-content">
                <h2>Gallery <span className="right-icon"><img src="assets/img/nft/icon/title-icon1.png" alt="NFT image" /></span></h2>
            </div>
            <div className="nft-market-place-content">
                <div className="nft-marketplace-filter-btn-area text-center">
                    <div className="nft-marketplace-filter-btn ul-li text-center">
                        <ul id="filters" className="nav-gallery">
                            <li className="filtr-button filtr-active" data-filter="all">All</li>
                            <li className="filtr-button" data-filter="1">Scattered Hair</li>
                            <li className="filtr-button" data-filter="2">Bulgy Eyes</li>
                            <li className="filtr-button" data-filter="3">Angry</li>
                            <li className="filtr-button" data-filter="4">Happy</li>
                        </ul>
                    </div>
                </div>
                <div className="nft-marketplace-item-wrapper filtr-container row">
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="1, 2,4" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr1.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0001</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="2, 3, 4" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr2.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0002</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="3, 4" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr3.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0003</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="1, 2, 3" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr4.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0004</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="3" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr5.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0005</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="1, 3, 4" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr6.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0006</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="3, 4" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr7.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0007</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 filtr-item" data-category="2, 4" data-sort="Busy streets">
                        <div className="nft-marketplace-items text-center">
                            <div className="thx-inner-item">
                                <div className="thx-inner-img">
                                    <img src="assets/img/nft/market/mr8.png" alt="NFT image" />
                                </div>
                                <div className="thx-inner-text nft-headline pera-content">
                                    <h3><a href="#">#0008</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery