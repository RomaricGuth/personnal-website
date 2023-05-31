"use client";

import { technos } from "@/utils/technos"
import Image from "next/image"
import styles from "@/styles/portfolio.module.css"
import { useTranslation } from "@/utils/translation/client_utils"
import Button, { buttonModes } from "./button";

export default function Portfolio() {
    const { t, i18n : {language}} = useTranslation("home");
    const apps = [
        {
            name: 'Planeat',
            description: t('planeatDescription'),
            bullets: [t('planeat1'), t('planeat2'), t('planeat3')],
            techs: [technos.REACT_NATIVE, technos.REDUX],
            pictures: ["/assets/planeat_" + language + ".png"],
            callToAction: t('planeatCTA')
        },
        {
            name: t('personnalWebsite'),
            description: t('personnalWebsiteDescription'),
            techs: [technos.REACT, technos.TAILWIND, technos.NEXT],
            pictures: ["/assets/portfolio_" + language + ".png"],
            callToAction: t('personnalWebsiteCTA'),
            link: "https://github.com/RomaricGuth/personnal-website"
        }
    ]

    return (
        <div class={styles.container}>
            <h2 class="mb-16">{t('recentWork')}</h2>
            <div class={styles.grid}>
                {apps.map((app) => (
                    <div key={app.name} class={styles.app}>
                        <div class={styles.text}>
                            <h3 class={styles.title}>{app.name}</h3>
                            <div class={styles.description}>
                                {app.description}
                            </div>
                            {app.bullets?.length > 0 && (<ul class="mt-4">
                                {app.bullets?.map((hint, index) => (
                                    <li key={index} class="list-disc list-inside">{hint}</li>
                                ))}
                            </ul>)}
                            <div class={styles['tech-stack']}>
                                {t('techstack')}
                                <div class={styles.technos}>
                                    {app.techs.map((techno) => (
                                        <div key={techno.name} class={styles['techno-item']}>
                                            <Image src={techno.logo} width={50} height={50} alt={"logo " + techno.name} class={styles['techno-logo']}/>
                                            {techno.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {app.link ? (
                                <a href={app.link} class={styles['call-to-action']}>
                                    <Button mode={buttonModes.OUTLINED} text={app.callToAction} />
                                </a>
                            ) : (
                                <h4 class={styles['call-to-action']}>
                                    {app.callToAction}
                                </h4>
                            )}
                        </div>
                        <div class={styles.image}>
                            <Image src={app.pictures[0]} fill alt={app.name} style={{objectFit: "contain"}}/> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
