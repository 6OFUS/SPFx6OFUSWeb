import Link from "next/link";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-full h-auto md:h-screen bg-contain lg:bg-cover bg-top flex flex-col overflow-hidden">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-6 mx-4 xl:mx-52 2xl:mx-64 my-6">
        
        {/* Scam */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/home/scam.png"
            alt="Scam Character"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
          <Link href="/scam">
            <img 
              src="/home/scamBtn.png" 
              alt="Scam Button" 
              className="w-full max-w-xs mx-auto mb-2 md:mb-4 p-2 md:p-4"
            />
          </Link>
          <p className="text-base w-11/12 md:w-2/3">
            Click to learn more about our scam VR simulator.
          </p>
        </div>

        {/* About 6OFUS */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/home/about.png"
            alt="About 6OFUS"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
          <Link href="/aboutus">
            <img 
              src="/home/aboutBtn.png" 
              alt="About Button" 
              className="w-full max-w-xs mx-auto mb-2 md:mb-4 p-2 md:p-4"
            />
          </Link>
          <p className="text-base w-11/12 md:w-2/3">
            Click to learn more about our group.
          </p>
        </div>

        {/* A.S.K Training */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/home/ask.png"
            alt="A.S.K Training"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
          <Link href="/game">
            <img 
              src="/home/askBtn.png" 
              alt="ASK Button" 
              className="w-full max-w-xs mx-auto mb-2 md:mb-4 p-2 md:p-4"
            />
          </Link>
          <p className="text-base w-11/12 md:w-2/3">
            For retail staff only! A.S.K training & test inside.
          </p>
        </div>

      </div>
    </div>
  );
};
