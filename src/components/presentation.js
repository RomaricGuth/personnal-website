"use client";

import Image from "./image";
import { useTranslations } from "next-intl";
import ContactButton from "./contactButton";
import profile from "/public/assets/profile.jpg";
import { Button } from "./ui/button";
import Motion from "./motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative overflow-hidden bg-[#faf9f7] px-6 py-16 text-neutral-950 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-36 size-[30rem] rounded-full bg-red-100/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <Motion animation="slideIn" transition={{ delay: 0.2 }}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-200 bg-white/80 px-4 py-2 text-sm font-semibold text-red-800 shadow-sm">
              <span className="size-2 rounded-full bg-red-600" />
              {t("job2")}
            </div>
            <h1 className="max-w-3xl text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.06em]">
              {t("name")}
            </h1>
          </Motion>
          <Motion animation="slideIn" transition={{ delay: 0.4 }}>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
              {t("job1")}
            </p>
          </Motion>
          <Motion animation="slideIn" transition={{ delay: 0.6 }}>
            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center">
              <ContactButton className="sm:min-w-44" />
              <a href="#portfolio" className="group sm:min-w-44">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 border-neutral-300 bg-white/70 hover:border-red-300 hover:bg-white"
                >
                  {t("learnMore")}
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </a>
            </div>
          </Motion>
          <div className="mt-10 flex items-center gap-2 text-sm font-medium text-neutral-500">
            <span className="h-px w-8 bg-red-500" />
            {t("heroNote")}
          </div>
        </div>

        <Motion animation="fadeIn" transition={{ delay: 0.3 }}>
          <div className="relative order-1 mx-auto w-full max-w-[26rem] lg:order-2 lg:max-w-none">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-red-700" />
            <div className="relative overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white shadow-2xl shadow-neutral-900/15">
              <Image
                src={profile}
              alt={t("portraitAlt")}
                width={560}
                height={640}
                priority
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-xl sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-red-50 text-red-700">
                <ArrowUpRight className="size-5" />
              </span>
              <span className="text-sm font-semibold text-neutral-800">
                {t("heroCard")}
              </span>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  );
}
