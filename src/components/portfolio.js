"use client";

import Image from "./image";
import { useTranslations, useLocale } from "next-intl";
import { technos } from "../utils/technos";
import { Button } from "./ui/button";
import ImageCarousel from "./image-carousel";
import mathadata from "/public/assets/mathadata_fr.png";
import mathadata_en from "/public/assets/mathadata_en.png";
import notebook from "/public/assets/notebook.png";
import planeat from "/public/assets/planeat_fr.png";
import planeat_en from "/public/assets/planeat_en.png";
import echasses_catalog from "/public/assets/echasses_catalog.png";
import echasses_command from "/public/assets/echasses_command.png";
import Link from "next/link";

export default function Portfolio() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const apps = [
    {
      name: "MathAData",
      description: t("mathaDataDescription"),
      bullets: [t("mathaData1"), t("mathaData2"), t("mathaData3")],
      techs: [technos.NEXT, technos.TAILWIND, technos.PYTHON, technos.DOCKER],
      pictures: [
        {
          src: notebook,
          alt: t("notebookAlt"),
        },
        {
          src: locale === "en" ? mathadata_en : mathadata,
          alt: t("mathadataAlt"),
        },
      ],
      videos: [
        {
          src: "/assets/notebook.mp4",
        },
      ],
      callToAction: t("mathaDataCTA"),
      link: "https://mathadata.fr",
    },
    {
      name: "E-chasses",
      description: t("echassesDescription"),
      bullets: [t("echasses1"), t("echasses2"), t("echasses3")],
      techs: [technos.NEXT, technos.TAILWIND, technos.STRAPI, technos.STRIPE],
      videos: [
        {
          src: "/assets/echasses.mp4",
        },
      ],
      pictures: [
        {
          src: echasses_catalog,
          alt: t("echassesCatalogAlt"),
        },
        {
          src: echasses_command,
          alt: t("echassesCommandAlt"),
        },
      ],
      link: "https://dev.e-chasses.fr",
      callToAction: t("echassesCTA"),
    },
    {
      name: "Planeat",
      description: t("planeatDescription"),
      bullets: [t("planeat1"), t("planeat2"), t("planeat3")],
      techs: [technos.REACT_NATIVE, technos.REDUX],
      pictures: [
        {
          src: locale === "en" ? planeat_en : planeat,
          alt: t("planeatAlt"),
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-20">
        {t("recentWork")}
      </h2>
      <div className="flex flex-col gap-20 items-center">
        {apps.map((app, index) => (
          <div
            key={app.name}
            className={`w-full flex flex-wrap gap-12 flex-col items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="flex flex-col flex-[2] gap-8">
              <h3 className="font-semibold text-center lg:text-left">
                {app.name}
              </h3>
              <div>{app.description}</div>
              <div className="lg:hidden">
                <ImageCarousel
                  videos={app.videos}
                  images={app.pictures}
                  className="w-full lg:hidden mx-0"
                />
              </div>
              {app.bullets?.length > 0 && (
                <ul className="list-disc list-outside ms-6 space-y-1">
                  {app.bullets?.map((hint, index) => (
                    <li key={index}>{hint}</li>
                  ))}
                </ul>
              )}
              <div className="font-semibold text-center">
                {t("techstack")}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
                  {app.techs.map((techno) => (
                    <div
                      key={techno.name}
                      className="flex flex-col items-center text-center text-sm hover:scale-110 transition-transform text-muted-foreground"
                    >
                      <Image
                        src={techno.logo}
                        width={45}
                        height={45}
                        alt={"logo " + techno.name}
                        className="mb-2"
                      />
                      {techno.name}
                    </div>
                  ))}
                </div>
              </div>
              {app.callToAction && (
                <div className="text-center flex justify-center mt-8">
                  {app.link ? (
                    <Link href={app.link} target="_blank">
                      <Button variant="outline">{app.callToAction}</Button>
                    </Link>
                  ) : (
                    <h4 className="text-gray-500 italic">{app.callToAction}</h4>
                  )}
                </div>
              )}
            </div>
            <div className="flex-[3] h-full min-h-[400px] hidden lg:block self-center">
              <ImageCarousel
                images={app.pictures}
                videos={app.videos}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
