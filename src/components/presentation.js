import Image from "next/image"
import { useTranslation } from 'next-i18next'
import ContactButton from "./contactButton";
import Button, { buttonModes } from "./button";

export default function Presentation() {
    const { t } = useTranslation('home');
    return (
        <div class="bg-black w-screen polygon flex flex-col justify-center">
            <div class="flex flex-row justify-evenly">
                <div class="flex flex-col justify-evenly">
                    <text class="text-7xl text-white">{t('name')}</text>
                    <text class="text-5xl text-white">{t('job')}</text>
                    <div class="flex flex-row justify-between">
                        <ContactButton class="flex-1 mr-4" />
                        <Button text={t('learnMore')} mode={buttonModes.OUTLINED} class="flex-1"/>
                    </div>
                </div>
                <Image src="/profile.jpg" alt="Profile picture" width={250} height={250} class="rounded-full object-cover aspect-square"/>
            </div>
        </div>
    )
}