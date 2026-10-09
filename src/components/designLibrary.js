"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Command,
  Heart,
  Sparkles,
  Zap,
} from "lucide-react";

const categories = ["all", "buttons", "cards", "forms"];

export default function DesignLibrary() {
  const t = useTranslations("Design");
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const components = [
    {
      category: "buttons",
      title: t("buttonsTitle"),
      description: t("buttonsDescription"),
      preview: (
        <div className="flex min-h-48 flex-wrap items-center gap-3 py-6">
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#c7f36b] px-5 py-3 text-sm font-semibold text-[#19200e] transition hover:bg-[#d7ff8b]">
            {t("primaryAction")}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5">
            <Sparkles className="size-4 text-[#c7f36b]" />
            {t("secondaryAction")}
          </button>
          <button className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-white/60 transition hover:text-white">
            {t("subtleAction")}
            <ArrowRight className="size-4" />
          </button>
        </div>
      ),
    },
    {
      category: "cards",
      title: t("productTitle"),
      description: t("productDescription"),
      preview: (
        <div className="relative min-h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#28241d] via-[#171a17] to-[#101311] p-6">
          <div className="absolute -right-8 -top-12 size-40 rounded-full bg-[#c7f36b]/10 blur-3xl" />
          <div className="relative flex h-full min-h-36 flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#c7f36b]">
                <Command className="size-5" />
              </div>
              <span className="rounded-full border border-[#c7f36b]/25 bg-[#c7f36b]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[#d5ff94]">
                {t("featured")}
              </span>
            </div>
            <div className="mt-7 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-xl text-white">{t("productTitle")}</h3>
                <p className="mt-1 max-w-56 text-sm leading-relaxed text-white/55">
                  {t("productDescription")}
                </p>
              </div>
              <button aria-label={t("productAction")} className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-105">
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "cards",
      title: t("profileTitle"),
      description: t("profileDescription"),
      preview: (
        <div className="flex min-h-48 flex-col justify-between rounded-2xl border border-white/10 bg-[#111313] p-6">
          <div className="flex items-center gap-4">
            <div className="relative grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f4c6a5] via-[#d9886e] to-[#693e54] text-lg font-semibold text-white shadow-lg shadow-black/30">
              RG
              <span className="absolute bottom-0 right-0 size-3.5 rounded-full border-[3px] border-[#111313] bg-[#a7e77b]" />
            </div>
            <div>
              <p className="font-medium text-white">Romaric Guth</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-[#b6e987]">
                <span className="size-1.5 rounded-full bg-[#b6e987]" />
                {t("online")}
              </p>
            </div>
            <button aria-label={t("saved")} className="ml-auto text-white/35 transition hover:text-pink-300">
              <Heart className="size-5" />
            </button>
          </div>
          <div className="mt-6 flex items-end justify-between gap-3">
            <p className="max-w-48 text-sm leading-relaxed text-white/55">{t("profileDescription")}</p>
            <p className="shrink-0 text-right text-xs text-white/40"><span className="block text-lg font-semibold text-white">2.4k</span>{t("members")}</p>
          </div>
        </div>
      ),
    },
    {
      category: "forms",
      title: t("formTitle"),
      description: t("formDescription"),
      preview: (
        <form
          className="flex min-h-48 flex-col justify-center rounded-2xl border border-white/10 bg-[#111313] p-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (email.trim()) setIsSubscribed(true);
          }}
        >
          <div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-[#bca7ff]/10 text-[#c8b7ff]">
            <Sparkles className="size-5" />
          </div>
          <h3 className="text-xl text-white">{t("formTitle")}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">{t("formDescription")}</p>
          <div className="mt-5 flex gap-2">
            <input
              aria-label={t("emailPlaceholder")}
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#c7f36b]/60"
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("emailPlaceholder")}
              type="email"
              value={email}
            />
            <button className="rounded-full bg-[#c7f36b] px-4 text-sm font-semibold text-[#19200e] transition hover:bg-[#d7ff8b]" type="submit">
              {isSubscribed ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
            </button>
          </div>
          {isSubscribed && <p aria-live="polite" className="mt-3 text-xs text-[#c7f36b]">{t("subscribed")}</p>}
        </form>
      ),
    },
    {
      category: "cards",
      title: t("activityTitle"),
      description: t("activityDescription"),
      preview: (
        <div className="min-h-48 py-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg text-white">{t("activityTitle")}</h3>
              <p className="mt-1 text-xs text-white/45">{t("activityDescription")}</p>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#8ecbff]/10 text-[#8ecbff]"><Zap className="size-4" /></span>
          </div>
          <div className="mt-6 flex items-end justify-between gap-4">
            <div><p className="text-3xl font-semibold tracking-tight text-white">12 <span className="text-sm font-normal text-white/45">/ 16</span></p><p className="mt-1 text-xs text-white/45">{t("projects")}</p></div>
            <p className="inline-flex items-center gap-1 text-xs text-[#b6e987]"><ArrowDownRight className="size-3.5" /> +24% {t("thisWeek")}</p>
          </div>
          <div className="mt-5 flex h-8 items-end gap-1.5" aria-label="Activité hebdomadaire">
            {[35, 55, 42, 78, 58, 92, 68, 100, 72, 84, 57, 76, 48, 66, 89, 60].map((height, index) => (
              <span key={index} className={`flex-1 rounded-sm ${index === 7 ? "bg-[#c7f36b]" : "bg-white/15"}`} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      category: "buttons",
      title: t("quickTags"),
      description: t("labels"),
      preview: (
        <div className="flex min-h-48 flex-col justify-center py-6">
          <p className="mb-5 text-xs font-medium tracking-[0.18em] text-white/40">{t("quickTags")}</p>
          <div className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c7f36b]/20 bg-[#c7f36b]/10 px-3 py-1.5 text-xs text-[#d5ff94]"><Sparkles className="size-3.5" />{t("new")}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ffbc8b]/20 bg-[#ffbc8b]/10 px-3 py-1.5 text-xs text-[#ffc99f]"><Zap className="size-3.5" />{t("popular")}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#bca7ff]/20 bg-[#bca7ff]/10 px-3 py-1.5 text-xs text-[#d1c3ff]"><Check className="size-3.5" />{t("saved")}</span>
          </div>
          <button className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-white/65 transition hover:text-white">
            {t("subtleAction")} <ChevronRight className="size-4" />
          </button>
        </div>
      ),
    },
  ];

  const visibleComponents = components.filter(
    (component) => activeCategory === "all" || component.category === activeCategory,
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#090b0a] text-white">
      <section className="relative border-b border-white/[0.07]">
        <div className="pointer-events-none absolute -right-24 top-0 size-[28rem] rounded-full bg-[#b6e987]/[0.07] blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 md:grid-cols-[1fr_auto] md:items-end md:py-28 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] text-[#c7f36b]">
              <span className="size-1.5 rounded-full bg-[#c7f36b]" />{t("eyebrow")}
            </p>
            <h1 className="whitespace-pre-line text-5xl leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">{t("title")}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">{t("intro")}</p>
          </div>
          <div className="flex items-center gap-4 border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
            <span className="text-5xl font-light tracking-tight text-[#c7f36b]">06</span>
            <span className="max-w-20 text-[10px] font-medium leading-4 tracking-[0.2em] text-white/40">{t("componentCount")}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium tracking-[0.2em] text-white/40">{t("labels")}</p>
          <div className="flex flex-wrap gap-2" aria-label={t("categories")}>
            {categories.map((category) => (
              <button
                key={category}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-xs transition ${activeCategory === category ? "border-[#c7f36b]/40 bg-[#c7f36b]/10 text-[#d5ff94]" : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleComponents.map((component) => (
            <article key={component.title} className="group min-w-0">
              {component.preview}
              <div className="pt-5">
                <h2 className="text-xl tracking-tight text-white">{component.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{component.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-white/35">
          <Heart className="size-3.5 text-[#c7f36b]/70" />{t("footerNote")}
        </div>
      </section>
    </div>
  );
}
