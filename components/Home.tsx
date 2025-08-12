import Link from "next/link";

export const Home = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-full min-h-screen bg-cover bg-center flex flex-col overflow-hidden">
      
      {/* Top Half */}
      <div className="flex flex-col lg:flex-row w-full px-4 md:px-8 pt-6 gap-4 lg:gap-0">
        
        {/* Left Logo + Socials */}
        <div className="flex w-full lg:w-1/3 flex-col items-center lg:items-start">
          <img
            src="/coming-soon/TopLeft.png"
            alt="Top Left Logo"
            className="w-full"
          />
          <div className="flex gap-3 mt-3 lg:ml-6">
            <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
              <img src="/ig.png" alt="Instagram" className="h-16" />
            </Link>
            <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
              <img src="/tt.png" alt="TikTok" className="h-16" />
            </Link>
          </div>
        </div>

        {/* Center Banner */}
        <div className="flex w-full lg:w-1/3 items-center justify-center">
          <Link href="/aboutus" className="flex justify-center items-center">
            <img
              src="/home/6ofus.png"
              alt="6OFUS Banner"
              className="w-2/3 md:w-1/2 lg:w-2/3"
            />
          </Link>
        </div>

        {/* Events Button */}
        <div className="flex w-full lg:w-1/3 justify-center lg:justify-end items-center">
          <Link href="/events" className="flex w-32 h-10 md:h-24 md:w-64">
            <img
              src="/home/eventsBtn.png"
              alt="Events"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Half */}
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 md:px-6 gap-6 md:gap-14 my-10">
        
        {/* SHOP THEFT */}
        <Link href="/shop-theft" className="flex justify-center">
          <img
            src="/home/pleasepaylah.png"
            alt="Shop Theft"
            className="w-4/5 md:w-48 lg:w-auto cursor-pointer transition-all duration-200"
          />
        </Link>

        {/* SCAM */}
        <Link href="/scam" className="flex justify-center">
          <img
            src="/home/scam.png"
            alt="Scam"
            className="w-4/5 md:w-48 lg:w-auto cursor-pointer transition-all duration-200"
          />
        </Link>

        {/* A.S.K TRAINING */}
        <Link href="/game" className="flex justify-center">
          <img
            src="/home/askfirst.png"
            alt="ASK Training"
            className="w-4/5 md:w-48 lg:w-auto cursor-pointer transition-all duration-200"
          />
        </Link>
      </div>
    </div>
  );
};
