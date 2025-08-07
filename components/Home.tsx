import Link from "next/link";

export const Home = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-full h-screen bg-cover bg-center flex flex-col overflow-hidden">
      
      {/* Top Half */}
      <div className="h-1/2 w-full flex px-8 pt-6">
        <div className="flex w-1/3 flex-col justify-start">
          <img src="/coming-soon/TopLeft.png" alt="Top Left Logo" className="w-full" />
          <div className="flex gap-3 ml-6">
            <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
              <img src="/ig.png" alt="Instagram" className="h-1/4" />
            </Link>
            <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
              <img src="/tt.png" alt="TikTok" className="h-1/4" />
            </Link>
          </div>
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <Link href="">
            <img
              src="/home/6ofus.png"
              alt="6OFUS Banner"
              className="h-full"
            />
          </Link>
        </div>

        <div className="flex w-1/3 justify-end">
          <Link href="/events" className="flex h-1/5">
            <img src="/home/eventsBtn.png" alt="Events"/>
          </Link>
        </div>
      </div>

      {/* Bottom Half */}
      <div className="h-1/2 w-full flex justify-center items-center px-6 gap-14 mb-10 ml-5">
        {/* SHOP THEFT */}
        <Link href="/shop-theft">
          <img
            src="/home/pleasepaylah.png"
            alt="Shop Theft"
            className="h-full cursor-pointer transition-all duration-200"
          />
        </Link>

        {/* SCAM */}
        <Link href="/scam">
          <img
            src="/home/scam.png"
            alt="Scam"
            className="h-full cursor-pointer transition-all duration-200"
          />
        </Link>

        {/* A.S.K TRAINING */}
        <Link href="/ask">
          <img
            src="/home/askfirst.png"
            alt="ASK Training"
            className="h-full cursor-pointer transition-all duration-200"
          />
        </Link>
      </div>
    </div>
  );
};
