"use client";

import Image from "./image";
import { useTranslations, useLocale } from "next-intl";
import Button, { buttonModes } from "./button";
import { technos } from "../utils/technos";

export default function Portfolio() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const apps = [
    {
      name: t("masEuliac"),
      description: t("masEuliacDescription"),
      techs: [technos.NEXT, technos.TAILWIND],
      pictures: ["/assets/mas_euliac.png"],
      callToAction: t("masEuliacCTA"),
      link: "https://mas-euliac.fr",
    },
    {
      name: "Planeat",
      description: t("planeatDescription"),
      bullets: [t("planeat1"), t("planeat2"), t("planeat3")],
      techs: [technos.REACT_NATIVE, technos.REDUX],
      pictures: ["/assets/planeat_" + locale + ".png"],
      callToAction: t("planeatCTA"),
    },
    {
      name: t("personnalWebsite"),
      description: t("personnalWebsiteDescription"),
      techs: [technos.NEXT, technos.TAILWIND],
      pictures: ["/assets/portfolio_" + locale + ".png"],
      callToAction: t("personnalWebsiteCTA"),
      link: "https://github.com/RomaricGuth/personnal-website",
    },
  ];

  return (
    <div className="px-[5%]">
      <h2 className="mb-16">{t("recentWork")}</h2>
      <div className="flex flex-col gap-8 items-center">
        {apps.map((app, index) => (
          <div
            key={app.name}
            className={`w-full flex flex-wrap gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex flex-col flex-[2]">
              <h3 className="text-4xl md:text-left text-center">{app.name}</h3>
              <div className="mt-8">{app.description}</div>
              {app.bullets?.length > 0 && (
                <ul className="mt-4">
                  {app.bullets?.map((hint, index) => (
                    <li key={index} className="list-disc list-inside">
                      {hint}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 font-bold text-center">
                {t("techstack")}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
                  {app.techs.map((techno) => (
                    <div
                      key={techno.name}
                      className="flex flex-col items-center text-center text-sm"
                    >
                      <Image
                        src={techno.logo}
                        width={50}
                        height={50}
                        alt={"logo " + techno.name}
                        className="mb-1"
                      />
                      {techno.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 text-center flex justify-center">
                {app.link ? (
                  <a href={app.link}>
                    <Button
                      mode={buttonModes.OUTLINED}
                      text={app.callToAction}
                    />
                  </a>
                ) : (
                  <h4>{app.callToAction}</h4>
                )}
              </div>
            </div>
            <div className="relative flex-[5] aspect-video md:min-w-0 min-w-full">
              <Image
                src={app.pictures[0]}
                fill
                alt={app.name}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
