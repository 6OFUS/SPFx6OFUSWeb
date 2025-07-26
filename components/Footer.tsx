import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="flex py-5 px-20 justify-between">
        <div className="flex pl-7 w-48 gap-2 justify-center items-center">
          <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
            <img src="/ig.png" alt="Instagram" />
          </Link>
          <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
            <img src="/tt.png" alt="TikTok" />
          </Link>
        </div>

        <div className="col-span-full xl:col-span-2">
          <Link href="/" className="font-bold text-xl flex items-center">
            <img
                src="/coming-soon/60fus.png"
                alt="Please PayLeh!"
                className="lucide lucide-panels-top-left mr-2 h-24"
              />
          </Link>
        </div>

        <div className="flex flex-col gap-2 justify-center items-end text-right col-span-full xl:col-span-2">
          <div className="font-bold text-md">
            Contact us at: 6ofus2025@gmail.com
          </div>

          <div className="font-bold text-md">
            © 2025 6OFUS | All rights reserved
          </div>
        </div>
      </section>
    </footer>
  );
};
