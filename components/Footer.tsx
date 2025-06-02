import Link from "next/link";
import icon from "../assets/icon.png";
import Image from 'next/image'
import { siteConfig } from "@/config/site";
const { title } = siteConfig;

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link href="/" className="font-bold text-xl flex items-center">
            <Image
                src={icon}
                alt="Please PayLeh!"
                className="lucide lucide-panels-top-left mr-2 w-20 h-20"
              />
            <span className="hidden md:block">{title}</span>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <Link href="https://github.com/6ofus" className="opacity-60 hover:opacity-100">
              Github
            </Link>
          </div>

          <div>
            <Link href="https://www.instagram.com/6ofus2025/" className="opacity-60 hover:opacity-100">
              Instagram
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              TikTok
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Web
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Mobile
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Desktop
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              What is ShopTheft?
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              A.S.K. Protocol
            </Link>
          </div>

          <div>
            <Link href="#faq" className="opacity-60 hover:opacity-100">
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              6OFUS
            </Link>
          </div>

          <div>
            <Link href="https://www.youtube.com/@6OFUS2025" className="opacity-60 hover:opacity-100">
              Youtube
            </Link>
          </div>

          <div>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Discord
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 All rights reserved. Made with ❤️ by{" "}
          <Link
            target="_blank"
            href="https://github.com/6OFUS"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            6OFUS
          </Link>
        </h3>
      </section>
    </footer>
  );
};
