import Link from "next/link";
import TranslatableText from "./TranslatableText";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-black">
      <section className="flex flex-col lg:flex-row items-center py-10 px-6 md:px-12 lg:px-20 justify-between gap-8 text-sm font-nexa">
        
        <div className="order-2 lg:order-1 flex gap-4">
          <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
            <img className="w-16 md:w-20" src="/ig.png" alt="Instagram" />
          </Link>
          <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
            <img className="w-16 md:w-20" src="/tt.png" alt="TikTok" />
          </Link>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <Link href="/" className="flex items-center">
            <img
              src="/coming-soon/60fus.png"
              alt="6OFUS Logo"
              className="h-20 md:h-24"
            />
          </Link>
        </div>

        <div className="order-3 flex flex-col gap-2 items-center lg:items-end text-center lg:text-right">
          <div className="font-heavy"><TranslatableText>Contact us at: 6ofus2025@gmail.com</TranslatableText></div>
          <div className="font-heavy"><TranslatableText>© 2025 6OFUS | All rights reserved</TranslatableText></div>
          <Link
            href="/credits"
            className="font-heavy underline text-red-500 hover:text-red-700"
          >
            <TranslatableText>Credits and Acknowledgements</TranslatableText>
          </Link>
        </div>

      </section>
    </footer>
  );
};
