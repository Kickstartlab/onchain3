import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="border border-blue-500 rounded-lg bg-gray-900 text-white"
        >
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold relative"
            onClick={() => toggleAccordion(index)}
          >
            <span>
              <span className="text-blue-400">{faq.id.toString().padStart(2, "0")}</span>{" "}
              {faq.question}
            </span>
            <div className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg">
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-40 py-2 px-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
