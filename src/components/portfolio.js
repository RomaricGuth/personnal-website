"use client";

import { technos } from "@/utils/technos"
import Image from "./image"
import styles from "@/styles/portfolio.module.css"
import { useTranslation } from "@/utils/translation/client_utils"
import Button, { buttonModes } from "./button";

export default function Portfolio() {
    const { t, i18n : {resolvedLanguage}} = useTranslation("home");
    const apps = [
        {
            name: t('masEuliac'),
            description: t('masEuliacDescription'),
            techs: [technos.NEXT, technos.TAILWIND],
            pictures: ["/assets/mas_euliac.png"],
            callToAction: t('masEuliacCTA'),
            link: "https://mas-euliac.fr"
        },
        {
            name: 'Planeat',
            description: t('planeatDescription'),
            bullets: [t('planeat1'), t('planeat2'), t('planeat3')],
            techs: [technos.REACT_NATIVE, technos.REDUX],
            pictures: ["/assets/planeat_" + resolvedLanguage + ".png"],
            callToAction: t('planeatCTA')
        },
        {
            name: t('personnalWebsite'),
            description: t('personnalWebsiteDescription'),
            techs: [technos.NEXT, technos.TAILWIND],
            pictures: ["/assets/portfolio_" + resolvedLanguage + ".png"],
            callToAction: t('personnalWebsiteCTA'),
            link: "https://github.com/RomaricGuth/personnal-website"
        }
    ]

    return (
        <div className={styles.container}>
            <h2 className="mb-16">{t('recentWork')}</h2>
            <div className={styles.grid}>
                {apps.map((app) => (
                    <div key={app.name} className={styles.app}>
                        <div className={styles.text}>
                            <h3 className={styles.title}>{app.name}</h3>
                            <div className={styles.description}>
                                {app.description}
                            </div>
                            {app.bullets?.length > 0 && (<ul className="mt-4">
                                {app.bullets?.map((hint, index) => (
                                    <li key={index} className="list-disc list-inside">{hint}</li>
                                ))}
                            </ul>)}
                            <div className={styles['tech-stack']}>
                                {t('techstack')}
                                <div className={styles.technos}>
                                    {app.techs.map((techno) => (
                                        <div key={techno.name} className={styles['techno-item']}>
                                            <Image src={techno.logo} width={50} height={50} alt={"logo " + techno.name} className={styles['techno-logo']}/>
                                            {techno.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {app.link ? (
                                <a href={app.link} className={styles['call-to-action']}>
                                    <Button mode={buttonModes.OUTLINED} text={app.callToAction} />
                                </a>
                            ) : (
                                <h4 className={styles['call-to-action']}>
                                    {app.callToAction}
                                </h4>
                            )}
                        </div>
                        <div className={styles.image}>
                            <Image src={app.pictures[0]} fill alt={app.name} style={{objectFit: "contain"}}/> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
