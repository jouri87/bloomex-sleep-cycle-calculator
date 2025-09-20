import { Moon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Moon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Bloomex
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('calculator')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Calculator
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('blog')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </button>
          <a 
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;