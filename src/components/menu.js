"use client";

import { useTranslations } from "next-intl";

export const menuSections = [
  {
    name: "about",
    link: "#about",
  },
  {
    name: "portfolio",
    link: "#portfolio",
  },
  {
    name: "testimonials",
    link: "#testimonials",
  },
  {
    name: "contact",
    link: "#contact",
  },
];

export default function Menu(props) {
  const t = useTranslations("Common");

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-x-8 gap-y-4 ${props.className}`}
    >
      {menuSections.map((section) => (
        <a
          key={section.name}
          className="text-white text-xl transition-opacity duration-300 ease-in-out hover:opacity-100 group-hover:opacity-30"
          href={section.link}
        >
          {t(section.name)}
        </a>
      ))}
    </div>
  );
}
