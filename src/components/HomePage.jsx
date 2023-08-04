import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./Feature/FeaturesSection";
import Testimonials from "./testimonials/Testimonials";
import Process from "./Process/Process";
import Carousel from "./Carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Process />
      <Carousel />
      <FeaturesSection />
      <Testimonials />
    </>
  );
};

export default HomePage;
