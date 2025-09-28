import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-crop-green-light to-harvest-gold">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join thousands of farmers who are already using AI-powered solutions to increase yields, 
            reduce costs, and secure better prices for their crops.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <Card className="p-6 bg-white/10 border-white/20 text-center backdrop-blur-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Start Free</h3>
              <p className="text-white/80 text-sm">Begin with our basic features at no cost</p>
            </Card>
            <Card className="p-6 bg-white/10 border-white/20 text-center backdrop-blur-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Mobile First</h3>
              <p className="text-white/80 text-sm">Works perfectly on any smartphone</p>
            </Card>
            <Card className="p-6 bg-white/10 border-white/20 text-center backdrop-blur-sm">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-white/80 text-sm">30% average yield increase for our users</p>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 border-white font-semibold"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Watch Demo Video
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-12">
            <h3 className="text-2xl font-bold mb-8">Choose Your Access Method</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Button variant="outline" className="flex flex-col items-center p-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                <span className="text-3xl mb-2">💬</span>
                <span className="text-sm">WhatsApp</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center p-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                <span className="text-3xl mb-2">📱</span>
                <span className="text-sm">Mobile App</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center p-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                <span className="text-3xl mb-2">💻</span>
                <span className="text-sm">Web Portal</span>
              </Button>
              <Button variant="outline" className="flex flex-col items-center p-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                <span className="text-3xl mb-2">📞</span>
                <span className="text-sm">Voice Calls</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};