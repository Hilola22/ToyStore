import React from "react";
import bear from "../../assets/bear.png";
import dog from "../../assets/dog.png";
import plush from "../../assets/plush.png";
import colorful from "../../assets/colorful.png";
import toy from "../../assets/woodtoy.png";

const sections = [
  {
    title: "Stuffed Animals",
    products: [
      { name: "Teddy Bear", price: "$30.00 USD", img: bear },
      { name: "Mega Plush Toy", price: "$38.00 USD", img: plush },
      { name: "Cute Dog", price: "$24.00 USD", img: dog },
      { name: "Little Friend", price: "$27.00 USD", img: colorful },
    ],
  },
  {
    title: "Wooden Toys",
    products: [
      { name: "Wooden Toy 1", price: "$20.00 USD", img: toy },
      { name: "Wooden Toy 2", price: "$25.00 USD", img: toy },
      { name: "Wooden Toy 3", price: "$22.00 USD", img: toy },
      { name: "Wooden Toy 4", price: "$28.00 USD", img: toy },
    ],
  },
];

const StuffedAnimals = () => {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="py-12">
          <div className="container mx-auto mb-[100px]">
            <div className="flex justify-between items-center mb-[40px] border-b-2 border-b-gray-300">
              <h2 className="text-2xl font-semibold pb-[34px] border-b-2 border-b-[#a5c926]">
                {section.title}
              </h2>
              <a
                href="#"
                className="text-sm flex items-center gap-1 border-b-2 border-b-gray-300 pb-1 font-normal"
              >
                See All Toys <span>→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md py-[32px] px-[44px] flex flex-col items-center text-center"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="size-[182px] object-contain mb-4"
                  />
                  <h3 className="font-medium mb-4">{product.name}</h3>
                  <span className="bg-[#a5c926] text-white px-3 py-1 rounded-full text-sm">
                    {product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default React.memo(StuffedAnimals);