import { ArveaHero } from "@/components/arvea-hero"
import { EarningMethods } from "@/components/earning-methods"
import { SuccessStrategies } from "@/components/success-strategies"
import { LeadCaptureForm } from "@/components/lead-capture-form"

export default function ArveaLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArveaHero />
      <EarningMethods />
      <SuccessStrategies />
      <LeadCaptureForm />
    </main>
  )
}
