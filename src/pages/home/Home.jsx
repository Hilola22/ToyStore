import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import StuffedAnimals from "../../components/products/Products";
import Story from "../../components/story/Story";
import Webflow from "../../components/webflow/Webflow";
import NewsLetter from "../../components/newsletter/NewsLetter";
import OnInstagram from "../../components/onInstagram/OnInstagram";
import Rec from "../../components/recommend/Recommend";

const Home = () => {
  return (
    <>
      <Hero />
      <Rec />
      <StuffedAnimals />
      <Story />
      <Webflow />
      <NewsLetter />
      <OnInstagram />
    </>
  );
};

export default memo(Home);
