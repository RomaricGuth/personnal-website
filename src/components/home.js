"use client";

import { Link as LocaleLink } from "@/i18n/navigation";
import { richTextTags } from "@/i18n/richTextTags";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { technos } from "../utils/technos";
import Image from "./image";
import ImageCarousel from "./image-carousel";
import Motion from "./motion";
import profile from "/public/assets/profile.jpg";
import bridgeboards_editor_en from "/public/assets/bridgeboards_editor_en.png";
import bridgeboards_editor_fr from "/public/assets/bridgeboards_editor_fr.png";
import bridgeboards_export_en from "/public/assets/bridgeboards_export_en.png";
import bridgeboards_export_fr from "/public/assets/bridgeboards_export_fr.png";
import bridgeboards_library_en from "/public/assets/bridgeboards_library_en.png";
import bridgeboards_library_fr from "/public/assets/bridgeboards_library_fr.png";
import bridgetonic_booking from "/public/assets/bridgetonic_booking.png";
import bridgetonic_catalog from "/public/assets/bridgetonic_catalog.png";
import bridgetonic_detail from "/public/assets/bridgetonic_detail.png";
import echasses_catalog from "/public/assets/echasses_catalog.png";
import echasses_command from "/public/assets/echasses_command.png";
import mathadata_en from "/public/assets/mathadata_en.png";
import mathadata_fr from "/public/assets/mathadata_fr.png";
import notebook from "/public/assets/notebook.png";

const ACCENT = "#34d399";
const BG = "#0a0a0b";
const SURFACE = "#131316";
const BORDER = "#26262b";
const MUTED = "#a1a1aa";

const shell = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };

function Label({ index, children }) {
  return (
    <div
      className="font-mono"
      style={{ color: ACCENT, fontSize: 14, letterSpacing: "0.08em", marginBottom: 16 }}
    >
      {index} <span style={{ color: MUTED }}>// {children}</span>
    </div>
  );
}

function PrimaryButton({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 transition-opacity hover:opacity-85"
      style={{ background: ACCENT, color: BG, fontWeight: 600, padding: "12px 22px", borderRadius: 10 }}
    >
      {children}
    </span>
  );
}

