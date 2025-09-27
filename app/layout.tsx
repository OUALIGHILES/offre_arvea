import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ArveaHeader } from "@/components/arvea-header"
import { TranslationProvider } from "@/lib/translation-context"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arvea Job Offers - Unlock Your Online Earning Potential",
  description:
    "Discover proven strategies to generate income online with Arvea. Join thousands who have transformed their financial future through digital opportunities.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <TranslationProvider>
          <Suspense fallback={null}>
            <ArveaHeader />
            {children}
            <Toaster />
            <Analytics />
          </Suspense>
        </TranslationProvider>
      </body>
    </html>
  )
}
