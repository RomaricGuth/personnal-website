import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

function CvLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="font-medium text-[#087b91] underline decoration-[#087b91]/30 underline-offset-2 hover:decoration-[#087b91]">
      {children}
    </a>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <h2 className="m-0 text-[13px] font-bold uppercase leading-none tracking-[0.1em] text-[#122b43]">{title}</h2>
      <div className="h-px flex-1 bg-[#d7e0e6]" />
    </div>
  );
}

function ExperienceItem({ date, title, children }) {
  return (
    <div className="mb-4 grid grid-cols-[68px_1fr] gap-3 last:mb-0">
      <div className="pt-0.5 text-[10px] font-semibold uppercase leading-relaxed tracking-wide text-[#07879a]">{date}</div>
      <div className="border-l border-[#d7e0e6] pl-3">
        <h3 className="m-0 mb-1 text-[12px] font-bold leading-snug text-[#122b43]">{title}</h3>
        <div className="text-[11px] leading-[1.45] text-[#3f4e5a]">{children}</div>
      </div>
    </div>
  );
}

function SideSection({ title, children }) {
  return (
    <section className="mb-5 last:mb-0">
      <SectionTitle title={title} />
      {children}
    </section>
  );
}

export default function CvDocument({ options = {} }) {
  const t = useTranslations("Cv");
  const { email = "contact@romaricguth.com", phone } = options;
  const position = options.position || t("position");
  const skills = [
    { name: t("skillWeb"), items: ["Next.js", "Tailwind CSS", "Payload CMS", "DevOps", "SEO"] },
    { name: t("skillMobile"), items: ["React Native", "Kotlin", "Android OSP", "Swift"] },
    { name: t("skillSoftware"), items: ["C", "C++", "Java"] },
    { name: t("skillMath"), items: [t("skillAlgebra"), t("skillStatistics")] },
    { name: t("skillLanguages"), items: [t("frenchNative"), t("englishLevel")] },
  ];

  return (
    <div className="flex min-h-[29.7cm] flex-col bg-white text-[11px] leading-snug text-[#263746]">
      <header className="relative flex min-h-[158px] items-center justify-between gap-5 overflow-hidden bg-[#122b43] px-8 py-5 text-white">
        <div className="absolute bottom-0 left-0 h-1 w-[38%] bg-[#b9e66b]" />
        <div className="relative z-10 min-w-0 flex-1">
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b9e66b]">{t("cvKicker")}</div>
          <h1 className="m-0 text-[32px] font-bold leading-none tracking-[-0.04em] text-white">Romaric GUTH</h1>
          <p className="mb-0 mt-2 text-[15px] font-medium leading-tight text-white/85">{position}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[9px] text-white/80">
            <span className="flex items-center gap-1.5"><Mail size={11} className="text-[#b9e66b]" />{email}</span>
            {phone && <span className="flex items-center gap-1.5"><Phone size={11} className="text-[#b9e66b]" />{phone}</span>}
            <a href="https://www.romaricguth.com" className="flex items-center gap-1.5 text-white/80"><Globe size={11} className="text-[#b9e66b]" />romaricguth.com</a>
          </div>
        </div>
        <div className="relative z-10 flex shrink-0 flex-col items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/profile.jpg" alt="Romaric Guth" className="h-[100px] w-[100px] rounded-full border-[3px] border-white/20 object-cover" />
          <div className="flex items-center gap-3 text-white/80">
            <a href="https://www.linkedin.com/in/guth" aria-label="LinkedIn" className="hover:text-[#b9e66b]"><Linkedin size={15} /></a>
            <a href="https://github.com/RomaricGuth" aria-label="GitHub" className="hover:text-[#b9e66b]"><Github size={15} /></a>
          </div>
        </div>
      </header>

      <div className="grid flex-1 grid-cols-[1.62fr_1fr]">
        <main className="px-7 pb-6 pt-6">
          <section className="mb-5">
            <SectionTitle title={t("experience")} />
            <ExperienceItem date={t("mathadataDate")} title={t("mathadataTitle")}>
              <ul className="m-0 list-disc space-y-0.5 pl-3.5 marker:text-[#07879a]">
                <li>{t("mathadataBullet1")}</li>
                <li>{t("mathadataBullet2")}</li>
              </ul>
            </ExperienceItem>
            <ExperienceItem date={t("freelanceDate")} title={t("freelanceTitle")}>
              <ul className="m-0 list-disc pl-3.5 marker:text-[#07879a]"><li>{t("freelanceBullet1")}</li></ul>
            </ExperienceItem>
            <ExperienceItem date={<>2022–2023<br />{t("fulltime")}<br /><br />2019–2022<br />{t("apprentice")}</>} title={t("sagemcomTitle")}>
              <p className="mb-1 mt-0 font-medium text-[#526373]">{t("sagemcomFeedback")}</p>
              <ul className="m-0 list-disc space-y-0.5 pl-3.5 marker:text-[#07879a]">
                <li>{t("sagemcomBullet1")}</li>
                <li>{t("sagemcomBullet2")}</li>
              </ul>
            </ExperienceItem>
          </section>

          <section>
            <SectionTitle title={t("projects")} />
            <div className="grid grid-cols-2 gap-2.5">
              <article className="rounded-md border border-[#dce5e9] bg-[#f8faf9] p-2.5">
                <h3 className="m-0 mb-1 text-[11px] font-bold text-[#122b43]">E-Chasses</h3>
                <div className="mb-1.5 text-[9px]"><CvLink href="https://e-chasses.com">e-chasses.com</CvLink></div>
                <p className="mb-1.5 mt-0 text-[9px] leading-[1.35] text-[#526373]">{t("echassesDesc")}</p>
                <ul className="m-0 list-disc space-y-0.5 pl-3 text-[9px] leading-[1.35] text-[#526373] marker:text-[#07879a]">
                  <li>{t("echassesBullet1")}</li>
                  <li>{t("echassesBullet2")}</li>
                  <li>{t("echassesBullet3")}</li>
                </ul>
              </article>
              <article className="rounded-md border border-[#dce5e9] bg-[#f8faf9] p-2.5">
                <h3 className="m-0 mb-1 text-[11px] font-bold text-[#122b43]">Bridge-Tonic</h3>
                <div className="mb-1.5 text-[9px]"><CvLink href="https://bridgetonic.com">bridgetonic.com</CvLink></div>
                <p className="mb-1.5 mt-0 text-[9px] leading-[1.35] text-[#526373]">{t("bridgetonicDesc")}</p>
                <ul className="m-0 list-disc space-y-0.5 pl-3 text-[9px] leading-[1.35] text-[#526373] marker:text-[#07879a]">
                  <li>{t("bridgetonicBullet1")}</li>
                  <li>{t("bridgetonicBullet2")}</li>
                  <li>{t("bridgetonicBullet3")}</li>
                </ul>
              </article>
            </div>
          </section>
        </main>

        <aside className="border-l border-[#e5ebee] bg-[#f5f8fa] px-5 pb-6 pt-6">
          <SideSection title={t("skills")}>
            <div className="space-y-2.5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#526373]">{skill.name}</div>
                  <div className="flex flex-wrap gap-1">
                    {skill.items.map((item) => <span key={item} className="rounded-sm bg-white px-1.5 py-1 text-[9px] leading-none text-[#294257] shadow-[0_1px_2px_rgba(18,43,67,0.08)]">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </SideSection>

          <SideSection title={t("education")}>
            <div className="space-y-3">
              <div className="border-l-2 border-[#b9e66b] pl-2.5">
                <div className="text-[9px] font-semibold text-[#07879a]">{t("epitaDate")}</div>
                <h3 className="m-0 mt-0.5 text-[11px] font-bold text-[#122b43]">{t("epitaTitle")}</h3>
                <p className="mb-0 mt-0.5 text-[10px] leading-snug text-[#526373]">{t("epitaDegree")}</p>
                <p className="mb-0 mt-1 text-[9px] italic text-[#526373]">{t("average")} : 17/20 · {t("rank")} : 2/20</p>
              </div>
              <div className="border-l-2 border-[#d7e0e6] pl-2.5">
                <div className="text-[9px] font-semibold text-[#07879a]">{t("lyon1Date")}</div>
                <h3 className="m-0 mt-0.5 text-[11px] font-bold text-[#122b43]">{t("lyon1Title")}</h3>
                <p className="mb-0 mt-0.5 text-[10px] leading-snug text-[#526373]">{t("lyon1Degree")}</p>
                <p className="mb-0 mt-1 text-[9px] italic text-[#526373]">{t("average")} : 16/20 · {t("rank")} : 3/154</p>
              </div>
            </div>
          </SideSection>

          <SideSection title={t("interests")}>
            <div className="mb-3">
              <h3 className="m-0 mb-1 text-[11px] font-bold text-[#122b43]">{t("bridge")}</h3>
              <p className="mb-1.5 mt-0 text-[10px] leading-snug text-[#526373]">{t("bridgeDesc")}</p>
              <ul className="m-0 list-disc space-y-1 pl-3 text-[9px] leading-snug text-[#3f4e5a] marker:text-[#07879a]">
                <li>{t("bridgeAward1")}</li>
                <li>{t("bridgeAward2")}</li>
                <li>{t("bridgeAward3")}</li>
                <li>{t("bridgeAward4")}</li>
              </ul>
            </div>
            <div className="border-t border-[#d7e0e6] pt-2">
              <h3 className="m-0 mb-0.5 text-[11px] font-bold text-[#122b43]">{t("piano")}</h3>
              <p className="m-0 text-[10px] leading-snug text-[#526373]">{t("pianoDesc")}</p>
            </div>
          </SideSection>
        </aside>
      </div>
    </div>
  );
}
