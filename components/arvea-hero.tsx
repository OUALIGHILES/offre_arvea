"use client"

import { Button } from "@/components/ui/button"
import { ArveaLogo } from "@/components/arvea-logo"

export function ArveaHero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
          <ArveaLogo size="xl" className="mb-6" />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 text-balance">
            Unlock Your Online Earning Potential with <span className="text-gray-900 font-black">ARVEA</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Discover proven strategies to generate income online. Join thousands who have transformed their financial
            future through digital opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="arvea" 
            size="xl" 
            className="text-lg font-bold px-8 py-6 h-auto min-w-[200px] btn-pulse-glow btn-wave btn-bounce-hover"
            onClick={scrollToForm}
          >
            Start Your Journey Today
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="text-lg font-bold px-8 py-6 h-auto min-w-[200px] border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white btn-glow-effect btn-rotate-hover"
            onClick={() => document.getElementById("earning-methods")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-800">5000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-800">$2M+</div>
            <div className="text-gray-600">Total Earnings</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-800">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
