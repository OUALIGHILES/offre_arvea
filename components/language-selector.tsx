"use client"

import React from 'react'
import { useTranslation } from '@/lib/translation-context'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  const languages = [
    { code: 'fr' as const, name: 'Français', flag: '🇫🇷' },
    { code: 'ar' as const, name: 'العربية', flag: '🇩🇿' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' }
  ]

  return (
    <div className="flex items-center space-x-1">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className={`text-xs px-2 py-1 h-8 ${
              language === lang.code 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            <span className="mr-1">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
