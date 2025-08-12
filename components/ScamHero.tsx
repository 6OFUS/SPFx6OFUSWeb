'use client';

import Link from "next/link";
import { Navbar } from "./Navbar";
import { InstagramEmbed } from "./InstagramEmbed";

export const ScamHero = () => {
  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden items-center justify-center font-heavitas">
      <Navbar />
      <img src="home/scam.png" alt="ASK First Logo" className="w-1/3 md:w-1/6 max-w-full mt-20 h-auto" />
      <img src="scam/scamshieldDesktop.png" alt="Scam Shield Suite" className="w-full md:w-5/6 max-w-full my-10 h-auto" />
      <p className="text-center w-2/5 text-lg font-medium">
        Aiyoh! Fake One! is a VR scam awareness simulation game specially created for the Singapore Police Force roadshows. It is not available for download online.
        <br></br><br></br>
        Follow us on our social media to find out when and where the next roadshows will be!
      </p>
      <div className="flex">
        <img src="scam/about.png" alt="About" className="w-full md:w-5/6 max-w-full my-20 h-auto" />
        <img src="scam/whyACT.png" alt="Why ACT Matters" className="w-full md:w-5/6 max-w-full my-20 h-auto" />
        <img src="scam/consequences.png" alt="Consequence" className="w-full md:w-5/6 max-w-full my-20 h-auto" />
        <img src="scam/steps.png" alt="Steps to take prior to being scammed" className="w-full md:w-5/6 max-w-full my-20 h-auto" />
      </div>
      <div
        className="w-11/12 px-4 sm:px-8 my-20 flex flex-col md:flex-row gap-8 justify-center items-center font-bold text-3xl sm:text-4xl mx-auto text-center text-pennblue"
        data-aos="fade-up"
      >
        {/* Instagram Embed */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex w-full max-w-md justify-center">
            <InstagramEmbed />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <div className="text-2xl sm:text-5xl text-center font-extralight">
            Aiyoh! Don't Kena Scam Leh!
            <div className="text-sm sm:text-base font-richblack mt-6">
              Watch our scam parody music video created for #YAS2025.
              <br />
              Like & share to help others stay alert.
            </div>
          </div>
          <div className="text-xl sm:text-3xl text-center font-extralight my-8 sm:my-16 p-6 sm:p-10 bg-yellow-200 text-pennblue outline rounded-3xl">
            Follow our Journey
            <div className="text-sm sm:text-base font-richblack mt-4 sm:mt-10">
              Join us behind the scenes, from storyboards to 3D models, and see what student creators can do!
            </div>
            <div className="flex gap-8 sm:gap-16 mt-6 items-center justify-center">
              <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
                <img className="w-16 sm:w-24" src="/ig.png" alt="Instagram" />
              </Link>
              <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
                <img className="w-16 sm:w-24" src="/tt.png" alt="TikTok" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-2xl sm:text-5xl text-center justify-center items-center flex flex-col text-pennblue font-extralight my-20">
        What is A.C.T.?
        <div className="w-5/6 lg:w-2/3 my-10">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe className="absolute top-0 left-0 w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/TXohBO0udkE?si=1Dvk8s3lWTyxefsp" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </div>
      </div>
    </div>
  );
};
