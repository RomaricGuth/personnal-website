"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { technos } from "../utils/technos";
import Image from "./image";
import ImageCarousel from "./image-carousel";
import Motion from "./motion";
import { Button } from "./ui/button";
import bridgetonic_booking from "/public/assets/bridgetonic_booking.png";
import bridgetonic_catalog from "/public/assets/bridgetonic_catalog.png";
import bridgetonic_detail from "/public/assets/bridgetonic_detail.png";
import makethemcode_chat from "/public/assets/makethemcode_chat.png";
import makethemcode_steps from "/public/assets/makethemcode_steps.png";
import mathadata_en from "/public/assets/mathadata_en.png";
import mathadata from "/public/assets/mathadata_fr.png";
import notebook from "/public/assets/notebook.png";

export default function Portfolio() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const apps = [
    {
      name: "MakeThemCode",
      description: t("makethemcodeDescription"),
      bullets: [t("makethemcode1"), t("makethemcode2"), t("makethemcode3")],
      techs: [
        technos.NEXT,
        technos.TAILWIND,
        technos.PAYLOAD,
        technos.STRIPE,
        technos.DOCKER,
      ],
      pictures: [
        {
          src: makethemcode_chat,
          alt: t("makethemcodeChatAlt"),
        },
        {
          src: makethemcode_steps,
          alt: t("makethemcodeStepsAlt"),
        },
      ],
      link: "https://makethemcode.com",
      callToAction: t("makethemcodeCTA"),
    },
    {
      name: "MathAData",
      description: t("mathaDataDescription"),
      bullets: [
        t("mathaData1"),
        t("mathaData2"),
        t("mathaData3"),
        t("mathaData4"),
        t("mathaData5"),
      ],
      techs: [
        technos.NEXT,
        technos.TAILWIND,
        technos.PAYLOAD,
        technos.PYTHON,
        technos.DOCKER,
      ],
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
      name: "Bridge-Tonic",
      description: t("bridgetonicDescription"),
      bullets: [t("bridgetonic1"), t("bridgetonic2"), t("bridgetonic3")],
      techs: [technos.NEXT, technos.TAILWIND, technos.PAYLOAD, technos.STRIPE],
      pictures: [
        {
          src: bridgetonic_catalog,
          alt: t("bridgetonicCatalogAlt"),
        },
        {
          src: bridgetonic_detail,
          alt: t("bridgetonicDetailAlt"),
        },
        {
          src: bridgetonic_booking,
          alt: t("bridgetonicBookingAlt"),
        },
      ],
      link: "https://bridgetonic.com",
      callToAction: t("bridgetonicCTA"),
    },
  ];

  const otherProjects = [
    {
      name: "Bridge Boards",
      description: t("bridgeboardsDescription"),
      link: "https://bridge-boards.com",
    },
    {
      name: "E-chasses",
      description: t("echassesDescription"),
      link: "https://e-chasses.com",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-20">
        {t("recentWork")}
      </h2>
      <div className="flex flex-col gap-20">
        {apps.map((app, index) => (
          <Motion animation="fadeIn" key={app.name}>
            <div
              className={`w-full flex flex-wrap gap-12 flex-col items-center rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
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
                      <h4 className="text-gray-500 italic">
                        {app.callToAction}
                      </h4>
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
          </Motion>
        ))}
      </div>
      <Motion animation="fadeIn">
        <h3 className="text-2xl font-semibold text-center mt-20 mb-8">
          {t("otherProjects")}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-2 font-semibold">
                {project.name}
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </Motion>
    </div>
  );
}
