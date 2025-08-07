import Link from "next/link";

export const EventsHero = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden">
      <div className="h-32 w-full flex px-8 pt-6">
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

        <div className="flex w-1/3 items-top justify-center">
          <Link href="/">
            <img
              src="/events/6OFUSCircleLogo.png"
              alt="6OFUS Logo"
              className="w-1/3 mx-auto"
            />
          </Link>
        </div>

        <div className="flex w-1/3 justify-end">
          <Link href="/" className="flex justify-end">
            <img src="/homeBtn.png" alt="Home"/>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex m-8 py-10 flex-col justify-center mx-auto">
        <img src="/events/eventsFlyer.png" alt="Events Flyer"/>
        <img src="/events/eventsBanner.png" alt="Events Banner"/>
        <img src="/events/prizes.png" alt="Events Prizes"/>
        <img src="/events/SPnQR.png" alt="SP and QR Prizes"/>
        <img src="/events/UR.png" alt="UR Prizes"/>
        <img src="/events/SR.png" alt="SR Prizes"/>
      </div>
    </div>
  );
};
