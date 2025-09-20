import { Card, CardContent } from "@/components/ui/card";
import { Clock, Brain, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding sleep cycles is the key to waking up refreshed and energized.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Sleep Cycle Card */}
            <Card className="border-2 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">90-Minute Cycles</h3>
                <p className="text-muted-foreground text-sm">
                  A complete sleep cycle lasts about 90 minutes, including light sleep, deep sleep, and REM phases.
                </p>
              </CardContent>
            </Card>

            {/* Timing Card */}
            <Card className="border-2 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Perfect Timing</h3>
                <p className="text-muted-foreground text-sm">
                  Waking up at the end of a cycle (light sleep phase) helps you feel more refreshed and alert.
                </p>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="border-2 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Better Energy</h3>
                <p className="text-muted-foreground text-sm">
                  Following these recommendations can help you wake up naturally and maintain energy throughout the day.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="prose prose-gray max-w-none">
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-4">The Science Behind Sleep Cycles</h3>
              <p className="text-muted-foreground mb-4">
                During each 90-minute cycle, your brain moves through different stages of sleep. The cycle begins with light sleep, 
                progresses to deep sleep (when your body repairs and grows), and ends with REM sleep (when most dreaming occurs).
              </p>
              <p className="text-muted-foreground">
                Waking up during deep sleep can leave you feeling groggy and disoriented, even after a full night's rest. 
                Our calculator helps you time your sleep to wake up during the lighter phases, making mornings easier and more refreshing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;