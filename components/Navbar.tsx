"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Button from "./ui/button";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Active section logic
      const offsets = navLinks.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);

      // Hide/show on scroll direction
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setShow(true);
      } else if (currentScroll > lastScroll.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <div
      className={`w-full p-6 fixed top-0 left-0 z-30 transition-transform duration-500 ease-in-out
        ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between w-[1500px] mx-auto bg-blur py-4 px-6 rounded-full">
        <div className="w-1/2 flex items-center gap-3">
          <Image src="/Logo.svg" alt="Siden Logo" className="brightness-0" width={25} height={25} />
          <h1 className="text-2xl font-bold select-none">Siden</h1>
        </div>
        <div className="flex items-center justify-center gap-8 w-1/2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-medium transition-colors duration-200 rounded-md focus:outline-none cursor-pointer
                ${active === link.id ? "text-[var(--accent)]" : "text-[var(--description)] hover:text-[var(--accent)]"}
              `}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <Button href="https://siden.ai/auth?mode=signup">JOIN WAITLIST</Button>
        </div>
      </div>
    </div>
  );
}