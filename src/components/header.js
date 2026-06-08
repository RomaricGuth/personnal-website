"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "./image";
import LanguagePicker from "./languagePicker";
import Menu from "./menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row flex-wrap justify-between items-center px-16 py-2 lg:py-3 gap-3 transition-colors duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-black border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <Image
            src="/assets/logo-nobg.png"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
        <LanguagePicker />
      </div>
      <Menu />
    </div>
  );
}
