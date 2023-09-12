"use client"

import Image from "./image";
import ContactButton from "./contactButton";
import { useTranslation } from "@/utils/translation/client_utils";
import { menuSections } from "./menu";

export default function Footer() {
    const { t } = useTranslation("footer");
    return (
        <div className="text-white bg-black py-4 flex flex-col flex-1 items-center gap-4">
            <div className="flex w-full flex-col sm:flex-row flex-wrap gap-4 justify-between items-center">
                <div className="flex flex-col flex-1 justify-center items-center order-3 sm:order-1">
                    <Image src="/assets/logo-nobg.png" alt="logo" width={200} height={200} />
                </div>
                <div className="flex flex-col flex-1 justify-center items-center order-1 sm:order-2 my-4">
                    <ContactButton />
                    <a href="https://www.linkedin.com/in/guth" className="underline mt-4 flex items-center gap-2">
                        {t('followMe')}
                        <Image src="/assets/linkedin.png" width={20} height={20} alt="linkedin logo" />
                    </a>
                </div>
                <div className="flex flex-col flex-1 items-center order-2 sm:order-3">
                    <div className="text-lg font-bold">{t('navigation')}</div>
                    <div className="mt-2 flex flex-col items-center sm:items-start">
                    {menuSections.map((section) => (
                        <a key={section.name} href={section.link} className="underline hover:opacity-50">{t(section.name)}</a>
                    ))}
                    </div>
                </div>
            </div>
            <div>Copyright © 2023 Romaric Guth</div>
        </div>
    )
}