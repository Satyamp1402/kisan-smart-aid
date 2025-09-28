import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import marketplaceImage from "@/assets/marketplace.jpg";

const marketplaceFeatures = [
  {
    title: "Price Prediction",
    description: "AI-powered crop price forecasting at harvest time based on regional supply and demand patterns.",
    icon: "📈",
    color: "sky"
  },
  {
    title: "Optimal Selling Timing",
    description: "Get recommendations on when to sell your crops for maximum profit margins.",
    icon: "⏰",
    color: "harvest"
  },
  {
    title: "Buyer Connection",
    description: "Connect directly with bulk buyers, bypassing middlemen for better prices.",
    icon: "🤝",
    color: "primary"
  },
  {
    title: "Cooperative Farming",
    description: "Find nearby farmers to collaborate with for better pricing power and shared resources.",
    icon: "👥",
    color: "earth"
  }
];

const uniqueFeatures = [
  {
    title: "Mandi Price Predictor + Route Optimizer",
    description: "Predict which mandi will give the best price and optimize your travel route. Get instant WhatsApp alerts: 'Go to XYZ mandi on Tuesday for ₹2400/quintal'",
    savings: "10-20% income boost",
    icon: "🚚"
  },
  {
    title: "PM-KISAN & Subsidy Alert System",
    description: "Never miss government scheme deadlines. Get SMS alerts for fertilizer subsidies, insurance, and loan opportunities.",
    savings: "₹50,000+ in subsidies",
    icon: "🏛️"
  },
  {
    title: "Smart Credit Card Optimizer",
    description: "WhatsApp bot calculates optimal KCC usage: 'Buy seeds now or wait 2 weeks?' Save thousands in interest payments.",
    savings: "₹15,000+ interest savings",
    icon: "💳"
  }
];

export const MarketplaceSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Community Marketplace{" "}
            <span className="bg-gradient-harvest bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maximize your profits with AI-driven market insights and direct buyer connections.
          </p>
        </div>

        {/* Hero Feature */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-strong bg-card border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative order-2 lg:order-1">
                <img 
                  src={marketplaceImage} 
                  alt="Community Marketplace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-harvest-gold/20 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                <div className="text-6xl mb-4">🌾</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Smart Marketplace Connections
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Connect with buyers, predict prices, and optimize your selling strategy with our AI-powered marketplace.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-foreground">
                    <span className="text-2xl mr-3">📊</span>
                    <span>Real-time price tracking across 500+ mandis</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <span className="text-2xl mr-3">🎯</span>
                    <span>Direct buyer connections with verified businesses</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <span className="text-2xl mr-3">🚀</span>
                    <span>Average 25% increase in selling price</span>
                  </div>
                </div>
                <Button variant="harvest" size="lg">Explore Marketplace</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Marketplace Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketplaceFeatures.map((feature, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:transform hover:scale-105 bg-card border-0 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Unique Game-Changing Features */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Game-Changing Unique Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="p-6 shadow-medium bg-card border-0 hover:shadow-strong transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                <div className="bg-harvest-gold/10 px-3 py-2 rounded-md">
                  <span className="text-sm font-semibold text-harvest-gold">💰 {feature.savings}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};