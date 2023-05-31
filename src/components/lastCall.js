"use client"

import Image from "./image";
import { useTranslation } from "@/utils/translation/client_utils";
import Button, { buttonModes } from "./button";

export default function LastCall() {
    const { t } = useTranslation('home');
    const contactMedias = [
        {
            name: "Mail",
            url: "mailto:contact@romaricguth.com",
            urlAlias: "contact@romaricguth.com",
            image: "/assets/mail.png",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/guth",
            image: "/assets/linkedin.png",
        },
        {
            name: "Malt",
            url: "https://www.malt.fr/profile/guthromaric",
            image: "/assets/malt.png",
        },
    ]

    const otherMedias = [
        {
            name: "Github",
            url: "https://www.github.com/RomaricGuth",
            image: "/assets/github.png",
            text: t('githubExplanation')
        },
        {
            name: "Leetcode",
            url: "https://leetcode.com/romaricguth/",
            image: "/assets/leetcode.png",
            text: t('leetcodeExplanation')
        },
    ]

    return (
        <div>
            <h3>{t('workTogether')}</h3>
            <div class="flex flex-col justify-center gap-4 mt-8">
                {contactMedias.map(media => (
                    <div key={media.name} class="flex flex-row items-center gap-4">
                        <a href={media.url} key={media.name}>
                            <Image key={media.name} src={media.image} alt={media.name} width={30} height={30} class="min-w-[30px]"/>
                        </a>
                        <div class="truncate">
                            {media.name}{' : '}
                            <a href={media.url} class="inline underline">{media.urlAlias ?? media.url}</a>
                        </div>
                    </div>
                ))}
            </div>

            <h3 class="mt-16 mb-8">{t('knowMore')}</h3>
            <div class="flex flex-col gap-4 mb-8">
                {otherMedias.map(media => (
                    <div key={media.name} class="flex flex-row items-center gap-4">
                        <a href={media.url}>
                            <Image key={media.name} src={media.image} alt={media.name} width={30} height={30} class="min-w-[30px]"/>
                        </a>
                        <div>
                            {media.text}
                            <a href={media.url} class="inline underline">{media.name}</a>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://romaricguth.github.io/resume/?position=Frontend+Developer">
                <Button text={t('checkResume')} mode={buttonModes.OUTLINED} />
            </a>
        </div>
    );
}