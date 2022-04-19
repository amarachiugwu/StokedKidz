import React from "react";
import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navigation from "./Navigation";
import Roadmap from "./Roadmap";
import Team from "./Team";

function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Roadmap />
      <Gallery />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
