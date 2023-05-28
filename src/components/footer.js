"use client"

import Image from "next/image";
import ContactButton from "./contactButton";
import { useTranslation } from "@/utils/translation/client_utils";
import { menuSections } from "./menu";

export default function Footer() {
    const { t } = useTranslation("footer");
    return (
        <div class="text-white bg-black py-4 flex flex-col flex-1 items-center gap-4">
            <div class="flex w-full flex-col sm:flex-row flex-wrap gap-4 justify-between items-center">
                <div class="flex flex-col flex-1 justify-center items-center order-3 sm:order-1">
                    <Image src="/assets/logo-nobg.png" alt="logo" width={200} height={200} />
                </div>
                <div class="flex flex-col flex-1 justify-center items-center order-1 sm:order-2 my-4">
                    <ContactButton />
                    <a href="https://www.linkedin.com/in/guth" class="underline mt-4 flex items-center gap-2">
                        {t('followMe')}
                        <Image src="/assets/linkedin.png" width={20} height={20} alt="linkedin logo" />
                    </a>
                </div>
                <div class="flex flex-col flex-1 items-center order-2 sm:order-3">
                    <div class="text-lg font-bold">{t('navigation')}</div>
                    <div class="mt-2 flex flex-col items-center sm:items-start">
                    {menuSections.map((section) => (
                        <a key={section.name} href={section.link} class="underline hover:opacity-50">{t(section.name)}</a>
                    ))}
                    </div>
                </div>
            </div>
            <div>Copyright © 2023 Romaric Guth</div>
        </div>
    )
}