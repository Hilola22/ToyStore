import React from "react";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <img className="h-[640px] w-full object-cover" src={hero} alt="" />
        <div className="container">
          <div className="absolute top-1/2 left-1/2 transform -translate-1/2 w-[570px] h-[308px] rounded-2xl bg-white flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#a5c926]">Say Hello to ToyStore!</p>
            <h1 className="w-[416px] font-varela text-[39px] text-center mb-5">
              Free Ecommerce Template for Webflow
            </h1>
            <button className="border py-[12px] px-[28px] rounded-4xl text-white bg-[#a5c926] hover:bg-white hover:border-[#a5c926] hover:text-[#a5c926] active:bg-[#8aaa18] active:text-white">
              Open Catalog
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Hero);
