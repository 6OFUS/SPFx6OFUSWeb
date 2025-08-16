import Link from "next/link";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-full h-auto min-h-screen bg-contain md:bg-cover bg-top flex flex-col overflow-hidden">
      <Navbar />

      <div className="w-screen max-h-screen grid grid-cols-1 md:grid-cols-3 py-12 lg:py-24 px-12 xl:px-64">
        <div className="flex flex-col items-center text-center group">
          <Link href="/scam" className="flex flex-col items-center">
            <img
              src="/home/scam.png"
              alt="Scam Character"
              className="w-4/5 max-w-xs md:max-w-sm object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <img
              src="/home/scamBtn.png" 
              alt="Scam Button" 
              className="w-full max-w-xs mx-auto mb-2 md:mb-4 p-2 md:p-4 cursor-pointer"
            />
            <p className="text-base w-11/12 md:w-2/3">
              Click to learn more about our scam VR simulator.
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center group">
          <Link href="/aboutus" className="flex flex-col items-center">
            <img
              src="/home/about.png"
              alt="About 6OFUS"
              className="w-4/5 max-w-xs md:max-w-sm object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <img 
              src="/home/aboutBtn.png" 
              alt="About Button" 
              className="w-full max-w-xs mb-2 md:mb-4 p-2 md:p-4 cursor-pointer"
            />
            <p className="text-base w-11/12 md:w-2/3">
              Click to learn more about our group.
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center group">
          <Link href="/game" className="flex flex-col items-center">
            <img
              src="/home/ask.png"
              alt="A.S.K Training"
              className="w-4/5 max-w-xs md:max-w-sm object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <img 
              src="/home/askBtn.png" 
              alt="ASK Button" 
              className="w-full max-w-xs mx-auto mb-2 md:mb-4 p-2 md:p-4 cursor-pointer"
            />
            <p className="text-base w-11/12 md:w-2/3">
              For retail staff only! A.S.K training & test inside.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
