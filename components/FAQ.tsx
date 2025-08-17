import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import TranslatableText from "./TranslatableText";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Please PayLeh!?",
    answer: "It’s an interactive simulation game designed to raise awareness about shop theft in Singapore. You’ll learn how to spot suspicious behavior and take safe, responsible actions.",
    value: "item-1",
  },
  {
    question: "Who is this game for?",
    answer:
      "It’s made for everyone, from everyday shoppers to students. If you’ve ever stepped into a store, this game helps you understand how to be more alert and community-minded.",
    value: "item-2",
  },
  {
    question:
      "Do I need a VR headset to play?",
    answer:
      "Nope! While VR offers a fully immersive version, there's also a 2D version available on PC and mobile that works just as well.",
    value: "item-3",
  },
  {
    question: "Is this game free to play?",
    answer: "Yes! It's a public awareness project supported by local organizations and totally free to access.",
    value: "item-4",
  },
  {
    question:
      "Is this meant to catch thieves?",
    answer:
      "No. It’s not about accusing anyone. It’s about learning to recognize possible red flags and respond in a safe, respectful way using the A.S.K. method (Ask, Stay Safe, Keep Close).",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <TranslatableText>Frequently Asked</TranslatableText>{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          <TranslatableText>Questions</TranslatableText>
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              <TranslatableText>{question}</TranslatableText>
            </AccordionTrigger>

            <AccordionContent><TranslatableText>{answer}</TranslatableText></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        <TranslatableText>Still have questions?</TranslatableText>{" "}
        <Link
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          <TranslatableText>Contact us</TranslatableText>
        </Link>
      </h3>
    </section>
  );
};
