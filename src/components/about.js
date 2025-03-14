"use client";

import { richTextTags } from "@/i18n/richTextTags";
import Image from "./image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HomePage");
  const needs = [
    {
      text: t("need1"),
      why: t("need1Explanation"),
    },
    {
      text: t("need2"),
      why: t("need2Explanation"),
    },
  ];

  return (
    <div>
      <div className="flex flex-row items-center gap-2 mb-8">
        <h3>{t("storyTime")}</h3>
        <Image
          src="/assets/pen.png"
          alt="picture of a pen"
          width={30}
          height={30}
        />
      </div>
      <p>{t.markup("story", richTextTags)}</p>
    </div>
  );
}
