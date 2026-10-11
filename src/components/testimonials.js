"use client";

import { useTranslations } from "next-intl";
import Image from "./image";
import Link from "next/link";

export default function Testimonials() {
  const t = useTranslations("HomePage");
  const testimonials = [
    {
      author: "Thomas Landais",
      picture: "/assets/thomas-landais.jpeg",
      linkedin: "https://www.linkedin.com/in/thomas-landais",
      job: t("thomasJob"),
      comment: t("thomasTestimonial"),
    },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center py-4">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {t("testimonialHeading")}
      </h2>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.author}
          className="flex w-full max-w-2xl flex-col items-center rounded-3xl border border-neutral-200 bg-[#faf9f7] px-6 py-9 text-center shadow-sm sm:px-12 sm:py-12"
        >
          <Image
            src={testimonial.picture}
            width={100}
            height={100}
            alt={"picture of " + testimonial.author}
            className="rounded-full"
          />
          <blockquote className="py-12 max-w-[600px] relative">
            <span className="absolute text-6xl text-red-700 left-[-0.2em] top-0">
              &ldquo;
            </span>
            {testimonial.comment}
            <span className="absolute text-6xl text-red-700 right-[-0.2em] bottom-[-0.5em]">
              &rdquo;
            </span>
          </blockquote>
          <Link
            href={testimonial.linkedin}
            className="flex flex-row items-center gap-2"
            target="_blank"
          >
            <cite className="font-bold">{testimonial.author}</cite>
            <Image
              src="/assets/linkedin.png"
              width={20}
              height={20}
              alt="Linkedin logo"
            />
          </Link>
          <p className="mt-2">{testimonial.job}</p>
        </div>
      ))}
    </div>
  );
}
