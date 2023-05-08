'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions } from './config'

// 
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`../../../public/translations/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    }
  })

export function useTranslation(context, ns, options) {
    console.log('context ' + context)
  const { lng } = context;
  if (i18next.resolvedLanguage !== lng) {
    console.log('change language from ' + i18next.resolvedLanguage + ' to ' + lng);
    //i18next.changeLanguage(lng)
  }
  return useTranslationOrg(ns, options)
}