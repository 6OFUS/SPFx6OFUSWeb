import Link from "next/link";

export const ComingSoon = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-screen h-screen bg-cover bg-center flex items-center justify-center flex-col overflow-hidden">
      <div className="flex h-1/4 my-10 w-full lg:w-1/3 self-start">
        <div className="flex-1 flex items-center lg:items-start justify-center flex-col px-10">
          <img src="/coming-soon/TopLeft.png" alt="" className="mx-auto" />
          <div className="flex flex-row px-0 lg:px-10">
            <Link href="https://www.instagram.com/6ofus2025/" >
              <img src="/ig.png" alt="" className="mx-auto w-20 h-20" />
            </Link>
            <Link href="https://www.tiktok.com/@6ofus2025">
              <img src="/tt.png" alt="" className="mx-auto w-20 h-20" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-3/4 w-3/4">
        <div className="flex items-start justify-start flex-col lg:flex-row">
          <img src="/coming-soon/staytuned.png" alt="" className="mx-auto w-full lg:w-1/2" />
          <img src="/coming-soon/follow.png" alt="" className="mx-auto w-0 lg:w-1/2" />
        </div>
      </div>
    </div>
  );
};