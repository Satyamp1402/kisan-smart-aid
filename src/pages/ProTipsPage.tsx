import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Leaf, 
  Droplets, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Award,
  Video,
  Download,
  Share,
  Star,
  ChevronRight,
  PlayCircle,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export const ProTipsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("modern");

  const tipCategories = {
    modern: {
      title: "Modern Techniques",
      icon: TrendingUp,
      tips: [
        {
          title: "Precision Agriculture with GPS",
          level: "Advanced",
          time: "2 hrs",
          description: "Use GPS-guided tractors for precise seed placement and fertilizer application",
          benefits: ["30% increase in yield", "25% reduction in seed waste", "20% savings on fertilizer"],
          steps: [
            "Install GPS system on tractor",
            "Map your field boundaries using smartphone app", 
            "Set optimal seed spacing (wheat: 2cm, rice: 15cm)",
            "Program fertilizer zones based on soil test results"
          ],
          cost: "₹15,000-25,000",
          roi: "200% within 2 seasons"
        },
        {
          title: "Drip Irrigation with Smart Timers", 
          level: "Beginner",
          time: "4 hrs",
          description: "Automated drip irrigation system to save 60% water",
          benefits: ["60% water savings", "Better crop health", "Reduced labor cost"],
          steps: [
            "Install main water line from source",
            "Lay drip pipes at 30cm intervals",
            "Connect smart timer (₹2,000-3,000)",
            "Set watering schedule: Early morning 6 AM, Evening 6 PM"
          ],
          cost: "₹8,000-12,000 per acre",
          roi: "150% in first year"
        },
        {
          title: "Mulching with Organic Materials",
          level: "Beginner", 
          time: "3 hrs",
          description: "Use crop residue and organic matter to improve soil health",
          benefits: ["Soil moisture retention", "Weed control", "Temperature regulation"],
          steps: [
            "Collect crop residue (wheat straw, rice husk)",
            "Spread 3-4 inch layer around plants",
            "Keep 6 inches away from plant stems",
            "Renew every 2-3 months"
          ],
          cost: "₹500-1,000 per acre",
          roi: "300% through water savings"
        }
      ]
    },
    organic: {
      title: "Organic Farming",
      icon: Leaf,
      tips: [
        {
          title: "Bio-fertilizer Preparation",
          level: "Intermediate",
          time: "30 days",
          description: "Make your own organic fertilizer using kitchen waste and cow dung",
          benefits: ["Chemical-free crops", "Improved soil health", "Cost savings"],
          steps: [
            "Mix 10kg cow dung + 5kg kitchen waste",
            "Add 1kg neem cake and 500g jaggery",
            "Cover and ferment for 21-30 days",
            "Apply 200-300kg per acre"
          ],
          cost: "₹200-300 per acre",
          roi: "400% compared to chemical fertilizers"
        },
        {
          title: "Natural Pest Control Solutions",
          level: "Beginner",
          time: "2 hrs",
          description: "Eco-friendly pest control using neem and turmeric",
          benefits: ["No chemical residue", "Safe for beneficial insects", "Better crop quality"],
          steps: [
            "Boil 1kg neem leaves in 10L water",
            "Add 100g turmeric powder",
            "Strain and add 50ml liquid soap",
            "Spray early morning or evening"
          ],
          cost: "₹100-200 per acre",
          roi: "250% through premium organic pricing"
        }
      ]
    },
    water: {
      title: "Water Management", 
      icon: Droplets,
      tips: [
        {
          title: "Rainwater Harvesting System",
          level: "Intermediate",
          time: "1 week",
          description: "Collect and store rainwater for dry season irrigation",
          benefits: ["Free water source", "Reduced groundwater dependency", "Better crop security"],
          steps: [
            "Identify collection area (roof, field)",
            "Install gutters and pipes",
            "Build storage tank (10,000L capacity)",
            "Add filtration system"
          ],
          cost: "₹25,000-40,000",
          roi: "300% over 5 years"
        },
        {
          title: "Moisture Sensors for Smart Irrigation",
          level: "Advanced", 
          time: "1 day",
          description: "Use IoT sensors to monitor soil moisture and automate watering",
          benefits: ["Precise water management", "Remote monitoring", "Automated scheduling"],
          steps: [
            "Install soil moisture sensors at root depth",
            "Connect to smartphone app via WiFi",
            "Set moisture thresholds (40% minimum)",
            "Link to automatic irrigation system"
          ],
          cost: "₹5,000-8,000 per sensor",
          roi: "200% through water and labor savings"
        }
      ]
    }
  };

  const weeklyTips = [
    {
      week: "This Week",
      tip: "Check soil moisture levels daily during flowering stage - this is critical for fruit development",
      action: "Use finger test: Insert 2 inches into soil, if dry, irrigate immediately",
      impact: "Can increase fruit size by 25%"
    },
    {
      week: "Next Week", 
      tip: "Apply potassium-rich fertilizer before monsoon - strengthens plant structure",
      action: "Use wood ash or banana peel compost around plant base",
      impact: "Reduces crop damage from strong winds by 40%"
    },
    {
      week: "Month Ahead",
      tip: "Start preparing for post-harvest storage to prevent 20-30% losses",
      action: "Clean storage areas, check for pest infestation, arrange proper ventilation",
      impact: "Saves ₹5,000-10,000 per acre in reduced crop losses"
    }
  ];

  const successStories = [
    {
      name: "राम प्रसाद जी, उत्तर प्रदेश",
      crop: "Wheat",
      improvement: "40% increase in yield",
      technique: "Precision seeding + drip irrigation",
      savings: "₹25,000 per season",
      testimonial: "GPS-guided seeding changed everything. Now I get 35 quintals per acre instead of 25."
    },
    {
      name: "सुनीता देवी, पंजाब", 
      crop: "Rice",
      improvement: "60% water savings",
      technique: "Smart irrigation with sensors",
      savings: "₹15,000 on water + electricity",
      testimonial: "Moisture sensors tell me exactly when to water. No more guesswork!"
    }
  ];

  const currentTips = tipCategories[selectedCategory as keyof typeof tipCategories];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              ← Back to Dashboard
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-earth rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Pro Farming Tips</h1>
                <p className="text-sm text-muted-foreground">Modern techniques to boost your farm productivity</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {weeklyTips.map((tip, index) => (
            <Card key={index} className={`${index === 0 ? 'border-green-200 bg-green-50' : 'bg-white/50'}`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className={index === 0 ? 'text-green-900' : 'text-foreground'}>{tip.week}</span>
                  {index === 0 && <Badge className="bg-green-600">Urgent</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`font-medium mb-2 ${index === 0 ? 'text-green-800' : 'text-foreground'}`}>
                  {tip.tip}
                </p>
                <p className="text-sm text-muted-foreground mb-2">{tip.action}</p>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700">{tip.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(tipCategories).map(([key, category]) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        selectedCategory === key 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-secondary/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Success Stories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {successStories.map((story, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-900 text-sm">{story.name}</div>
                    <div className="text-sm text-green-700 mb-1">{story.improvement} in {story.crop}</div>
                    <div className="text-xs text-green-600">Saved: {story.savings}</div>
                    <p className="text-xs text-green-800 mt-2 italic">"{story.testimonial}"</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <currentTips.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentTips.title}</h2>
                  <p className="text-muted-foreground">{currentTips.tips.length} proven techniques</p>
                </div>
              </div>
            </div>

            {/* Tips Grid */}
            <div className="space-y-6">
              {currentTips.tips.map((tip, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{tip.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={tip.level === 'Beginner' ? 'secondary' : tip.level === 'Intermediate' ? 'default' : 'destructive'}>
                          {tip.level}
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{tip.time}</span>
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-900">✅ Key Benefits:</h4>
                        <ul className="space-y-2">
                          {tip.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-blue-900">Investment:</span>
                            <span className="font-bold text-blue-700">{tip.cost}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-blue-900">ROI:</span>
                            <span className="font-bold text-green-600">{tip.roi}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-900">📋 Step-by-Step:</h4>
                        <ol className="space-y-3">
                          {tip.steps.map((step, sIndex) => (
                            <li key={sIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {sIndex + 1}
                              </div>
                              <span className="text-sm flex-1">{step}</span>
                            </li>
                          ))}
                        </ol>

                        <div className="mt-4 flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Video className="w-4 h-4 mr-2" />
                            Watch Demo
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            PDF Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Need Personalized Advice?</h3>
                <p className="text-green-800 mb-4">
                  Get customized farming recommendations based on your crop, soil, and location
                </p>
                <div className="flex justify-center space-x-4">
                  <Link to="/voice-assistant">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Users className="w-4 h-4 mr-2" />
                      Talk to Expert
                    </Button>
                  </Link>
                  <Link to="/ar-scanner">
                    <Button variant="outline">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      AR Field Analysis
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};