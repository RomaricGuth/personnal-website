"use client"

import { fallbackLng, languages } from '@/utils/translation/config';
import Image from './image';
import { usePathname, useRouter } from 'next/navigation';
import Dropdown from './dropdown';
import { useCallback, useState } from 'react';
import { getLanguage, setLanguage, useTranslation } from '@/utils/translation/client_utils';

const FlagImage = ({locale}) => {
    return (
        <Image
            src={`/assets/flags/${locale}.png`}
            alt={"flag for locale " + locale}
            width={20}
            height={15}
        />
    )
}

export default function LanguagePicker() {
    const {i18n} = useTranslation();
    const  [locale, setLocale] = useState(i18n.resolvedLanguage); // init with resolved language

    const handleLanguageChange = useCallback((newLocale) => {
        if (newLocale === locale) {
            return;
        }

        setLanguage(newLocale);
        setLocale(newLocale);
    }, [locale]);

    const renderLanguage = useCallback((locale) => (
        locale && ( // undefined at first render
            <div class="flex items-center gap-2 text-white">
                <FlagImage locale={locale} />
                <span>{locale.toUpperCase()}</span>
            </div>
        )
    ), [])

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
