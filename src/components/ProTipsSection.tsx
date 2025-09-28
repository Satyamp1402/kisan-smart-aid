import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const proTips = [
  {
    category: "Precision Agriculture",
    icon: "🎯",
    tips: [
      {
        title: "Variable Rate Application",
        description: "Apply fertilizers and pesticides based on specific field zones rather than uniform application. This can reduce input costs by 15-30% while improving yields.",
        technique: "Use soil testing every 2.5 acres and create application maps"
      },
      {
        title: "GPS-Guided Farming",
        description: "Use GPS technology for precise planting, fertilizing, and harvesting. Reduces overlap and ensures optimal spacing.",
        technique: "Implement auto-steer systems for consistent row spacing"
      }
    ]
  },
  {
    category: "Soil Health Management",
    icon: "🌱",
    tips: [
      {
        title: "Cover Crop Integration",
        description: "Plant cover crops during off-season to prevent erosion, improve soil structure, and add organic matter. Can increase soil organic matter by 1% in 5 years.",
        technique: "Use legumes like clover to naturally fix nitrogen"
      },
      {
        title: "No-Till Farming",
        description: "Minimize soil disturbance to preserve soil structure, reduce erosion, and improve water retention by up to 25%.",
        technique: "Use specialized no-till planters and herbicide management"
      }
    ]
  },
  {
    category: "Water Management",
    icon: "💧",
    tips: [
      {
        title: "Drip Irrigation Systems",
        description: "Install drip irrigation to deliver water directly to root zones. Can reduce water usage by 30-50% while increasing yields by 20-40%.",
        technique: "Use pressure-compensating emitters for uniform water distribution"
      },
      {
        title: "Rainwater Harvesting",
        description: "Collect and store rainwater during monsoons for use during dry periods. A 1-acre farm can collect 27,000 gallons from 1 inch of rain.",
        technique: "Build farm ponds and check dams for maximum water retention"
      }
    ]
  },
  {
    category: "Integrated Pest Management",
    icon: "🐛",
    tips: [
      {
        title: "Beneficial Insect Habitat",
        description: "Create habitats for beneficial insects that naturally control pests. Can reduce pesticide use by 40-60%.",
        technique: "Plant flowering borders and maintain beetle banks"
      },
      {
        title: "Pheromone Traps",
        description: "Use species-specific pheromone traps to monitor and control pest populations without harmful chemicals.",
        technique: "Deploy traps at specific timings based on pest life cycles"
      }
    ]
  },
  {
    category: "Digital Agriculture",
    icon: "📱",
    tips: [
      {
        title: "Drone-Based Monitoring",
        description: "Use drones for crop health monitoring, pest detection, and yield estimation. Can cover 100 acres in 2 hours with detailed analysis.",
        technique: "Use multispectral cameras for NDVI analysis"
      },
      {
        title: "Farm Management Software",
        description: "Track field operations, input costs, and yields digitally. Farmers using digital records show 12% higher profits on average.",
        technique: "Integrate weather data with planting and harvest decisions"
      }
    ]
  },
  {
    category: "Climate-Smart Practices",
    icon: "🌡️",
    tips: [
      {
        title: "Crop Diversification",
        description: "Grow multiple crop varieties to spread risk and improve soil health. Mixed cropping can increase overall farm income by 25%.",
        technique: "Use companion planting and intercropping systems"
      },
      {
        title: "Agroforestry",
        description: "Integrate trees with crops to improve microclimate, prevent erosion, and provide additional income sources.",
        technique: "Plant fruit trees on field boundaries and windbreaks"
      }
    ]
  }
];

const modernTechniques = [
  {
    title: "Vertical Farming",
    description: "Grow crops in vertically stacked layers for maximum space efficiency",
    benefit: "10x more yield per square foot",
    icon: "🏢"
  },
  {
    title: "Hydroponics",
    description: "Soil-less cultivation using nutrient-rich water solutions",
    benefit: "90% less water usage",
    icon: "💧"
  },
  {
    title: "Blockchain Traceability",
    description: "Track crops from farm to fork for premium pricing",
    benefit: "15-30% price premium",
    icon: "🔗"
  },
  {
    title: "AI-Powered Analytics",
    description: "Machine learning for predictive farming decisions",
    benefit: "20% yield increase",
    icon: "🤖"
  }
];

export const ProTipsSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pro Tips &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Techniques
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn cutting-edge agricultural practices from successful farmers and agricultural experts worldwide.
          </p>
        </div>

        {/* Pro Tips Categories */}
        <div className="space-y-12 mb-20">
          {proTips.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-grow" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.tips.map((tip, tipIndex) => (
                  <Card key={tipIndex} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 bg-card border-0">
                    <h4 className="text-lg font-bold text-foreground mb-3">{tip.title}</h4>
                    <p className="text-muted-foreground mb-4">{tip.description}</p>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-primary">💡 Technique: </span>
                      <span className="text-sm text-foreground">{tip.technique}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modern Techniques */}
        <div className="bg-gradient-to-r from-primary/10 to-harvest-gold/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Next-Generation Farming Techniques
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore revolutionary farming methods that are transforming agriculture globally.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {modernTechniques.map((technique, index) => (
              <Card key={index} className="p-6 text-center shadow-medium bg-card border-0 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{technique.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-3">{technique.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{technique.description}</p>
                <div className="bg-harvest-gold/20 px-3 py-2 rounded-md">
                  <span className="text-sm font-semibold text-harvest-gold">{technique.benefit}</span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg">Explore Advanced Techniques</Button>
          </div>
        </div>

        {/* Weekly Tips Subscription */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 shadow-strong bg-card border-0 text-center">
            <div className="text-6xl mb-4">📧</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Weekly Pro Tips Newsletter
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized farming tips, weather updates, and market insights delivered to your WhatsApp every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button variant="hero" size="lg" className="flex-1">Subscribe via WhatsApp</Button>
              <Button variant="outline" size="lg" className="flex-1">Subscribe via SMS</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🌱</span>
                <span className="text-sm text-muted-foreground">Weekly crop care tips</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🌤️</span>
                <span className="text-sm text-muted-foreground">Weather alerts & forecasts</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">💰</span>
                <span className="text-sm text-muted-foreground">Market price updates</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};