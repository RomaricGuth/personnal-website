"use client";

import Image from "./image";
import { useTranslations } from "next-intl";
import ContactButton from "./contactButton";
import profile from "/public/assets/profile.jpg";
import { Button } from "./ui/button";
import Motion from "./motion";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f0e9] px-6 py-16 text-stone-950 sm:px-10 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-40 -z-10 size-[32rem] rounded-full bg-red-200/40 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-14 md:flex-row md:gap-10">
        <div className="flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
          <Motion animation="slideIn" transition={{ delay: 0.2 }}>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t("name")}
            </h1>
          </Motion>
          <Motion animation="slideIn" transition={{ delay: 0.4 }}>
            <div className="mt-5 font-hand text-3xl leading-tight text-red-800 sm:text-4xl lg:text-5xl">
              {t("job1")}
            </div>
          </Motion>
          <Motion animation="slideIn" transition={{ delay: 0.6 }}>
            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
              <ContactButton className="flex-1 [&_button]:min-h-12 [&_button]:rounded-full [&_button]:px-7" />
              <a href="#about" className="group flex-1">
                <Button
                  variant="outline"
                  className="min-h-12 w-full rounded-full border-stone-300 bg-white/70 px-7 hover:bg-white"
                >
                  {t("learnMore")}
                  <i className="fa-solid fa-arrow-down-long transition-transform group-hover:translate-y-1"></i>
                </Button>
              </a>
            </div>
          </Motion>
        </div>
        <Motion animation="fadeIn" transition={{ delay: 0.3 }}>
          <div className="relative">
            <div className="absolute -inset-4 rotate-6 rounded-[12rem_12rem_2rem_2rem] border border-red-800/20" />
            <Image
              src={profile}
              alt="Profile picture"
              width={360}
              height={440}
              priority
              className="relative h-[320px] w-[260px] rounded-[12rem_12rem_2rem_2rem] object-cover shadow-2xl shadow-stone-900/15 sm:h-[400px] sm:w-[320px]"
            />
          </div>
        </Motion>
      </div>
      <div className="mx-auto mt-16 h-px max-w-6xl bg-stone-300/70 md:mt-24" />
      <div className="mx-auto mt-4 max-w-6xl text-right text-xs uppercase tracking-[0.24em] text-stone-500">
        {t("job1")}
      </div>
    </section>
  );
}
