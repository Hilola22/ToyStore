import { CarTaxiFront, ShoppingCart } from 'lucide-react';
import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="border-b border-slate-200 bg-white ">
        <nav className="container mx-auto  flex gap-14 items-center h-[72px] justify-between">
          <div className="flex items-center justify-center gap-[40px]">
            <Link to={"/"} className="text-xl font-bold">
              <span>ToyStore</span>
            </Link>
            <ul className="flex">
              <li>
                <NavLink className="py-[12px] px-[18px]" to={"/#"}>
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink className="py-[12px] px-[18px]" to={"/#"}>
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink className="py-[12px] px-[18px]" to={"/#"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="py-[12px] px-[18px]" to={"/#"}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className='font-[13px]'>Cart</p>
            <ShoppingCart size={23} />
            <span className="size-5 rounded-full bg-[#a5c926] mx-auto text-center my-auto text-white">
              0
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default React.memo(Header)