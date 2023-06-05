"use client";

import Image from "./image";
import { useTranslation } from "../utils/translation/client_utils"

export default function About() {
    const { t } = useTranslation('home');
    const needs = [
        {
            text: t('need1'),
            why: t('need1Explanation')
        },
        {
            text: t('need2'),
            why: t('need2Explanation')
        },
    ]

    return (
        <div>
            <h3 class="mb-8">{t('needMe')}</h3>
            <dl className="list-disc list-inside list gap-4">
                {needs.map((need, index) => (
                    <div key={index} class="mt-4">
                        <dt class="list-item">{need.text}</dt>
                        <dd class="ml-8 mt-2 flex gap-4 text-justify">
                            <i class="fa-solid fa-arrow-right-long"></i>
                            {need.why}
                        </dd>
                    </div>
                ))}
            </dl>
            <div class="flex flex-row items-center gap-2 mt-16 mb-8"> 
                <h3>{t('storyTime')}</h3>
                <Image src="/assets/pen.png" alt="picture of a pen" width={30} height={30} />
            </div>
            <p class="text-justify">{t('story')}</p>
        </div>
    )
}