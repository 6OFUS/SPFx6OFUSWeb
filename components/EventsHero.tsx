import { Navbar } from "./Navbar";

export const EventsHero = () => {
  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden">
      <Navbar />
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
