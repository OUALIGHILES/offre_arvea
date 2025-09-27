export function SuccessStrategies() {
  const strategies = [
    {
      title: "Start Small, Think Big",
      description: "Begin with manageable projects to build confidence and experience before scaling up.",
    },
    {
      title: "Focus on Value Creation",
      description: "Always prioritize delivering genuine value to your clients or customers for long-term success.",
    },
    {
      title: "Build Your Personal Brand",
      description: "Establish credibility and trust through consistent quality work and professional communication.",
    },
    {
      title: "Diversify Your Income Streams",
      description: "Don't rely on a single source - combine multiple methods for stable, growing income.",
    },
    {
      title: "Invest in Continuous Learning",
      description: "Stay updated with industry trends and continuously improve your skills and knowledge.",
    },
    {
      title: "Network and Collaborate",
      description: "Build relationships with other professionals and potential clients in your field.",
    },
  ]

  return (
    <section id="success-strategies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Strategies to Succeed Online
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Follow these proven strategies that our most successful members use to maximize their online earnings.
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
