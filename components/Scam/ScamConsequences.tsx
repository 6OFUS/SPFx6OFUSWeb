import Link from 'next/link'
import { Navbar } from "../Navbar";
import TranslatableText from '../TranslatableText';

export const ScamConsequences = () => {
  return (
    <div className="bg-[url(/oriBg.png)] w-screen h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <div className="w-4/5 mt-8 lg:mt-32 hidden lg:flex justify-center">
        <Link href="/scam/about" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/about.png"
            alt=""
          />
        </Link>
        <Link href="/scam/why" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/why.png"
            alt=""
        />
        </Link>
        <Link href="/scam/consequences" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/consequencesActive.png"
            alt=""
          />
        </Link>
        <Link href="/scam/steps" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/steps.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-24 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-center items-center text-lg lg:text-xl" data-aos="fade-up">
          <img src="consequences/money.png" alt="" className="w-4/5 md:w-1/6 h-auto flex m-4 lg:m-16" />
          <h2 className="font-bold mx-4"><p className="font-black"><TranslatableText>Scam Consequences: Don’t Be a Money Mule</TranslatableText></p><br></br><TranslatableText>Why Helping Scammers Puts You at Risk?</TranslatableText>
          </h2>
        </div>
        <div className="w-5/6 lg:w-2/3 my-10" data-aos="fade-up">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe className="absolute top-0 left-0 w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/V0mng7YVELY?si=3fk1n7V5jEo2dtp8" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Serious Criminal Charges as a Money Mule</TranslatableText>
            </h2>
            <div className="text-lg text-black font-bold mb-2">
              <TranslatableText>If you let someone use your bank account, you're liable under multiple laws even if you didn’t handle the scam yourself. These include:</TranslatableText>
              <br></br>
              <ul>
                <li><TranslatableText>Corruption, Drug Trafficking and Other Serious Crimes Act (CDSA): Permitting your account to facilitate criminal activities may lead to up to 5 years in prison and a fine of up to S$250,000</TranslatableText></li>
              </ul>
            </div>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://blog.maxthon.com/2025/04/06/money-mules-sentenced-in-singapore/?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Maxthon | Privacy Private Browser</TranslatableText>
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Computer Misuse Act (CMA): Disclosing Singpass access or assisting unauthorized system access can result in up to 3 years in jail and fines up to S$10,000</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.sc.com/sg/fraud-scam/money-mule/?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Standard Chartered Bank</TranslatableText>
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Penal Code - Abetting Cheating & Retaining Proceeds: Helping criminals benefit financially may incur up to 3 years in prison, a fine, or both</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.police.gov.sg/media-room/news/20240908_40_persons_to_be_charged_for_suspected_involvement_in_scam_related_money_mule_activities?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Singapore Police Force</TranslatableText>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
