import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-foreground">SmartFarm AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">Marketplace</a>
            <a href="#financial" className="text-foreground hover:text-primary transition-colors">Financing</a>
            <a href="#iot" className="text-foreground hover:text-primary transition-colors">IoT Solutions</a>
            <a href="#tips" className="text-foreground hover:text-primary transition-colors">Pro Tips</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">Marketplace</a>
              <a href="#financial" className="text-foreground hover:text-primary transition-colors">Financing</a>
              <a href="#iot" className="text-foreground hover:text-primary transition-colors">IoT Solutions</a>
              <a href="#tips" className="text-foreground hover:text-primary transition-colors">Pro Tips</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button variant="hero">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};