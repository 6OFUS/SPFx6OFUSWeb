import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="flex py-10 px-20 justify-between">
        <div className="flex pl-7 w-1/4 gap-2 items-center col-span-full xl:col-span-2 justify-start">
          <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
            <img className="w-24" src="/ig.png" alt="Instagram" />
          </Link>
          <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
            <img className="w-24" src="/tt.png" alt="TikTok" />
          </Link>
        </div>

        <div className="w-1/4 col-span-full xl:col-span-2 justify-center items-center flex">
          <Link href="/" className="font-bold text-xl flex items-center">
            <img
                src="/coming-soon/60fus.png"
                alt="6OFUS Logo"
                className="lucide lucide-panels-top-left mr-2 h-24"
              />
          </Link>
        </div>

        <div className="w-1/4 flex flex-col gap-2 items-end text-right col-span-full xl:col-span-2">
          <div className="font-bold text-md">
            Contact us at: 6ofus2025@gmail.com
          </div>
          <div className="font-bold text-md">
            © 2025 6OFUS | All rights reserved
          </div>
          <Link href="/" className="font-bold text-md underline text-red-500">
            Credits and Acknowledgements
          </Link>
        </div>
      </section>
    </footer>
  );
};
