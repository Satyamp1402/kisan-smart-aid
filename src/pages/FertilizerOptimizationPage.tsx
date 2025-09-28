import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf,
  CloudRain,
  Sun,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Target,
  Beaker,
  Calculator,
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  BarChart3,
  Info,
  Lightbulb,
  Bell,
  Eye,
  Download,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

interface FertilizerRecommendation {
  id: string;
  fertilizerType: string;
  nutrientContent: string;
  recommendedAmount: number;
  applicationMethod: string;
  timing: string;
  weatherCondition: string;
  cropStage: string;
  urgency: 'immediate' | 'within_week' | 'delay' | 'monitor';
  reason: string;
  expectedBenefit: string;
  cost: number;
}

interface WeatherImpact {
  date: string;
  weatherCondition: string;
  temperature: number;
  rainfall: number;
  humidity: number;
  recommendation: string;
  impact: 'positive' | 'negative' | 'neutral';
}

interface SoilNutrient {
  nutrient: string;
  currentLevel: number;
  optimalLevel: number;
  status: 'deficient' | 'adequate' | 'excess';
  recommendation: string;
}

interface CropStage {
  stage: string;
  daysFromPlanting: number;
  nutrientNeeds: string[];
  criticalNutrients: string[];
  fertilizerType: string;
  timing: string;
}

