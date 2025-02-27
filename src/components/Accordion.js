import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Within what timeframe will I receive my designs?",
    answer: "Your designs will be delivered within X days.",
  },
  {
    id: 2,
    question: "How can I request design tasks?",
    answer: "You can request design tasks through our online portal.",
  },
  {
    id: 3,
    question: "What programs do you use for designs?",
    answer: "We use Adobe Photoshop, Illustrator, and Figma.",
  },
  {
    id: 4,
    question: "What can I expect with the standard package?",
    answer: "The standard package includes 3 revisions and priority support.",
  },
  {
    id: 5,
    question: "Who will I be working with?",
    answer: "You will be assigned a dedicated designer based on your needs.",
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
          className={`border border-[#CDFEE6CC] rounded-xl ${ openItems[index] ? "open" : "clip-path"}`}>
          <div
            className="w-full flex justify-between items-center lg:px-6 px-2 md:py-4 py-1.5 lg:text-xl font-semibold relative">
            <span className="flex items-center md:space-x-5 space-x-2">
              <span className="font-bruno">
                {faq.id.toString().padStart(2, "0")}
              </span>
              <span className="lg:h-auto h-12 flex items-center md:text-base text-xs">{faq.question}</span>
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
