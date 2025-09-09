import React from "react";
import deer from "../../assets/deer.jpg";
import { Play } from "lucide-react";

const Story = () => {
  return (
    <section className="relative">
      <img className="h-[490px] w-full object-cover" src={deer} alt="" />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-lg mb-[18px]">About The Shop</p>
        <h2 className="text-3xl font-bold mb-[18px]">Watch Our Story</h2>
        <p className="max-w-xl mb-[26px]">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement, demographic, even the
          consumer's mood.
        </p>
        <div className="bg-[#a5c926] p-5 cursor-pointer hover:scale-110 transition-transform">
          <Play size={24} color="#ffffff" strokeWidth={2.5} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Story);
