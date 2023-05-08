"use client";

import { useContext } from "react";
import { useTranslation } from "../translation/client_utils";
import styles from '@/styles/menu.module.css';
import { TranslationContext } from "./context";

export default function Menu() {
    const { t } = useTranslation('common');
    const menuSections = [
        {
            name: t('about'),
        },
        {
            name: t('portfolio'),
        },
        {
            name: t('testimonials'),
        },
        {
            name: t('resume'),
        },
    ];

    return (
        <div className={styles["menu-container"]}>
            <div className={styles.menu}>
                {menuSections.map((section) => (
                    <div key={section.name} className={styles["menu-item"]}>{section.name}</div>
                ))}
            </div>
        </div>
    )
}