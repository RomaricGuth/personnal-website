"use client";

import Image from "./image";
import { useTranslation } from "../utils/translation/client_utils"

export default function About() {
    const { t } = useTranslation('home');

    return (
        <div>
            <h3 class="mb-8">{t('needMe')}</h3>
            <ul className="list-disc list-inside list">
                <li>{t('need1')}</li>
                <li>{t('need2')}</li>
                <li>{t('need3')}</li>
            </ul>
            <div class="flex flex-row items-center gap-2 mt-16 mb-8"> 
                <h3>{t('storyTime')}</h3>
                <Image src="/assets/pen.png" alt="picture of a pen" width={30} height={30} />
            </div>
            <p class="text-justify">{t('story')}</p>
        </div>
    )
}