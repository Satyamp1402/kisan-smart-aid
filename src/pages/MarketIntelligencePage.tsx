import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp,
  TrendingDown,
  BarChart3,
  LineChart,
  PieChart,
  MapPin,
  Calendar,
  Clock,
  AlertTriangle,
  Info,
  Star,
  Navigation,
  Truck,
  Calculator,
  Phone,
  ExternalLink,
  Download,
  Share,
  Filter,
  Search,
  RefreshCw,
  Target,
  Zap,
  Award,
  Users,
  Building,
  Wheat,
  Apple,
  Carrot
} from "lucide-react";
import { Link } from "react-router-dom";

interface MarketPrice {
  id: string;
  commodity: string;
  commodityHindi: string;
  category: 'grains' | 'vegetables' | 'fruits' | 'pulses' | 'spices';
  currentPrice: number;
  unit: string;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
  market: string;
  lastUpdated: Date;
  trend: 'bullish' | 'bearish' | 'stable';
  quality: 'Grade A' | 'Grade B' | 'Mixed';
}

interface MandiInfo {
  id: string;
  name: string;
  nameHindi: string;
  district: string;
  state: string;
  distance: number;
  transportCost: number;
  facilities: string[];
  rating: number;
  activeTraders: number;
  avgPrice: number;
  bestTime: string;
}

interface PriceAlert {
  id: string;
  commodity: string;
  targetPrice: number;
  currentPrice: number;
  type: 'above' | 'below';
  status: 'active' | 'triggered';
  createdDate: Date;
}

