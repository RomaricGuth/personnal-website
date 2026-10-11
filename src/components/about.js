"use client";

import { richTextTags } from "@/i18n/richTextTags";
import Image from "./image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HomePage");

  return (
    <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:p-14">
      <div>
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
          <Image
            src="/assets/pen.png"
            alt=""
            width={22}
            height={22}
          />
          {t("storyTime")}
        </div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {t("storyHeading")}
        </h2>
      </div>
      <p className="text-lg leading-8 text-neutral-600">
        {t.markup("story", richTextTags)}
      </p>
    </div>
  );
}
