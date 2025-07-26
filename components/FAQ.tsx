"use client"
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "What is Siden?",
    answer:
      "Siden is an AI platform that deploys smart agents to automate and enhance your business operations, from support to analytics.",
  },
  {
    question: "How do Siden agents integrate with my tools?",
    answer:
      "Siden connects with 50+ popular business tools, including CRMs, Notion, Google Workspace, and more, so your agents always have full context and can act across platforms.",
  },
  {
    question: "Is my business data secure with Siden?",
    answer:
      "Absolutely. Siden uses enterprise-grade encryption and strict access controls to keep your data private and secure.",
  },
  {
    question: "Can I customize how Siden agents behave?",
    answer:
      "Yes! Siden learns from your workflows, tone, and goals, so agents act in a way that fits your brand and processes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">Frequently Asked Questions</h2>
      <p className="text-lg text-[var(--description)] text-center mb-14 max-w-xl">Find answers to common questions about Siden.</p>
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={`group relative flex items-start rounded-3xl shadow-lg border border-[var(--border)] bg-white transition-all duration-300 overflow-hidden ${open === idx ? 'ring-2 ring-[var(--accent)]' : ''}`}
          >
            {/* Accent bar or icon */}
            <div className={`h-full w-2 transition-all duration-300 ${open === idx ? 'bg-[var(--accent)]' : 'bg-gray-200'}`}/>
            <button
              className="flex-1 w-full text-left px-8 py-7 focus:outline-none flex flex-col gap-2"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl md:text-2xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-200">{faq.question}</span>
                <span className={`ml-4 transition-transform duration-300 text-2xl ${open === idx ? 'rotate-180 text-[var(--accent)]' : 'rotate-0 text-gray-400'}`}>
                <IoIosArrowDown />
                </span>
              </div>
              <div
                id={`faq-answer-${idx}`}
                className={`transition-all duration-500 ease-in-out ${open === idx ? 'max-h-40 opacity-100 translate-y-0 mt-2' : 'max-h-0 opacity-0 -translate-y-2 mt-0'} overflow-hidden text-base md:text-lg text-[var(--description)]`}
                style={{ transitionProperty: 'max-height, opacity, transform, margin-top' }}
              >
                {faq.answer}
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 