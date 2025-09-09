import { Send } from "lucide-react";
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("User email:", email);
    setEmail("");
  };

  return (
    <section>
      <div className="container mx-auto px-[26px] pb-[40px]">
        <div className="w-full h-auto bg-white rounded-2xl flex items-center justify-between ">
          <div className="flex items-center gap-[23px] p-[48px]">
            <div className="size-[63px] bg-[#a5c926] flex items-center justify-center rounded-full">
              <Send size={24} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-[23px] font-normal w-[300px]">
                Subscribe to our newsletter & get{" "}
                <span className="inline text-[23px] text-[#a5c926]">
                  10% discount!
                </span>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-[16px] pr-[48px]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[376px] h-[47px] bg-[#F8F8F8] rounded-3xl border-2 border-gray-200 px-4 text-sm outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="w-[121px] h-[47px] bg-[#A5C926] rounded-3xl text-white font-medium hover:bg-[#8ab51f] transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
