import Link from "next/link";
import { InstagramEmbed } from "./InstagramEmbed";
import { Navbar } from "./Navbar";
import TranslatableText from "./TranslatableText";

export const AboutUs = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-full h-auto bg-contain bg-top flex flex-col overflow-hidden">
      <Navbar />

      <div className="w-11/12 flex flex-col items-center m-8 py-10 sm:py-20 mx-auto font-heavitas">
        <img
          className="my-10 sm:my-20 w-full max-w-4xl"
          src="/aboutus/6ofusbanner.png"
          alt="6OFUS Banner"
        />
        <img
          className="w-1/3 sm:w-1/6 mx-auto"
          src="/coming-soon/60fus.png"
          alt="6OFUS"
        />
      </div>

      <div
        className="w-11/12 px-4 sm:px-8 flex flex-col justify-center font-bold text-3xl sm:text-4xl mx-auto text-center text-pennblue font-heavitas"
        data-aos="fade-up"
      >
        <TranslatableText>About 6OFUS</TranslatableText>
        <div className="flex flex-col md:flex-row gap-8 my-12 sm:my-24">
          <div className="w-full md:w-1/2 text-left text-sm sm:text-base font-extralight flex flex-col justify-center">
            <div className="text-rojo text-2xl sm:text-4xl">
              <TranslatableText>Who We Are</TranslatableText>
            </div>
            <p className="mt-6">
              <TranslatableText>
                We’re 6OFUS, a passionate student team from Ngee Ann Polytechnic’s School of ICT, currently pursuing our Diploma in Immersive Media.
              </TranslatableText>
            </p>
            <p className="mt-4">
              <TranslatableText>Our team is made up of:</TranslatableText>
            </p>
            <ul className="list-disc ml-6">
              <li>
                <TranslatableText>3 Developers (3DEV)</TranslatableText>
              </li>
              <li>
                <TranslatableText>3 Designers (3DES)</TranslatableText>
              </li>
            </ul>
            <p className="mt-4">
              <TranslatableText>
                Together, we combine code and creativity to create meaningful, immersive experiences that engage, educate, and empower.
              </TranslatableText>
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center">
            <img
              src="/aboutus/6OFUSlogo 1.png"
              alt="6OFUS"
              className="w-2/3 sm:w-3/5"
            />
          </div>
        </div>
      </div>

      <div
        className="w-11/12 px-4 sm:px-8 flex flex-col justify-center font-bold text-3xl sm:text-4xl mx-auto text-center text-pennblue my-12 sm:my-24 font-heavitas"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex w-full md:w-1/2 justify-center items-center">
            <img
              src="/aboutus/6ofusCD.png"
              alt="6OFUS"
              className="w-2/3 sm:w-3/5 transition-transform duration-300 hover:scale-110 hover:animate-bounce"
            />
          </div>
          <div className="w-full md:w-1/2 text-left text-sm sm:text-base font-extralight flex flex-col justify-center">
            <div className="text-rojo text-2xl sm:text-4xl">
              <TranslatableText>Our Mission</TranslatableText>
            </div>
            <p className="mt-6">
              <TranslatableText>
                We create interactive games and simulations that help retail staff and the public learn how to spot scams and stop shop theft.
              </TranslatableText>
            </p>
            <p className="mt-4">
              <TranslatableText>
                Because we believe learning should be practical, engaging, and even a little fun.
              </TranslatableText>
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-11/12 px-4 sm:px-8 my-12 sm:my-20 flex flex-col justify-center items-center font-bold text-3xl sm:text-4xl mx-auto text-center text-pennblue font-heavitas"
        data-aos="fade-up"
      >
        <TranslatableText>Meet The Team</TranslatableText>
        <img
          src="/aboutus/3Des3Dev.png"
          alt="3des3dev"
          className="w-2/3 sm:w-1/3 my-10 sm:my-20"
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-16 max-w-6xl mx-auto">
          <img src="/aboutus/huihui.png" alt="huihui" className="transition-transform duration-300 hover:scale-105"/>
          <img src="/aboutus/malcom.png" alt="malcom" className="transition-transform duration-300 hover:scale-105"/>
          <img src="/aboutus/jenn.png" alt="jennifer" className="transition-transform duration-300 hover:scale-105"/>
          <img src="/aboutus/kevin.png" alt="kevin" className="transition-transform duration-300 hover:scale-105"/>
          <img src="/aboutus/alfred.png" alt="alfred" className="transition-transform duration-300 hover:scale-105"/>
          <img src="/aboutus/rayn.png" alt="rayn" className="transition-transform duration-300 hover:scale-105"/>
        </div>
      </div>

      <div
        className="w-11/12 px-4 sm:px-8 my-20 flex flex-col md:flex-row gap-8 justify-center items-center font-bold text-3xl sm:text-4xl mx-auto text-center text-pennblue font-heavitas"
        data-aos="fade-up"
      >
        {/* Instagram Embed */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex w-full max-w-md justify-center">
            <InstagramEmbed />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <div className="text-2xl sm:text-5xl text-center font-extralight">
            <TranslatableText>Aiyoh! Don't Kena Scam Leh!</TranslatableText>
            <div className="text-sm sm:text-base font-richblack mt-6">
              <TranslatableText>
                Watch our scam parody music video created for #YAS2025.
              </TranslatableText>
              <br />
              <TranslatableText>
                Like & share to help others stay alert.
              </TranslatableText>
            </div>
          </div>
          <div className="text-xl sm:text-3xl text-center font-extralight my-8 sm:my-16 p-6 sm:p-10 bg-yellow-200 text-pennblue font-heavitas outline rounded-3xl">
            <TranslatableText>Follow our Journey</TranslatableText>
            <div className="text-sm sm:text-base font-richblack mt-4 sm:mt-10">
              <TranslatableText>
                Join us behind the scenes, from storyboards to 3D models, and see what student creators can do!
              </TranslatableText>
            </div>
            <div className="flex gap-8 sm:gap-16 mt-6 items-center justify-center">
              <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
                <img className="w-16 sm:w-24" src="/ig.png" alt="Instagram" />
              </Link>
              <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
                <img className="w-16 sm:w-24" src="/tt.png" alt="TikTok" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
