import Link from 'next/link'
import { Navbar } from "../Navbar";

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
        <div className="flex flex-col sm:flex-row items-center text-lg lg:text-xl w-full my-4">
          <img src="steps/warning.png" alt="" className="w-1/6 h-auto flex mx-16 my-4" />
          <h2 className="font-bold"><p className="font-black">Steps to Take After Being Scammed</p><br></br>If you suspect you’ve been scammed, act immediately. Quick action can reduce your losses and help authorities catch the culprits.
          </h2>
        </div>
        <img src="scamshieldDesktop.png" alt="Scam Shield Suite" className="w-full md:w-full my-10 h-auto hidden lg:flex" />
        <img src="scamshieldMobile.png" alt="Scam Shield Suite" className="w-full md:w-full my-10 h-auto flex lg:hidden" />
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col xl:flex-row gap-6 w-full">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/scamshield.png"
              alt="Scam Shield"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4 w-4/5'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              Why ScamShield Matters
            </h2>
            <div className="text-lg text-black font-bold mb-2">
              ScamShield is Singapore’s official anti-scam app, developed by GovTech and the Singapore Police Force. It:
              <br></br><br></br>
              <ul>
                <li>Blocks scam calls & texts using a constantly updated database.</li>
                <li>Filters suspicious SMS before you even see them.</li>
                <li>Lets you report scams instantly to the police.</li>
              </ul>
              <br></br><br></br>
              Protect yourself before scams happen.
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/stop.png"
              alt="stop"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              1. Stop All Contact
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li>Don’t reply to calls, messages, or emails from the scammer.</li>
                <li>Block their number and report the contact.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/bank.png"
              alt="bank"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              2. Contact Your Bank Immediately
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li>Call your bank’s 24-hour hotline to freeze your accounts or cards.</li>
                <li>Ask about activating the kill switch to halt transactions.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/police.png"
              alt="police"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              3. File a Police Report
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li>Use the SPF e-service or visit a police station.</li>
                <li>Provide screenshots, transaction records, and all communication with the scammer.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/scamshield.png"
              alt="scamshield"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              4. Report Through ScamShield
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li>Download the ScamShield App (<Link href="https://scamshield.gov.sg" className='text-red-600 underline' target='_blank'>scamshield.gov.sg</Link>) to block scam calls/SMS and report suspicious messages instantly.</li>
                <li>Use the ScamShield WhatsApp bot to check unknown numbers and URLs before you act.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl justify-center items-center p-10 flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex justify-center w-full lg:w-1/4 h-auto">
            <img
              src="steps/tell.png"
              alt="tell others"
              className="rounded"
            />
          </div>
          <div className='px-2 w-4/5 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-black text-3xl text-black mb-2">
              5. Tell Others
            </h2>
            <div className="text-xl text-black font-bold mb-2">
              <ul>
                <li>Warn friends, family, and colleagues so they don’t fall for the same scam.</li>
                <li>Share your experience on social media or community chat groups.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
