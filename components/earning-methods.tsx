import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EarningMethods() {
  const methods = [
    {
      title: "Freelance Services",
      description: "Offer your skills in writing, design, programming, or consulting to clients worldwide.",
      features: ["Flexible Schedule", "Global Clients", "Skill Development"],
      difficulty: "Beginner",
    },
    {
      title: "Digital Products",
      description: "Create and sell online courses, ebooks, templates, or digital tools to passive income.",
      features: ["Passive Income", "Scalable Business", "Creative Freedom"],
      difficulty: "Intermediate",
    },
    {
      title: "Affiliate Marketing",
      description: "Promote products and services you believe in and earn commissions on every sale.",
      features: ["No Inventory", "Performance Based", "Multiple Streams"],
      difficulty: "Advanced",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <section id="earning-methods" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Three Proven Ways to Earn Online
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose the path that matches your skills and goals. Each method has helped our members achieve financial
            independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <Card key={index} className="relative h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-start mb-2">
                  <Badge className={getDifficultyColor(method.difficulty)}>{method.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl text-balance">{method.title}</CardTitle>
                <CardDescription className="text-pretty">{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-1">
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
