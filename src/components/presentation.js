"use client";

import Image from "next/image"
import { useTranslation } from '../utils/translation/client_utils'
import ContactButton from "./contactButton";
import Button, { buttonModes } from "./button";
import styles from '@/styles/presentation.module.css';
import { useContext } from "react";
import { TranslationContext } from "./context";

export default function Presentation({params}) {
    console.log('params', params);
    const { t } = useTranslation('home');
    return (
        <div className={"flex flex-row flex-wrap justify-evenly gap-8 pt-16 " + styles['clip-path']}>
            <div class="flex flex-col flex-wrap justify-evenly gap-8 mx-4 break-words">
                <h1 class="text-7xl text-white">{t('name')}</h1>
                <div class="text-5xl text-white leading-tight font-hand">
                    {t('job1')}<br />
                    {t('job2')}
                </div>
                <div class="flex flex-row justify-between flex-wrap gap-4">
                    <ContactButton class="flex flex-1 flex-shrink-0" />
                    <a href="#about" class="flex flex-1 flex-shrink-0">
                        <Button
                            text={t('learnMore')}
                            mode={buttonModes.OUTLINED}
                            class="flex flex-1 flex-shrink-0"
                            renderAccessory={() => (
                                <i class="fa-solid fa-arrow-down-long"></i>
                            )}
                        />
                    </a>
                </div>
            </div>
            <Image src="/assets/profile.jpg" alt="Profile picture" width={250} height={250} class="rounded-full object-cover aspect-square mx-4"/>
        </div>
    )
}