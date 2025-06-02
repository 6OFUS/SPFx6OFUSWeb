import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import policecartoon from "../assets/police-cartoon.png";
import Image, { StaticImageData } from "next/image";

interface ASKProtocolProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const features: ASKProtocolProps[] = [
  {
    title: "Ask",
    description:
      "Ask the suspicious person politely, hand them a basket/carrier",
    image: policecartoon,
  },
  {
    title: "Stay Safe",
    description:
      "Stay safe, notify your colleagues to keep them alert and aware of the situation",
    image: policecartoon,
  },
  {
    title: "Keep Close",
    description:
      "Keep close to the suspicious person, observe their actions and behavior",
    image: policecartoon,
  },
];

const askProtocolList: string[] = [
  // "Dark/Light theme",
  // "Reviews",
  // "Features",
  // "Pricing",
  // "Contact form",
  // "Our team",
  // "Responsive design",
  // "Newsletter",
  // "Minimalist",
];

export const ASKProtocol = () => {
  return (
    <section id="askprotocol" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        A.S.K{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Protocol
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {askProtocolList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: ASKProtocolProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
