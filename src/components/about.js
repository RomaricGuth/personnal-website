"use client";

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
            <h3 class="mt-16 mb-8">{t('storyTime')}</h3>
            <p class="text-justify">{t('story')}</p>
        </div>
    )
}