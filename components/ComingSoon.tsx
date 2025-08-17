import { Navbar } from "./Navbar";

export const ComingSoon = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-screen max-h-screen bg-cover bg-center flex items-center justify-center flex-col overflow-hidden">
      <Navbar />
      <div className="flex h-screen w-screen p-20">
        <div className="flex items-start justify-start flex-col lg:flex-row">
          <img src="/coming-soon/staytuned.png" alt="" className="mx-auto w-full lg:w-1/2" />
          <img src="/coming-soon/follow.png" alt="" className="mx-auto w-0 lg:w-1/2" />
        </div>
      </div>
    </div>
  );
};