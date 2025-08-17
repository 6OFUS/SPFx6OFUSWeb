'use client';

import Link from "next/link";
import TranslatableText from "./TranslatableText";

export const ASKHero = () => {
  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      
      <div className="text-center md:text-left flex flex-col md:flex-row md:space-x-4 w-full md:w-2/3 justify-start items-center mt-4 px-4">
        <img src="ask/asklogo.png" alt="ASK First Logo" className="w-1/3 md:w-1/6 max-w-full h-auto" />
        <p className="text-lg w-full md:w-1/2 mt-4 md:mt-0">
          <TranslatableText>
            Developed by Ngee Ann Polytechnic ICT Immersive Media Students, in collaboration with the Singapore Police Force.
          </TranslatableText>
        </p>
      </div>

      <section className="flex flex-col md:flex-row w-11/12 md:w-2/3 space-y-4 md:space-y-0 md:space-x-4 justify-center items-center px-4 mt-8" data-aos="fade-up">
        <div className="space-y-4 w-full md:w-1/2">
          <h2 className="text-xl font-black text-pennblue"><TranslatableText>WHAT'S THIS GAME ABOUT?</TranslatableText></h2>
          <p>
            <TranslatableText>
              This simulation game helps retail staff learn how to spot and respond to suspicious behavior using the A.S.K. protocol.
            </TranslatableText>
          </p>
          <p>
            <TranslatableText>
              Step into the role of a Cashier or Retail Assistant and face real-world scenarios inside a retail store.
            </TranslatableText>
          </p>
          <p>
            <TranslatableText>
              Feel free to replay the game as many times as you need to train and build confidence.
            </TranslatableText>
          </p>
          <p><TranslatableText>Together, we can keep Singapore safe.</TranslatableText></p>
        </div>
        <img src="ask/info.png" alt="Game Info" className="w-full md:w-1/2 max-w-full h-auto" />
      </section>

      <section className="flex flex-col md:flex-row w-full md:w-2/3 justify-center items-center px-4 space-y-4 md:space-y-0 md:space-x-4 mt-8">
        <img src="ask/whatIsASK.png" alt="What is ASK?" className="w-full md:w-1/2 max-w-full h-auto" data-aos="fade-up"/>
        <img src="ask/controls.png" alt="Game Controls" className="w-full md:w-1/2 max-w-full h-auto" data-aos="fade-up"/>
      </section>

      <div className="py-12 w-full flex flex-col justify-center items-center space-y-4 px-4" data-aos="fade-up">
        <p className="text-2xl text-center md:w-1/2 text-pennblue font-black">
          <TranslatableText>
            AFTER LEARNING WHAT A.S.K. IS… DO YOU KNOW HOW TO USE IT CORRECTLY IN-STORE?
          </TranslatableText>
        </p>
        <p className="text-lg text-center md:w-2/3 font-extrabold">
          <TranslatableText>
            That’s why we built this training game to help retail workers like you practice and prepare.
          </TranslatableText>
        </p>
        <img src="ask/points.png" alt="Game Points" className="w-full md:w-1/3 max-w-full h-auto" />
      </div>

      <section className="w-full max-w-2xl mt-20 px-4 flex flex-col justify-center items-center" data-aos="fade-up">
        <h2 className="text-3xl font-black text-pennblue mb-4 text-center">
          <TranslatableText>WE'D LOVE TO HEAR FROM YOU!</TranslatableText>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
          <img src="ask/hhThumbsUp.png" alt="Game Info" className="w-1/2 md:w-1/3 max-w-full h-auto" />
          <h2 className="text-lg md:text-xl font-extrabold">
            <TranslatableText>
              Help us improve this training experience. Share your thoughts after trying the game.
            </TranslatableText>
          </h2>
        </div>
      </section>
      <Link href="/feedback" className="w-full flex justify-center items-center" data-aos="fade-up">
        <img src="ask/feedbackIcon.png" alt="Feedback" className="w-1/2 md:w-1/4 max-w-full mb-8" />
      </Link>
    </div>
  );
};
