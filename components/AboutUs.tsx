import Link from "next/link";
import { InstagramEmbed } from './InstagramEmbed';

export const AboutUs = () => {
  return (
    <div className="bg-[url(/bkgd2.png)] w-full h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden font-heavitas">
      <div className="h-32 w-full flex px-8 pt-6">
        <div className="flex w-1/3 flex-col justify-start">
          <img src="/coming-soon/TopLeft.png" alt="Top Left Logo" className="w-full" />
          <div className="flex gap-3 ml-6">
            <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
              <img src="/ig.png" alt="Instagram" className="h-1/4" />
            </Link>
            <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
              <img src="/tt.png" alt="TikTok" className="h-1/4" />
            </Link>
          </div>
        </div>

        <div className="flex w-1/3 items-top justify-center">
          <Link href="/">
            <img
              src="/events/6OFUSCircleLogo.png"
              alt="6OFUS Logo"
              className="w-1/3 mx-auto"
            />
          </Link>
        </div>

        <div className="flex w-1/3 justify-end">
          <Link href="/" className="flex justify-end">
            <img src="/homeBtn.png" alt="Home"/>
          </Link>
        </div>
      </div>

      <div className="w-5/6 flex m-8 py-20 flex-col justify-center mx-auto">
        <img className="my-20" src="/aboutus/6ofusbanner.png" alt="6OFUS Banner"/>
        <img className="w-1/6 mx-auto" src="/coming-soon/60fus.png" alt="6OFUS"/>
      </div>

      <div className=" w-5/6 px-8 flex pt-20 flex-col justify-center font-bold text-4xl mx-auto text-center text-pennblue" data-aos="fade-up">
        About 6OFUS
        <div className="flex flex-row gap-8 my-24">
          <div className="w-1/2 text-left text-base font-extralight justify-center flex flex-col">
            <div className="text-rojo text-4xl">Who We Are</div>
            <br></br><br></br><br></br>
            We’re 6OFUS, a passionate student team from Ngee Ann Polytechnic’s School of ICT, currently pursuing our Diploma in Immersive Media.
            <br></br><br></br>
            Our team is made up of:
            <li>3 Developers (3DEV)</li>
            <li>3 Designers (3DES)</li>
            <br></br>
            Together, we combine code and creativity to create meaningful, immersive experiences that engage, educate, and empower.
          </div>
          <div className="flex w-1/2 justify-center items-center text-right">
            <img src="/aboutus/6OFUSlogo 1.png" alt="6OFUS" className="w-3/5"/>
          </div>
        </div>
      </div>

      <div className=" w-5/6 px-8 flex flex-col justify-center font-bold text-4xl mx-auto text-center text-pennblue my-24" data-aos="fade-up">
        <div className="flex flex-row gap-8">
          <div className="flex w-1/2 justify-center items-center text-right">
            <img src="/aboutus/6ofusCD.png" alt="6OFUS" className="w-3/5"/>
          </div>
          <div className="w-1/2 text-left text-base font-extralight justify-center flex flex-col">
            <div className="text-rojo text-4xl">Our Mission</div>
            <br></br><br></br><br></br>
            We create interactive games and simulations that help retail staff and public to learn how to spot scams and stop shop theft.
            <br></br><br></br>
            Because we believe learning should be practical, engaging, and even a little fun.
          </div>
        </div>
      </div>

      <div className=" w-5/6 px-8 flex my-20 flex-col justify-center items-center font-bold text-4xl mx-auto text-center text-pennblue" data-aos="fade-up">
        Meet The Team
        <img src="/aboutus/3Des3Dev.png" alt="3des3dev" className="w-1/3 my-20"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          <img src="/aboutus/huihui.png" alt="huhui" className=""/>
          <img src="/aboutus/malcom.png" alt="malcom" className=""/>
          <img src="/aboutus/jenn.png" alt="jennifer" className=""/>
          <img src="/aboutus/kevin.png" alt="kevin" className=""/>
          <img src="/aboutus/alfred.png" alt="alfred" className=""/>
          <img src="/aboutus/rayn.png" alt="rayn" className=""/>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          <div className="bg-yellow-400 rounded-lg p-4 shadow-md text-center border-4 border-black">
            <img src="/your-art-director.png" alt="Art Director" className="mx-auto mb-3 rounded-full w-32 h-32 object-cover" />
            <h3 className="font-bold text-xl mb-2">ART DIRECTOR</h3>
            <div className="space-y-2">
              <div className="bg-white p-2 rounded">portfolio.website.com</div>
              <div className="bg-white p-2 rounded">name@gmail.com</div>
              <div className="bg-white p-2 rounded">linkedin.website.com</div>
            </div>
          </div>

          <div className="bg-orange-400 rounded-lg p-4 shadow-md text-center border-4 border-black">
            <img src="/your-lead-3d.png" alt="Lead 3D Designer" className="mx-auto mb-3 rounded-full w-32 h-32 object-cover" />
            <h3 className="font-bold text-xl mb-2">LEAD 3D DESIGNER</h3>
            <div className="space-y-2">
              <div className="bg-white p-2 rounded">portfolio.website.com</div>
              <div className="bg-white p-2 rounded">name@gmail.com</div>
              <div className="bg-white p-2 rounded">linkedin.website.com</div>
            </div>
          </div>

          <div className="bg-yellow-400 rounded-lg p-4 shadow-md text-center border-4 border-black">
            <img src="/your-3d-designer.png" alt="3D Designer" className="mx-auto mb-3 rounded-full w-32 h-32 object-cover" />
            <h3 className="font-bold text-xl mb-2">3D DESIGNER</h3>
            <div className="space-y-2">
              <div className="bg-white p-2 rounded">portfolio.website.com</div>
              <div className="bg-white p-2 rounded">name@gmail.com</div>
              <div className="bg-white p-2 rounded">linkedin.website.com</div>
            </div>
          </div>

          <div className="bg-orange-400 rounded-lg p-4 shadow-md text-center border-4 border-black">
            <img src="/your-lead-game-dev.png" alt="Lead Game Developer" className="mx-auto mb-3 rounded-full w-32 h-32 object-cover" />
            <h3 className="font-bold text-xl mb-2">LEAD GAME DEVELOPER</h3>
            <div className="space-y-2">
              <div className="bg-white p-2 rounded">portfolio.website.com</div>
              <div className="bg-white p-2 rounded">name@gmail.com</div>
              <div className="bg-white p-2 rounded">linkedin.website.com</div>
            </div>
          </div>

          <div className="bg-yellow-400 rounded-lg p-4 shadow-md text-center border-4 border-black">
            <img src="/your-lead-dev.png" alt="Lead Developer" className="mx-auto mb-3 rounded-full w-32 h-32 object-cover" />
            <h3 className="font-bold text-xl mb-2">LEAD DEVELOPER</h3>
            <div className="space-y-2">
              <div className="bg-white p-2 rounded">portfolio.website.com</div>
              <div className="bg-white p-2 rounded">name@gmail.com</div>
              <div className="bg-white p-2 rounded">linkedin.website.com</div>
            </div>
          </div>

          <div className="bg-orange-400 rounded-lg p-4 shadow-md text-center border-4 border-black">
            <img src="/your-vfx-artist.png" alt="3D Visual Effect Artist" className="mx-auto mb-3 rounded-full w-32 h-32 object-cover" />
            <h3 className="font-bold text-xl mb-2">3D VISUAL EFFECT ARTIST</h3>
            <div className="space-y-2">
              <div className="bg-white p-2 rounded">portfolio.website.com</div>
              <div className="bg-white p-2 rounded">name@gmail.com</div>
              <div className="bg-white p-2 rounded">linkedin.website.com</div>
            </div>
          </div>
        </div> */}
      </div>

      <div className=" w-5/6 px-8 my-40 flex flex-col justify-center items-center font-bold text-4xl mx-auto text-center text-pennblue" data-aos="fade-up">
          <div className="flex flex-row gap-8">
            <div className="w-1/2 flex justify-center">
              <div className="h-1/3">
                <InstagramEmbed />      
              </div>
            </div>
            <div className="flex flex-col w-1/2 justify-center items-center">
              <div className="text-5xl text-center font-extralight justify-center flex flex-col">
                Aiyoh! Don't Kena Scam Leh!
                <div className="text-base font-richblack">
                  <br></br><br></br><br></br>
                  Watch our scam parody music video created for #YAS2025 
                  <br></br><br></br>
                  Like & share to help others stay alert.
                </div>
              </div>
              <div className="text-3xl text-center font-extralight justify-center items-center flex flex-col my-16 p-10 bg-yellow-200 text-pennblue outline rounded-3xl">
                Follow our Journey
                <div className="text-base font-richblack m-10">
                  Join us behind the scenes, from storyboards to 3D models, and see what student creators can do!
                </div>
                <div className="flex w-1/2 gap-16 items-center justify-center">
                  <Link href="https://www.instagram.com/6ofus2025/" target="_blank">
                    <img className="w-24" src="/ig.png" alt="Instagram" />
                  </Link>
                  <Link href="https://www.tiktok.com/@6ofus2025" target="_blank">
                    <img className="w-24" src="/tt.png" alt="TikTok" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
