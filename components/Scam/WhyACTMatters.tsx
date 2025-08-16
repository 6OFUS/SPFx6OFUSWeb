import Link from 'next/link'
import { Navbar } from "../Navbar";

export const WhyACTMatters = () => {
  return (
    <div className="bg-[url(/oriBg.png)] w-screen h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <div className="w-4/5 mt-8 lg:mt-32 hidden lg:flex justify-center space-x-0">
        <Link href="/scam/about" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/about.png"
            alt=""
          />
        </Link>
        <Link href="/scam/why" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/scam/whyActive.png"
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
            src="/scam/steps.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-24 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col space-y-16">
        <div className="flex flex-col xl:flex-row justify-center items-center text-lg lg:text-xl">
          <img src="why/scammer.png" alt="" className="w-4/5 md:w-1/6 p-8 h-auto flex" />
          <h2 className="font-bold"><p className="font-black">Why A.C.T. Matters?</p><br></br>A.C.T. matters because scams can target anyone, and quick action can stop them. By adding ScamShield, checking suspicious messages, and telling the authorities, you protect yourself and help prevent others from becoming victims. Together, these steps build a safer, scam-smart community.
          </h2>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 md:p-10 flex flex-col gap-6 w-full lg:w-11/12">
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <img
              src="why/act.png"
              alt="I Can Act Logo"
              className="rounded w-full xl:w-1/2"
            />
            <div className='justify-center flex flex-col mx-2 lg:mx-8'>
              <h2 className="text-2xl font-black mb-2">What is A.C.T.?</h2><br></br>
              <p className="text-black text-lg">
                A.C.T. stands for Add, Check, Tell. Singapore’s national anti-scam
                action plan.<br></br>
                It’s a simple, three-step protocol to help everyone prevent, detect,
                and report scams.
              </p>
            </div>
          </div>
          <div>
            <ol className="list-decimal list-inside text-xl text-black font-bold space-y-1 m-8">
              <li>
                <span className="font-extrabold">Add</span> ScamShield and security features to block scam calls, filter
                malicious messages, and protect your accounts.
              </li>
              <li>
                <span className="font-extrabold">Check</span> messages, links, and requests with official sources before
                acting.
              </li>
              <li>
                <span className="font-extrabold">Tell</span> the authorities and your community so others don’t fall for
                the same scams.
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12">
          <div className="flex justify-center">
            <img
              src="why/elderly.png"
              alt="Scams Affect Everyone"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              Scams Affect Everyone
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              Scam incidents in Singapore are rising; financial losses increased
              by around 10.6% in 2024, totalling at least S$1.1 billion, while the
              number of cases has surpassed 50,000 nationally.
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Link:{" "}
              <a
                href="https://www.tech.gov.sg/products-and-services/for-citizens/scam-prevention?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                Government Technology Agency (GovTech)
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              These scams span across age groups, with about 75% of victims under 50. A.C.T. equips everyone with easy, actionable steps to protect themselves and loved ones.
            </p>
            <p className="text-lg text-black font-bold">
              Link:{" "}
              <a
                href="https://www.mha.gov.sg/mediaroom/speeches/defence-against-cyber-scams-empowering-you-against-fraud-programme/?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                Ministry of Home Affairs
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12">
          <div className="flex h-full justify-center">
            <img
              src="why/awareness.png"
              alt="Scams Affect Everyone"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              Awareness Alone Isn't Enough
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              Scammers constantly evolve their tactics, exploiting trust, urgency, and fear. Knowledge helps but without active steps, it’s insufficient. The A.C.T. framework is designed to empower individuals with preventive actions rather than passive awareness
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Link:{" "}
              <a
                href="https://www.bartleysec.moe.edu.sg/files/attachment%205%20-%20act%20and%20scamshield%20infographic%20for%20moe%20%28special%20broadcast%29.pdf?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                bartieysec.moe.edu.sg
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12">
          <div className="flex h-1/3 justify-center">
            <img
              src="why/icanact.png"
              alt="Scams Affect Everyone"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              A Three Step Shield Against Scams
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              <span className='text-xl font-extrabold'>A - Add (ScamShield & Security Features)</span>
              <br></br>Installing the ScamShield app blocks scam calls and filters malicious SMSes—over 120,000 scam entities blocked since 2022
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Link:{" "}
              <a
                href="https://www.tech.gov.sg/products-and-services/for-citizens/scam-prevention?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                Government Technology Agency (GovTech)
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Enhancing personal security (e.g., enabling 2FA, transaction limits, money-lock features) adds an essential layer of protection
            </p>
            <p className="text-lg text-black font-bold">
              Link:{" "}
              <a
                href="https://www.pdpc.gov.sg/news-and-events/press-room/2025/02/advisory-on-government-official-impersonation-scams-involving-impersonation-of-personal-data-protection-commission-officers?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                PDPC
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <span className='text-xl font-extrabold'>C - Check (Verify Before Acting)</span>
              <br></br>Always verify suspicious messages using official channels call the bank’s hotline, check agency websites, or use ScamShield’s WhatsApp Bot or helpline
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Link:{" "}
              <a
                href="https://www.scamshield.gov.sg/i-can-act-campaign/?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                ScamShield
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <span className='text-xl font-extrabold'>T - Tell (Report & Share)</span>
              <br></br>Immediately report suspected scams to your bank or the police enabling quick actions like emergency fund freezes or Restriction Orders to protect victims
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Link:{" "}
              <a
                href="https://www.mha.gov.sg/mediaroom/press-releases/commencement-of-the-protection-from-scams-act/?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                Ministry of Home Affairs
              </a>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Share scam encounters with family and friends or via the ScamShield platform, helping safeguard your community.
            </p>  
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12">
          <div className="flex w-full xl:w-2/3 justify-center">
            <img
              src="why/impact.png"
              alt="Impact"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              Collective Impact
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              A.C.T. is not just personal defense, it supports a community wide response. Sharing scam reports helps ScamShield's database and GovTech’s SATIS system detect and disrupt scam infrastructure more effectively. Together, ordinary individuals and institutions create a resilient shield against scams.
            </p>
            <p className="text-lg text-black font-bold mb-2">
              Link:{" "}
              <a
                href="https://www.bartleysec.moe.edu.sg/files/attachment%205%20-%20act%20and%20scamshield%20infographic%20for%20moe%20%28special%20broadcast%29.pdf?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                bartieysec.moe.edu.sg
              </a>  
              <a
                href="https://www.tech.gov.sg/products-and-services/for-citizens/scam-prevention?utm_source=chatgpt.com"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                , Government Technology Agency (GovTech)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
