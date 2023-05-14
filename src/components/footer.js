"use client"

import Image from "next/image";
import ContactButton from "./contactButton";
import { useTranslation } from "@/translation/client_utils";
import { menuSections } from "./menu";

export default function Footer() {
    const { t } = useTranslation("footer");
    return (
        <div class="text-white flex flex-col flex-1 items-center">
            <div class="flex flex-row w-[100%] justify-between items-center">
                <div class="flex flex-col flex-1 justify-center items-center">
                    <Image src="/asset/logo.png" alt="logo" width={200} height={200} />
                </div>
                <div class="flex flex-col flex-1 justify-center items-center">
                    <ContactButton />
                    <a href="" class="mt-4 flex items-center gap-2">
                        {t('followMe')}
                        <Image src="/assets/linkedin.png" width={20} height={20} alt="linkedin logo" />
                    </a>
                </div>
                <div class="flex flex-col flex-1 items-center">
                    <h2 class="text-lg font-bold">{t('navigation')}</h2>
                    <div class="mt-2">
                    {menuSections.map((section) => (
                        <a href={section.link}><h3>{t(section.name)}</h3></a>
                    ))}
                    </div>
                </div>
            </div>
            <div>Copyright © 2023 Romaric Guth</div>
            <div><a href="">{t('privacyPolicy')}</a> | <a href="">{t('termsOfUse')}</a> | <a href="">{t('disclaimer')}</a></div> 
        </div>
    )
}