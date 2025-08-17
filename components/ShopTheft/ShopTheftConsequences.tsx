import Link from 'next/link'
import { Navbar } from "../Navbar";
import TranslatableText from '../TranslatableText';

export const ShopTheftConsequences = () => {
  return (
    <div className="bg-[url(/oriBg.png)] w-screen h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <div className="w-3/5 mt-8 lg:mt-32 hidden lg:flex justify-center">
        <Link href="/shoptheft/about" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/about.png"
            alt=""
          />
        </Link>
        <Link href="/shoptheft/safetymeasures" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/safetymeasures.png"
            alt=""
        />
        </Link>
        <Link href="/shoptheft/consequences" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/consequencesActive.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-24 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-center items-center text-lg lg:text-xl" data-aos="fade-up">
          <img src="consequences/steal.png" alt="" className="w-4/5 md:w-1/6 h-auto flex m-4 lg:m-16" />
          <h2 className="font-bold mx-4"><p className="font-black"><TranslatableText>What Happens If You Steal from a Shop in Singapore?</TranslatableText></p><br></br><TranslatableText>Shoplifting is a crime in Singapore, even if the item is small or cheap. </TranslatableText><br></br><TranslatableText>Here’s what can happen if you’re caught:</TranslatableText>
          </h2>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>General Theft (Section 379, Penal Code)</TranslatableText>
            </h2>
            <div className="text-lg text-black font-bold mb-2">
              <TranslatableText>If you take something from a shop without paying like snacks, clothes, or even a phone you can be charged with theft.</TranslatableText>
              <br></br><br></br>
              <TranslatableText>Punishment:</TranslatableText>
              <br></br>
              <ul>
                <li><TranslatableText>Jail for up to 3 years</TranslatableText></li>
                <li><TranslatableText>Or pay a fine</TranslatableText></li>
                <li><TranslatableText>Or both</TranslatableText></li>
              </ul><br></br>
              <TranslatableText>Example: Taking candy or makeup without paying is still theft.</TranslatableText>
              <br></br><TranslatableText>(Penal Code, Section 379)</TranslatableText>
            </div>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.tembusulaw.com/insights/singapore-theft-penalty"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>tembusulaw</TranslatableText>
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Theft in a Dwelling (Section 380, Penal Code)</TranslatableText>
            </h2>
            <div className="text-lg text-black font-bold mb-2">
              <TranslatableText>If you steal from inside a store, like behind the counter or inside a locked area, the punishment is more serious. This is called theft in dwelling.</TranslatableText>
              <br></br><br></br>
              <TranslatableText>Punishment:</TranslatableText>
              <br></br>
              <ul>
                <li><TranslatableText>Jail for up to 7 years</TranslatableText></li>
                <li><TranslatableText>And you might get a fine</TranslatableText></li>
              </ul><br></br>
              <TranslatableText>Example: Grabbing something from the staff area or display cabinet is theft in dwelling.</TranslatableText>
              <br></br><TranslatableText>(Penal Code, Section 380)</TranslatableText>
            </div>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.police.gov.sg/media-room/news/20250608_fifteen_persons_to_be_charged_for_shop_theft"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>police.gov.sg</TranslatableText>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
