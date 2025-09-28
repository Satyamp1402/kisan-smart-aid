import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bug,
  Shield,
  CloudRain,
  Sun,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Target,
  Droplet,
  Eye,
  MapPin,
  Thermometer,
  Wind,
  BarChart3,
  Info,
  Lightbulb,
  Bell,
  Camera,
  Download,
  Settings,
  Leaf,
  Skull,
  Activity,
  Timer,
  Zap,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

interface PestThreat {
  id: string;
  pestName: string;
  scientificName: string;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  cropStage: string;
  detectionMethod: string;
  population: number;
  economicThreshold: number;
  damageType: string;
  affectedArea: number;
  weatherFavorability: 'unfavorable' | 'moderate' | 'favorable' | 'highly_favorable';
  recommendation: string;
}

interface PesticideRecommendation {
  id: string;
  pestTarget: string;
  pesticideName: string;
  activeIngredient: string;
  applicationRate: string;
  applicationMethod: string;
  timing: string;
  weatherCondition: string;
  urgency: 'immediate' | 'within_24h' | 'within_week' | 'monitor';
  reason: string;
  effectiveness: number;
  cost: number;
  safetyLevel: 'low' | 'medium' | 'high';
  preharvest: number;
  resistance: 'low' | 'medium' | 'high';
}

interface WeatherSuitability {
  date: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
  suitability: 'excellent' | 'good' | 'poor' | 'unsuitable';
  recommendation: string;
  reason: string;
}

interface IPMStrategy {
  method: string;
  type: 'biological' | 'cultural' | 'mechanical' | 'chemical';
  effectiveness: number;
  cost: number;
  implementation: string;
  timing: string;
  duration: string;
}

