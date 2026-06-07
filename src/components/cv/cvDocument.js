import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { Section, SectionHeader, SectionItem } from "./cvSection";

function CvLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-cv-secondary hover:underline">
      {children}
    </a>
  );
}

export default function CvDocument({ options = {} }) {
  const {
    position = "Software Engineer",
    email = "contact@romaricguth.com",
    phone,
  } = options;

  return (
    <div className="flex flex-col bg-white text-[13px] leading-snug text-black">
      {/* Header */}
      <div className="flex flex-row justify-between gap-6 bg-cv-primary pl-4 h-[180px]">
        <div className="flex flex-col justify-around py-4 flex-1 text-white">
          <div className="flex flex-row justify-between items-start">
            <div className="text-[38px] font-bold leading-none">Romaric GUTH</div>
            <div className="flex flex-col items-end gap-1 text-[13px]">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1">
                    <Linkedin size={12} />
                    <a href="https://www.linkedin.com/in/guth" className="underline">guth</a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Github size={12} />
                    <a href="https://github.com/RomaricGuth" className="underline">RomaricGuth</a>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  {phone && (
                    <span className="flex items-center gap-1">
                      <Phone size={12} /> {phone}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Mail size={12} /> {email}
                  </span>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Globe size={12} />
                <a href="https://www.romaricguth.com" className="underline">https://www.romaricguth.com</a>
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
          <SectionHeader title="Experience" />
          <SectionItem
            description="From 2023"
            title={
              <>
                Web Developer | MathAData (ENS & Collège de France) —{" "}
                <CvLink href="https://mathadata.fr">mathadata.fr</CvLink>
              </>
            }
          >
            <ul className="list-disc pl-4 space-y-0.5 marker:text-cv-secondary">
              <li>
                Development of digital mathematics exercises on the theme of AI
                for high school students.
              </li>
              <li>
                Leveraging the advantages of digital tools (visualization,
                animations, automatic calculations) to help understand
                mathematical concepts and how AI works.
              </li>
            </ul>
          </SectionItem>
          <SectionItem description="From 2023" title="Freelance web developer">
            <ul className="list-disc pl-4 space-y-0.5 marker:text-cv-secondary">
              <li>
                Working on several web projects mostly using Next.js and
                Tailwind CSS.
              </li>
            </ul>
          </SectionItem>
          <SectionItem
            description={
              <>
                2022-2023
                <br />
                Fulltime
                <br />
                <br />
                2019-2022
                <br />
                Apprentice
              </>
            }
            title="Embedded Software Engineer | SAGEMCOM"
          >
            <div className="text-[15.5px] mb-1">
              Apprenticeship from Sept. 2019 to Sept. 2022&nbsp;&nbsp;|&nbsp;&nbsp;Feedback
              : 19/20 - &quot;Beyond expectations&quot;
            </div>
            <ul className="list-disc pl-4 space-y-0.5 marker:text-cv-secondary">
              <li>
                Worked as lead developer on the analytics data collection module
                embedded on TV set top boxes, written in C++. Elevated the
                volume and accuracy of gathered data to enhance the significance
                of generated reports.
              </li>
              <li>
                Worked on a customized android open source project to speed up
                debug and developments before commercial launch of a new
                product.
              </li>
            </ul>
          </SectionItem>
        </Section>

        <div className="flex flex-row my-1">
          <div className="flex-1 pr-3 mr-3">
            <Section>
              <SectionHeader title="Education" />
              <SectionItem description="2019-2022" title="EPITA Apprenticeship">
                <div>Master degree focused on Web and Mobile development</div>
                <div className="flex flex-row justify-between">
                  <div className="italic">Average : 17/20</div>
                  <div className="italic">Rank : 2/20</div>
                </div>
              </SectionItem>
              <SectionItem
                description="2017-2019"
                title="Université Claude Bernard, Lyon 1"
              >
                <div>Mathematics and Computer Science Degree</div>
                <div className="flex flex-row justify-between">
                  <div className="italic">Average : 16/20</div>
                  <div className="italic">Rank : 3/154</div>
                </div>
              </SectionItem>
            </Section>
          </div>
          <Section>
            <SectionHeader title="Projects" />
            <SectionItem
              title={
                <>
                  E-Chasses - <CvLink href="https://e-chasses.com">e-chasses.com</CvLink>
                </>
              }
            >
              E-commerce website for birthday treasure hunt games.
            </SectionItem>
            <div className="h-8" />
            <SectionItem
              title={
                <>
                  Bridge-Tonic - <CvLink href="https://bridgetonic.com">bridgetonic.com</CvLink>
                </>
              }
            >
              Online booking platform for bridge practice travels.
            </SectionItem>
          </Section>
        </div>

        <Section>
          <SectionHeader title="Skills" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              { name: "Web", items: ["Next.js", "Tailwind CSS", "Devops", "SEO"] },
              { name: "Mobile", items: ["React Native", "Kotlin", "Android OSP", "Swift"] },
              { name: "Software development", items: ["C", "C++", "Java"] },
              { name: "Mathematics", items: ["Algebra", "Statistics"] },
              { name: "Languages", items: ["French (Native)", "English (TOEIC 975/990)"] },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="text-[14px] text-cv-secondary mb-1">{skill.name}</div>
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
          <SectionHeader title="Interests" />
          <SectionItem description="Bridge">
            Member of the French national team since 2014, several national and
            international awards :
            <ul className="flex flex-row justify-between mt-1 list-disc">
              <div className="flex-1 ml-4">
                <li>Under 31 World champion (2023)</li>
                <li>Under 21 European silver medalist (2019)</li>
              </div>
              <div className="flex-1 ml-4">
                <li>Under 16 World silver medalist (2014)</li>
                <li>Under 16 European silver medalist (2015)</li>
              </div>
            </ul>
          </SectionItem>
          <SectionItem description="Piano">
            Practiced in conservatory from 2006 to 2017 and self teaching since
            then
          </SectionItem>
        </Section>
      </div>
    </div>
  );
}
