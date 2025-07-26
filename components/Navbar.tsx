"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "brands", label: "Brands" },
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "footer", label: "Contact" },
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
      className={`w-full p-10 fixed top-0 left-0 z-30 transition-transform duration-500 ease-in-out
        ${show ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ background: "transparent" }}
    >
      <div className="flex justify-between w-[1500px] mx-auto">
        <div className="w-1/2 flex items-center gap-3">
          <Image src="/Logo.svg" alt="Siden Logo" className="brightness-0" width={25} height={25} />
          <h1 className="text-2xl font-bold select-none">Siden</h1>
        </div>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none
                ${active === link.id ? "text-[var(--accent)] bg-[var(--background)] shadow-md" : "text-gray-500 hover:text-[var(--accent)]"}
              `}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {link.label}
            </button>
          ))}
          <Link href="https://siden.ai/auth?mode=signup" className="rounded-md bg-[var(--accent)] text-[var(--background)] px-6 py-3 font-semibold ml-4">JOIN WAITLIST</Link>
        </nav>
      </div>
    </div>
  );
}