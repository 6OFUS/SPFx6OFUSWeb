import Link from "next/link";

export const EventsHero = () => {
  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden">
      <div className="h-32 w-full flex lg:flex-row flex-col px-8 pt-6">
        <div className="flex w-full lg:w-1/3 flex-col lg:items-start items-center justify-start">
          <img src="/coming-soon/TopLeft.png" alt="Top Left Logo" className="md:w-2/3 w-full" />
          <div className="flex gap-3 ml-0 lg:ml-6 w-1/3 items-start lg:items-center">
            <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
              <img src="/ig.png" alt="Instagram" className="h-1/4" />
            </Link>
            <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
              <img src="/tt.png" alt="TikTok" className="h-1/4" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex w-1/3 items-top justify-center">
          <Link href="/">
            <img
              src="/events/6OFUSCircleLogo.png"
              alt="6OFUS Logo"
              className="w-1/3 mx-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex w-1/3 justify-center lg:justify-end">
          <Link href="/" className="flex justify-center lg:justify-end">
            <img src="/homeBtn.png" alt="Home"/>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex py-10 flex-col justify-center mx-auto">
        <img className="mx-8 my-28 flex" src="/events/eventsFlyer.png" alt="Events Flyer"/>
        <img className="mx-8" src="/events/eventsBanner.png" alt="Events Banner" data-aos="fade-up" />
        <img className="mx-8 my-16" src="/events/prizes.png" alt="Events Prizes" data-aos="fade-up" />
        <div className="flex lg:flex-row flex-col w-auto lg:w-full mb-16 lg:mx-0 mx-8" data-aos="fade-up">
          <img className="w-full lg:w-1/2" src="/events/SP.png" alt="SP Prizes" />
          <img className="w-full lg:w-1/2" src="/events/QR.png" alt="QR Prizes" />
        </div>
        <img className="mx-8" src="/events/UR.png" alt="UR Prizes" data-aos="fade-up" />
        <img className="mx-8" src="/events/SR.png" alt="SR Prizes" data-aos="fade-up" />
      </div>
    </div>
  );
};
