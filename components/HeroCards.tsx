import { Avatar, AvatarFallback } from "./ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Instagram, Youtube } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* X Tweet */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <img
                src="../assets/X-avatar.png"
                alt=""
                className=""
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Alfred Kang</CardTitle>
            <CardDescription>@alfredkangjr</CardDescription>
          </div>
        </CardHeader>

        <CardContent>just saw someone try to sneak a bottle past the cashier… don’t play play, shop theft is real sia 😤 #StayAlert #PleasePayLeh</CardContent>
      </Card>

      {/* 6OFUS */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="../assets/6ofus-logo.png"
            alt="6OFUS"
            width={100}
            height={100}
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover bg-white"
          />
          <CardTitle className="text-center">6OFUS</CardTitle>
          <CardDescription className="font-normal text-primary">
            Game Design Studio 
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            We want to create immersive VR experiences that benefit the community
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <Link
              href="https://github.com/6ofus"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/6ofus2025/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Instagram Icon</span>
              <Instagram size="20" />
            </Link>

            <Link
              href="https://www.youtube.com/@6OFUS2025"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Youtube icon</span>
              <Youtube size="20" />
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* SPF */}
      <Card className="absolute top-[210px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <img
                src="../assets/police-cartoon.png"
                alt="Police Logo"
                width={500}
                height={500}
                className="flex self-center w-screen"
              />
        </CardHeader>
        <CardFooter className="flex">
          <p className="font-bold text-xl text-center">
            Partnering with: Singapore Police Force (i ran out of ideas)
          </p>
        </CardFooter>
      </Card>

      {/* Please Payleh! */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[0px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 p-1 rounded-2xl">
            <img
                src="../assets/icon.png"
                alt="Please PayLeh!"
                className="flex self-center"
              />
          </div>
          <div>
            <CardTitle>PayLeh!</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
