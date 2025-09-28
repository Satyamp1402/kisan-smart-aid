import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Clock,
  AlertTriangle,
  Target,
  Brain,
  Zap,
  Eye,
  Search,
  Filter,
  Bell,
  LineChart,
  PieChart,
  MapPin,
  Star,
  Lightbulb,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
  XCircle,
  Calculator,
  Award,
  Users,
  Globe,
  Smartphone,
  MessageSquare,
  BookOpen,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

interface PricePrediction {
  id: string;
  crop: string;
  currentPrice: number;
  predictedPrice: {
    week1: number;
    week2: number;
    month1: number;
    month3: number;
  };
  trend: 'bullish' | 'bearish' | 'stable';
  confidence: number;
  factors: string[];
  recommendation: string;
  bestSellingTime: string;
  potentialProfit: number;
  riskLevel: 'low' | 'medium' | 'high';
}

interface MarketSignal {
  id: string;
  type: 'price_alert' | 'demand_surge' | 'supply_shortage' | 'seasonal_trend';
  crop: string;
  message: string;
  impact: 'positive' | 'negative' | 'neutral';
  urgency: 'low' | 'medium' | 'high';
  actionRequired: string;
  validUntil: string;
}

interface SeasonalPattern {
  month: string;
  priceIndex: number;
  demand: number;
  supply: number;
  notes: string;
}

