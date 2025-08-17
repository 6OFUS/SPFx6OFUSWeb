import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TranslatableText from "./TranslatableText";

interface ShopTheftProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const shopTheft: ShopTheftProps[] = [
  {
    icon: <img
            src= "/icon.png"
            alt=""
            className="w-[75px] object-contain rounded-lg"
          />,
    title: "Blah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <img
            src= "/icon.png"
            alt=""
            className="w-[75px] object-contain rounded-lg"
          />,
    title: "BLAH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <img
            src= "/icon.png"
            alt=""
            className="w-[75px] object-contain rounded-lg"
          />,
    title: "blahh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <img
            src= "/icon.png"
            alt=""
            className="w-[75px] object-contain rounded-lg"
          />,
    title: "bleh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const WhatIsShopTheft = () => {
  return (
    <section id="shoptheft" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <TranslatableText>What is Shop Theft?</TranslatableText>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        <TranslatableText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          dolor pariatur sit!
        </TranslatableText>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {shopTheft.map(({ icon, title, description }: ShopTheftProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                <TranslatableText>{title}</TranslatableText>
              </CardTitle>
            </CardHeader>
            <CardContent><TranslatableText>{description}</TranslatableText></CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
