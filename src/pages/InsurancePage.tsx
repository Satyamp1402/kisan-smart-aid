import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  TrendingUp,
  Cloud,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Eye,
  Calculator,
  FileText,
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Award,
  Target,
  BarChart3,
  PieChart,
  Lightbulb,
  Smartphone,
  Camera,
  Upload,
  Star,
  Users,
  Building,
  Leaf,
  Tractor
} from "lucide-react";
import { Link } from "react-router-dom";

interface RiskFactor {
  factor: string;
  currentValue: number;
  threshold: number;
  risk: 'low' | 'medium' | 'high';
  impact: number;
  description: string;
}

interface InsurancePolicy {
  id: string;
  name: string;
  provider: string;
  type: 'Weather' | 'Yield' | 'Area Yield' | 'Revenue';
  cropsCovered: string[];
  sumInsured: number;
  premium: number;
  premiumRate: number;
  coverage: number;
  deductible: number;
  features: string[];
  rating: number;
  claimSettlement: string;
  weatherPerils: string[];
}

interface ClaimHistory {
  id: string;
  policyNumber: string;
  claimDate: string;
  cropAffected: string;
  perilType: string;
  claimAmount: number;
  settledAmount: number;
  status: 'Pending' | 'Approved' | 'Settled' | 'Rejected';
  settlementTime: number;
}

