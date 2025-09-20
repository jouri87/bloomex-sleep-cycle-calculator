import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SleepCalculator from "@/components/SleepCalculator";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SleepCalculator />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
