import Link from 'next/link'
import { Navbar } from "../Navbar";

export const AboutPleasePayLeh = () => {
  return (
    <div className="bg-[url(/oriBg.png)] w-screen h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <div className="w-3/5 mt-8 lg:mt-32 hidden lg:flex justify-center">
        <Link href="/shoptheft/about" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/aboutActive.png"
            alt=""
          />
        </Link>
        <Link href="/shoptheft/safetymeasures" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/safetymeasures.png"
            alt=""
        />
        </Link>
        <Link href="/shoptheft/consequences" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/consequences.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-24 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col">
        <div className="flex flex-col md:flex-row justify-center items-center text-lg lg:text-xl" data-aos="fade-up">
          <img src="/shoptheft/shoptheftlogo.png" alt="" className="w-4/5 md:w-1/5 h-auto flex" />
          <h2 className="font-bold"><p className="font-black">A VR Scam Simulation Game</p><br></br>Aiyoh! Fake One! is a 5–10 minute VR game that trains you to spot and respond to scams through realistic, interactive scenarios based on real local cases.
          </h2>
        </div>
        <div className="flex justify-center items-center text-lg lg:text-xl space-x-4 my-4 lg:my-0" data-aos="fade-up">
          <img src="/scam/about/awareness.png" alt="" className="w-12 md:w-18 h-auto flex" />
          <p className="font-bold">Built to raise awareness and promote responsibility in a fun and interactive way.
          </p>
        </div>
        <img src="/shoptheft/about/concept.png" alt="" className="w-full h-auto flex my-4 lg:my-12" data-aos="fade-up"/>
        <img src="/shoptheft/about/learningoutcomes.png" alt="" className="w-full h-auto flex my-4 lg:my-12" data-aos="fade-up"/>
        <img src="/shoptheft/about/gameflow.png" alt="" className="w-full h-auto flex my-4 lg:my-12" data-aos="fade-up"/>
      </div>
    </div>
  );
};
