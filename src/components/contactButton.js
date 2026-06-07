"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";

export default function ContactButton({ className }) {
  const t = useTranslations("Common");
  return (
    <Link href="/contact" className={className}>
      <Button className="w-full">{t("contact")}</Button>
    </Link>
  );
}
