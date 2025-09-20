import { Moon } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-muted/30 py-12">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Moon className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Bloomex
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Free sleep calculator to help you find your perfect bedtime and wake-up times based on natural sleep cycles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#calculator" className="hover:text-primary transition-colors">
                    Sleep Calculator
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-primary transition-colors">
                    Sleep Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="font-semibold mb-4">Contact & Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="mailto:hello@bloomex.site" className="hover:text-primary transition-colors">
                    hello@bloomex.site
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-6 text-center">
            <p className="text-muted-foreground">
              Bloomex Sleep Calculator – Free tool to improve your sleep. © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;