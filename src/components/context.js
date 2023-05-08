"use client";

import { createContext } from 'react';
 

export default function Provider({ lng, children }) {
    console.log('provider ' + lng);
    return (
        <TranslationProvider lng={lng}>{children}</TranslationProvider>
    )
}

export const TranslationContext = createContext({});

function TranslationProvider({ lng, children }) {
    return (
        <TranslationContext.Provider value={{lng}}>{children}</TranslationContext.Provider>
    )
}