import { Card, CardContent } from "@/components/ui/card";
import { Moon, Zap, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Moon,
      title: "Better Rest",
      description: "Wake up naturally at the end of sleep cycles for deeper, more restorative sleep quality.",
      bgColor: "bg-benefit-rest"
    },
    {
      icon: Zap,
      title: "More Energy", 
      description: "Start your day refreshed and energized by avoiding the grogginess of interrupted deep sleep.",
      bgColor: "bg-benefit-energy"
    },
    {
      icon: Target,
      title: "Better Focus",
      description: "Improve cognitive performance and concentration throughout the day with optimized sleep timing.",
      bgColor: "bg-benefit-focus"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Use a Sleep Calculator?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of optimizing your sleep schedule with science-backed timing.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 border-border/50 bg-card hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;