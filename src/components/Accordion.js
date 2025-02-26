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
    <div className="p-6 space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className={`border border-[#CDFEE6CC] rounded-lg text-white relative ${
            openItems[index] ? "open" : ""
          }`}
        >
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold relative"
            onClick={() => toggleAccordion(index)}
          >
            <span className="flex items-center space-x-2">
              <span className="text-cyan-400 text-xl font-mono">
                {faq.id.toString().padStart(2, "0")}
              </span>
              <span>{faq.question}</span>
            </span>

            {/* Right Side Triangular Toggle Button */}
            <div className="absolute right-0 top-0 h-full flex items-center">
              <div className={`triangle ${openItems[index] ? "open" : ""}`}></div>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openItems[index] ? "max-h-40 py-2 px-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
