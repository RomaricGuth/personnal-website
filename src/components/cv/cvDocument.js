import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section, SectionHeader, SectionItem } from "./cvSection";

function CvLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-cv-secondary hover:underline"
    >
      {children}
    </a>
  );
}

export default function CvDocument({ options = {} }) {
  const t = useTranslations("Cv");
  const { email = "contact@romaricguth.com", phone } = options;
  const position = options.position || t("position");

  return (
    <div className="flex flex-col bg-white text-[13px] leading-snug text-black">
      {/* Header */}
      <div className="flex flex-row justify-between gap-6 bg-cv-primary pl-4 h-[180px]">
        <div className="flex flex-col justify-around py-4 flex-1 text-white">
          <div className="flex flex-row justify-between items-start">
            <div className="text-[38px] font-bold leading-none">
              Romaric GUTH
            </div>
            <div className="flex flex-col items-start gap-0.5 text-[13px]">
              <span className="flex items-center gap-1">
                <Linkedin size={12} />
                <a
                  href="https://www.linkedin.com/in/guth"
                  className="underline"
                >
                  guth
                </a>
              </span>
              <span className="flex items-center gap-1">
                <Github size={12} />
                <a href="https://github.com/RomaricGuth" className="underline">
                  RomaricGuth
                </a>
              </span>
              {phone && (
                <span className="flex items-center gap-1">
                  <Phone size={12} /> {phone}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Mail size={12} /> {email}
              </span>
              <span className="flex items-center gap-1">
                <Globe size={12} />
                <a href="https://www.romaricguth.com" className="underline">
                  https://romaricguth.com
                </a>
              </span>
            </div>
          </div>
          <div className="text-[38px] leading-none">{position}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/profile.jpg"
          alt="Romaric Guth"
          className="h-[180px] w-[150px] object-cover"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-4 pt-2">
        <Section>
          <SectionHeader title={t("experience")} />
          <SectionItem
            description={t("mathadataDate")}
            title={<>{t("mathadataTitle")}</>}
          >
            <ul className="list-disc pl-4 space-y-0.5 ">
              <li>{t("mathadataBullet1")}</li>
              <li>{t("mathadataBullet2")}</li>
            </ul>
          </SectionItem>
          <SectionItem
            description={t("freelanceDate")}
            title={t("freelanceTitle")}
          >
            <ul className="list-disc pl-4 space-y-0.5">
              <li>{t("freelanceBullet1")}</li>
            </ul>
          </SectionItem>
          <SectionItem
            description={
              <>
                2022-2023
                <br />
                {t("fulltime")}
                <br />
                <br />
                2019-2022
                <br />
                {t("apprentice")}
              </>
            }
            title={t("sagemcomTitle")}
          >
            <div className="text-[15.5px] mb-1">{t("sagemcomFeedback")}</div>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>{t("sagemcomBullet1")}</li>
              <li>{t("sagemcomBullet2")}</li>
            </ul>
          </SectionItem>
        </Section>

        <div className="flex flex-row my-1">
          <div className="flex-1 pr-3 mr-3">
            <Section>
              <SectionHeader title={t("education")} />
              <SectionItem description={t("epitaDate")} title={t("epitaTitle")}>
                <div>{t("epitaDegree")}</div>
                <div className="flex flex-row justify-between">
                  <div className="italic">{t("average")} : 17/20</div>
                  <div className="italic">{t("rank")} : 2/20</div>
                </div>
              </SectionItem>
              <SectionItem description={t("lyon1Date")} title={t("lyon1Title")}>
                <div>{t("lyon1Degree")}</div>
                <div className="flex flex-row justify-between">
                  <div className="italic">{t("average")} : 16/20</div>
                  <div className="italic">{t("rank")} : 3/154</div>
                </div>
              </SectionItem>
            </Section>
          </div>
          <Section>
            <SectionHeader title={t("projects")} />
            <SectionItem
              title={
                <>
                  E-Chasses -{" "}
                  <CvLink href="https://e-chasses.com">e-chasses.com</CvLink>
                </>
              }
            >
              {t("echassesDesc")}
            </SectionItem>
            <div className="h-8" />
            <SectionItem
              title={
                <>
                  Bridge-Tonic -{" "}
                  <CvLink href="https://bridgetonic.com">
                    bridgetonic.com
                  </CvLink>
                </>
              }
            >
              {t("bridgetonicDesc")}
            </SectionItem>
          </Section>
        </div>

        <Section>
          <SectionHeader title={t("skills")} />
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              {
                name: t("skillWeb"),
                items: [
                  "Next.js",
                  "Tailwind CSS",
                  "Payload CMS",
                  "Devops",
                  "SEO",
                ],
              },
              {
                name: t("skillMobile"),
                items: ["React Native", "Kotlin", "Android OSP", "Swift"],
              },
              { name: t("skillSoftware"), items: ["C", "C++", "Java"] },
              { name: t("skillMath"), items: ["Algebra", "Statistics"] },
              {
                name: t("skillLanguages"),
                items: [t("frenchNative"), t("englishLevel")],
              },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="text-[14px] text-cv-secondary mb-1">
                  {skill.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cv-primary/15 bg-cv-primary/5 px-2 py-0.5 text-[12px] text-cv-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader title={t("interests")} />
          <SectionItem description={t("bridge")}>
            {t("bridgeDesc")}
            <ul className="flex flex-row justify-between mt-1 list-disc">
              <div className="flex-1 ml-4">
                <li>{t("bridgeAward1")}</li>
                <li>{t("bridgeAward2")}</li>
              </div>
              <div className="flex-1 ml-4">
                <li>{t("bridgeAward3")}</li>
                <li>{t("bridgeAward4")}</li>
              </div>
            </ul>
          </SectionItem>
          <SectionItem description={t("piano")}>{t("pianoDesc")}</SectionItem>
        </Section>
      </div>
    </div>
  );
}