function GhostButton({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 transition-colors hover:bg-white/5"
      style={{ border: `1px solid ${BORDER}`, color: "#fafafa", fontWeight: 500, padding: "12px 22px", borderRadius: 10 }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  const t = useTranslations("HomePage");
  const tCommon = useTranslations("Common");
  const locale = useLocale();
  const en = locale === "en";

  const apps = [
    {
      name: "MathAData",
      description: t("mathaDataDescription"),
      bullets: [t("mathaData1"), t("mathaData2"), t("mathaData3"), t("mathaData4"), t("mathaData5")],
      techs: [technos.NEXT, technos.TAILWIND, technos.PAYLOAD, technos.PYTHON, technos.DOCKER],
      pictures: [
        { src: notebook, alt: t("notebookAlt") },
        { src: en ? mathadata_en : mathadata_fr, alt: t("mathadataAlt") },
      ],
      videos: [{ src: "/assets/notebook.mp4" }],
      callToAction: t("mathaDataCTA"),
      link: "https://mathadata.fr",
    },
    {
      name: "Bridge Boards",
      description: t("bridgeboardsDescription"),
      bullets: [t("bridgeboards1"), t("bridgeboards2")],
      techs: [technos.NEXT, technos.TAILWIND, technos.PAYLOAD],
      pictures: [
        { src: en ? bridgeboards_editor_en : bridgeboards_editor_fr, alt: t("bridgeboardsEditorAlt") },
        { src: en ? bridgeboards_export_en : bridgeboards_export_fr, alt: t("bridgeboardsExportAlt") },
        { src: en ? bridgeboards_library_en : bridgeboards_library_fr, alt: t("bridgeboardsLibraryAlt") },
      ],
      link: "https://bridge-boards.com",
      callToAction: t("bridgeboardsCTA"),
    },
    {
      name: "Bridge-Tonic",
      description: t("bridgetonicDescription"),
      bullets: [t("bridgetonic1"), t("bridgetonic2"), t("bridgetonic3")],
      techs: [technos.NEXT, technos.TAILWIND, technos.PAYLOAD, technos.STRIPE],
      pictures: [
        { src: bridgetonic_catalog, alt: t("bridgetonicCatalogAlt") },
        { src: bridgetonic_detail, alt: t("bridgetonicDetailAlt") },
        { src: bridgetonic_booking, alt: t("bridgetonicBookingAlt") },
      ],
      link: "https://bridgetonic.com",
      callToAction: t("bridgetonicCTA"),
    },
    {
      name: "E-chasses",
      description: t("echassesDescription"),
      bullets: [t("echasses1"), t("echasses2"), t("echasses3")],
      techs: [technos.NEXT, technos.TAILWIND, technos.STRAPI, technos.STRIPE],
      videos: [{ src: "/assets/echasses.mp4" }],
      pictures: [
        { src: echasses_catalog, alt: t("echassesCatalogAlt") },
        { src: echasses_command, alt: t("echassesCommandAlt") },
      ],
      link: "https://e-chasses.com",
      callToAction: t("echassesCTA"),
    },
  ];

  const allTechs = [...new Map(apps.flatMap((a) => a.techs).map((x) => [x.name, x])).values()];

  return (
    <div style={{ background: BG, color: "#fafafa" }}>
      {/* HERO */}
      <section
        style={{
          backgroundImage: `linear-gradient(${BORDER}55 1px, transparent 1px), linear-gradient(90deg, ${BORDER}55 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          className="flex flex-col-reverse md:flex-row items-center"
          style={{ ...shell, gap: 48, paddingTop: 96, paddingBottom: 96 }}
        >
          <div style={{ flex: 1 }}>
            <Motion animation="fadeIn">
              <div
                className="font-mono inline-flex items-center gap-2"
                style={{ fontSize: 13, color: MUTED, border: `1px solid ${BORDER}`, background: SURFACE, borderRadius: 999, padding: "6px 14px", marginBottom: 28 }}
              >
                <span style={{ width: 8, height: 8, borderRadius: 999, background: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }} />
                ~/romaric-guth
              </div>
              <h1 style={{ fontSize: "clamp(2.75rem, 6vw, 4.75rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.03em" }}>
                {t("name")}
              </h1>
              <div className="font-mono" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: ACCENT, marginTop: 16 }}>
                &gt; {t("job1")}
                <span className="animate-pulse">_</span>
              </div>
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, maxWidth: 560, marginTop: 28 }}>
                {t.markup("story", richTextTags)}
              </p>
              <div className="flex flex-wrap" style={{ gap: 12, marginTop: 36 }}>
                <LocaleLink href="/contact">
                  <PrimaryButton>
                    <Mail size={16} /> {tCommon("contact")}
                  </PrimaryButton>
                </LocaleLink>
                <a href="#portfolio">
                  <GhostButton>
                    {t("recentWork")} <ArrowDown size={16} />
                  </GhostButton>
                </a>
              </div>
            </Motion>
          </div>
          <Motion animation="fadeIn">
            <div style={{ padding: 8, border: `1px solid ${BORDER}`, background: SURFACE, borderRadius: 28 }}>
              <Image
                src={profile}
                alt="Profile picture"
                height={360}
                className="object-cover"
                style={{ borderRadius: 22, width: "auto", maxHeight: 360, display: "block" }}
              />
            </div>
          </Motion>
        </div>
      </section>

      {/* STACK STRIP */}
      <section style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="flex flex-wrap items-center justify-center" style={{ ...shell, gap: 36, paddingTop: 28, paddingBottom: 28 }}>
          <span className="font-mono" style={{ color: MUTED, fontSize: 13 }}>{t("techstack")}:</span>
          {allTechs.map((tech) => (
            <span key={tech.name} className="flex items-center gap-2" style={{ color: "#d4d4d8", fontSize: 14 }}>
              <Image src={tech.logo} width={22} height={22} alt={"logo " + tech.name} />
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="portfolio" style={{ ...shell, paddingTop: 96, paddingBottom: 96 }}>
        <Label index="01">{tCommon("portfolio")}</Label>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 48 }}>
          {t("recentWork")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 24 }}>
          {apps.map((app, i) => (
            <Motion animation="fadeIn" key={app.name}>
              <article
                className="flex flex-col h-full transition-colors hover:border-emerald-400/50"
                style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 20, overflow: "hidden" }}
              >
                <div style={{ background: "#0e0e10", borderBottom: `1px solid ${BORDER}`, padding: 16 }}>
                  <ImageCarousel images={app.pictures} videos={app.videos} className="w-full" />
                </div>
                <div className="flex flex-col flex-1" style={{ padding: 28, gap: 20 }}>
                  <div>
                    <div className="font-mono" style={{ color: ACCENT, fontSize: 13 }}>
                      0{i + 1}
                    </div>
                    <h3 style={{ fontSize: 26, fontWeight: 700, marginTop: 4 }}>{app.name}</h3>
                    <p style={{ color: MUTED, marginTop: 6 }}>{app.description}</p>
                  </div>
                  <ul className="flex flex-col" style={{ gap: 8, fontSize: 15, color: "#d4d4d8" }}>
                    {app.bullets.map((b, k) => (
                      <li key={k} className="flex" style={{ gap: 10 }}>
                        <span style={{ color: ACCENT }}>▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap" style={{ gap: 8, marginTop: "auto" }}>
                    {app.techs.map((tech) => (
                      <span
                        key={tech.name}
                        className="font-mono"
                        style={{ fontSize: 12, color: "#d4d4d8", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 10px" }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={app.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 self-start hover:underline"
                    style={{ color: ACCENT, fontWeight: 600 }}
                  >
                    {app.callToAction} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            </Motion>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL + CONTACT */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ ...shell, gap: 24, paddingTop: 96, paddingBottom: 96 }}>
          <Motion animation="fadeIn">
            <figure className="h-full flex flex-col" style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 36, gap: 24 }}>
              <Label index="02">{tCommon("testimonials")}</Label>
              <blockquote style={{ fontSize: 20, lineHeight: 1.6 }}>
                <span style={{ color: ACCENT }}>&ldquo;</span>
                {t("thomasTestimonial")}
                <span style={{ color: ACCENT }}>&rdquo;</span>
              </blockquote>
              <figcaption className="flex items-center" style={{ gap: 14, marginTop: "auto" }}>
                <Image src="/assets/thomas-landais.jpeg" width={48} height={48} alt="picture of Thomas Landais" style={{ borderRadius: 999 }} />
                <div>
                  <Link href="https://www.linkedin.com/in/thomas-landais" target="_blank" className="hover:underline" style={{ fontWeight: 600 }}>
                    Thomas Landais
                  </Link>
                  <div style={{ color: MUTED, fontSize: 14 }}>{t("thomasJob")}</div>
                </div>
              </figcaption>
            </figure>
          </Motion>
          <Motion animation="fadeIn">
            <div id="contact" className="h-full flex flex-col" style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 36, gap: 24 }}>
              <Label index="03">{tCommon("contact")}</Label>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                {t("workTogether")}
              </h2>
              <div className="flex flex-wrap" style={{ gap: 12 }}>
                <LocaleLink href="/contact">
                  <PrimaryButton><Mail size={16} /> {tCommon("contact")}</PrimaryButton>
                </LocaleLink>
                <LocaleLink href="/cv">
                  <GhostButton><FileText size={16} /> {t("checkResume")}</GhostButton>
                </LocaleLink>
              </div>
              <div className="font-mono flex flex-col" style={{ gap: 10, fontSize: 14, marginTop: "auto" }}>
                {[
                  ["mail", "contact@romaricguth.com", "mailto:contact@romaricguth.com"],
                  ["linkedin", "in/guth", "https://www.linkedin.com/in/guth"],
                  ["malt", "guthromaric", "https://www.malt.fr/profile/guthromaric"],
                  ["github", "RomaricGuth", "https://www.github.com/RomaricGuth"],
                ].map(([k, v, href]) => (
                  <Link key={k} href={href} target="_blank" className="flex hover:underline" style={{ gap: 12 }}>
                    <span style={{ color: MUTED, width: 72 }}>{k}</span>
                    <span>{v}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Motion>
        </div>
      </section>
    </div>
  );
}
