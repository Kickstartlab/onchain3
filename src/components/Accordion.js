import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How does the onboarding process work?",
    answer: "Simple. Fill out our inquiry form, jump on a quick call, and we’ll build a strategy tailored to your Web3 project.",
  },
  {
    id: 2,
    question: "Is this a long-term commitment?",
    answer: "Nope! Our services are fully flexible—you can scale, pause, or adjust anytime.",
  },
  {
    id: 3,
    question: "How soon can we expect results?",
    answer: "Most campaigns start gaining traction within 4-8 weeks, but paid ads can deliver faster results.",
  },
  {
    id: 4,
    question: "Do you offer influencer marketing & PR?",
    answer: "Yes! We connect you with Web3 influencers & get press coverage on top-tier crypto media.",
  },
  {
    id: 5,
    question: "What’s the pricing structure?",
    answer: "Custom pricing based on your needs—either monthly retainer or project-based.",
  },
];

export default function Accordion() {
  const [openItems, setOpenItems] = useState(faqs.map(() => false));

  const toggleAccordion = (index) => {
    setOpenItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className={`border border-[#CDFEE6CC] rounded-xl ${openItems[index] ? "open" : "clip-path"}`}>
          <div
            className="w-full flex justify-between items-center lg:px-6 px-2 md:py-4 py-1.5 lg:text-xl font-semibold relative">
            <span className="flex items-center md:space-x-5 space-x-2">
              <span className="font-bruno">
                {faq.id.toString().padStart(2, "0")}
              </span>
              <span className="md:h-auto h-12 flex items-center md:text-base text-xs">{faq.question}</span>
            </span>

            <div onClick={() => toggleAccordion(index)} className={`absolute right-0 top-0 flex items-center cursor-pointer ${openItems[index] ? "translate-x-3.5" : "translate-x-0"}`}>
              <div className={`triangle ${openItems[index] ? "open" : ""}`}></div>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${openItems[index] ? "max-h-40 py-2 px-6" : "max-h-0"}`}
          >
            <p className="md:text-base text-xs">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