export const InsurancePage = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [landSize, setLandSize] = useState('5');
  const [selectedTab, setSelectedTab] = useState('assessment');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const riskFactors: RiskFactor[] = [
    {
      factor: 'Weather Risk',
      currentValue: 25,
      threshold: 40,
      risk: 'low',
      impact: 15,
      description: 'Normal weather conditions expected, low risk of extreme events'
    },
    {
      factor: 'Drought Risk',
      currentValue: 35,
      threshold: 50,
      risk: 'medium',
      impact: 20,
      description: 'Moderate drought conditions possible based on rainfall predictions'
    },
    {
      factor: 'Pest & Disease',
      currentValue: 20,
      threshold: 30,
      risk: 'low',
      impact: 10,
      description: 'Current pest pressure is low, disease risk minimal'
    },
    {
      factor: 'Market Volatility',
      currentValue: 40,
      threshold: 60,
      risk: 'medium',
      impact: 25,
      description: 'Price fluctuations may affect revenue, moderate market risk'
    },
    {
      factor: 'Crop Stage Risk',
      currentValue: 15,
      threshold: 35,
      risk: 'low',
      impact: 8,
      description: 'Crop is in stable growth stage, minimal vulnerability'
    }
  ];

  const insurancePolicies: InsurancePolicy[] = [
    {
      id: '1',
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      provider: 'Government of India',
      type: 'Weather',
      cropsCovered: ['Wheat', 'Rice', 'Maize', 'Cotton', 'Sugarcane'],
      sumInsured: 50000,
      premium: 1500,
      premiumRate: 3.0,
      coverage: 90,
      deductible: 0,
      features: ['Government subsidy', 'Quick settlement', 'Wide coverage', 'Low premium'],
      rating: 4.2,
      claimSettlement: '30 days',
      weatherPerils: ['Drought', 'Flood', 'Hailstorm', 'Cyclone', 'Frost']
    },
    {
      id: '2',
      name: 'Weather Based Crop Insurance',
      provider: 'ICICI Lombard',
      type: 'Weather',
      cropsCovered: ['Wheat', 'Rice', 'Maize'],
      sumInsured: 75000,
      premium: 3750,
      premiumRate: 5.0,
      coverage: 85,
      deductible: 5000,
      features: ['Satellite monitoring', 'Real-time alerts', 'Mobile app', 'Expert support'],
      rating: 4.5,
      claimSettlement: '21 days',
      weatherPerils: ['Rainfall deficit', 'Excess rainfall', 'Temperature', 'Wind speed']
    },
    {
      id: '3',
      name: 'Yield Protection Plan',
      provider: 'Bajaj Allianz',
      type: 'Yield',
      cropsCovered: ['Wheat', 'Rice', 'Pulses', 'Oilseeds'],
      sumInsured: 60000,
      premium: 2400,
      premiumRate: 4.0,
      coverage: 80,
      deductible: 3000,
      features: ['Yield guarantee', 'Input cost coverage', 'Technology support', 'Advisory services'],
      rating: 4.3,
      claimSettlement: '45 days',
      weatherPerils: ['All weather perils', 'Pest attack', 'Disease outbreak', 'Wild animal damage']
    }
  ];

  const claimHistory: ClaimHistory[] = [
    {
      id: '1',
      policyNumber: 'PMFBY-2023-001',
      claimDate: '2024-03-15',
      cropAffected: 'Wheat',
      perilType: 'Hailstorm',
      claimAmount: 25000,
      settledAmount: 22000,
      status: 'Settled',
      settlementTime: 28
    },
    {
      id: '2',
      policyNumber: 'WBI-2023-045',
      claimDate: '2024-02-20',
      cropAffected: 'Rice',
      perilType: 'Drought',
      claimAmount: 15000,
      settledAmount: 15000,
      status: 'Settled',
      settlementTime: 35
    },
    {
      id: '3',
      policyNumber: 'YPP-2024-012',
      claimDate: '2024-04-01',
      cropAffected: 'Maize',
      perilType: 'Pest Attack',
      claimAmount: 18000,
      settledAmount: 0,
      status: 'Pending',
      settlementTime: 0
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Settled': return 'bg-green-100 text-green-800';
      case 'Approved': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPolicyTypeColor = (type: string) => {
    switch (type) {
      case 'Weather': return 'bg-blue-100 text-blue-800';
      case 'Yield': return 'bg-green-100 text-green-800';
      case 'Area Yield': return 'bg-purple-100 text-purple-800';
      case 'Revenue': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculatePremium = () => {
    const baseRate = 4.0;
    const landArea = parseFloat(landSize) || 5;
    const riskMultiplier = riskFactors.reduce((acc, factor) => acc + (factor.impact / 100), 1);
    
    return Math.round(50000 * landArea * (baseRate * riskMultiplier / 100));
  };

  const getOverallRisk = () => {
    const avgRisk = riskFactors.reduce((acc, factor) => acc + factor.currentValue, 0) / riskFactors.length;
    if (avgRisk < 25) return 'low';
    if (avgRisk < 45) return 'medium';
    return 'high';
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
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Smart Crop Insurance</h1>
                  <p className="text-sm text-muted-foreground">Dynamic premiums based on real-time risk assessment</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-800">
                <Zap className="w-3 h-3 mr-1" />
                Real-time Risk Assessment
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Risk Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className={`border-border/50 backdrop-blur-sm text-center ${getRiskColor(getOverallRisk())}`}>
            <CardContent className="p-6">
              <Shield className="w-8 h-8 mx-auto mb-2 text-current" />
              <div className="text-2xl font-bold">
                {getOverallRisk().toUpperCase()}
              </div>
              <div className="text-sm font-medium">Overall Risk</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{calculatePremium()}</div>
              <div className="text-sm text-muted-foreground">Dynamic Premium</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{50000 * parseFloat(landSize || '5')}</div>
              <div className="text-sm text-muted-foreground">Sum Insured</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">21</div>
              <div className="text-sm text-muted-foreground">Days Settlement</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="assessment">Risk Assessment</TabsTrigger>
            <TabsTrigger value="policies">Insurance Plans</TabsTrigger>
            <TabsTrigger value="claims">Claims</TabsTrigger>
            <TabsTrigger value="apply">Apply Now</TabsTrigger>
          </TabsList>

          <TabsContent value="assessment" className="space-y-6">
            {/* Farm Details */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-green-500" />
                  <span>Farm Assessment Parameters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Primary Crop</label>
                    <select 
                      value={selectedCrop} 
                      onChange={(e) => setSelectedCrop(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background"
                    >
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="maize">Maize</option>
                      <option value="cotton">Cotton</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Land Size (Acres)</label>
                    <Input 
                      value={landSize}
                      onChange={(e) => setLandSize(e.target.value)}
                      placeholder="Enter land size"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input 
                      value="Village Rampur, Haryana"
                      readOnly
                      className="bg-secondary/20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Factors */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <span>Real-time Risk Factors</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskFactors.map((factor, index) => (
                    <div key={index} className="p-4 border border-border/30 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            factor.risk === 'low' ? 'bg-green-500' :
                            factor.risk === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="font-medium">{factor.factor}</span>
                        </div>
                        <Badge className={`${
                          factor.risk === 'low' ? 'bg-green-100 text-green-800' :
                          factor.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {factor.risk} risk
                        </Badge>
                      </div>

                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Current: {factor.currentValue}%</span>
                          <span>Threshold: {factor.threshold}%</span>
                        </div>
                        <Progress value={(factor.currentValue / factor.threshold) * 100} className="h-2" />
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {factor.description}
                      </div>

                      <div className="mt-2 text-xs text-blue-600">
                        Premium Impact: +{factor.impact}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Risk Mitigation Recommendations</span>
                  </div>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Consider drought-resistant crop varieties to reduce weather risk</li>
                    <li>• Implement integrated pest management to lower pest risk</li>
                    <li>• Diversify crops to minimize market volatility impact</li>
                    <li>• Install weather monitoring systems for early warnings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Available Insurance Plans</h2>
              <Badge className="bg-green-100 text-green-800">
                {insurancePolicies.length} plans available
              </Badge>
            </div>

            <div className="space-y-4">
              {insurancePolicies.map((policy) => (
                <Card key={policy.id} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                          <Shield className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{policy.name}</h3>
                          <p className="text-sm text-muted-foreground">{policy.provider}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getPolicyTypeColor(policy.type)}>
                              {policy.type} Based
                            </Badge>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm">{policy.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₹{policy.premium}</div>
                        <div className="text-sm text-muted-foreground">Premium/Season</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">₹{policy.sumInsured/1000}K</div>
                        <div className="text-xs text-muted-foreground">Sum Insured</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{policy.coverage}%</div>
                        <div className="text-xs text-muted-foreground">Coverage</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{policy.premiumRate}%</div>
                        <div className="text-xs text-muted-foreground">Premium Rate</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{policy.claimSettlement}</div>
                        <div className="text-xs text-muted-foreground">Settlement</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Weather Perils Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {policy.weatherPerils.map((peril, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {peril}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {policy.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Crops Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {policy.cropsCovered.map((crop, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700">
                            {crop}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Premium
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Policy Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Claims History */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-green-500" />
                    <span>Claims History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {claimHistory.map((claim) => (
                      <div key={claim.id} className="p-4 border border-border/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{claim.policyNumber}</div>
                          <Badge className={getStatusColor(claim.status)}>
                            {claim.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                          <div>Crop: {claim.cropAffected}</div>
                          <div>Peril: {claim.perilType}</div>
                          <div>Claim: ₹{claim.claimAmount}</div>
                          <div>Settled: ₹{claim.settledAmount}</div>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          Filed: {claim.claimDate}
                          {claim.settlementTime > 0 && ` • Settled in ${claim.settlementTime} days`}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* New Claim */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-blue-500" />
                    <span>File New Claim</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Policy Number</label>
                    <Input placeholder="Enter policy number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Peril Type</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="">Select peril</option>
                      <option value="drought">Drought</option>
                      <option value="flood">Flood</option>
                      <option value="hail">Hailstorm</option>
                      <option value="pest">Pest Attack</option>
                      <option value="disease">Disease Outbreak</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Affected Area</label>
                    <Input placeholder="Area in acres" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Loss Percentage</label>
                    <Input placeholder="Estimated loss %" type="number" />
                  </div>

                  <div className="p-4 border-2 border-dashed border-border rounded-lg text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Upload damage photos</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose Files
                    </Button>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-900 text-sm mb-2">AI Damage Assessment Available</h4>
                    <p className="text-xs text-blue-700">
                      Upload clear photos of damaged crops for instant AI-powered damage assessment and faster claim processing.
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      <FileText className="w-4 h-4 mr-2" />
                      Submit Claim
                    </Button>
                    <Button variant="outline">
                      <Camera className="w-4 h-4 mr-2" />
                      AI Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="apply" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Apply for Insurance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Insurance Type</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="pmfby">PMFBY (Recommended)</option>
                      <option value="wbci">Weather Based Crop Insurance</option>
                      <option value="yield">Yield Protection Plan</option>
                      <option value="revenue">Revenue Protection</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Primary Crop</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="maize">Maize</option>
                      <option value="cotton">Cotton</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Land Area (Acres)</label>
                    <Input placeholder="Enter total land area" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Sum Insured (₹)</label>
                    <Input placeholder="Desired coverage amount" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Sowing Date</label>
                    <Input type="date" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Previous Insurance</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="yes">Yes, had insurance before</option>
                      <option value="no">No, first time</option>
                    </select>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Dynamic Premium Calculation</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Premium:</span>
                        <span>₹2,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Adjustment:</span>
                        <span className="text-green-600">-₹200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Government Subsidy:</span>
                        <span className="text-green-600">-₹900</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between font-bold text-green-700">
                        <span>Final Premium:</span>
                        <span>₹900</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coverage:</span>
                        <span>₹50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Effective Rate:</span>
                        <span>1.8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Required Documents:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Land ownership documents
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Aadhaar Card
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Bank account details
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Sowing certificate
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                  <Button variant="outline" size="lg">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Apply via Mobile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};