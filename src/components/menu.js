"use client";

import { useTranslation } from "../translation/client_utils";
import styles from '@/styles/menu.module.css';
import CustomLink from "./link";
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
        name: 'resume',
        link: "https://romaricguth.github.io/resume"
    },
];

export default function Menu(props) {
    const { t } = useTranslation('common');

    return (
            <div class={styles.menu + " " + props.class}>
                {menuSections.map((section) => (
                    <a key={section.name} className={styles["menu-item"]} href={section.link}>{t(section.name)}</a>
                ))}
            </div>
    )
}