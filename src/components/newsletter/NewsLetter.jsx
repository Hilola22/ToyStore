import { Instagram, Send } from "lucide-react";
import React from "react";

const NewsLetter = () => {
  return (
    <section>
      <div className="container mx-auto px-[26px] pb-[40px]">
        <div className="w-full h-auto bg-white rounded-2xl flex items-center justify-between ">
          <div className="flex items-center gap-[23px] p-[48px]">
            <div className="size-[63px] bg-[#a5c926] flex items-center justify-center">
              <Send size={24} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div className="">
              <h3 className="text-[23px] font-normal w-[300px]">
                Subscribe to our newsletter & get{" "}
                <p className="inline text-[23px] text-[#a5c926]">
                  10% discount!
                </p>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-[16px] pr-[48px]">
            <div className="w-[376px] h-[47px] bg-[#F8F8F8] rounded-3xl border-2 border-gray-200"></div>
            <div className="w-[121px] h-[47px] bg-[#A5C926] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
