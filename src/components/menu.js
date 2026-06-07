"use client";

import { useTranslations, useLocale } from "next-intl";

export const menuSections = [
  {
    name: "portfolio",
    link: "",
  },
  {
    name: "resume",
    link: "/cv",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

export default function Menu(props) {
  const t = useTranslations("Common");
  const locale = useLocale();

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-x-8 gap-y-4 group ${props.className}`}
    >
      {menuSections.map((section) => (
        <a
          key={section.name}
          className="text-white text-lg transition-opacity duration-300 ease-in-out hover:opacity-100 group-hover:opacity-30"
          href={`/${locale}${section.link}`}
        >
          {t(section.name)}
        </a>
      ))}
    </div>
  );
}