export const MarketIntelligencePage = () => {
  const [selectedCommodity, setSelectedCommodity] = useState('wheat');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const marketPrices: MarketPrice[] = [
    {
      id: '1',
      commodity: 'Wheat',
      commodityHindi: 'गेहूं',
      category: 'grains',
      currentPrice: 2400,
      unit: '₹/quintal',
      change: 120,
      changePercent: 5.26,
      high: 2450,
      low: 2300,
      volume: 15420,
      market: 'Azadpur Mandi, Delhi',
      lastUpdated: new Date(),
      trend: 'bullish',
      quality: 'Grade A'
    },
    {
      id: '2',
      commodity: 'Rice',
      commodityHindi: 'चावल',
      category: 'grains',
      currentPrice: 3200,
      unit: '₹/quintal',
      change: -80,
      changePercent: -2.44,
      high: 3300,
      low: 3150,
      volume: 8900,
      market: 'Kaithal Mandi, Haryana',
      lastUpdated: new Date(),
      trend: 'bearish',
      quality: 'Grade A'
    },
    {
      id: '3',
      commodity: 'Maize',
      commodityHindi: 'मक्का',
      category: 'grains',
      currentPrice: 1800,
      unit: '₹/quintal',
      change: 50,
      changePercent: 2.86,
      high: 1850,
      low: 1750,
      volume: 12300,
      market: 'Hisar Mandi, Haryana',
      lastUpdated: new Date(),
      trend: 'stable',
      quality: 'Grade B'
    },
    {
      id: '4',
      commodity: 'Onion',
      commodityHindi: 'प्याज',
      category: 'vegetables',
      currentPrice: 4500,
      unit: '₹/quintal',
      change: 200,
      changePercent: 4.65,
      high: 4600,
      low: 4200,
      volume: 6700,
      market: 'Nashik Mandi, Maharashtra',
      lastUpdated: new Date(),
      trend: 'bullish',
      quality: 'Mixed'
    },
    {
      id: '5',
      commodity: 'Tomato',
      commodityHindi: 'टमाटर',
      category: 'vegetables',
      currentPrice: 3800,
      unit: '₹/quintal',
      change: -150,
      changePercent: -3.80,
      high: 4000,
      low: 3600,
      volume: 4200,
      market: 'Bangalore Mandi, Karnataka',
      lastUpdated: new Date(),
      trend: 'bearish',
      quality: 'Grade A'
    },
    {
      id: '6',
      commodity: 'Potato',
      commodityHindi: 'आलू',
      category: 'vegetables',
      currentPrice: 1200,
      unit: '₹/quintal',
      change: 80,
      changePercent: 7.14,
      high: 1250,
      low: 1100,
      volume: 18500,
      market: 'Agra Mandi, UP',
      lastUpdated: new Date(),
      trend: 'bullish',
      quality: 'Grade A'
    }
  ];

  const nearbyMandis: MandiInfo[] = [
    {
      id: '1',
      name: 'Azadpur Mandi',
      nameHindi: 'आज़ादपुर मंडी',
      district: 'Delhi',
      state: 'Delhi',
      distance: 25,
      transportCost: 800,
      facilities: ['Cold Storage', 'Quality Testing', 'Banking', 'Parking'],
      rating: 4.5,
      activeTraders: 245,
      avgPrice: 2400,
      bestTime: '6:00 AM - 10:00 AM'
    },
    {
      id: '2',
      name: 'Ghaziabad Mandi',
      nameHindi: 'गाज़ियाबाद मंडी',
      district: 'Ghaziabad',
      state: 'Uttar Pradesh',
      distance: 18,
      transportCost: 600,
      facilities: ['Weighing', 'Banking', 'Parking'],
      rating: 4.2,
      activeTraders: 156,
      avgPrice: 2350,
      bestTime: '5:30 AM - 9:30 AM'
    },
    {
      id: '3',
      name: 'Sonipat Mandi',
      nameHindi: 'सोनीपत मंडी',
      district: 'Sonipat',
      state: 'Haryana',
      distance: 32,
      transportCost: 950,
      facilities: ['Cold Storage', 'Banking', 'Restaurant'],
      rating: 4.0,
      activeTraders: 98,
      avgPrice: 2380,
      bestTime: '6:30 AM - 11:00 AM'
    }
  ];

  const priceAlerts: PriceAlert[] = [
    {
      id: '1',
      commodity: 'Wheat',
      targetPrice: 2500,
      currentPrice: 2400,
      type: 'above',
      status: 'active',
      createdDate: new Date('2024-09-15')
    },
    {
      id: '2',
      commodity: 'Rice',
      targetPrice: 3000,
      currentPrice: 3200,
      type: 'below',
      status: 'triggered',
      createdDate: new Date('2024-09-20')
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'bullish': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'bearish': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <BarChart3 className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getCommodityIcon = (category: string) => {
    switch (category) {
      case 'grains': return Wheat;
      case 'fruits': return Apple;
      case 'vegetables': return Carrot;
      default: return Wheat;
    }
  };

  const filteredPrices = marketPrices.filter(price =>
    price.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    price.commodityHindi.includes(searchTerm)
  );

  const calculateNetProfit = (price: number, quantity: number, transportCost: number) => {
    const grossAmount = price * quantity / 100; // Convert to quintals
    const netAmount = grossAmount - transportCost - (grossAmount * 0.02); // 2% market fee
    return netAmount;
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
                <div className="w-10 h-10 bg-gradient-harvest rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Market Intelligence</h1>
                  <p className="text-sm text-muted-foreground">Real-time prices, trends, and market analysis</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={`${autoRefresh ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                <RefreshCw className={`w-3 h-3 mr-1 ${autoRefresh ? 'animate-spin' : ''}`} />
                {autoRefresh ? 'Live Updates' : 'Manual Refresh'}
              </Badge>
              <div className="text-sm text-muted-foreground">
                Last updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="prices">Live Prices</TabsTrigger>
            <TabsTrigger value="analysis">Market Analysis</TabsTrigger>
            <TabsTrigger value="mandis">Nearby Mandis</TabsTrigger>
            <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
            <TabsTrigger value="calculator">Profit Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="prices" className="space-y-6">
            {/* Market Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">₹2,400</div>
                  <div className="text-sm text-muted-foreground">Avg Wheat Price</div>
                  <div className="text-xs text-green-600 mt-1">↑ 5.26%</div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">65K</div>
                  <div className="text-sm text-muted-foreground">Total Volume</div>
                  <div className="text-xs text-blue-600 mt-1">Quintals</div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Building className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <div className="text-sm text-muted-foreground">Active Markets</div>
                  <div className="text-xs text-orange-600 mt-1">Near you</div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">₹1,850</div>
                  <div className="text-sm text-muted-foreground">Best Price Today</div>
                  <div className="text-xs text-purple-600 mt-1">Maize</div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search commodities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button onClick={() => setAutoRefresh(!autoRefresh)}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Price Table */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LineChart className="w-5 h-5 text-blue-500" />
                  <span>Live Market Prices</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredPrices.map((price) => {
                    const Icon = getCommodityIcon(price.category);
                    return (
                      <div key={price.id} className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors">
                        <div className="flex items-center space-x-4">
                          <Icon className="w-6 h-6 text-green-600" />
                          <div>
                            <div className="font-semibold">{price.commodity}</div>
                            <div className="text-sm text-muted-foreground">{price.commodityHindi}</div>
                            <div className="text-xs text-muted-foreground">{price.market}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <div className="font-bold text-lg">₹{price.currentPrice}</div>
                            <div className="text-xs text-muted-foreground">{price.unit}</div>
                          </div>

                          <div className="text-right">
                            <div className={`font-medium ${getTrendColor(price.change)}`}>
                              {price.change > 0 ? '+' : ''}₹{price.change}
                            </div>
                            <div className={`text-xs ${getTrendColor(price.change)}`}>
                              {price.change > 0 ? '+' : ''}{price.changePercent}%
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            {getTrendIcon(price.trend)}
                            <Badge className={`text-xs ${
                              price.quality === 'Grade A' ? 'bg-green-100 text-green-800' : 
                              price.quality === 'Grade B' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {price.quality}
                            </Badge>
                          </div>

                          <div className="text-right text-xs text-muted-foreground">
                            <div>Vol: {price.volume}</div>
                            <div>H: ₹{price.high} L: ₹{price.low}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Price Trends */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <span>Price Trends (30 Days)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketPrices.slice(0, 4).map((price) => (
                      <div key={price.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{price.commodity}</span>
                          <span className={`font-semibold ${getTrendColor(price.changePercent)}`}>
                            {price.changePercent > 0 ? '+' : ''}{price.changePercent}%
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress 
                            value={Math.abs(price.changePercent) * 10} 
                            className={`flex-1 h-2 ${price.changePercent > 0 ? 'text-green-500' : 'text-red-500'}`} 
                          />
                          <div className="text-xs text-muted-foreground w-16">
                            ₹{price.currentPrice}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Market Insight:</h4>
                    <p className="text-sm text-blue-800">
                      Wheat prices showing strong upward trend due to increased demand. 
                      Vegetables showing mixed signals with onion and potato prices rising.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Market Sentiment */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5 text-purple-500" />
                    <span>Market Sentiment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">Bullish</div>
                      <div className="text-sm text-muted-foreground">Overall Market Sentiment</div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Bullish Commodities</span>
                          <span className="text-green-600 font-semibold">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Bearish Commodities</span>
                          <span className="text-red-600 font-semibold">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Stable Commodities</span>
                          <span className="text-gray-600 font-semibold">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span>Top Gainer: Potato (+7.14%)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        <span>Top Loser: Tomato (-3.80%)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Most Active: Wheat (15,420 qtl)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mandis" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>Nearby Mandis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyMandis.map((mandi) => (
                    <Card key={mandi.id} className="border border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-bold text-lg">{mandi.name}</div>
                            <div className="text-sm text-muted-foreground">{mandi.nameHindi}</div>
                            <div className="text-sm text-muted-foreground">
                              {mandi.district}, {mandi.state}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(mandi.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                              <span className="ml-2 text-sm font-medium">{mandi.rating}</span>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              ₹{mandi.avgPrice}/qtl
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Navigation className="w-4 h-4 text-blue-500" />
                            <span>{mandi.distance} km away</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Truck className="w-4 h-4 text-orange-500" />
                            <span>₹{mandi.transportCost} transport</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-green-500" />
                            <span>{mandi.activeTraders} traders</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span>{mandi.bestTime}</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="text-sm font-medium mb-2">Facilities:</div>
                          <div className="flex flex-wrap gap-2">
                            {mandi.facilities.map((facility, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {facility}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-4">
                          <Button size="sm" className="flex-1">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" variant="outline">
                            <Info className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Create Alert */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span>Create Price Alert</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Commodity</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="wheat">Wheat (गेहूं)</option>
                      <option value="rice">Rice (चावल)</option>
                      <option value="maize">Maize (मक्का)</option>
                      <option value="onion">Onion (प्याज)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Target Price (₹/quintal)</label>
                    <Input placeholder="Enter target price" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Alert Type</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="alertType" value="above" />
                        <span className="text-sm">Price goes above</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="alertType" value="below" />
                        <span className="text-sm">Price goes below</span>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Create Alert
                  </Button>
                </CardContent>
              </Card>

              {/* Active Alerts */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <span>Active Alerts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {priceAlerts.map((alert) => (
                      <div key={alert.id} className={`p-3 border rounded-lg ${
                        alert.status === 'triggered' ? 'border-green-200 bg-green-50' : 'border-border'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{alert.commodity}</div>
                          <Badge className={`${
                            alert.status === 'triggered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {alert.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Alert when price goes {alert.type} ₹{alert.targetPrice}
                        </div>
                        <div className="text-sm">
                          Current: ₹{alert.currentPrice} | Target: ₹{alert.targetPrice}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-blue-500" />
                  <span>Profit Calculator</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Commodity</label>
                      <select className="w-full p-2 border border-border rounded-lg bg-background">
                        {marketPrices.map((price) => (
                          <option key={price.id} value={price.id}>
                            {price.commodity} - ₹{price.currentPrice}/{price.unit}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Quantity (Quintals)</label>
                      <Input placeholder="Enter quantity in quintals" type="number" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Mandi</label>
                      <select className="w-full p-2 border border-border rounded-lg bg-background">
                        {nearbyMandis.map((mandi) => (
                          <option key={mandi.id} value={mandi.id}>
                            {mandi.name} - {mandi.distance}km (₹{mandi.transportCost} transport)
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button className="w-full">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate Profit
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Profit Breakdown:</h4>
                    
                    <div className="space-y-3 p-4 bg-secondary/10 rounded-lg">
                      <div className="flex justify-between">
                        <span>Gross Amount:</span>
                        <span className="font-medium">₹24,000</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Transport Cost:</span>
                        <span>-₹800</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Market Fee (2%):</span>
                        <span>-₹480</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Other Charges:</span>
                        <span>-₹200</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between text-lg font-bold text-green-600">
                        <span>Net Profit:</span>
                        <span>₹22,520</span>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-900 text-sm">Recommendation:</div>
                      <div className="text-green-800 text-xs mt-1">
                        Best time to sell: Morning hours at Azadpur Mandi for maximum profit
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};