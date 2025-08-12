'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const dropdownData = [
  {
    label: "6OFUS",
    items: ["About 6OFUS", "Events", "Contact Us", "Credits & Acknowledgements"],
  },
  {
    label: "A.S.K Training",
    items: ["A.S.K First Training Game", "Why A.S.K Matters?"],
  },
  {
    label: "Scam",
    items: ["About Aiyoh! Fake One!", "Why A.C.T. Matters?", "Scam Consequences", "Steps to Take After Being Scammed"],
  },
  {
    label: "Shop Theft",
    items: ["About Please Pay Leh!", "Retail Safety Measures", "Consequences of Shoplifting"],
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (  
    <div className="sticky top-0 z-50 bg-opacity-90 h-32 w-full flex flex-row px-8 pt-6">
      <div className="flex w-full xl:mt-20 lg:mt-10 mt-0 lg:w-1/3 lg:order-1 order-2 flex-col lg:items-start items-center justify-center">
        <img
          src="/coming-soon/TopLeft.png"
          alt="Top Left Logo"
          className="md:w-2/3 w-full"
        />
        <div className="hidden lg:flex gap-3 ml-0 lg:ml-6 w-1/3 items-start lg:items-center">
          <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
            <img src="/ig.png" alt="Instagram" className="h-18" />
          </Link>
          <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
            <img src="/tt.png" alt="TikTok" className="h-18" />
          </Link>
        </div>
      </div>

      <div className="hidden order-2 lg:flex w-1/3 items-top justify-center">
        <Link href="/">
          <img
            src="/events/6OFUSCircleLogo.png"
            alt="6OFUS Logo"
            className="w-1/3 mx-auto"
          />
        </Link>
      </div>

      <div className="flex w-1/3 lg:order-3 order-1 justify-center lg:justify-end items-center">
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex justify-center lg:justify-end focus:outline-none relative z-50"
        >
          {menuOpen ? (
            <img
              src="/backBtn.png"
              alt="Back Button"
              className="lg:h-16 h-12 lg:w-16 w-12"
            />
          ) : (
            <img
              src="/hamburger.png"
              alt="Hamburger Menu"
              className="lg:h-16 h-12 lg:w-16 w-12"
            />
          )}
        </button>
        {/* Mobile fullscreen menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#FFD475] z-40 flex flex-col items-center justify-start m-7 p-3 rounded-3xl border-8 border-earthy overflow-y-auto lg:hidden">
            <img
              src="coming-soon/60fus.png"
              alt="6OFUS Logo"
              className="lg:h-20 h-16 self-end flex mb-8"
            />
            {dropdownData.map((dropdown, index) => (
              <div key={index} className="w-full max-w-md mb-4 px-6">
                <div
                  className="bg-white rounded-full flex items-center justify-between px-4 py-3 border-4 border-earthy cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="text-base font-bold text-gray-800">{dropdown.label}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                {openIndex === index && dropdown.items.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {dropdown.items.map((item, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-yellow-100 rounded-3xl px-4 py-3 text-sm text-gray-800 shadow-inner border-4 border-earthy hover:bg-yellow-300 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Desktop dropdown menu */}
        {menuOpen && (
          <div className="absolute font-nexa top-full shadow-lg z-40 bg-[#FFD475] border-8 border-earthy rounded-3xl p-8 w-72 space-y-4 hidden lg:block right-8">
            {dropdownData.map((dropdown, index) => (
              <div key={index}>
                <div
                  className="bg-white rounded-full flex items-center justify-between px-4 py-2 border-4 border-earthy cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="text-sm font-bold text-gray-800">{dropdown.label}</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
                {openIndex === index && dropdown.items.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {dropdown.items.map((item, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-yellow-100 rounded-3xl px-4 py-2 text-sm text-gray-800 shadow-inner border-4 border-earthy hover:bg-yellow-300 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
