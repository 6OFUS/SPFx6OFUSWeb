import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Gamepad2, Users, PhoneOutgoing } from "lucide-react";

import sixofuslogo from "../assets/6ofus-logo.png";
import Image from "next/image";

interface AboutUsProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const aboutUsList: AboutUsProps[] = [
  {
    title: "6OFUS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <Gamepad2 />,
  },
  {
    title: "Meet The Team",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <Users />,
  },
  {
    title: "Contact Us!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <PhoneOutgoing />,
  },
];

export const AboutUs = () => {
  return (
    <section id="aboutus" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              About{" "}
            </span>
            Us
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Our mission is to create immersive VR and 2D simulations to raise shop theft awareness, educate users, and promote safer, more vigilant retail spaces in Singapore.
          </p>

          <div className="flex flex-col gap-8">
            {aboutUsList.map(({ icon, title, description }: AboutUsProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src={sixofuslogo}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
