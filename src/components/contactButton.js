"use client";

import { useTranslations } from "next-intl";
import Button, { buttonModes } from "./button";

export default function ContactButton(props) {
  const t = useTranslations("Common");
  return (
    <a href="mailto:contact@romaricguth.com" {...props}>
      <Button text={t("contact")} mode={buttonModes.CONTAINED} {...props} />
    </a>
  );
}
