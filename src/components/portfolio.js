"use client";

import { technos } from "@/utils/technos"
import Image from "next/image"
import styles from "@/styles/portfolio.module.css"
import { useTranslation } from "@/utils/translation/client_utils"

export default function Portfolio() {
    const { t } = useTranslation("home");
    const apps = [
        {
            name: 'Planeat',
            description: t('planeatDescription'),
            techs: [technos.REACT_NATIVE, technos.REDUX],
            images: ["/assets/tailwind.png"],
            callToAction: t('planeatCTA')
        },
        {
            name: t('personnalWebsite'),
            description: t('personnalWebsiteDescription'),
            techs: [technos.REACT, technos.NEXT, technos.TAILWIND],
            images: [''],
            callToAction: t('personnalWebsiteCTA'),
            link: "https://github.com/RomaricGuth/personnal-website"
        }
    ]

    const width = 600;
    return (
        <div class={styles.grid}>
            {apps.map((app) => (
                <a href={app.link} key={app.name} class={styles.card}>
                    <Image src={"/assets/profile.jpg"} fill alt={app.name} class={styles.image} /> 
                    <div class={styles.description}>
                        <h3 class={styles.title}>{app.name}</h3>
                        <div class={styles.infos}>
                            <div>
                                {app.description}
                            </div>
                            <div class={styles.technos}>
                                {app.techs.map((techno) => (
                                    <div key={techno.name} class={styles['techno-item']}>
                                        <Image src={techno.logo} width={50} height={50} alt={"logo " + techno.name} class={styles['techno-logo']}/>
                                        {techno.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class={styles['call-to-action']}>
                        {app.callToAction}
                    </div>
                </a>
            ))}
        </div>
    )
}