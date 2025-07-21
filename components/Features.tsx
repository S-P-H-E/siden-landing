"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
      title: "Agent Swarms",
      description:
        "Deploy multiple AI agents that work together to complete complex business tasks. From handling support tickets to analyzing data, Siden agents collaborate like a real team.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] text-white">
          Agent Swarms
        </div>
      ),
    },
    {
      title: "Hyper-Personalization",
      description:
        "Siden learns from your business data to deliver responses and decisions tailored exactly to your workflows, tone, and goals. No generic AI responses—just your brand amplified.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--amber-500))] text-white">
          Hyper-Personalization
        </div>
      ),
    },
    {
      title: "50+ Integrations",
      description:
        "Siden connects with all your tools—from CRMs to Notion to Google Workspace—so your agents always have full context and can act across platforms.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--cyan-500))] text-white">
          50+ Integrations
        </div>
      ),
    },
    // {
    //   title: "Instant Answers",
    //   description:
    //     "Ask Siden anything about your company—FAQs, sales data, SOPs, employee info—and get immediate, accurate responses sourced from your internal knowledge.",
    //   content: (
    //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--lime-500))] text-white">
    //       Instant Answers
    //     </div>
    //   ),
    // },
  ];
  
export function Features() {
  return (
    <div className="flex flex-col items-center w-full justify-center pt-40 gap-4">
        <div className="px-4 py-2 w-fit rounded-full bg-[var(--border)] text-white font-semibold">
            <p>Features</p>
        </div>
        <h1 className="text-5xl font-bold text-center ">Focus on what you love. <br /> Let the agents handle the rest.</h1>
        <p className="text-[var(--description)]">Siden agents understand everything about your business and can action tasks in the tools you use everyday.</p>
        <div className="w-full relative">
            <div className="absolute top-0 w-full bg-gradient-to-b from-[var(--background)] to-transparent z-10 h-[100px]"/>
            <StickyScroll content={content}/>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--background)] to-transparent z-10 h-[100px]"/>
        </div>
    </div>
  );
}
