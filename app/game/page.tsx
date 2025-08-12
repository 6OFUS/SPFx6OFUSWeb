import { UnityGame } from "@/components/UnityGame";
import { ASKHero } from "@/components/ASKHero";
import { Utilities } from "@/components/Utilities";

export default function GamePage() {
  return (
    <>
      <Utilities /> 
      <UnityGame />
      <ASKHero />
    </>
  );
}
