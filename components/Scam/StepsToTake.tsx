import Link from 'next/link'
import { Navbar } from "../Navbar";
import TranslatableText from '../TranslatableText';

export const StepsToTake = () => {
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
            src="/scam/consequences.png"
            alt=""
          />
        </Link>
        <Link href="/scam/steps" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/stepsActive.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-24 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col space-y-8">
        <div className="flex flex-col sm:flex-row items-center text-lg lg:text-xl w-full my-4" data-aos="fade-up">
          <img src="steps/warning.png" alt="" className="w-1/6 h-auto flex mx-16 my-4" />
          <h2 className="font-bold"><p className="font-black"><TranslatableText>Steps to Take After Being Scammed</TranslatableText></p><br></br><TranslatableText>If you suspect you’ve been scammed, act immediately. Quick action can reduce your losses and help authorities catch the culprits.</TranslatableText>
          </h2>
        </div>
        <img src="scamshieldDesktop.png" alt="Scam Shield Suite" className="w-full md:w-full my-10 h-auto hidden lg:flex" data-aos="fade-up"/>
        <img src="scamshieldMobile.png" alt="Scam Shield Suite" className="w-full md:w-full my-10 h-auto flex lg:hidden" data-aos="fade-up"/>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col xl:flex-row gap-6 w-full" data-aos="fade-up">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/scamshield.png"
              alt="Scam Shield"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4 w-4/5'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Why ScamShield Matters</TranslatableText>
            </h2>
            <div className="text-lg text-black font-bold mb-2">
              <TranslatableText>ScamShield is Singapore’s official anti-scam app, developed by GovTech and the Singapore Police Force. It:</TranslatableText>
              <br></br><br></br>
              <ul>
                <li><TranslatableText>Blocks scam calls & texts using a constantly updated database.</TranslatableText></li>
                <li><TranslatableText>Filters suspicious SMS before you even see them.</TranslatableText></li>
                <li><TranslatableText>Lets you report scams instantly to the police.</TranslatableText></li>
              </ul>
              <br></br><br></br>
              <TranslatableText>Protect yourself before scams happen.</TranslatableText>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full" data-aos="fade-up">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/stop.png"
              alt="stop"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              <TranslatableText>1. Stop All Contact</TranslatableText>
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li><TranslatableText>Don’t reply to calls, messages, or emails from the scammer.</TranslatableText></li>
                <li><TranslatableText>Block their number and report the contact.</TranslatableText></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full" data-aos="fade-up">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/bank.png"
              alt="bank"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              <TranslatableText>2. Contact Your Bank Immediately</TranslatableText>
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li><TranslatableText>Call your bank’s 24-hour hotline to freeze your accounts or cards.</TranslatableText></li>
                <li><TranslatableText>Ask about activating the kill switch to halt transactions.</TranslatableText></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full" data-aos="fade-up">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/police.png"
              alt="police"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              <TranslatableText>3. File a Police Report</TranslatableText>
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li><TranslatableText>Use the SPF e-service or visit a police station.</TranslatableText></li>
                <li><TranslatableText>Provide screenshots, transaction records, and all communication with the scammer.</TranslatableText></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full" data-aos="fade-up">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/scamshield.png"
              alt="scamshield"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              <TranslatableText>4. Report Through ScamShield</TranslatableText>
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li><TranslatableText>Download the ScamShield App (</TranslatableText><Link href="https://scamshield.gov.sg" className='text-red-600 underline' target='_blank'><TranslatableText>scamshield.gov.sg</TranslatableText></Link><TranslatableText>) to block scam calls/SMS and report suspicious messages instantly.</TranslatableText></li>
                <li><TranslatableText>Use the ScamShield WhatsApp bot to check unknown numbers and URLs before you act.</TranslatableText></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full" data-aos="fade-up">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/tell.png"
              alt="tell others"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              <TranslatableText>5. Tell Others</TranslatableText>
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li><TranslatableText>Warn friends, family, and colleagues so they don’t fall for the same scam.</TranslatableText></li>
                <li><TranslatableText>Share your experience on social media or community chat groups.</TranslatableText></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
