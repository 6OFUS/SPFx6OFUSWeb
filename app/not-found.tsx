import { Navbar } from "@/components/Navbar";
import { Utilities } from "@/components/Utilities";

export default function NotFound() {
  return (
    <div className="bg-[url(/oriBg.png)] max-h-screen bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <Utilities />
      <div className="flex h-screen w-screen p-20">
        <div className="flex items-start justify-start flex-col lg:flex-row">
          <img src="/404.png" alt="" className="mx-auto w-full lg:w-1/2" />
          <img src="/coming-soon/follow.png" alt="" className="mx-auto w-0 lg:w-1/2" />
        </div>
      </div>
    </div>
  );
};