import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiDetectionImage from "@/assets/ai-detection.jpg";

const coreFeatures = [
  {
    title: "AI Crop Disease Detection",
    description: "Upload photos for instant disease identification with treatment recommendations and severity assessment.",
    icon: "🔬",
    features: ["Real-time leaf analysis", "Treatment recommendations", "Severity assessment", "Cost-benefit analysis"]
  },
  {
    title: "Weather Integration",
    description: "Hyper-local climate modeling with 100m resolution forecasts and extreme weather alerts.",
    icon: "🌤️",
    features: ["Micro-weather prediction", "Extreme weather alerts", "Climate adaptation planning", "Seasonal forecasting"]
  },
  {
    title: "Crop Yield Prediction",
    description: "AI-powered yield forecasting based on soil conditions, weather patterns, and historical data.",
    icon: "📊",
    features: ["Predictive analytics", "Soil analysis", "Historical data insights", "Harvest timing optimization"]
  },
  {
    title: "Smart Recommendations",
    description: "Personalized guidance for irrigation, fertilization, and crop management strategies.",
    icon: "💡",
    features: ["Irrigation scheduling", "Fertilization plans", "Crop rotation advice", "Resource optimization"]
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Core Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Farming
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge AI and IoT technology to maximize your crop yields and minimize risks.
          </p>
        </div>

        {/* Hero Feature */}
        <div className="mb-20">
          <Card className="overflow-hidden shadow-strong bg-card border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  AI-Powered Crop Disease Detection
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Simply upload a photo of your crop leaves and get instant AI analysis with:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Real-time disease identification with 95% accuracy
                  </li>
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Specific treatment recommendations for your region
                  </li>
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Severity assessment and spread prediction
                  </li>
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Cost-benefit analysis for treatment options
                  </li>
                </ul>
                <Button variant="hero" size="lg">Try Disease Detection</Button>
              </div>
              <div className="relative">
                <img 
                  src={aiDetectionImage} 
                  alt="AI Crop Disease Detection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:transform hover:scale-105 bg-card border-0 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};