"use client";

import { Link as LocaleLink } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import Image from "./image";
import Motion from "./motion";
import { Button } from "./ui/button";

export default function LastCall() {
  const t = useTranslations("HomePage");
  const tCommon = useTranslations("Common");

  const contactMedias = [
    {
      name: "Mail",
      url: "mailto:contact@romaricguth.com",
      urlAlias: "contact@romaricguth.com",
      image: "/assets/mail.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guth",
      image: "/assets/linkedin.png",
    },
    {
      name: "Malt",
      url: "https://www.malt.fr/profile/guthromaric",
      image: "/assets/malt.png",
    },
  ];

  const otherMedias = [
    {
      name: "Github",
      url: "https://www.github.com/RomaricGuth",
      image: "/assets/github.png",
      text: t("githubExplanation"),
    },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <Motion animation="slideIn" transition={{ delay: 0.5 }}>
        <h3>{t("workTogether")}</h3>
      </Motion>

      <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
        <LocaleLink href="/contact" className="flex-1">
          <Button className="w-full">
            <Mail className="size-4" />
            {tCommon("contact")}
          </Button>
        </LocaleLink>
        <LocaleLink href="/cv" className="flex-1">
          <Button variant="outline" className="w-full">
            <FileText className="size-4" />
            {t("checkResume")}
          </Button>
        </LocaleLink>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {contactMedias.map((media) => (
          <Link
            key={media.name}
            href={media.url}
            target="_blank"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <Image
              src={media.image}
              alt={media.name}
              width={24}
              height={24}
              className="min-w-[24px]"
            />
            <span className="truncate">{media.urlAlias ?? media.name}</span>
          </Link>
        ))}
      </div>

      <Motion animation="slideIn" transition={{ delay: 0.5 }}>
        <h3 className="mt-16">{t("knowMore")}</h3>
      </Motion>
      <div className="mt-6 flex flex-col items-center gap-4">
        {otherMedias.map((media) => (
          <div key={media.name} className="flex items-center gap-2">
            <Image
              src={media.image}
              alt={media.name}
              width={24}
              height={24}
              className="min-w-[24px]"
            />
            <div>
              {media.text}
              <Link
                href={media.url}
                className="inline underline"
                target="_blank"
              >
                {media.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
