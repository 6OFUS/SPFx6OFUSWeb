import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { ASKProtocol } from "@/components/ASKProtocol";
import { Hero } from "@/components/Hero";
import { WhatIsShopTheft } from "@/components/WhatIsShopTheft";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";
import { AboutUs } from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIsShopTheft />
      <ASKProtocol />
      <AboutUs />
      {/* <Cta /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
    </>
  );
}
