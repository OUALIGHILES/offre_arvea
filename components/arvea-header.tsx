"use client"

import React from "react"
import { ArveaLogo } from "@/components/arvea-logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function ArveaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ArveaLogo size="md" className="cursor-pointer" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("earning-methods")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Méthodes
            </button>
            <button
              onClick={() => scrollToSection("success-strategies")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Stratégies
            </button>
            <button
              onClick={() => scrollToSection("lead-form")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="arvea"
              size="lg"
              onClick={() => scrollToSection("lead-form")}
              className="font-bold btn-pulse-soft btn-wave"
            >
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("earning-methods")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Méthodes
              </button>
              <button
                onClick={() => scrollToSection("success-strategies")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Stratégies
              </button>
              <button
                onClick={() => scrollToSection("lead-form")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button
                  variant="arvea"
                  size="lg"
                  onClick={() => scrollToSection("lead-form")}
                  className="w-full font-bold btn-pulse-soft btn-wave"
                >
                  Commencer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
