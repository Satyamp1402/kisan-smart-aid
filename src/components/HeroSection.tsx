import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farming.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 via-earth-brown/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-grow">
            Revolutionize Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Farming
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-grow">
            AI-powered solutions for crop disease detection, yield prediction, weather integration, 
            and smart farming techniques. Transform your farm with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-grow">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Smart Farming
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-white">
            <div className="text-center lg:text-left animate-float">
              <div className="text-3xl md:text-4xl font-bold text-harvest-gold">10,000+</div>
              <div className="text-white/80">Farmers Connected</div>
            </div>
            <div className="text-center lg:text-left animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl md:text-4xl font-bold text-harvest-gold">95%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center lg:text-left animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-harvest-gold">30%</div>
              <div className="text-white/80">Yield Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};