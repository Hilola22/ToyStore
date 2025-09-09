import React from "react";
import toy1 from "../../assets/toy1.jpg";
import toy2 from "../../assets/toy2.jpg";
import toy3 from "../../assets/toy3.jpg";
import toy4 from "../../assets/toy4.jpg";
import toy5 from "../../assets/toy5.jpg";
import toy6 from "../../assets/toy6.jpg";

const images = [
  { id: 1, img: toy1 },
  { id: 2, img: toy2 },
  { id: 3, img: toy3 },
  { id: 4, img: toy4 },
  { id: 5, img: toy5 },
  { id: 6, img: toy6 },
];

const OnInstagram = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-[119px]">
          <div className="text-center">
            <p className="text-[13px] text-[#A5C926] mb-[17px]">
              @ElasticThemes
            </p>
            <h3 className="text-[31px] mb-[85px]">We're on Instagram!</h3>
          </div>
          <div className="grid grid-cols-6">
            {images.map((item) => (
              <div className="size-[172px]" key={item.id}>
                <img src={item.img} alt={`toy-${item.id}`} />
              </div>
            ))}
          </div>
          <div className="mx-auto text-center mt-[88px]">
            <button className="py-[12px] px-[28px] bg-[#A5C926] rounded-3xl text-white border border-[#A5C926] hover:border-[#A5C926] hover:text-[#A5C926] hover:bg-white active:bg-[#a1c51e] active:text-white">
              See More Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnInstagram;
