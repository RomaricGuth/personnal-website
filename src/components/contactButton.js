"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ContactButton({ className }) {
  const t = useTranslations("Common");
  return (
    <Link href="mailto:contact@romaricguth.com" className={className}>
      <Button className="w-full">{t("contact")}</Button>
    </Link>
  );
}
