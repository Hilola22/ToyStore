import React from "react";
import bear from "../../assets/bear.png";
import toy from "../../assets/woodtoy.png";

const Suggests = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex my-[152px] gap-8">
            <div className="w-[570px] h-[188px] rounded-2xl bg-[#ffc12c] flex items-center gap-7 px-[15px] ">
              <div className="size-[220px] mb-20">
                <img src={bear} alt="" />
              </div>
              <div>
                <h3 className="font-varela text-[28px] text-white mb-4">
                  Stuffed Animals
                </h3>
                <button className="py-2 px-7 text-sm bg-white rounded-3xl border border-white hover:bg-[#ffc12c] hover:border-white hover:text-white active:bg-[#ce981b]">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-[570px] h-[188px] rounded-2xl bg-[#fb416b] text-right flex items-center gap-6 justify-end px-[21px] ">
              <div>
                <h3 className="font-varela text-[28px] text-white mb-4">
                  Wooden Toys
                </h3>
                <button className="py-2 px-7 text-sm bg-white rounded-3xl border border-white hover:bg-[#fb416b] hover:border-white hover:text-white active:bg-[#d42850]">
                  Shop Now
                </button>
              </div>
              <div>
                <div className="size-[220px] mb-20">
                  <img src={toy} alt="Wooden toy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Suggests);
