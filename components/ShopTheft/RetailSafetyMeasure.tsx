import Link from 'next/link'
import { Navbar } from "../Navbar";
import TranslatableText from '../TranslatableText';

export const RetailSafetyMeasure = () => {
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
            src="/shoptheft/safetymeasuresActive.png"
            alt=""
        />
        </Link>
        <Link href="/shoptheft/consequences" className="h-auto flex hover:scale-105 transition-transform duration-300">
          <img
            src="/shoptheft/consequences.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mb-32 bg-white rounded-3xl border-8 py-12 px-4 lg:px-24 border-black w-5/6 mx-auto shadow-sm font-nexa justify-center items-center flex flex-col space-y-8">
        <div className="flex flex-col sm:flex-row items-center text-lg lg:text-xl w-full my-4" data-aos="fade-up">
          <img src="safetymeasures/shopping.png" alt="" className="w-1/6 h-auto flex mx-16 my-4" />
          <h2 className="font-bold"><p className="font-black"><TranslatableText>Retail Safety Measures in Singapore Shops</TranslatableText></p><br></br><TranslatableText>In Singapore, retailers use various tools and programs to prevent shop theft and keep their stores secure. Here's an overview of the most effective measures:</TranslatableText>
          </h2>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className="flex w-full xl:w-2/3 justify-center">
            <img
              src="safetymeasures/cctv.png"
              alt="CCTV"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>CCTV Cameras</TranslatableText>
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Cameras are prominently placed at entrances, exits, checkout areas, and shelving to deter theft and monitor activity. Some stores integrate CCTV with alarm systems or smart tech for real time alerts.</TranslatableText>
              <br></br><br></br>
              <TranslatableText>“With more cameras installed, retailers can review footage and file reports against shoplifters anytime.” (Nanyang Technological University, 2025)</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.ntu.edu.sg/business/news-events/news/story-detail/stolen-goods-and-hidden-costs--why-shoplifting-is-on-the-rise-in-singapore"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Corporate NTU</TranslatableText>
              </a>  
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className="flex w-full xl:w-2/3 justify-center">
            <img
              src="safetymeasures/vest.png"
              alt="Safety Vest"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Staff Presence & Special Vests</TranslatableText>
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Retailers like Sheng Siong use high visibility vests for staff to enhance monitoring without being too intrusive.</TranslatableText>
              <br></br><br></br>
              <TranslatableText>“Having our store employees donning special vests helps to enhance our staff presence to deter and detect shop theft.” (Nanyang Technological University, 2025)</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.ntu.edu.sg/business/news-events/news/story-detail/stolen-goods-and-hidden-costs--why-shoplifting-is-on-the-rise-in-singapore"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Corporate NTU</TranslatableText>
              </a>  
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className="flex w-full xl:w-2/3 justify-center">
            <img
              src="safetymeasures/facialrecog.png"
              alt="Facial Recognition"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Facial Recognition Tech</TranslatableText>
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Some supermarkets in Singapore leverage facial recognition with CCTV to alert staff about known repeat shoplifters.</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.ntu.edu.sg/business/news-events/news/story-detail/stolen-goods-and-hidden-costs--why-shoplifting-is-on-the-rise-in-singapore"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Corporate NTU</TranslatableText>
              </a>  
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className="flex w-full xl:w-2/3 justify-center">
            <img
              src="safetymeasures/starprogramme.png"
              alt="Star Programme"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Police & Retailer Collaboration: 'STAR' Program</TranslatableText>
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Some supermarkets in Singapore leverage facial recognition with CCTV to alert staff about known repeat shoplifters.Cameras are prominently placed at entrances, exits, checkout areas, and shelving to deter theft and monitor activity. Some stores integrate CCTV with alarm systems or smart tech for real-time alerts.</TranslatableText>
              <br></br><br></br>
              <TranslatableText>“With more cameras installed, retailers can review footage and file reports against shoplifters anytime.” (Nanyang Technological University, 2025)</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.ntu.edu.sg/business/news-events/news/story-detail/stolen-goods-and-hidden-costs--why-shoplifting-is-on-the-rise-in-singapore"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>Corporate NTU</TranslatableText>
              </a>  
            </p>
          </div>
        </div>
        <div className="bg-[#FFD475] border-4 border-black rounded-3xl p-1 lg:p-10 flex flex-col xl:flex-row gap-6 w-11/12" data-aos="fade-up">
          <div className="flex w-full xl:w-2/3 justify-center">
            <img
              src="safetymeasures/tags.png"
              alt="Tags"
              className="rounded"
            />
          </div>
          <div className='px-2 lg:px-8 flex justify-center flex-col space-y-4'>
            <h2 className="font-extrabold text-2xl text-black mb-2">
              <TranslatableText>Multiple Tools, Not Just CCTV</TranslatableText>
            </h2>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>While CCTV is a crucial deterrent, it’s not enough on its own. Retailers add more measures like more eyes on the floor, improved store layout, or tag systems to strengthen security.</TranslatableText>
            </p>
            <p className="text-lg text-black font-bold mb-2">
              <TranslatableText>Link:</TranslatableText>{" "}
              <a
                href="https://www.ntu.edu.sg/business/news-events/news/story-detail/stolen-goods-and-hidden-costs--why-shoplifting-is-on-the-rise-in-singapore"
                className="text-red-600 underline font-semibold"
                target='_blank'
              >
                <TranslatableText>cctvsg.net</TranslatableText>
              </a>  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
