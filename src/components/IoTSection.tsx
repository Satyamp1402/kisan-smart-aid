import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iotImage from "@/assets/iot-farming.jpg";

const iotFeatures = [
  {
    title: "Smartphone as Sensor",
    description: "Transform your phone into a powerful agricultural sensor using camera and microphone to assess soil conditions and detect pest sounds.",
    icon: "📱",
    capabilities: ["Soil moisture detection", "Pest sound analysis", "Plant health scanning", "Weather monitoring"]
  },
  {
    title: "DIY Sensor Network",
    description: "Build affordable moisture and pH sensors with our step-by-step guides using easily available materials.",
    icon: "🔧",
    capabilities: ["Moisture sensors", "pH monitoring", "Temperature tracking", "Light level measurement"]
  },
  {
    title: "Community Data Sharing",
    description: "Share sensor data with neighboring farmers for better regional insights and collaborative farming decisions.",
    icon: "🌐",
    capabilities: ["Regional data sharing", "Collaborative insights", "Community alerts", "Best practice sharing"]
  },
  {
    title: "Satellite Monitoring",
    description: "Monitor crop health without field visits using free satellite imagery from Sentinel and Landsat satellites.",
    icon: "🛰️",
    capabilities: ["Crop health monitoring", "Irrigation issue detection", "Disease outbreak alerts", "Field health reports"]
  }
];

const arFeatures = [
  {
    title: "Soil Nutrient Visualization",
    description: "Color-coded overlay showing nutrient levels across your field",
    icon: "🎨"
  },
  {
    title: "Growth Predictions",
    description: "Visual projections of crop growth and harvest timing",
    icon: "📈"
  },
  {
    title: "Pest Risk Zones",
    description: "Identify high-risk areas for pest infestations",
    icon: "🐛"
  },
  {
    title: "Optimal Planting Patterns",
    description: "AR guidance for efficient seed placement",
    icon: "🌱"
  }
];

export const IoTSection = () => {
  return (
    <section className="py-20 bg-earth-brown-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            IoT-Lite Sensor{" "}
            <span className="bg-gradient-earth bg-clip-text text-transparent">
              Network
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform any smartphone into a powerful agricultural sensor and build a community-driven monitoring network.
          </p>
        </div>

        {/* Hero Feature */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-strong bg-card border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Your Smartphone = Smart Sensor
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  No expensive equipment needed. Use your existing smartphone to monitor crop health, soil conditions, and pest activity.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-foreground">
                    <span className="text-2xl mr-3">📷</span>
                    <span>Camera-based soil moisture and plant health analysis</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <span className="text-2xl mr-3">🎤</span>
                    <span>Audio detection of pest sounds and crop stress</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <span className="text-2xl mr-3">🌡️</span>
                    <span>Environmental monitoring using built-in sensors</span>
                  </div>
                </div>
                <Button variant="earth" size="lg">Start Monitoring</Button>
              </div>
              <div className="relative">
                <img 
                  src={iotImage} 
                  alt="IoT Farming Technology" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* IoT Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {iotFeatures.map((feature, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:transform hover:scale-105 bg-card border-0 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, capIndex) => (
                  <li key={capIndex} className="flex items-center text-xs text-foreground">
                    <span className="w-1.5 h-1.5 bg-earth-brown rounded-full mr-2"></span>
                    {capability}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Augmented Reality Section */}
        <div className="bg-gradient-to-r from-earth-brown/10 to-harvest-gold/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Augmented Reality Field Scanner
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Point your phone at your field and see real-time overlays with crucial farming data and insights.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {arFeatures.map((feature, index) => (
              <div key={index} className="text-center animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="harvest" size="lg">Try AR Scanner</Button>
          </div>
        </div>

        {/* Water Table Predictor */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 shadow-strong bg-card border-0">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">💧</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Regional Water Table Predictor
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Predict water shortages, recommend water-efficient crops, and assess bore well success probability before investment.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    Village-level water shortage predictions
                  </li>
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    Water-efficient crop recommendations
                  </li>
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    Bore well success probability assessment
                  </li>
                  <li className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    Community water sharing recommendations
                  </li>
                </ul>
                <Button variant="sky" size="lg">Check Water Availability</Button>
              </div>
              <div className="bg-gradient-sky rounded-lg p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Water Crisis Statistics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Groundwater depletion rate:</span>
                    <span className="font-bold">2-3 meters/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bore well failure rate:</span>
                    <span className="font-bold">60-70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average bore well cost:</span>
                    <span className="font-bold">₹2-5 lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Water-efficient crops yield:</span>
                    <span className="font-bold">+40% profit</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};