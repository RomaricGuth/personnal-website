'use client'

import { useContext } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, fallbackLng } from './config'
import acceptLanguage from 'accept-language'

acceptLanguage.languages(languages)

export const getPrefferedLocale = (headerValue) => {
  const lng = acceptLanguage.get(headerValue);
  return lng ? lng : fallbackLng;
}

// 
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`../../../public/translations/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    fallbackLng,
    supportedLngs: languages,
    nonExplicitSupportedLngs: true,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
      caches: ['cookie']
    }
  })

export function useTranslation(ns, options) {
  return useTranslationOrg(ns, options)
}

export function setLanguage(locale) {
  i18next.changeLanguage(locale)
}