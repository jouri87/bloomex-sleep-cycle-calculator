import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const HeroSection = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-secondary/30" />
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-primary/20 animate-pulse">
        <Moon className="h-8 w-8" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/20 animate-pulse delay-1000">
        <Sun className="h-6 w-6" />
      </div>
      
      <div className="container relative px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Bloomex Sleep Calculator
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find your perfect bedtime and wake-up time for maximum energy and productivity. 
            Based on natural 90-minute sleep cycles for optimal rest.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={scrollToCalculator}
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Calculating
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;