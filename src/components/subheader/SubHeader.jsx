import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react'

const SubHeader = () => {
  return (
    <>
      <section className="w-full h-[32px] bg-[#a5c926] text-white">
        <div className="container mx-auto flex justify-between items-center text-sm h-full">
          <div className="flex gap-[30px] items-center justify-center">
            <p>Call Us: +1 213 974-5898</p>
            <p>Email: toystore@template.com</p>
          </div>
          <div className="flex justify-around items-center gap-1.5">
            <Twitter size={18}/>
            <Facebook size={18}/>
            <Instagram size={18}/>
            <Youtube size={18}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(SubHeader)