export const PriceIntelligencePage = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [selectedPeriod, setSelectedPeriod] = useState('1month');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const pricePredictions: PricePrediction[] = [
    {
      id: '1',
      crop: 'Wheat',
      currentPrice: 2400,
      predictedPrice: {
        week1: 2450,
        week2: 2480,
        month1: 2550,
        month3: 2650
      },
      trend: 'bullish',
      confidence: 87,
      factors: ['Rising export demand', 'Lower production estimates', 'Favorable weather', 'Government policies'],
      recommendation: 'Hold for 4-6 weeks for maximum profit',
      bestSellingTime: '2024-05-15 to 2024-05-30',
      potentialProfit: 250,
      riskLevel: 'low'
    },
    {
      id: '2',
      crop: 'Rice',
      currentPrice: 3200,
      predictedPrice: {
        week1: 3150,
        week2: 3100,
        month1: 3050,
        month3: 3200
      },
      trend: 'bearish',
      confidence: 74,
      factors: ['Oversupply in market', 'Reduced export orders', 'New harvest arrival', 'Storage costs'],
      recommendation: 'Sell immediately to avoid losses',
      bestSellingTime: 'Immediate (within 1 week)',
      potentialProfit: -150,
      riskLevel: 'medium'
    },
    {
      id: '3',
      crop: 'Maize',
      currentPrice: 1800,
      predictedPrice: {
        week1: 1820,
        week2: 1850,
        month1: 1880,
        month3: 1900
      },
      trend: 'stable',
      confidence: 92,
      factors: ['Steady demand', 'Normal production', 'Stable policies', 'Consistent exports'],
      recommendation: 'Moderate holding period, 2-3 weeks optimal',
      bestSellingTime: '2024-04-25 to 2024-05-10',
      potentialProfit: 100,
      riskLevel: 'low'
    }
  ];

  const marketSignals: MarketSignal[] = [
    {
      id: '1',
      type: 'price_alert',
      crop: 'Wheat',
      message: 'Wheat prices expected to rise by 8-10% in next 2 weeks due to increased export demand',
      impact: 'positive',
      urgency: 'high',
      actionRequired: 'Hold your wheat stock, avoid selling at current prices',
      validUntil: '2024-04-30'
    },
    {
      id: '2',
      type: 'supply_shortage',
      crop: 'Onion',
      message: 'Onion shortage reported in major consuming centers, prices surging',
      impact: 'positive',
      urgency: 'high',
      actionRequired: 'Immediate selling recommended for onion farmers',
      validUntil: '2024-04-20'
    },
    {
      id: '3',
      type: 'seasonal_trend',
      crop: 'Rice',
      message: 'Post-harvest season leading to oversupply, expect price decline',
      impact: 'negative',
      urgency: 'medium',
      actionRequired: 'Consider storage or immediate sale depending on storage capacity',
      validUntil: '2024-05-15'
    }
  ];

  const seasonalPatterns: SeasonalPattern[] = [
    { month: 'Jan', priceIndex: 95, demand: 85, supply: 90, notes: 'Post-harvest low prices' },
    { month: 'Feb', priceIndex: 98, demand: 88, supply: 85, notes: 'Slight price recovery' },
    { month: 'Mar', priceIndex: 105, demand: 95, supply: 80, notes: 'Pre-planting demand rise' },
    { month: 'Apr', priceIndex: 110, demand: 100, supply: 75, notes: 'Peak demand season' },
    { month: 'May', priceIndex: 108, demand: 98, supply: 78, notes: 'High prices maintained' },
    { month: 'Jun', priceIndex: 102, demand: 90, supply: 85, notes: 'Monsoon impact begins' }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'bullish': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'bearish': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'bullish': return 'text-green-600 bg-green-50';
      case 'bearish': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'negative': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Price Intelligence</h1>
                  <p className="text-sm text-muted-foreground">AI-powered price predictions and optimal selling strategies</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-800">
                <Brain className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">87%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹250</div>
              <div className="text-sm text-muted-foreground">Avg Profit/Quintal</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Bell className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Active Alerts</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15%</div>
              <div className="text-sm text-muted-foreground">Income Boost</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="predictions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="predictions">Price Predictions</TabsTrigger>
            <TabsTrigger value="signals">Market Signals</TabsTrigger>
            <TabsTrigger value="analysis">Seasonal Analysis</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="predictions" className="space-y-6">
            {/* Crop Selector */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <select 
                    value={selectedCrop} 
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background"
                  >
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                    <option value="maize">Maize</option>
                    <option value="onion">Onion</option>
                  </select>
                  <select 
                    value={selectedPeriod} 
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background"
                  >
                    <option value="1week">1 Week</option>
                    <option value="1month">1 Month</option>
                    <option value="3months">3 Months</option>
                    <option value="6months">6 Months</option>
                  </select>
                  <Button variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Predictions List */}
            <div className="space-y-4">
              {pricePredictions.map((prediction) => (
                <Card key={prediction.id} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTrendColor(prediction.trend)}`}>
                          {getTrendIcon(prediction.trend)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{prediction.crop}</h3>
                          <p className="text-sm text-muted-foreground">Current: ₹{prediction.currentPrice}/quintal</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getRiskColor(prediction.riskLevel)}>
                          {prediction.riskLevel} risk
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          {prediction.confidence}% confidence
                        </div>
                      </div>
                    </div>

                    {/* Price Projections */}
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">1 Week</div>
                        <div className="font-bold text-lg">₹{prediction.predictedPrice.week1}</div>
                        <div className={`text-xs ${prediction.predictedPrice.week1 > prediction.currentPrice ? 'text-green-600' : 'text-red-600'}`}>
                          {prediction.predictedPrice.week1 > prediction.currentPrice ? '+' : ''}
                          {prediction.predictedPrice.week1 - prediction.currentPrice}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">2 Weeks</div>
                        <div className="font-bold text-lg">₹{prediction.predictedPrice.week2}</div>
                        <div className={`text-xs ${prediction.predictedPrice.week2 > prediction.currentPrice ? 'text-green-600' : 'text-red-600'}`}>
                          {prediction.predictedPrice.week2 > prediction.currentPrice ? '+' : ''}
                          {prediction.predictedPrice.week2 - prediction.currentPrice}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">1 Month</div>
                        <div className="font-bold text-lg">₹{prediction.predictedPrice.month1}</div>
                        <div className={`text-xs ${prediction.predictedPrice.month1 > prediction.currentPrice ? 'text-green-600' : 'text-red-600'}`}>
                          {prediction.predictedPrice.month1 > prediction.currentPrice ? '+' : ''}
                          {prediction.predictedPrice.month1 - prediction.currentPrice}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-sm text-muted-foreground">3 Months</div>
                        <div className="font-bold text-lg">₹{prediction.predictedPrice.month3}</div>
                        <div className={`text-xs ${prediction.predictedPrice.month3 > prediction.currentPrice ? 'text-green-600' : 'text-red-600'}`}>
                          {prediction.predictedPrice.month3 > prediction.currentPrice ? '+' : ''}
                          {prediction.predictedPrice.month3 - prediction.currentPrice}
                        </div>
                      </div>
                    </div>

                    {/* Key Factors */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Factors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {prediction.factors.map((factor, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Recommendation */}
                    <div className={`p-4 rounded-lg mb-4 border ${
                      prediction.potentialProfit > 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <Lightbulb className={`w-5 h-5 mt-0.5 ${
                          prediction.potentialProfit > 0 ? 'text-green-600' : 'text-red-600'
                        }`} />
                        <div>
                          <div className="font-medium">AI Recommendation:</div>
                          <div className="text-sm mt-1">{prediction.recommendation}</div>
                          <div className="text-xs text-muted-foreground mt-2">
                            Best selling window: {prediction.bestSellingTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Price Alert
                      </Button>
                      <Button variant="outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        Profit Calculator
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Detailed Analysis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="signals" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Live Market Signals</h2>
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Configure Alerts
              </Button>
            </div>

            <div className="space-y-4">
              {marketSignals.map((signal) => (
                <Card key={signal.id} className={`border hover:shadow-lg transition-shadow ${getImpactColor(signal.impact)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          signal.urgency === 'high' ? 'bg-red-500' : 
                          signal.urgency === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <div className="font-bold text-lg">{signal.crop}</div>
                          <div className="text-sm opacity-80">
                            {signal.type.replace('_', ' ').toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <Badge className={getUrgencyColor(signal.urgency)}>
                        {signal.urgency} priority
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">{signal.message}</p>
                      <div className="bg-white/50 p-3 rounded border">
                        <div className="font-medium text-sm">Action Required:</div>
                        <div className="text-sm">{signal.actionRequired}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div>Valid until: {signal.validUntil}</div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                        <Button size="sm" variant="outline">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="w-5 h-5 text-blue-500" />
                  <span>Seasonal Price Patterns</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {seasonalPatterns.map((pattern, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-secondary/5 rounded-lg">
                      <div className="w-16 text-center font-bold">{pattern.month}</div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Price Index</span>
                          <span className="font-bold text-green-600">{pattern.priceIndex}%</span>
                        </div>
                        <Progress value={pattern.priceIndex} className="h-2" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Demand</span>
                          <span className="font-bold text-blue-600">{pattern.demand}%</span>
                        </div>
                        <Progress value={pattern.demand} className="h-2" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Supply</span>
                          <span className="font-bold text-orange-600">{pattern.supply}%</span>
                        </div>
                        <Progress value={pattern.supply} className="h-2" />
                      </div>

                      <div className="w-48 text-xs text-muted-foreground">
                        {pattern.notes}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Seasonal Insights:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• April-May typically shows highest prices due to peak demand</li>
                    <li>• Post-harvest months (Jan-Feb) show lowest prices</li>
                    <li>• Storage during low-price months can yield 15-20% better returns</li>
                    <li>• Weather patterns significantly impact seasonal variations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-500" />
                    <span>AI Market Intelligence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-green-800">Opportunity Detected</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Wheat market showing strong bullish signals. Consider holding inventory for 4-6 weeks 
                        for potential 10-12% price appreciation.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Market Caution</span>
                      </div>
                      <p className="text-sm text-yellow-700">
                        Rice market showing signs of oversupply. Early selling recommended to avoid 
                        potential 5-8% price decline in coming weeks.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">Strategic Insight</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Diversifying crop portfolio with maize can provide stable returns with 
                        lower price volatility compared to traditional crops.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <span>Performance Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Prediction Accuracy</span>
                        <span className="font-bold text-green-600">87%</span>
                      </div>
                      <Progress value={87} className="h-3" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Based on last 100 predictions
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Average Profit Boost</span>
                        <span className="font-bold text-blue-600">15%</span>
                      </div>
                      <Progress value={15} className="h-3" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Compared to random selling
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Risk Mitigation</span>
                        <span className="font-bold text-purple-600">78%</span>
                      </div>
                      <Progress value={78} className="h-3" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Loss prevention success rate
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center p-3 bg-green-50 rounded">
                        <div className="text-xl font-bold text-green-600">₹2.5L</div>
                        <div className="text-xs text-green-700">Avg Savings/Year</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded">
                        <div className="text-xl font-bold text-blue-600">15</div>
                        <div className="text-xs text-blue-700">Markets Tracked</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded">
                        <div className="text-xl font-bold text-purple-600">24/7</div>
                        <div className="text-xs text-purple-700">Real-time Monitoring</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};