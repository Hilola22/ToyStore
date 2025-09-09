import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import Recommend from "../../components/recommend/recommend";
import StuffedAnimals from "../../components/products/Products";
import Story from "../../components/story/Story";
import Webflow from "../../components/webflow/Webflow";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <Recommend />
      <StuffedAnimals />
      <Story />
      <Webflow />
      <NewsLetter/>
    </>
  );
};

export default memo(Home);
