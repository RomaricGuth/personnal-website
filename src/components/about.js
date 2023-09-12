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
            <div className="flex flex-row items-center gap-2 mb-8"> 
                <h3>{t('storyTime')}</h3>
                <Image src="/assets/pen.png" alt="picture of a pen" width={30} height={30} />
            </div>
            <p className="text-justify">{t('story')}</p>
        </div>
    )
}