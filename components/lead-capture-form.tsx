"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "@/lib/translation-context"

interface FormData {
  firstName: string
  lastName: string
  location: string
  phone: string
  workedOnline: string
  notes: string
  privacyConsent: boolean
}

export function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    location: "",
    phone: "",
    workedOnline: "",
    notes: "",
    privacyConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t, language } = useTranslation()

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const openWhatsApp = (formData: FormData) => {
    const workedOnlineText = formData.workedOnline === "yes" ? 
      (language === 'ar' ? 'نعم' : language === 'en' ? 'Yes' : 'Oui') : 
      (language === 'ar' ? 'لا' : language === 'en' ? 'No' : 'Non')
    
    const message = encodeURIComponent(
      t.whatsappMessage
        .replace('{firstName}', formData.firstName)
        .replace('{lastName}', formData.lastName)
        .replace('{location}', formData.location)
        .replace('{phone}', formData.phone)
        .replace('{workedOnline}', workedOnlineText)
        .replace('{notes}', formData.notes || (language === 'ar' ? 'لا توجد ملاحظات' : language === 'en' ? 'No notes' : 'Aucune note'))
        .replace('{date}', new Date().toLocaleString(language === 'ar' ? 'ar-DZ' : language === 'en' ? 'en-US' : 'fr-FR'))
    )
    const whatsappUrl = `https://wa.me/213660839370?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.privacyConsent) {
      toast({
        title: t.privacyRequired,
        description: t.privacyDescription,
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          location: formData.location,
          phone: formData.phone,
          workedOnline: formData.workedOnline === "yes",
          notes: formData.notes,
          privacyConsent: formData.privacyConsent,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to submit form")
      }

      toast({
        title: t.success,
        description: t.successDescription,
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        location: "",
        phone: "",
        workedOnline: "",
        notes: "",
        privacyConsent: false,
      })

      // Open WhatsApp after a short delay
      setTimeout(() => {
        openWhatsApp(formData)
      }, 1000)
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: t.error,
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl text-balance">{t.formTitle}</CardTitle>
            <CardDescription className="text-lg text-pretty">
              {t.formSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.firstName} *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder={t.firstName}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.lastName} *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder={t.lastName}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">{t.location} *</Label>
                <Input
                  id="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder={t.location}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.phoneNumber} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder={t.phoneNumber}
                />
              </div>

              <div className="space-y-3">
                <Label>{t.workedOnline} *</Label>
                <RadioGroup
                  value={formData.workedOnline}
                  onValueChange={(value) => handleInputChange("workedOnline", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="worked-yes" />
                    <Label htmlFor="worked-yes">{t.workedOnlineYes}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="worked-no" />
                    <Label htmlFor="worked-no">{t.workedOnlineNo}</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">{t.additionalNotes}</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder={t.additionalNotes}
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked) => handleInputChange("privacyConsent", checked as boolean)}
                  required
                />
                <Label htmlFor="privacy" className="text-sm text-pretty leading-relaxed">
                  {t.privacyConsent} *
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="arvea" 
                size="xl" 
                className="w-full text-lg py-6 h-auto font-bold btn-pulse-glow btn-wave btn-bounce-hover" 
                disabled={isSubmitting}
              >
                {isSubmitting ? t.submitting : t.getStartedNow}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
