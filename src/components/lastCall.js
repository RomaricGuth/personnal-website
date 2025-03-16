"use client";

import Image from "./image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Motion from "./motion";
import Link from "next/link";

export default function LastCall() {
  const t = useTranslations("HomePage");
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
    <div>
      <Motion animation="slideIn" transition={{ delay: 0.5 }}>
        <h3>{t("workTogether")}</h3>
      </Motion>
      <div className="flex flex-col justify-center gap-4 mt-8">
        {contactMedias.map((media) => (
          <div key={media.name} className="flex flex-row items-center gap-4">
            <Image
              key={media.name}
              src={media.image}
              alt={media.name}
              width={30}
              height={30}
              className="min-w-[30px]"
            />
            <div className="truncate">
              {media.name}
              {" : "}
              <Link
                href={media.url}
                className="inline underline"
                target="_blank"
              >
                {media.urlAlias ?? media.url}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Motion animation="slideIn" transition={{ delay: 0.5 }}>
        <h3 className="mt-16 mb-8">{t("knowMore")}</h3>
      </Motion>
      <div className="flex flex-col gap-4 mb-8">
        {otherMedias.map((media) => (
          <div key={media.name} className="flex flex-row items-center gap-4">
            <Image
              key={media.name}
              src={media.image}
              alt={media.name}
              width={30}
              height={30}
              className="min-w-[30px]"
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
      <Link
        href="https://romaricguth.github.io/resume/?position=Software+Engineer"
        target="_blank"
      >
        <Button variant="outline">{t("checkResume")}</Button>
      </Link>
    </div>
  );
}
