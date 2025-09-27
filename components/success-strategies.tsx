"use client"

import { useTranslation } from "@/lib/translation-context"

export function SuccessStrategies() {
  const { t } = useTranslation()
  
  const strategies = [
    {
      title: t.startSmallThinkBig,
      description: t.startSmallDescription,
    },
    {
      title: t.focusOnValue,
      description: t.focusOnValueDescription,
    },
    {
      title: t.buildPersonalBrand,
      description: t.buildPersonalBrandDescription,
    },
    {
      title: t.diversifyIncome,
      description: t.diversifyIncomeDescription,
    },
    {
      title: t.investInLearning,
      description: t.investInLearningDescription,
    },
    {
      title: t.networkCollaborate,
      description: t.networkCollaborateDescription,
    },
  ]

  return (
    <section id="success-strategies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.successStrategiesTitle}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {t.successStrategiesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-card-foreground text-balance">{strategy.title}</h3>
                <p className="text-muted-foreground text-pretty">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
