"use client";

import { useContext } from "react";
import { useTranslation } from "../translation/client_utils";
import styles from '@/styles/menu.module.css';
import { TranslationContext } from "./context";

export const menuSections = [
    {
        name: 'about',
    },
    {
        name: 'portfolio',
    },
    {
        name: 'testimonials',
    },
    {
        name: 'resume',
    },
];

export default function Menu() {
    const { t } = useTranslation('common');

    return (
        <div className={styles["menu-container"]}>
            <div className={styles.menu}>
                {menuSections.map((section) => (
                    <div key={section.name} className={styles["menu-item"]}>{t(section.name)}</div>
                ))}
            </div>
        </div>
    )
}