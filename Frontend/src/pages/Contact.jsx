import React from "react";
import { assets } from "../assets/assets";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";

const faqs = [
  {
    question: "How does the AI suggest medicines based on symptoms?",
    answer:
      "Our AI model analyzes your entered symptoms and matches them with a medical database to suggest possible medicines.",
  },
  {
    question: "Can I upload a prescription for AI to analyze?",
    answer:
      "Yes, you can upload handwritten or digital prescriptions. The system uses OCR to extract and analyze the content.",
  },
  {
    question: "Is doctor appointment scheduling available?",
    answer:
      "Absolutely. You can view doctor availability and schedule appointments directly from the platform.",
  },
  {
    question: "Is this service free or do I need to pay?",
    answer:
      "Basic features are free. Some premium AI diagnostic services might require a subscription.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-16 lg:px24 py-10 ">
      {/* --- Title Section --- */}
      <div className="text-center text-3xl md:text-4xl font-semibold text-gray-700 tracking-wide mb-10">
        <p>
          CONTACT <span className="text-[#0077B6]">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E3F2FD] rounded-full">
              <FaMapMarkerAlt className="text-gray-600 text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
              <p className="text-gray-500">
                13512 E Mansfield Ave, Spokane <br /> Valley, WA 99216, United
                States
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E3F2FD] rounded-full">
              <FaPhone className="text-gray-600 text-xl" />
            </div>
            <p className="text-gray-500">Ph: (+91) 9999999999</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E3F2FD] rounded-full">
              <FaEnvelope className="text-gray-600 text-xl" />
            </div>
            <p className="text-gray-500">Email: pseudocoder@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E3F2FD] rounded-full">
              <FaBriefcase className="text-gray-600 text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-600">
                CAREERS AT PRESCRIPTO
              </p>
              <p className="text-gray-500">
                Learn more about our teams and job openings.
              </p>
            </div>
          </div>

          <button className="border border-black px-32 py-4 text-xl hover:bg-[#E3F2FD] hover:text-black transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <div className="text-center text-2xl font-semibold text-gray-700 mb-10">
          <p>
            FREQUENTLY ASKED <span className="text-[#0077B6]">QUESTIONS</span>
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 bg-[#E3F2FD] text-left text-gray-700 font-medium "
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  } text-gray-500`}
                />
              </button>
              <div
                className={`px-4 py-3 text-gray-600 transition-all ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="text-center text-2xl font-semibold text-gray-700 mb-10 mt-20">
        <p>
          OUR<span className="text-[#0077B6]">VENUE</span>
        </p>
      </div>
      <div className="mt-3 flex justify-center mb-20">
        <iframe
          title="Google Map"
          className="w-full md:w-2/3 h-64 md:h-96 border rounded-lg"
          src="https://www.google.com/maps?q=54709%20Willms%20Station%20Suite%20350,%20Washington,%20USA&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
