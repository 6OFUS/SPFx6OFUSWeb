'use client';

import Link from "next/link";
import { Navbar } from "../Navbar";
import { Utilities } from "../Utilities";

export const ShopTheftHero = () => {
  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <Utilities />
      <div className="flex h-screen w-screen p-4 md:p-20 my-8 lg:my-20 flex-col justify-center items-center">
        <div className="flex items-start justify-start flex-col lg:flex-row">
          <img src="shoptheft/shoptheftmenu.png" alt="" className="mx-auto w-full lg:w-1/2" />
          <img src="/coming-soon/follow.png" alt="" className="mx-auto w-0 lg:w-1/2" />
        </div>
        <p className="text-xl my-10 text-center">Please Pay Leh! is currently under development for the roadshow. Do follow out socialmedia for updates.</p>
        <div className="flex flex-col lg:flex-row my-10 space-y-4 lg:space-y-0">
          <Link href="/shoptheft/about" className="h-auto flex hover:scale-105 transition-transform duration-300 mx-10">
            <img
              src="/shoptheft/aboutActive.png"
              alt=""
            />
          </Link>
          <Link href="/shoptheft/safetymeasures" className="h-auto flex hover:scale-105 transition-transform duration-300 mx-10">
            <img
              src="/shoptheft/safetymeasuresActive.png"
              alt=""
          />
          </Link>
          <Link href="/shoptheft/consequences" className="h-auto flex hover:scale-105 transition-transform duration-300 mx-10">
            <img
              src="/shoptheft/consequencesActive.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
