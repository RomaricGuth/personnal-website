"use client";

import { useTranslation } from "../translation/client_utils";
import Button, { buttonModes } from "./button";
import { useCallback, useContext } from "react";
import { TranslationContext } from "./context";

export default function ContactButton(props) {
    const { t } = useTranslation('common');

    const onClick = useCallback(() => {
        window.open('mailto:contact@romaricguth.com')
    }, [])

    return (
        <Button text={t('contact')} onClick={onClick} mode={buttonModes.CONTAINED} {...props} />
    )
}