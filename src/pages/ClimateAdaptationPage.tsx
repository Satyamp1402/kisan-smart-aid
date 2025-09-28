import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Leaf,
  Cloud,
  Sun,
  Droplets,
  Wind,
  Sprout,
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info,
  Globe2,
  Landmark,
  Factory,
  MapPin,
  Target,
  Recycle
} from "lucide-react";
import { Link } from "react-router-dom";

interface CropPlan {
  crop: string;
  season: string;
  sowingWindow: string;
  harvestWindow: string;
  irrigation: string;
  fertilizerPlan: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  expectedYield: string;
  priceOutlook: 'Positive' | 'Neutral' | 'Negative';
  recommendations: string[];
}

interface ClimateScenario {
  name: string;
  period: string;
  tempChange: number;
  rainfallChange: number;
  riskFactors: string[];
  adaptationActions: string[];
}

interface ResourcePlan {
  resource: string;
  currentLevel: number;
  requiredLevel: number;
  action: string;
}

export const ClimateAdaptationPage = () => {
  const [activeTab, setActiveTab] = useState('plans');

  const cropPlans: CropPlan[] = [
    {
      crop: 'Wheat',
      season: 'Rabi',
      sowingWindow: 'Nov 10 - Dec 5',
      harvestWindow: 'Mar 15 - Apr 5',
      irrigation: '4-5 critical irrigations',
      fertilizerPlan: 'N:P:K = 120:60:40 kg/ha',
      riskLevel: 'Low',
      expectedYield: '4.5 tons/ha',
      priceOutlook: 'Positive',
      recommendations: [
        'Use drought-tolerant variety HD-2967',
        'Mulch application to conserve moisture',
        'Schedule irrigation at CRI, tillering, booting and grain filling stages'
      ]
    },
    {
      crop: 'Rice',
      season: 'Kharif',
      sowingWindow: 'Jun 20 - Jul 15',
      harvestWindow: 'Oct 20 - Nov 15',
      irrigation: 'Puddled fields, maintain standing water 5cm',
      fertilizerPlan: 'N:P:K = 100:50:50 kg/ha',
      riskLevel: 'Medium',
      expectedYield: '5.2 tons/ha',
      priceOutlook: 'Neutral',
      recommendations: [
        'Select short-duration variety for variable monsoon',
        'Adopt SRI method to reduce water use',
        'Use AWD (Alternate Wetting and Drying) irrigation'
      ]
    },
    {
      crop: 'Maize',
      season: 'Kharif/Rabi',
      sowingWindow: 'Jul 1 - Jul 20 / Nov 1 - Nov 20',
      harvestWindow: 'Oct / Feb',
      irrigation: '3-4 irrigations as per rainfall',
      fertilizerPlan: 'N:P:K = 150:60:40 kg/ha',
      riskLevel: 'Low',
      expectedYield: '3.8 tons/ha',
      priceOutlook: 'Positive',
      recommendations: [
        'Use heat-tolerant hybrids',
        'Mulching for moisture conservation',
        'Monitor for fall armyworm risk in humid conditions'
      ]
    }
  ];

  const scenarios: ClimateScenario[] = [
    {
      name: 'Near-term (0-5 yrs)',
      period: '2025-2030',
      tempChange: 0.6,
      rainfallChange: 3,
      riskFactors: ['Heat stress spikes', 'Erratic monsoon onset', 'Short dry spells'],
      adaptationActions: ['Heat-tolerant varieties', 'Micro-irrigation', 'Rainwater harvesting']
    },
    {
      name: 'Mid-term (5-15 yrs)',
      period: '2030-2040',
      tempChange: 1.2,
      rainfallChange: 5,
      riskFactors: ['Longer dry spells', 'Intense rainfall events', 'New pest pressures'],
      adaptationActions: ['Diversified cropping', 'Soil carbon improvement', 'Agroforestry rows']
    },
    {
      name: 'Long-term (15+ yrs)',
      period: '2040-2055',
      tempChange: 2.1,
      rainfallChange: 8,
      riskFactors: ['Frequent heatwaves', 'Flooding risk in low areas', 'Groundwater stress'],
      adaptationActions: ['Climate-resilient varieties', 'Contour bunding', 'Community water storage']
    }
  ];

  const resourcePlans: ResourcePlan[] = [
    { resource: 'Irrigation Water', currentLevel: 60, requiredLevel: 85, action: 'Install drip irrigation and schedule based on ETc' },
    { resource: 'Soil Organic Carbon', currentLevel: 42, requiredLevel: 65, action: 'Add farmyard manure and cover crops' },
    { resource: 'Seed Stock', currentLevel: 75, requiredLevel: 90, action: 'Procure heat/drought-tolerant varieties' },
    { resource: 'On-farm Storage', currentLevel: 35, requiredLevel: 70, action: 'Build low-cost storage structures' }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Climate Adaptation Planning</h1>
                  <p className="text-sm text-muted-foreground">Long-term crop strategies based on climate scenarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="plans">Adaptive Crop Plans</TabsTrigger>
            <TabsTrigger value="scenarios">Climate Scenarios</TabsTrigger>
            <TabsTrigger value="resources">Resource Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-6">
            <div className="space-y-4">
              {cropPlans.map((plan, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg flex items-center">
                          <Sprout className="w-5 h-5 mr-2 text-green-500" />
                          {plan.crop} <span className="text-muted-foreground ml-2 text-sm">({plan.season})</span>
                        </h3>
                        <div className="text-sm text-muted-foreground">Sowing: {plan.sowingWindow} • Harvest: {plan.harvestWindow}</div>
                      </div>
                      <Badge className={getRiskColor(plan.riskLevel)}>
                        {plan.riskLevel} Risk
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{plan.expectedYield}</div>
                        <div className="text-xs text-blue-700">Expected Yield</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{plan.irrigation}</div>
                        <div className="text-xs text-green-700">Irrigation</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{plan.fertilizerPlan}</div>
                        <div className="text-xs text-purple-700">Nutrient Plan</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{plan.priceOutlook}</div>
                        <div className="text-xs text-orange-700">Price Outlook</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium text-sm">Recommendations:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {plan.recommendations.map((rec, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-6">
            <div className="space-y-4">
              {scenarios.map((s, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg flex items-center">
                          <Globe2 className="w-5 h-5 mr-2 text-blue-500" />
                          {s.name}
                        </h3>
                        <div className="text-sm text-muted-foreground">{s.period}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">+{s.tempChange}°C</div>
                          <div className="text-xs text-red-700">Temperature</div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">+{s.rainfallChange}%</div>
                          <div className="text-xs text-blue-700">Rainfall</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="font-medium text-yellow-800 mb-2">Key Risks</div>
                        <div className="text-sm text-yellow-700 space-y-1">
                          {s.riskFactors.map((r, i) => <div key={i}>• {r}</div>)}
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-green-800 mb-2">Adaptation Actions</div>
                        <div className="text-sm text-green-700 space-y-1">
                          {s.adaptationActions.map((a, i) => <div key={i}>• {a}</div>)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Recycle className="w-5 h-5 text-emerald-600" />
                  <span>Resource Planning</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resourcePlans.map((r, index) => (
                  <Card key={index} className="border border-border/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-medium">{r.resource}</div>
                        <div className="text-sm text-muted-foreground">Target: {r.requiredLevel}%</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Current Level</span>
                          <span className="font-bold">{r.currentLevel}%</span>
                        </div>
                        <Progress value={r.currentLevel} className="h-3" />
                      </div>

                      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                        <div className="font-medium text-blue-800 text-sm">Action Plan:</div>
                        <div className="text-blue-700 text-sm">{r.action}</div>
                      </div>

                      <div className="mt-3 flex space-x-3">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Start Action</Button>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};