import { useTranslation } from "next-i18next";
import styles from '@/styles/menu.module.css';

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