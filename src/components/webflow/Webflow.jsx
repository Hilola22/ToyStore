import React from 'react'
import hero from "../../assets/supermen.jpg"

const Webflow = () => {
  return (
    <section>
      <div className="container mx-auto py-[120px]">
        <div className="text-center">
          <p className="text-[13px] text-[#a5c926]">Made for Webflow</p>
          <h2 className="font-varela text-[31px] w-[447px] mx-auto mt-[18px] mb-[95px]">
            Simple & Colorful Ecommerce Template for Your Business
          </h2>
        </div>
        <div className="h-[424px] flex items-center justify-between">
          <div>
            <h3 className="font-varela text-[31px] mb-[25px]">
              Available for FREE!
            </h3>
            <div className="w-[70px] h-0.5 bg-[#a5c926] mb-[25px]"></div>
            <p className="text-[14px] w-[450px] text-[#999999] mb-[26px]">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <button className="py-3 px-7 bg-[#a5c926] rounded-3xl text-white border border-[#A5C926] hover:border-[#A5C926] hover:text-[#A5C926] hover:bg-white active:bg-[#9abe16] active:text-white">
              GET IT NOW!
            </button>
          </div>
          <img
            className="w-[567px] h-[422px] rounded-2xl select-none"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Webflow