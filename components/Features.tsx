"use client";
import React, { useState, useEffect, useRef } from "react";
import Tag from "./ui/tag";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const features = [
  {
    title: "Agent Swarms",
    description:
      "Deploy multiple AI agents that work together to complete complex business tasks. From handling support tickets to analyzing data, Siden agents collaborate like a real team.",
    image: "/features/01.mp4",
    alt: "Agent Swarms Illustration",
  },
  {
    title: "Hyper-Personalization",
    description:
      "Siden learns from your business data to deliver responses and decisions tailored exactly to your workflows, tone, and goals. No generic AI responses—just your brand amplified.",
    image: "/features/02.mp4",
    alt: "Hyper-Personalization Illustration",
  },
  {
    title: "50+ Integrations",
    description:
      "Siden connects with all your tools—from CRMs to Notion to Google Workspace—so your agents always have full context and can act across platforms.",
    image: "/features/03.mp4",
    alt: "Integrations Illustration",
  },
  {
    title: "Question Answering",
    description:
      "Siden connects with all your tools—from CRMs to Notion to Google Workspace—so your agents always have full context and can act across platforms.",
    image: "/features/04.mp4",
    alt: "Integrations Illustration",
  },
];

const INTERVAL = 7000;

export function Features() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = (newIdx?: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, INTERVAL);
    if (typeof newIdx === 'number') setCurrent(newIdx);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, []);

  const tools = [
    "/tools/notion.svg",
    "/tools/gmail.svg",
    "/tools/slack.svg",
    "/tools/calendar.svg",
    "/tools/docs.svg",
    "/tools/drive.svg",
    "/tools/github.svg",
    "/tools/zoom.svg",
]

  return (
    <section className="w-full flex flex-col items-center justify-between pt-20 bg-[#f9f8f6] md:h-[950px] h-auto px-4">
      {/* <Tag>Features</Tag> */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Focus on what you love. <br className="hidden md:block"/>Let the agents handle the rest.
        </h2>
        <p className="text-lg text-[var(--description)] text-center mb-12 max-w-2xl">
          Siden agents understand everything about your business and can action tasks in the tools you use everyday.
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

        <div className="flex-1 w-full md:w-1/2 flex flex-col items-start justify-center min-h-[320px]">
          <div className="flex flex-col gap-2 w-full relative">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-start w-full group"
              >

                <div
                  className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] mr-4 rounded-full mt-1 origin-top
                    ${idx === current
                      ? 'bg-black w-1 h-12'
                      : 'bg-gray-300 w-1 h-8'}
                  `}
                  style={{ transitionProperty: 'height, background-color' }}
                  aria-hidden="true"
                />
                <div className="flex flex-col flex-1">
                  <span
                    className={`transition-all duration-300 text-lg md:text-xl font-semibold cursor-pointer select-none
                      ${idx === current
                        ? 'text-[var(--foreground)] font-bold'
                        : 'text-gray-400 dark:text-gray-500 font-normal'}
                    `}
                    onClick={() => resetInterval(idx)}
                  >
                    {feature.title}
                  </span>

                  {idx === current && (
                    <span
                      className={`block transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform opacity-100 translate-y-0 pointer-events-auto`}
                    >
                      {feature.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full md:w-1/2 flex items-center justify-center min-h-[320px]">
          <div className="relative w-full max-w-md aspect-[6/4] flex items-center justify-center border border-[var(--border)] bg-white rounded-2xl overflow-hidden shadow-lg">
            {features.map((feature, idx) => (
              <video
                key={feature.image}
                src={feature.image}
                loop
                autoPlay
                playsInline
                muted
                controls={false}
                className={`transition-all duration-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain
                  ${idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'}`}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="w-full max-w-[900px] mx-auto px-4 py-10 md:px-4">
            <h1 className="text-center text-[#7c7c7c] font-semibold">Agents work in all of your favorite tools</h1>
            <div className="w-full py-10">
            <Marquee gradient={true} gradientColor="#f9f8f6">
                <div className="flex items-center">
                {tools.map((tools, i)=>(
                    <div key={i}>
                        <Image src={tools} alt="tool" width="25" height="0" className='mx-12 w-[25px] h-[25px] object-contain select-none' />
                    </div>
                ))}
                </div>
            </Marquee>
            </div>
        </div>
    </section>
  );
}
