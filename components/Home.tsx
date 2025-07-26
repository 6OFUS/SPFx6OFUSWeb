'use client';

import Link from "next/link";
import { useState } from "react";

export const Home = () => {
  const [sixOfUsHover, setSixOfUsHover] = useState(false);
  const [shopHover, setShopHover] = useState(false);
  const [scamHover, setScamHover] = useState(false);
  const [askHover, setAskHover] = useState(false);

  return (
    <div className="bg-[url(/bkgd2.png)] w-screen h-screen bg-cover bg-center flex items-center justify-center flex-col relative py-20">
      
      {/* Top-Left Logo + Socials */}
      <div className="absolute top-0 left-0 mt-8 ml-8">
        <img src="/coming-soon/TopLeft.png" alt="Top Left Logo" className="w-1/3" />
        <div className="flex pl-7 w-48 gap-2">
          <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
            <img src="/ig.png" alt="Instagram" />
          </Link>
          <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
            <img src="/tt.png" alt="TikTok" />
          </Link>
        </div>
      </div>

      {/* 6OFUS Banner */}
      <div className="relative mt-4 h-1/2">
        <Link href="/">
          <img
            src={sixOfUsHover ? "/home/6ofus-hover.png" : "/home/6ofus.png"}
            alt="6OFUS Banner"
            className="h-full cursor-pointer transition-all duration-200"
            onMouseEnter={() => setSixOfUsHover(true)}
            onMouseLeave={() => setSixOfUsHover(false)}
          />
        </Link>
      </div>

      {/* Game Cards */}
      <div className="flex justify-center mt-16 h-1/2 gap-10">
        {/* SHOP THEFT */}
        <Link href="/shop-theft">
          <img
            src={shopHover ? "/home/pleasepaylah-hover.png" : "/home/pleasepaylah.png"}
            alt="Shop Theft"
            className="h-full cursor-pointer transition-all duration-200"
            onMouseEnter={() => setShopHover(true)}
            onMouseLeave={() => setShopHover(false)}
          />
        </Link>

        {/* SCAM */}
        <Link href="/scam">
          <img
            src={scamHover ? "/home/scam-hover.png" : "/home/scam.png"}
            alt="Scam"
            className="h-full cursor-pointer transition-all duration-200"
            onMouseEnter={() => setScamHover(true)}
            onMouseLeave={() => setScamHover(false)}
          />
        </Link>

        {/* A.S.K TRAINING */}
        <Link href="/ask">
          <img
            src={askHover ? "/home/askfirst-hover.png" : "/home/askfirst.png"}
            alt="ASK Training"
            className="h-full cursor-pointer transition-all duration-200"
            onMouseEnter={() => setAskHover(true)}
            onMouseLeave={() => setAskHover(false)}
          />
        </Link>
      </div>
    </div>
  );
};
