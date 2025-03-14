"use client";

import Image from "./image";
import { useTranslations } from "next-intl";
import ContactButton from "./contactButton";
import profile from "/public/assets/profile.jpg";
import { Button } from "./ui/button";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <div
      className="flex flex-row flex-wrap justify-evenly items-center gap-12 pt-20 px-8 pb-[calc(8vw+4rem)] bg-gradient-to-br from-black via-black to-red-800 text-white"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 3vw), 85% 100%, 35% calc(100% - 6vw), 0% 100%)",
      }}
    >
      <div className="flex flex-col flex-wrap break-words max-w-xl">
        <h1 className="text-6xl font-bold tracking-tight">{t("name")}</h1>
        <div className="text-5xl leading-tight font-hand mt-4">{t("job1")}</div>
        <div className="flex flex-col sm:flex-row gap-6 mt-16 w-full">
          <ContactButton className="flex-1" />
          <a href="#about" className="flex-1 group">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-3 w-full"
            >
              {t("learnMore")}
              <i className="fa-solid fa-arrow-down-long group-hover:animate-bounce"></i>
            </Button>
          </a>
        </div>
      </div>
      <Image
        src={profile}
        alt="Profile picture"
        height={400}
        className="object-cover rounded-[6rem] shadow-xl shadow-red-900/30"
      />
    </div>
  );
}
