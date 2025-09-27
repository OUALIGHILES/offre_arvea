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

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const openWhatsApp = (formData: FormData) => {
    const message = encodeURIComponent(
      `🟢 NOUVEAU LEAD ARVEA 🟢

👤 Nom: ${formData.firstName} ${formData.lastName}
📍 Localisation: ${formData.location}
📞 Téléphone: ${formData.phone}
💻 Expérience en ligne: ${formData.workedOnline === "yes" ? "Oui" : "Non"}
📝 Notes: ${formData.notes || "Aucune note"}

✅ Formulaire soumis avec succès sur le site Arvea
🕐 Date: ${new Date().toLocaleString('fr-FR')}

Merci de contacter ce prospect rapidement !`
    )
    const whatsappUrl = `https://wa.me/213660839370?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.privacyConsent) {
      toast({
        title: "Privacy Consent Required",
        description: "Please accept the privacy policy to continue.",
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
        title: "Success!",
        description: "Your information has been submitted successfully. Opening WhatsApp...",
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
        title: "Error",
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
            <CardTitle className="text-2xl sm:text-3xl text-balance">Ready to Start Your Online Journey?</CardTitle>
            <CardDescription className="text-lg text-pretty">
              Fill out the form below and we'll connect you with the best opportunities for your situation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="City, Country"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1234567890"
                />
              </div>

              <div className="space-y-3">
                <Label>Have you worked online before? *</Label>
                <RadioGroup
                  value={formData.workedOnline}
                  onValueChange={(value) => handleInputChange("workedOnline", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="worked-yes" />
                    <Label htmlFor="worked-yes">Yes, I have experience working online</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="worked-no" />
                    <Label htmlFor="worked-no">No, I'm new to online work</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Tell us about your goals, skills, or any questions you have..."
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
                  I consent to the collection and processing of my personal data for the purpose of receiving
                  information about Arvea job opportunities. I understand I can withdraw this consent at any time. *
                </Label>
              </div>

              <Button 
                type="submit" 
                variant="arvea" 
                size="xl" 
                className="w-full text-lg py-6 h-auto font-bold btn-pulse-glow btn-wave btn-bounce-hover" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Started Now"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
