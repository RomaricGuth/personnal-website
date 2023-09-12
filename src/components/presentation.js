"use client";

import Image from "./image"
import { useTranslation } from '../utils/translation/client_utils'
import ContactButton from "./contactButton";
import Button, { buttonModes } from "./button";
import styles from '@/styles/presentation.module.css';
import { useContext } from "react";

export default function Presentation({params}) {
    const { t } = useTranslation('home');
    return (
        <div className={"flex flex-row flex-wrap justify-evenly items-center gap-8 pt-16 px-4 " + styles['clip-path']}>
            <div className="flex flex-col flex-wrap justify-evenly gap-8 break-words">
                <h1>{t('name')}</h1>
                <div className="text-5xl leading-tight font-hand">
                    {t('job1')}
                </div>
                <div className="flex flex-row justify-between flex-wrap gap-4">
                    <ContactButton className="flex flex-1 flex-shrink-0" />
                    <a href="#about" className="flex flex-1 flex-shrink-0">
                        <Button
                            text={t('learnMore')}
                            mode={buttonModes.OUTLINED}
                            className="flex flex-1 flex-shrink-0"
                            renderAccessory={() => (
                                <i className="fa-solid fa-arrow-down-long"></i>
                            )}
                        />
                    </a>
                </div>
            </div>
            <Image src="/assets/profile.jpg" alt="Profile picture" width={250} height={250} className={styles.profile}/>
        </div>
    )
}
