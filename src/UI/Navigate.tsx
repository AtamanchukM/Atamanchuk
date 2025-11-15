import { i } from 'framer-motion/client'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Navigate() {
    const { t } = useTranslation();
    return (
        <ul className="flex lg:gap-10 lg:text-base text-sm gap-4 lg:pr-10 pr-2 navigation">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#project">{t('nav.projects')}</a></li>
            <li ><a href="#contact">{t('nav.contact')}</a></li>

        </ul>
    )
}
