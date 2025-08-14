'use client';

import Link from "next/link";
import { Navbar } from "./Navbar";

export const CreditsHero = () => {
  return (
    <div className="bg-[url(/oriBg.png)] bg-contain bg-top bg-center flex flex-col overflow-hidden items-center justify-center">
      <Navbar />

      <img
        src="credits/credits.png"
        alt="Credits"
        className="mt-12 md:mt-28 w-5/6 md:w-1/3 max-w-full h-auto"
      />

      <div className="bg-white w-11/12 sm:w-4/5 rounded-3xl p-4 sm:p-8 text-center shadow-sm">
        <h2 className="text-[#E29B00] font-black text-base sm:text-lg mb-3">
          Credits & Acknowledgements
        </h2>
        <p className="text-gray-800 mx-auto text-sm sm:text-base">
          We would like to express our heartfelt thanks to all the creators, platforms, 
          and individuals who made this project possible. This page acknowledges the 
          third-party assets and tools we used in both our game and website.
        </p>
      </div>

      <div className="bg-white rounded-3xl my-6 sm:my-8 w-11/12 sm:w-4/5 p-4 sm:p-8 shadow-sm flex flex-col items-center lg:items-start gap-6">
        <h2 className="text-red-600 font-black text-base sm:text-lg self-center">
          Special Thanks
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <img
            src="/credits/software.png"
            alt="Special Thanks Software Logos"
            className="max-w-xs sm:max-w-sm md:w-1/2 m-4 sm:m-8 object-contain"
          />
          <div className="p-4 sm:p-8 mx-2 xl:mx-12 font-bold text-lg sm:text-base">
            <p>We would like to express our sincere gratitude to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 mt-3 break-words">
              <li>Ngee Ann Polytechnic for providing us with the platform, facilities, and mentorship.</li>
              <li>Our lecturers and project supervisors for their guidance and support.</li>
              <li>All usability testing participants who offered their time to improve our game.</li>
              <li>The creators of public assets and tools that brought this project to life.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white my-6 sm:my-8 rounded-3xl w-11/12 sm:w-4/5 p-8 md:p-20 shadow-sm">
        <h2 className="text-red-600 font-black text-base sm:text-lg mb-4">Tools & Platforms</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base break-words">
          <li>Unity – Game development engine</li>
          <li>Maya – 3D modeling and animation</li>
          <li>Substance Painter – Texture painting and materials</li>
          <li>Figma – Wireframing and prototyping</li>
          <li>Adobe Illustrator / Photoshop – UI & graphic design</li>
          <li>CapCut – Video editing</li>
          <li>Canva – Layout design & promotional graphics</li>
          <li>ChatGPT – Writing, scripting, documentation</li>
          <li>GitHub – Version control</li>
          <li>Visual Studio Code – Code editing</li>
          <li>React – Frontend framework</li>
          <li>Next.js – Web app framework</li>
          <li>Shadcn/UI – React component library</li>
          <li>Google Gemini API – AI-generated text</li>
          <li>Google Translate API Logs – Translation accuracy checks</li>
        </ul>
      </div>

      <div className="bg-white my-6 sm:my-8 rounded-3xl w-11/12 sm:w-4/5 p-8 md:p-20 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-rojo font-black text-lg mb-4">3D Models & Assets</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Unity Asset Store
                <ul className="list-disc list-inside ml-5">
                  <li><Link href="https://assetstore.unity.com/packages/3d/props/interior/clock-free-44164" className="underline">Clock (Free)</Link></li>
                  <li><Link href="https://assetstore.unity.com/packages/3d/characters/modular-first-person-controller-189884" className="underline">Modular First Person Controller</Link></li>
                  <li><Link href="https://assetstore.unity.com/packages/package/284996" className="underline">Walls & Ground Materials</Link></li>
                </ul>
              </li>
              <li>Sketchfab Models
                <ul className="list-disc list-inside ml-5">
                  <li><Link href="https://sketchfab.com/3d-models/modern-wooden-bedside-table-free-cb5896d029a740e99746308071a5c593" className="underline">Wooden Bedside Table</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/art3d-wall-panel-soundproof-a6a5348e150b49c0956500c943035613" className="underline">Art3D Wall Panel</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/microphone-sven-mk-490-5cc2d665f9114714bbb2a801ff86766a" className="underline">Microphone</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/t-shirt-on-hanger-5263eaaaed8041ef8413746306284bb8" className="underline">T-shirt on Hanger</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/air-condition-a9899a3a32d94b3fb5f631fb881ee4ac" className="underline">Air-conditioner</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/cc0-wall-shelf-4-8732f5e14a30461f83bcb34a9101cbc0" className="underline">Wall Shelf</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/plastic-waste-bin-cb278948a28a440d8e26573bbc8483df" className="underline">Plastic Waste Bin</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/wireless-headphone-2ebda7b42928419d98da3b1a83645415" className="underline">Wireless Headphones</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/tissue-16e98a0eb52f4c98b56c64be42dc7f3a" className="underline">Tissue Box</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/cat-figurine-dfb4fd38aed142f9a547dfc9bdcb599f" className="underline">Cat Figurine</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/low-poly-shoe-rack-4-d6fbb801f2de4c2ebafb4d7238c9fd30" className="underline">Shoe Rack</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/slipper-67722becfa704005aaea966803d8e46c" className="underline">Slippers</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/pb130-shoe-low-6d656faa5a1d4309a43cb5763cba002f" className="underline">PB130 Shoe</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/arnt-shoes-dunks-da7084026e5246148ed054037a6a3b71" className="underline">ARNT Dunks</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/wifi-router-b4d6cf6a306849b2b7acf803ee5c41ba" className="underline">WiFi Router</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/ceiling-fan-ec2c6087d4824211abc827f2a4c2b578" className="underline">Ceiling Fan</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/soviet-kettle-7689b0f5bd7748ffaaf378ccf977699a" className="underline">Soviet Kettle</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/supor-rice-cooker-a9bf09f4f333493580d75b4bde98f9cb" className="underline">Supor Rice Cooker</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/glass-kettle-3f646a36c0a142cfa451af70357f4235" className="underline">Glass Kettle</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/kitchen-stove-2d2c2c4bb7a74b068c09b5fc23a46e24" className="underline">Kitchen Stove</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/dish-rack-25fabeac911f4fb580b84774d5ca4716" className="underline">Dish Rack</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/plate-519c319332ed4708ba4b3ca1dfd5f54a" className="underline">Plate</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/basic-laundry-basket-926e2afa1d5c4bf6ab1ab1e7460ff62c" className="underline">Laundry Basket</Link></li>
                  <li><Link href="https://sketchfab.com/3d-models/paper-towel-roll-e10eb527561048b6bc1786c8c44cd0f5" className="underline">Paper Towel Roll</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-rojo font-black text-lg mb-4">Textures & Materials</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li><Link href="https://3dtextures.me/2020/08/27/glass-frosted-001/" className="underline">Frosted Glass</Link> – 3DTextures</li>
                <li><Link href="https://freepbr.com/product/flaking-plaster-pbr-material/" className="underline">Flaking Plaster</Link> – FreePBR</li>
                <li><Link href="https://freepbr.com/product/rough-plaster-pbr-material/" className="underline">Rough Plaster</Link> – FreePBR</li>
                <li><Link href="https://substance3d.adobe.com/community-assets/assets/8bbdda511b55c5e58098d105575b7b9e906eb431" className="underline">Adobe Substance 3D Assets</Link></li>
                <li><Link href="https://www.texturecan.com/details/358/" className="underline">TextureCan</Link> – Wall Material</li>
              </ul>
            </div>

            <div>
              <h2 className="text-rojo font-black text-lg mb-4">Images & References</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li><Link href="https://down-sg.img.susercontent.com/file/sg-11134207-7rd61-lupv6njggmm1d2" className="underline">Awareness Posters</Link></li>
                <li><Link href="https://www.northspringpri.moe.edu.sg/images/Safeguard%20against%20scams/safeguards%20against%20scams1024_1.png" className="underline">MOE Scam Poster</Link></li>
                <li>ScamShield ACT Campaign</li>
                <li><Link href="https://www.facebook.com/YishunNorthNPC/posts/scam-awarenesscongratulations-you-are-a-winnertake-a-moment-and-ask-yourself-did/2030632377028425/" className="underline">Yishun NPC Post</Link></li>
                <li><Link href="https://mothership.sg/2016/02/thousands-of-men-and-women-in-singapore-are-getting-swindled-by-online-scammers/" className="underline">Mothership Article</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-rojo font-black text-lg mb-4">Audio & Music</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Pixabay Music & SFX
                  <ul className="list-disc list-inside ml-5">
                    <li><Link href="https://pixabay.com/music/comedy-funny-comedy-memes-music-humor-comic-background-intro-theme-272171/" className="underline">Funny Comedy Music</Link></li>
                    <li><Link href="https://pixabay.com/music/circus-happy-comic-dancing-theme-377563/" className="underline">Comic Dancing Theme</Link></li>
                    <li><Link href="https://pixabay.com/sound-effects" className="underline">Sound Effects – Birds, Fan, Door Squeak, Cloth Rustling, etc.</Link></li>
                  </ul>
                </li>
                <li>Creators: 
                  <Link href="https://pixabay.com/users/qbertapply-47746050/" className="underline">gbertapply</Link>, 
                  <Link href="https://pixabay.com/users/lucadialessandro-25927643/" className="underline">lucadialessandro</Link>, 
                  others
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
