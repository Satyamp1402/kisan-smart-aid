import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const voiceFeatures = [
  {
    title: "WhatsApp Integration",
    description: "Works on any feature phone with WhatsApp. No smartphone required for basic farming advice.",
    icon: "💬",
    examples: ["Ask: 'My tomato leaves are yellow'", "Get: 'Likely nitrogen deficiency. Apply urea fertilizer'"]
  },
  {
    title: "Local Dialect Support",
    description: "Voice queries in Hindi, Punjabi, Telugu, Tamil, and 15+ regional languages for better accessibility.",
    icon: "🗣️",
    examples: ["Hindi: 'Mere khet mein kya lagau?'", "English: 'What should I plant in my field?'"]
  },
  {
    title: "Offline Capability",
    description: "Cached common problems and solutions work even without internet connectivity in remote areas.",
    icon: "📱",
    examples: ["Common pest solutions", "Basic fertilizer recommendations"]
  },
  {
    title: "Smart Contracts",
    description: "Fair trade payment automation ensures farmers get paid fairly and on time for their produce.",
    icon: "🤝",
    examples: ["Automated payments on delivery", "Price protection contracts"]
  }
];

const voiceCommands = [
  {
    command: "Crop Health Check",
    example: "My wheat crop looks pale",
    response: "Sounds like iron deficiency. Apply iron sulfate and check soil pH",
    icon: "🌾"
  },
  {
    command: "Weather Inquiry",
    example: "Will it rain this week?",
    response: "60% chance of rain on Thursday. Delay fertilizer application",
    icon: "🌧️"
  },
  {
    command: "Market Prices",
    example: "What's the price of onions today?",
    response: "₹25/kg at Azadpur mandi. Best price in your area",
    icon: "💰"
  },
  {
    command: "Pest Control",
    example: "White flies on my cotton",
    response: "Use yellow sticky traps and neem oil spray. Apply early morning",
    icon: "🐛"
  },
  {
    command: "Fertilizer Advice",
    example: "When to apply DAP fertilizer?",
    response: "Apply DAP during land preparation, 15 days before sowing",
    icon: "🧪"
  },
  {
    command: "Government Schemes",
    example: "PM Kisan payment status",
    response: "Last payment: ₹2000 on 15th March. Next due: 15th July",
    icon: "🏛️"
  }
];

export const VoiceAssistantSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Farming Advisor{" "}
            <span className="bg-gradient-sky bg-clip-text text-transparent">
              Voice Assistant
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant farming advice through WhatsApp and SMS in your local language. Works on any phone, even without internet.
          </p>
        </div>

        {/* Hero Demo */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 shadow-strong bg-card border-0">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">🎤</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Talk to Your AI Farming Expert
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Simply send a voice message or text on WhatsApp and get instant, expert farming advice tailored to your location and crop.
                </p>
                
                <div className="bg-sky-blue/10 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sky-blue font-semibold">You:</span>
                    <span className="ml-2 text-foreground">"मेरे टमाटर के पत्ते पीले हो रहे हैं"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary font-semibold">AI:</span>
                    <span className="ml-2 text-foreground">"नाइट्रोजन की कमी लग रही है। यूरिया खाद डालें और पानी की जांच करें।"</span>
                  </div>
                </div>
                
                <Button variant="sky" size="lg">Try Voice Assistant</Button>
              </div>
              
              <div className="bg-gradient-to-br from-sky-blue/20 to-primary/20 rounded-lg p-8">
                <h4 className="text-xl font-bold text-foreground mb-6">Supported Languages</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Hindi (हिंदी)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Punjabi (ਪੰਜਾਬੀ)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Telugu (తెలుగు)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Tamil (தமிழ்)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Marathi (मराठी)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Gujarati (ગુજરાતી)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Bengali (বাংলা)
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-2"></span>
                    Kannada (ಕನ್ನಡ)
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Voice Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {voiceFeatures.map((feature, index) => (
            <Card key={index} className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:transform hover:scale-105 bg-card border-0 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="text-xs text-foreground bg-primary/10 px-2 py-1 rounded">
                    {example}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Voice Commands Examples */}
        <div className="bg-gradient-to-r from-primary/10 to-sky-blue/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Common Voice Commands
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some examples of what you can ask our AI farming assistant. Just speak naturally!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voiceCommands.map((command, index) => (
              <Card key={index} className="p-6 shadow-medium bg-card border-0 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl mb-3">{command.icon}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{command.command}</h4>
                <div className="bg-muted p-3 rounded-lg mb-3">
                  <div className="text-sm text-muted-foreground mb-1">You ask:</div>
                  <div className="text-sm font-medium text-foreground">"{command.example}"</div>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">AI responds:</div>
                  <div className="text-sm font-medium text-foreground">"{command.response}"</div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="sky" size="lg" className="mr-4">Start WhatsApp Chat</Button>
            <Button variant="outline" size="lg">SMS Setup</Button>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="mt-16">
          <Card className="p-8 text-center shadow-medium bg-card border-0">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">24/7 Farming Support</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get instant answers to your farming questions anytime, anywhere. Our AI assistant is always available to help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📞</span>
                <span className="text-foreground">Voice calls supported</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📱</span>
                <span className="text-foreground">Works on any phone</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">🌐</span>
                <span className="text-foreground">Offline capability</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};