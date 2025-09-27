"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from './translations'

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.fr
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('arvea-language') as Language
    if (savedLanguage && ['fr', 'ar', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('arvea-language', language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