export const PesticideOptimizationPage = () => {
  const [activeTab, setActiveTab] = useState('threats');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const pestThreats: PestThreat[] = [
    {
      id: 'threat-001',
      pestName: 'Brown Planthopper',
      scientificName: 'Nilaparvata lugens',
      threatLevel: 'critical',
      cropStage: 'Tillering stage',
      detectionMethod: 'Field scouting',
      population: 15,
      economicThreshold: 10,
      damageType: 'Sap sucking, virus transmission',
      affectedArea: 2.5,
      weatherFavorability: 'highly_favorable',
      recommendation: 'Immediate chemical intervention required'
    },
    {
      id: 'threat-002',
      pestName: 'Stem Borer',
      scientificName: 'Scirpophaga incertulas',
      threatLevel: 'high',
      cropStage: 'Vegetative growth',
      detectionMethod: 'Pheromone trap',
      population: 8,
      economicThreshold: 5,
      damageType: 'Stem boring, dead hearts',
      affectedArea: 1.8,
      weatherFavorability: 'favorable',
      recommendation: 'Apply systemic insecticide within 48 hours'
    },
    {
      id: 'threat-003',
      pestName: 'Rice Hispa',
      scientificName: 'Dicladispa armigera',
      threatLevel: 'medium',
      cropStage: 'Early tillering',
      detectionMethod: 'Visual inspection',
      population: 3,
      economicThreshold: 5,
      damageType: 'Leaf scraping, white streaks',
      affectedArea: 0.8,
      weatherFavorability: 'moderate',
      recommendation: 'Monitor closely, biological control preferred'
    },
    {
      id: 'threat-004',
      pestName: 'Leaf Folder',
      scientificName: 'Cnaphalocrocis medinalis',
      threatLevel: 'low',
      cropStage: 'Vegetative growth',
      detectionMethod: 'Leaf damage assessment',
      population: 2,
      economicThreshold: 8,
      damageType: 'Leaf folding, feeding damage',
      affectedArea: 0.3,
      weatherFavorability: 'unfavorable',
      recommendation: 'Continue monitoring, no immediate action needed'
    }
  ];

  const pesticideRecommendations: PesticideRecommendation[] = [
    {
      id: 'rec-001',
      pestTarget: 'Brown Planthopper',
      pesticideName: 'Imidacloprid 17.8% SL',
      activeIngredient: 'Imidacloprid',
      applicationRate: '100 ml/acre',
      applicationMethod: 'Foliar spray',
      timing: 'Apply immediately (evening)',
      weatherCondition: 'Clear sky, low wind (<5 km/h)',
      urgency: 'immediate',
      reason: 'Population above economic threshold, high virus transmission risk',
      effectiveness: 92,
      cost: 450,
      safetyLevel: 'medium',
      preharvest: 21,
      resistance: 'medium'
    },
    {
      id: 'rec-002',
      pestTarget: 'Stem Borer',
      pesticideName: 'Chlorantraniliprole 18.5% SC',
      activeIngredient: 'Chlorantraniliprole',
      applicationRate: '80 ml/acre',
      applicationMethod: 'Foliar spray + whorl application',
      timing: 'Within 24 hours',
      weatherCondition: 'Stable weather, morning application',
      urgency: 'within_24h',
      reason: 'Early larval stage detected, maximum efficacy window',
      effectiveness: 88,
      cost: 520,
      safetyLevel: 'high',
      preharvest: 30,
      resistance: 'low'
    },
    {
      id: 'rec-003',
      pestTarget: 'Rice Hispa',
      pesticideName: 'Thiamethoxam 25% WG',
      activeIngredient: 'Thiamethoxam',
      applicationRate: '40 gm/acre',
      applicationMethod: 'Foliar spray',
      timing: 'Monitor for 5 days, apply if population increases',
      weatherCondition: 'Any suitable weather',
      urgency: 'monitor',
      reason: 'Below economic threshold, natural enemies active',
      effectiveness: 85,
      cost: 380,
      safetyLevel: 'medium',
      preharvest: 25,
      resistance: 'medium'
    },
    {
      id: 'rec-004',
      pestTarget: 'Multiple pests',
      pesticideName: 'Beauveria bassiana 1.15% WP',
      activeIngredient: 'Beauveria bassiana',
      applicationRate: '1 kg/acre',
      applicationMethod: 'Foliar spray',
      timing: 'Evening application, within a week',
      weatherCondition: 'High humidity (>70%), no direct sunlight',
      urgency: 'within_week',
      reason: 'Biological control for sustainable pest management',
      effectiveness: 78,
      cost: 320,
      safetyLevel: 'high',
      preharvest: 0,
      resistance: 'low'
    }
  ];

  const weatherSuitability: WeatherSuitability[] = [
    {
      date: '2024-04-15',
      temperature: 32,
      humidity: 85,
      windSpeed: 3,
      rainfall: 0,
      suitability: 'excellent',
      recommendation: 'Ideal for pesticide application',
      reason: 'Low wind, high humidity, no rain forecast'
    },
    {
      date: '2024-04-16',
      temperature: 28,
      humidity: 78,
      windSpeed: 8,
      rainfall: 2,
      suitability: 'good',
      recommendation: 'Suitable for most applications',
      reason: 'Moderate wind, light intermittent rain'
    },
    {
      date: '2024-04-17',
      temperature: 35,
      humidity: 45,
      windSpeed: 12,
      rainfall: 0,
      suitability: 'poor',
      recommendation: 'Avoid spray applications',
      reason: 'High wind speed, low humidity, hot temperature'
    },
    {
      date: '2024-04-18',
      temperature: 26,
      humidity: 92,
      windSpeed: 2,
      rainfall: 15,
      suitability: 'unsuitable',
      recommendation: 'No pesticide application',
      reason: 'Heavy rain expected, will wash away pesticides'
    }
  ];

  const ipmStrategies: IPMStrategy[] = [
    {
      method: 'Pheromone Traps',
      type: 'mechanical',
      effectiveness: 75,
      cost: 200,
      implementation: 'Install 10 traps per acre at field edges',
      timing: 'Early season installation',
      duration: '60 days'
    },
    {
      method: 'Trichogramma Release',
      type: 'biological',
      effectiveness: 82,
      cost: 300,
      implementation: 'Release 1 lakh eggs per acre in 3 splits',
      timing: 'Egg laying period of stem borer',
      duration: '3 weeks'
    },
    {
      method: 'Neem Oil Application',
      type: 'biological',
      effectiveness: 70,
      cost: 150,
      implementation: '2% neem oil spray every 10 days',
      timing: 'Early pest detection',
      duration: 'Throughout season'
    },
    {
      method: 'Field Sanitation',
      type: 'cultural',
      effectiveness: 65,
      cost: 100,
      implementation: 'Remove crop residues and alternate hosts',
      timing: 'Post-harvest and pre-planting',
      duration: 'Continuous'
    },
    {
      method: 'Resistant Varieties',
      type: 'cultural',
      effectiveness: 85,
      cost: 50,
      implementation: 'Plant BPH-resistant rice varieties',
      timing: 'Next cropping season',
      duration: 'Full crop cycle'
    },
    {
      method: 'Light Traps',
      type: 'mechanical',
      effectiveness: 68,
      cost: 180,
      implementation: '1 light trap per 2 acres, operate 6-10 PM',
      timing: 'Adult emergence period',
      duration: '45 days'
    }
  ];

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'bg-red-100 text-red-800 border-red-300';
      case 'within_24h': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'within_week': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'monitor': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'poor': return 'bg-yellow-100 text-yellow-800';
      case 'unsuitable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'biological': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-blue-100 text-blue-800';
      case 'mechanical': return 'bg-purple-100 text-purple-800';
      case 'chemical': return 'bg-orange-100 text-orange-800';
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
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Bug className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Pesticide Optimization</h1>
                  <p className="text-sm text-muted-foreground">AI-powered pest management with weather-smart application timing</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-100 text-red-800">
                <Bug className="w-3 h-3 mr-1" />
                Smart IPM
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
              <div className="text-sm text-muted-foreground">Critical Threats</div>
              <div className="text-xs text-red-600 mt-1">Immediate Action</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">88%</div>
              <div className="text-sm text-muted-foreground">Avg Effectiveness</div>
              <div className="text-xs text-blue-600 mt-1">Recommended</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <CloudRain className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">Today</div>
              <div className="text-sm text-muted-foreground">Ideal Weather</div>
              <div className="text-xs text-green-600 mt-1">Apply Now</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹1.67K</div>
              <div className="text-sm text-muted-foreground">Treatment Cost</div>
              <div className="text-xs text-purple-600 mt-1">This Week</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="threats">Pest Threats</TabsTrigger>
            <TabsTrigger value="recommendations">Treatments</TabsTrigger>
            <TabsTrigger value="weather">Weather Timing</TabsTrigger>
            <TabsTrigger value="ipm">IPM Strategies</TabsTrigger>
          </TabsList>

          <TabsContent value="threats" className="space-y-6">
            <div className="space-y-4">
              {pestThreats.map((threat, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${getThreatColor(threat.threatLevel)}`}>
                          <Bug className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{threat.pestName}</h3>
                            <Badge className={getThreatColor(threat.threatLevel)}>
                              {threat.threatLevel.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-3">{threat.scientificName}</p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                              <span className="text-muted-foreground">Population: </span>
                              <span className={`font-medium ${threat.population > threat.economicThreshold ? 'text-red-600' : 'text-green-600'}`}>
                                {threat.population}/m² (ET: {threat.economicThreshold})
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Affected Area: </span>
                              <span className="font-medium">{threat.affectedArea} acres</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Crop Stage: </span>
                              <span className="font-medium">{threat.cropStage}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Detection: </span>
                              <span className="font-medium">{threat.detectionMethod}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="font-medium text-orange-800 text-sm mb-1">Damage Type:</div>
                        <div className="text-orange-700 text-sm">{threat.damageType}</div>
                      </div>
                      <div className={`p-3 border rounded-lg ${
                        threat.weatherFavorability === 'highly_favorable' ? 'bg-red-50 border-red-200' :
                        threat.weatherFavorability === 'favorable' ? 'bg-yellow-50 border-yellow-200' :
                        threat.weatherFavorability === 'moderate' ? 'bg-blue-50 border-blue-200' :
                        'bg-green-50 border-green-200'
                      }`}>
                        <div className={`font-medium text-sm mb-1 ${
                          threat.weatherFavorability === 'highly_favorable' ? 'text-red-800' :
                          threat.weatherFavorability === 'favorable' ? 'text-yellow-800' :
                          threat.weatherFavorability === 'moderate' ? 'text-blue-800' :
                          'text-green-800'
                        }`}>Weather Favorability:</div>
                        <div className={`text-sm ${
                          threat.weatherFavorability === 'highly_favorable' ? 'text-red-700' :
                          threat.weatherFavorability === 'favorable' ? 'text-yellow-700' :
                          threat.weatherFavorability === 'moderate' ? 'text-blue-700' :
                          'text-green-700'
                        }`}>{threat.weatherFavorability.replace('_', ' ')}</div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-purple-800">AI Recommendation</span>
                      </div>
                      <p className="text-purple-700 text-sm">{threat.recommendation}</p>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <Zap className="w-4 h-4 mr-2" />
                        Apply Treatment
                      </Button>
                      <Button variant="outline" size="sm">
                        <Camera className="w-4 h-4 mr-2" />
                        Photo Diagnosis
                      </Button>
                      <Button variant="outline" size="sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        Field Map
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="space-y-4">
              {pesticideRecommendations.map((rec, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${getUrgencyColor(rec.urgency)}`}>
                          <Droplet className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{rec.pesticideName}</h3>
                            <Badge className={getUrgencyColor(rec.urgency)}>
                              {rec.urgency.replace('_', ' ').toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">Target: {rec.pestTarget}</p>
                          <p className="text-sm text-muted-foreground mb-3">Active: {rec.activeIngredient}</p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Rate: </span>
                              <span className="font-medium">{rec.applicationRate}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Method: </span>
                              <span className="font-medium">{rec.applicationMethod}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Cost: </span>
                              <span className="font-medium text-green-600">₹{rec.cost}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">PHI: </span>
                              <span className="font-medium">{rec.preharvest} days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">Timing & Weather</span>
                      </div>
                      <p className="text-blue-700 text-sm">{rec.timing}</p>
                      <p className="text-blue-600 text-xs mt-1">{rec.weatherCondition}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-green-800 text-sm mb-1">Effectiveness:</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={rec.effectiveness} className="h-2 flex-1" />
                          <span className="text-green-700 text-sm font-bold">{rec.effectiveness}%</span>
                        </div>
                      </div>
                      <div className={`p-3 border rounded-lg ${
                        rec.safetyLevel === 'high' ? 'bg-green-50 border-green-200' :
                        rec.safetyLevel === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-red-50 border-red-200'
                      }`}>
                        <div className={`font-medium text-sm mb-1 ${
                          rec.safetyLevel === 'high' ? 'text-green-800' :
                          rec.safetyLevel === 'medium' ? 'text-yellow-800' :
                          'text-red-800'
                        }`}>Safety Level:</div>
                        <div className={`text-sm ${
                          rec.safetyLevel === 'high' ? 'text-green-700' :
                          rec.safetyLevel === 'medium' ? 'text-yellow-700' :
                          'text-red-700'
                        }`}>{rec.safetyLevel.toUpperCase()}</div>
                      </div>
                      <div className={`p-3 border rounded-lg ${
                        rec.resistance === 'low' ? 'bg-green-50 border-green-200' :
                        rec.resistance === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-red-50 border-red-200'
                      }`}>
                        <div className={`font-medium text-sm mb-1 ${
                          rec.resistance === 'low' ? 'text-green-800' :
                          rec.resistance === 'medium' ? 'text-yellow-800' :
                          'text-red-800'
                        }`}>Resistance Risk:</div>
                        <div className={`text-sm ${
                          rec.resistance === 'low' ? 'text-green-700' :
                          rec.resistance === 'medium' ? 'text-yellow-700' :
                          'text-red-700'
                        }`}>{rec.resistance.toUpperCase()}</div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="font-medium text-yellow-800 text-sm mb-1">Reason:</div>
                      <div className="text-yellow-700 text-sm">{rec.reason}</div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Apply Treatment
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        SDS Sheet
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
                  <span>Weather Suitability for Pesticide Application</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherSuitability.map((weather, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold">{weather.date}</h3>
                              <Badge className={getSuitabilityColor(weather.suitability)}>
                                {weather.suitability.toUpperCase()}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                              <div className="flex items-center space-x-2">
                                <Thermometer className="w-4 h-4 text-red-500" />
                                <span>{weather.temperature}°C</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Droplet className="w-4 h-4 text-blue-500" />
                                <span>{weather.humidity}% RH</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Wind className="w-4 h-4 text-gray-500" />
                                <span>{weather.windSpeed} km/h</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <CloudRain className="w-4 h-4 text-blue-600" />
                                <span>{weather.rainfall}mm</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                            <div className="font-medium text-purple-800 text-sm mb-1">Recommendation:</div>
                            <div className="text-purple-700 text-sm">{weather.recommendation}</div>
                          </div>
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="font-medium text-blue-800 text-sm mb-1">Reason:</div>
                            <div className="text-blue-700 text-sm">{weather.reason}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium text-green-800 mb-2">Best Application Windows:</div>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Today (April 15th): Excellent conditions - Low wind, high humidity</div>
                    <div>• Tomorrow (April 16th): Good conditions - Acceptable for most treatments</div>
                    <div>• Avoid April 17th: High wind and low humidity will reduce effectiveness</div>
                    <div>• Skip April 18th: Heavy rain will wash away pesticides</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ipm" className="space-y-6">
            <div className="space-y-4">
              {ipmStrategies.map((strategy, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(strategy.type)}`}>
                          {strategy.type === 'biological' && <Leaf className="w-6 h-6" />}
                          {strategy.type === 'cultural' && <Users className="w-6 h-6" />}
                          {strategy.type === 'mechanical' && <Settings className="w-6 h-6" />}
                          {strategy.type === 'chemical' && <Droplet className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{strategy.method}</h3>
                            <Badge className={getTypeColor(strategy.type)}>
                              {strategy.type.toUpperCase()}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                              <span className="text-muted-foreground">Cost: </span>
                              <span className="font-medium text-green-600">₹{strategy.cost}/acre</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Duration: </span>
                              <span className="font-medium">{strategy.duration}</span>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Effectiveness:</span>
                              <span className="text-sm font-bold text-green-600">{strategy.effectiveness}%</span>
                            </div>
                            <Progress value={strategy.effectiveness} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-medium text-blue-800 text-sm mb-1">Implementation:</div>
                        <div className="text-blue-700 text-sm">{strategy.implementation}</div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-green-800 text-sm mb-1">Optimal Timing:</div>
                        <div className="text-green-700 text-sm">{strategy.timing}</div>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Activity className="w-4 h-4 mr-2" />
                        Implement Strategy
                      </Button>
                      <Button variant="outline" size="sm">
                        <Info className="w-4 h-4 mr-2" />
                        More Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Timer className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="font-medium text-blue-800 mb-2">Integrated Pest Management Benefits:</div>
              <div className="text-sm text-blue-700 space-y-1">
                <div>• Reduces chemical pesticide dependency by 60-70%</div>
                <div>• Maintains beneficial insect populations</div>
                <div>• Prevents development of pesticide resistance</div>
                <div>• Cost-effective long-term pest management</div>
                <div>• Environmentally sustainable approach</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};