export const FertilizerOptimizationPage = () => {
  const [activeTab, setActiveTab] = useState('recommendations');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const fertilizerRecommendations: FertilizerRecommendation[] = [
    {
      id: 'rec-001',
      fertilizerType: 'Urea (46% N)',
      nutrientContent: 'Nitrogen: 46%',
      recommendedAmount: 45,
      applicationMethod: 'Side dressing',
      timing: 'Delay by 3 days',
      weatherCondition: 'Heavy rain expected (15mm)',
      cropStage: 'Tillering stage - Day 35',
      urgency: 'delay',
      reason: 'Heavy rainfall predicted will cause nitrogen leaching. Wait for dry conditions.',
      expectedBenefit: 'Better nutrient retention, 15% higher efficiency',
      cost: 1350
    },
    {
      id: 'rec-002',
      fertilizerType: 'DAP (18-46-0)',
      nutrientContent: 'N: 18%, P₂O₅: 46%',
      recommendedAmount: 30,
      applicationMethod: 'Broadcasting + incorporation',
      timing: 'Apply today (morning)',
      weatherCondition: 'Clear skies, light wind',
      cropStage: 'Pre-flowering - Day 45',
      urgency: 'immediate',
      reason: 'Optimal conditions for phosphorus uptake. Critical growth stage requires phosphorus.',
      expectedBenefit: 'Enhanced root development, better flowering',
      cost: 1200
    },
    {
      id: 'rec-003',
      fertilizerType: 'Potash (60% K₂O)',
      nutrientContent: 'Potassium: 60%',
      recommendedAmount: 25,
      applicationMethod: 'Broadcasting',
      timing: 'Within 5-7 days',
      weatherCondition: 'Stable weather conditions',
      cropStage: 'Grain filling - Day 60',
      urgency: 'within_week',
      reason: 'Potassium needed for grain quality and plant vigor during grain filling.',
      expectedBenefit: 'Improved grain quality, better disease resistance',
      cost: 900
    },
    {
      id: 'rec-004',
      fertilizerType: 'Zinc Sulphate (21% Zn)',
      nutrientContent: 'Zinc: 21%, Sulphur: 10%',
      recommendedAmount: 12,
      applicationMethod: 'Foliar spray',
      timing: 'Monitor soil test results',
      weatherCondition: 'Any suitable weather',
      cropStage: 'Vegetative growth',
      urgency: 'monitor',
      reason: 'Zinc levels borderline. Monitor plant symptoms before application.',
      expectedBenefit: 'Prevents zinc deficiency, better plant metabolism',
      cost: 480
    }
  ];

  const weatherImpacts: WeatherImpact[] = [
    {
      date: '2024-04-15',
      weatherCondition: 'Heavy Rain (15-20mm)',
      temperature: 26,
      rainfall: 18,
      humidity: 85,
      recommendation: 'Delay all fertilizer applications',
      impact: 'negative'
    },
    {
      date: '2024-04-16',
      weatherCondition: 'Overcast, No Rain',
      temperature: 24,
      rainfall: 0,
      humidity: 70,
      recommendation: 'Good day for foliar applications',
      impact: 'positive'
    },
    {
      date: '2024-04-17',
      weatherCondition: 'Sunny, Light Breeze',
      temperature: 28,
      rainfall: 0,
      humidity: 55,
      recommendation: 'Ideal for solid fertilizer application',
      impact: 'positive'
    },
    {
      date: '2024-04-18',
      weatherCondition: 'Very Hot (>35°C)',
      temperature: 36,
      rainfall: 0,
      humidity: 45,
      recommendation: 'Avoid midday applications, apply early morning',
      impact: 'negative'
    }
  ];

  const soilNutrients: SoilNutrient[] = [
    {
      nutrient: 'Nitrogen (N)',
      currentLevel: 240,
      optimalLevel: 280,
      status: 'deficient',
      recommendation: 'Apply 45 kg/ha Urea after rain stops'
    },
    {
      nutrient: 'Phosphorus (P₂O₅)',
      currentLevel: 22,
      optimalLevel: 25,
      status: 'adequate',
      recommendation: 'Light application of DAP recommended'
    },
    {
      nutrient: 'Potassium (K₂O)',
      currentLevel: 180,
      optimalLevel: 200,
      status: 'adequate',
      recommendation: 'Monitor and apply if grain filling is poor'
    },
    {
      nutrient: 'Zinc (Zn)',
      currentLevel: 0.8,
      optimalLevel: 1.2,
      status: 'deficient',
      recommendation: 'Foliar application of Zinc Sulphate needed'
    },
    {
      nutrient: 'Sulphur (S)',
      currentLevel: 12,
      optimalLevel: 15,
      status: 'adequate',
      recommendation: 'Include in regular fertilizer program'
    }
  ];

  const cropStages: CropStage[] = [
    {
      stage: 'Vegetative Growth (0-30 days)',
      daysFromPlanting: 25,
      nutrientNeeds: ['High N', 'Medium P', 'Low K'],
      criticalNutrients: ['Nitrogen', 'Phosphorus'],
      fertilizerType: 'NPK (20-20-0) or Urea + DAP',
      timing: 'Every 15 days'
    },
    {
      stage: 'Tillering (30-50 days)',
      daysFromPlanting: 35,
      nutrientNeeds: ['Very High N', 'Medium P', 'Medium K'],
      criticalNutrients: ['Nitrogen'],
      fertilizerType: 'Urea (46-0-0)',
      timing: 'Split application - Day 30 & 45'
    },
    {
      stage: 'Stem Elongation (50-65 days)',
      daysFromPlanting: 55,
      nutrientNeeds: ['Medium N', 'High P', 'High K'],
      criticalNutrients: ['Phosphorus', 'Potassium'],
      fertilizerType: 'NPK (12-32-16)',
      timing: 'Single application at stage start'
    },
    {
      stage: 'Flowering & Grain Filling (65+ days)',
      daysFromPlanting: 70,
      nutrientNeeds: ['Low N', 'Medium P', 'Very High K'],
      criticalNutrients: ['Potassium', 'Micronutrients'],
      fertilizerType: 'Potash + Micronutrient spray',
      timing: 'Weekly foliar sprays'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'bg-red-100 text-red-800 border-red-300';
      case 'within_week': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'delay': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'monitor': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      case 'neutral': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deficient': return 'text-red-600';
      case 'adequate': return 'text-green-600';
      case 'excess': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm shadow-medium border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                ← Back to Dashboard
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Fertilizer Optimization</h1>
                  <p className="text-sm text-muted-foreground">AI-powered fertilizer recommendations based on weather and crop needs</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <Beaker className="w-3 h-3 mr-1" />
                Weather-Smart
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">1</div>
              <div className="text-sm text-muted-foreground">Immediate Action</div>
              <div className="text-xs text-red-600 mt-1">Apply Today</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">1</div>
              <div className="text-sm text-muted-foreground">This Week</div>
              <div className="text-xs text-yellow-600 mt-1">Within 7 Days</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <CloudRain className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">1</div>
              <div className="text-sm text-muted-foreground">Delayed</div>
              <div className="text-xs text-blue-600 mt-1">Weather Impact</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹3.9K</div>
              <div className="text-sm text-muted-foreground">Total Cost</div>
              <div className="text-xs text-purple-600 mt-1">This Month</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recommendations">Smart Recommendations</TabsTrigger>
            <TabsTrigger value="weather">Weather Impact</TabsTrigger>
            <TabsTrigger value="nutrients">Soil Nutrients</TabsTrigger>
            <TabsTrigger value="stages">Crop Stages</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="space-y-4">
              {fertilizerRecommendations.map((rec, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${getUrgencyColor(rec.urgency)}`}>
                          <Beaker className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{rec.fertilizerType}</h3>
                            <Badge className={getUrgencyColor(rec.urgency)}>
                              {rec.urgency.replace('_', ' ').toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{rec.nutrientContent}</p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Amount: </span>
                              <span className="font-medium">{rec.recommendedAmount} kg/ha</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Method: </span>
                              <span className="font-medium">{rec.applicationMethod}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Timing: </span>
                              <span className="font-medium">{rec.timing}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Cost: </span>
                              <span className="font-medium text-green-600">₹{rec.cost}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CloudRain className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">Weather Consideration</span>
                      </div>
                      <p className="text-blue-700 text-sm">{rec.weatherCondition}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="font-medium text-yellow-800 text-sm mb-1">Reason:</div>
                        <div className="text-yellow-700 text-sm">{rec.reason}</div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-green-800 text-sm mb-1">Expected Benefit:</div>
                        <div className="text-green-700 text-sm">{rec.expectedBenefit}</div>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Apply Recommendation
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calculator className="w-4 h-4 mr-2" />
                        Cost Calculator
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weather" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CloudRain className="w-5 h-5 text-blue-500" />
                  <span>Weather Impact on Fertilizer Application</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherImpacts.map((weather, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold">{weather.date}</h3>
                              <Badge className={getImpactColor(weather.impact)}>
                                {weather.impact.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{weather.weatherCondition}</p>
                            
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Thermometer className="w-4 h-4 text-red-500" />
                                <span>{weather.temperature}°C</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Droplets className="w-4 h-4 text-blue-500" />
                                <span>{weather.rainfall}mm</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Wind className="w-4 h-4 text-gray-500" />
                                <span>{weather.humidity}% RH</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="font-medium text-purple-800 text-sm mb-1">Recommendation:</div>
                          <div className="text-purple-700 text-sm">{weather.recommendation}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium text-blue-800 mb-2">7-Day Weather Outlook:</div>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>• Rain expected on April 15th - delay all solid fertilizer applications</div>
                    <div>• Clear weather on April 17th - ideal for broadcasting fertilizers</div>
                    <div>• Hot weather from April 18th - apply early morning or late evening only</div>
                    <div>• Best application window: April 17th 6-9 AM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrients" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <span>Soil Nutrient Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {soilNutrients.map((nutrient, index) => (
                    <Card key={index} className="border border-border/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold">{nutrient.nutrient}</h3>
                          <Badge className={
                            nutrient.status === 'deficient' ? 'bg-red-100 text-red-800' :
                            nutrient.status === 'adequate' ? 'bg-green-100 text-green-800' :
                            'bg-orange-100 text-orange-800'
                          }>
                            {nutrient.status.toUpperCase()}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm">Current Level</span>
                              <span className={`text-sm font-bold ${getStatusColor(nutrient.status)}`}>
                                {nutrient.currentLevel} 
                                {nutrient.nutrient.includes('N') || nutrient.nutrient.includes('P') || nutrient.nutrient.includes('K') ? ' kg/ha' : ' ppm'}
                              </span>
                            </div>
                            <Progress value={Math.min((nutrient.currentLevel / nutrient.optimalLevel) * 100, 100)} className="h-3" />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                              <span>0</span>
                              <span>Target: {nutrient.optimalLevel}</span>
                            </div>
                          </div>

                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="font-medium text-blue-800 text-sm mb-1">Recommendation:</div>
                            <div className="text-blue-700 text-sm">{nutrient.recommendation}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium text-green-800 mb-2">Nutrient Management Summary:</div>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Nitrogen is deficient - immediate application of Urea recommended</div>
                    <div>• Zinc deficiency detected - foliar application needed</div>
                    <div>• Phosphorus and Potassium levels are adequate</div>
                    <div>• Next soil test recommended in 3 months</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stages" className="space-y-6">
            <div className="space-y-4">
              {cropStages.map((stage, index) => (
                <Card key={index} className={`border-border/50 bg-card/90 backdrop-blur-sm ${stage.daysFromPlanting === 35 ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-lg">{stage.stage}</h3>
                          {stage.daysFromPlanting === 35 && (
                            <Badge className="bg-blue-100 text-blue-800">Current Stage</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">Day {stage.daysFromPlanting} from planting</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="font-medium text-green-800 text-sm mb-2">Nutrient Needs</div>
                        <div className="space-y-1">
                          {stage.nutrientNeeds.map((need, i) => (
                            <div key={i} className="text-green-700 text-sm">• {need}</div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="font-medium text-red-800 text-sm mb-2">Critical Nutrients</div>
                        <div className="space-y-1">
                          {stage.criticalNutrients.map((nutrient, i) => (
                            <div key={i} className="text-red-700 text-sm">• {nutrient}</div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-blue-800 text-sm mb-1">Recommended Fertilizer</div>
                        <div className="text-blue-700 text-sm">{stage.fertilizerType}</div>
                        <div className="font-medium text-blue-800 text-xs mt-2">Timing</div>
                        <div className="text-blue-700 text-sm">{stage.timing}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};