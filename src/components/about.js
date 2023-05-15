"use client";

import { useContext } from "react";
import Image from "next/image";
import { useTranslation } from "../utils/translation/client_utils"
import Tooltip from "./tooltip";

export default function About() {
    const { t } = useTranslation('home');

    const medias = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/guth",
            image: "/assets/linkedin.png",
            tooltip: t('linkedin-tooltip')
        },
        {
            name: "Malt",
            url: "https://www.malt.fr/profile/guthromaric",
            image: "/assets/malt.png",
            tooltip: t('malt-tooltip')
        },
        {
            name: "Github",
            url: "https://www.github.com/RomaricGuth",
            image: "/assets/github.png",
            tooltip: t('github-tooltip')
        },
        {
            name: "Leetcode",
            url: "https://leetcode.com/romaricguth/",
            image: "/assets/leetcode.png",
            tooltip: t('leetcode-tooltip')
        },
    ]

    return (
        <div>
            <p class="text-justify">{t('aboutText')}</p>
            <div class="flex row justify-center text-5xl gap-8 pt-8">
                {medias.map(media => (
                    <Tooltip text={media.tooltip}>
                        <a href={media.url} key={media.name}>
                            <Image key={media.name} src={media.image} alt={media.name} width={50} height={50} />
                        </a>
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}