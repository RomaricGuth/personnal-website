"use client";

import { useTranslation } from "../utils/translation/client_utils";
import Button, { buttonModes } from "./button";

export default function ContactButton(props) {
    const { t } = useTranslation('common');
    return (
    <a href="mailto:contact@romaricguth.com" {...props}><Button text={t('contact')} mode={buttonModes.CONTAINED} {...props} /></a>
    )
}