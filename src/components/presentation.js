"use client";

import Image from "./image";
import { useTranslations } from "next-intl";
import ContactButton from "./contactButton";
import Button, { buttonModes } from "./button";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <div
      className="flex flex-row flex-wrap justify-evenly items-center gap-8 pt-16 px-4 pb-[calc(5vw+4rem)] bg-gradient-to-br from-black via-black to-red-700 text-white"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 2.5vw), 80% 100%, 40% calc(100% - 5vw), 0% 100%)",
      }}
    >
      <div className="flex flex-col flex-wrap justify-evenly gap-8 break-words">
        <h1>{t("name")}</h1>
        <div className="text-5xl leading-tight font-hand">{t("job1")}</div>
        <div className="flex flex-row justify-between flex-wrap gap-4">
          <ContactButton className="flex flex-1 flex-shrink-0" />
          <a href="#about" className="flex flex-1 flex-shrink-0">
            <Button
              text={t("learnMore")}
              mode={buttonModes.OUTLINED}
              className="flex flex-1 flex-shrink-0"
              renderAccessory={() => (
                <i className="fa-solid fa-arrow-down-long"></i>
              )}
            />
          </a>
        </div>
      </div>
      <Image
        src="/assets/profile.jpg"
        alt="Profile picture"
        width={250}
        height={250}
        className="object-cover mx-4 rounded-full"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, black, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)",
          maskImage:
            "radial-gradient(ellipse at center, black 80%, transparent 100%)",
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      />
    </div>
  );
}
