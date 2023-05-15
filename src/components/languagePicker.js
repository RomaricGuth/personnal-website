"use client"

import { fallbackLng, languages } from '@/utils/translation/config';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Dropdown from './dropdown';
import { useCallback } from 'react';

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
    const router = useRouter();
    const path = usePathname();
    let currentLocale;
    if (path && path.startsWith('/')) {
        const localeEndIndex = path.indexOf('/', 1);
        if (localeEndIndex > 0) {
            currentLocale = path.substring(1, localeEndIndex);
        } else {
            currentLocale = path.substring(1);
        }

        if (!languages.includes(currentLocale)) {
            currentLocale = fallbackLng;
        }
    }

    const handleLanguageChange = useCallback((newLocale) => {
        if (newLocale === currentLocale) {
            return;
        }

        const newPath = path.startsWith('/' + currentLocale) ?
            path.replace('/' + currentLocale, '/' + newLocale) :
            '/' + newLocale + path;
        router.push(newPath);
    }, [router, path, currentLocale]);

    const renderLanguage = useCallback((locale) => (
        <div class="flex items-center gap-2 text-white">
            <FlagImage locale={locale} />
            <span>{locale.toUpperCase()}</span>
        </div>
    ), [])

    return (
        <Dropdown
            values={languages}
            value={currentLocale}
            renderItem={renderLanguage}
            onSelect={handleLanguageChange}
            containerClass="border-white"
            dropdownClass="bg-gray-700"
            dropdownItemClass="hover:bg-gray-800"
            iconClass="text-white"
        />
    );
}

/*
<i class="fa-sharp fa-light fa-arrow-down"></i>
<i class="fa-solid fa-caret-down"></i>
<i class="fa-regular fa-angle-down"></i>
<i class="fa-sharp fa-solid fa-chevron-down"></i>
<i class="fa-solid fa-chevron-down"></i>
<i class="fa-solid fa-down-right"></i>
<i class="fa-solid fa-down-long"></i>
*/