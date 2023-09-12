"use client";

import { useTranslation } from "../utils/translation/client_utils";
import styles from '@/styles/menu.module.css';

import Link from "next/link";
export const menuSections = [
    {
        name: 'about',
        link: '#about'
    },
    {
        name: 'portfolio',
        link: '#portfolio'
    },
    {
        name: 'testimonials',
        link: '#testimonials'
    },
    {
        name: 'contact',
        link: "#contact"
    },
];

export default function Menu(props) {
    const { t } = useTranslation('common');

    return (
            <div className={styles.menu + " " + props.className}>
                {menuSections.map((section) => (
                    <a key={section.name} className={styles["menu-item"]} href={section.link}>{t(section.name)}</a>
                ))}
            </div>
    )
}