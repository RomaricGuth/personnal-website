"use client";

import Image from "./image";
import Dropdown from "./dropdown";
import { useCallback } from "react";
import { useRouter, usePathname, useLocale } from "../i18n/navigation";

const languages = ["en", "fr"];

const FlagImage = ({ locale }) => {
  return (
    <Image
      src={`/assets/flags/${locale}.png`}
      alt={"flag for locale " + locale}
      width={20}
      height={15}
    />
  );
};

export default function LanguagePicker() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = useCallback(
    (newLocale) => {
      if (newLocale === locale) {
        return;
      }
      router.replace(pathname, { locale: newLocale });
    },
    [locale, pathname, router]
  );

  const renderLanguage = useCallback(
    (locale) =>
      locale && ( // undefined at first render
        <div className="flex items-center gap-2 text-white">
          <FlagImage locale={locale} />
          <span>{locale.toUpperCase()}</span>
        </div>
      ),
    []
  );

  return (
    <Dropdown
      values={languages}
      value={locale}
      renderItem={renderLanguage}
      onSelect={handleLanguageChange}
      containerClass="border-white"
      dropdownClass="bg-gray-700"
      dropdownItemClass="hover:bg-gray-800"
      iconClass="text-white"
    />
  );
}
