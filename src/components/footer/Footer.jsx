import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React, { memo } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#A5C926] text-center text-white">
      <div className="container mx-auto">
        <div className=" pt-[48px] flex items-center justify-between mb-[47px]">
          <div>
            <Link to={"/"} className="text-[21px]">
              <span>ToyStore</span>
            </Link>
          </div>
          <div>
            <ul className="flex">
              <li>
                <Link
                  className="py-[12px] px-[18px] text-white hover:text-yellow-200"
                  to={"/#"}
                >Catalog</Link>
              </li>
              <li>
                <Link
                  className="py-[12px] px-[18px] text-white hover:text-yellow-200"
                  to={"/#"}
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  className="py-[12px] px-[18px] text-white hover:text-yellow-200"
                  to={"/#"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="py-[12px] px-[18px] text-white hover:text-yellow-200"
                  to={"/#"}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-around items-center gap-1.5">
            <Twitter size={18} className="text-white hover:text-yellow-200" />
            <Facebook size={18} className="text-white hover:text-yellow-200" />
            <Instagram size={18} className="text-white hover:text-yellow-200" />
            <Youtube size={18} className="text-white hover:text-yellow-200" />
          </div>
        </div>
        <div className="flex justify-between items-center py-[33px] border-t-1 border-[#bcd75c]">
          <div className="flex">
            <p>Created with love by Elastic Themes</p>
          </div>
          <div>
            <ul className="flex gap-5 cursor-pointer ">
              <li className="text-white hover:text-yellow-200">Powered by</li>
              <li className="text-white hover:text-yellow-200">Webflow</li>
              <li className="list-item text-white hover:text-yellow-200">
                Style Guide
              </li>
              <li className="list-item text-white hover:text-yellow-200">
                Licensing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
