'use client';

import { Navbar } from "./Navbar";
import TranslatableText from "./TranslatableText";

export const WhyASKMatters = () => {
  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <img
        src="/ask/whyASKMattersTitle.png"
        alt="Why A.S.K. Matters"
        className="w-1/2 lg:w-1/5 mt-8 lg:mt-32"
      />
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-36 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col">
        <div className="rounded-t-xl px-4 py-3">
          <h2 className="text-2xl font-extrabold mb-8"><TranslatableText>Why A.S.K. Matters?</TranslatableText></h2>
          <p className="text-lg text-gray-800 mt-1">
            <TranslatableText>
              Shop theft prevention isn’t just about catching offenders it’s about keeping everyone safe and
              maintaining a positive shopping environment. A.S.K. is a simple, proactive approach that helps staff
              handle suspicious situations without confrontation.
            </TranslatableText>
          </p>
        </div>

        <div className="rounded-xl mt-4 p-4 text-center justify-center flex" data-aos="fade-up">
          <img
            src="/ask/whatIsASK.png"
            alt="A.S.K. Diagram"
            width={400}
            height={150}
            className="w-full lg:w-5/6"
          />
        </div>

        <div className="space-y-4 mt-6">
          <div className="bg-[#FFD475] rounded-lg p-8 border-black border-4" data-aos="fade-up">
            <h4 className="font-extrabold mb-4 text-xl"><TranslatableText>1. Prevents Theft Before It Happens</TranslatableText></h4>
            <p className="text-lg">
              <TranslatableText>
                By politely engaging with suspicious individuals (Ask), staff can deter potential thieves who realise
                they are being noticed.
              </TranslatableText>
            </p>
          </div>

          <div className="bg-[#FFD475] rounded-lg p-8 border-black border-4" data-aos="fade-up">
            <h4 className="font-extrabold mb-4 text-xl"><TranslatableText>2. Keeps Staff & Customers Safe</TranslatableText></h4>
            <p className="text-lg">
              <span className="font-semibold"><TranslatableText>Stay Safe</TranslatableText></span><TranslatableText> by calling for security backup or staying nearby instead of taking risky
              actions. This ensures safety while still monitoring the situation.</TranslatableText>
            </p>
          </div>

          <div className="bg-[#FFD475] rounded-lg p-8 border-black border-4" data-aos="fade-up">
            <h4 className="font-extrabold mb-4 text-xl"><TranslatableText>3. Reduces Confrontation & Conflict</TranslatableText></h4>
            <p className="text-lg">
              <span className="font-semibold"><TranslatableText>Keep Close</TranslatableText></span><TranslatableText> to maintain visual contact, which discourages theft without creating a
              hostile environment.</TranslatableText>
            </p>
          </div>

          <div className="bg-[#FFD475] rounded-lg p-8 border-black border-4" data-aos="fade-up">
            <h4 className="font-extrabold mb-4 text-xl"><TranslatableText>4. Builds Trust in the Community</TranslatableText></h4>
            <p className="text-lg">
              <TranslatableText>
                A.S.K. shows that the store values safety and fairness for all, making honest customers feel welcome and
                secure.
              </TranslatableText>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
