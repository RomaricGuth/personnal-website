"use client";

import Image from "next/image"
import { useTranslation } from '../translation/client_utils'
import ContactButton from "./contactButton";
import Button, { buttonModes } from "./button";
import styles from '@/styles/presentation.module.css';
import { useContext } from "react";
import { TranslationContext } from "./context";

export default function Presentation({params}) {
    console.log('params', params);
    const { t } = useTranslation('home');
    return (
        <div class={styles.presentation}>
            <div className="flex flex-row flex justify-evenly">
                <div class="flex flex-col justify-evenly">
                    <text class="text-7xl text-white">{t('name')}</text>
                    <text class="text-5xl text-white">{t('job')}</text>
                    <div class="flex flex-row justify-between">
                        <ContactButton class="flex-1 mr-4" />
                        <a href="#about" class="flex flex-1"><Button text={t('learnMore')} mode={buttonModes.OUTLINED} class="flex-1"/></a>
                    </div>
                </div>
                <Image src="/profile.jpg" alt="Profile picture" width={250} height={250} class="rounded-full object-cover aspect-square"/>
            </div>
        </div>
    )
}