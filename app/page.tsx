// import { About } from "@/components/About";
// import { FAQ } from "@/components/FAQ";
// import { ASKProtocol } from "@/components/ASKProtocol";
// import { Hero } from "@/components/Hero";
// import { WhatIsShopTheft } from "@/components/WhatIsShopTheft";
// import { Newsletter } from "@/components/Newsletter";
// import { AboutUs } from "@/components/AboutUs";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <WhatIsShopTheft />
//       <ASKProtocol />
//       <AboutUs />
//       <Newsletter />
//       <FAQ />
//     </>
//   );
// }

import { Home } from "@/components/Home";
import { Utilities } from "@/components/Utilities";

export default function HomePage() {
  return (
    <>
      <Utilities />
      <Home />
    </>
  );
}
