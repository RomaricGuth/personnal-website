import { useTranslation } from "next-i18next";
import Button, { buttonModes } from "./button";
import { useCallback } from "react";

export default function ContactButton(props) {
    const { t } = useTranslation('common');

    const onClick = useCallback(() => {
        window.open('mailto:contact@romaricguth.com')
    }, [])

    return (
        <Button text={t('contact')} onClick={onClick} mode={buttonModes.CONTAINED} {...props} />
    )
}