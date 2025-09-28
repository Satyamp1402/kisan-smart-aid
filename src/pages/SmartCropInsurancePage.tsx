import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield,
  Cloud,
  Calculator,
  FileText,
  Camera,
  Satellite,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  MapPin,
  Clock,
  Percent,
  BarChart3,
  PieChart,
  Target,
  Award,
  Lightbulb,
  Info,
  Download,
  Share,
  Phone,
  Eye,
  Users,
  Bell,
  Settings,
  Leaf,
  CloudRain,
  Thermometer,
  Wind,
  Zap,
  Building,
  Star,
  Upload,
  RefreshCw,
  Smartphone,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";

interface InsurancePolicy {
  policyId: string;
  policyName: string;
  provider: string;
  coverage: string;
  sumInsured: number;
  premiumAmount: number;
  premiumRate: number;
  tenure: number;
  riskFactors: string[];
  features: string[];
  claimSettlement: string;
  eligibility: string[];
}

interface RiskAssessment {
  factorName: string;
  currentValue: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  impactOnPremium: number;
  recommendation: string;
  historicalTrend: 'Improving' | 'Stable' | 'Worsening';
}

interface ClaimHistory {
  claimId: string;
  date: string;
  claimType: string;
  damageType: string;
  claimedAmount: number;
  settledAmount: number;
  status: 'Settled' | 'Processing' | 'Rejected';
  settlementDays: number;
  assessmentMethod: string;
}

export const SmartCropInsurancePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [farmArea, setFarmArea] = useState('5');
  const [claimImage, setClaimImage] = useState<string | null>(null);

  const insurancePolicies: InsurancePolicy[] = [
    {
      policyId: 'PMFBY-2024-001',
      policyName: 'Pradhan Mantri Fasal Bima Yojana',
      provider: 'Agriculture Insurance Company',
      coverage: 'Comprehensive Crop Insurance',
      sumInsured: 250000,
      premiumAmount: 3750,
      premiumRate: 1.5,
      tenure: 1,
      riskFactors: ['Weather', 'Pest & Disease', 'Market Price'],
      features: ['Government Subsidy 80%', 'Satellite monitoring', 'Quick claim settlement', 'Pre & Post harvest coverage'],
      claimSettlement: '30 days',
      eligibility: ['Land ownership proof', 'Crop sowing certificate', 'Bank account']
    },
    {
      policyId: 'WBCIS-2024-002',
      policyName: 'Weather Based Crop Insurance',
      provider: 'IFFCO Tokio General Insurance',
      coverage: 'Weather Risk Protection',
      sumInsured: 200000,
      premiumAmount: 8000,
      premiumRate: 4.0,
      tenure: 1,
      riskFactors: ['Rainfall', 'Temperature', 'Humidity', 'Wind Speed'],
      features: ['IoT weather stations', 'Real-time monitoring', 'Automated claims', 'No crop cutting experiments'],
      claimSettlement: '15 days',
      eligibility: ['Farm location coordinates', 'Crop variety details', 'Sowing dates']
    },
    {
      policyId: 'HYBRID-2024-003',
      policyName: 'AI-Enhanced Hybrid Insurance',
      provider: 'Future Generali India',
      coverage: 'Smart Comprehensive Coverage',
      sumInsured: 300000,
      premiumAmount: 12000,
      premiumRate: 4.0,
      tenure: 1,
      riskFactors: ['All Weather Risks', 'Pest/Disease', 'Market Volatility', 'Input Cost'],
      features: ['AI damage assessment', 'Drone surveys', 'Satellite monitoring', 'Dynamic premium pricing'],
      claimSettlement: '10 days',
      eligibility: ['Digital farm records', 'GPS coordinates', 'Previous yield data']
    }
  ];

  const riskAssessments: RiskAssessment[] = [
    {
      factorName: 'Weather Risk',
      currentValue: 35,
      riskLevel: 'Medium',
      impactOnPremium: -0.5,
      recommendation: 'Install weather monitoring devices for better risk assessment',
      historicalTrend: 'Stable'
    },
    {
      factorName: 'Pest & Disease',
      currentValue: 20,
      riskLevel: 'Low',
      impactOnPremium: -0.8,
      recommendation: 'Continue IPM practices and regular field monitoring',
      historicalTrend: 'Improving'
    },
    {
      factorName: 'Market Price Volatility',
      currentValue: 45,
      riskLevel: 'Medium',
      impactOnPremium: 0.3,
      recommendation: 'Consider price insurance add-on for better protection',
      historicalTrend: 'Worsening'
    },
    {
      factorName: 'Climate Change Impact',
      currentValue: 55,
      riskLevel: 'High',
      impactOnPremium: 1.2,
      recommendation: 'Adopt climate-resilient varieties and practices',
      historicalTrend: 'Worsening'
    }
  ];

  const claimHistory: ClaimHistory[] = [
    {
      claimId: 'CLM-2023-4567',
      date: '2023-12-15',
      claimType: 'Hailstorm Damage',
      damageType: 'Physical Damage',
      claimedAmount: 125000,
      settledAmount: 115000,
      status: 'Settled',
      settlementDays: 18,
      assessmentMethod: 'AI + Satellite'
    },
    {
      claimId: 'CLM-2023-3421',
      date: '2023-08-22',
      claimType: 'Drought Loss',
      damageType: 'Yield Loss',
      claimedAmount: 89000,
      settledAmount: 82000,
      status: 'Settled',
      settlementDays: 25,
      assessmentMethod: 'Traditional Survey'
    },
    {
      claimId: 'CLM-2024-1234',
      date: '2024-03-10',
      claimType: 'Pest Attack',
      damageType: 'Quality Loss',
      claimedAmount: 45000,
      settledAmount: 0,
      status: 'Processing',
      settlementDays: 12,
      assessmentMethod: 'AI Analysis Pending'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Settled': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'Improving': return <TrendingDown className="w-4 h-4 text-green-500" />;
      case 'Stable': return <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>;
      case 'Worsening': return <TrendingUp className="w-4 h-4 text-red-500" />;
      default: return null;
    }
  };

  const calculateDynamicPremium = () => {
    const basePremium = 6250;
    let adjustment = 0;
    
    riskAssessments.forEach(risk => {
      adjustment += (risk.impactOnPremium / 100) * basePremium;
    });
    
    return Math.round(basePremium + adjustment);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setClaimImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Smart Crop Insurance</h1>
                  <p className="text-sm text-muted-foreground">AI-powered dynamic premium calculation and instant claim processing</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">
                <Calculator className="w-3 h-3 mr-1" />
                Dynamic Premium
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                <Bot className="w-3 h-3 mr-1" />
                AI Assessment
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Insurance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{calculateDynamicPremium().toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Dynamic Premium</div>
              <div className="text-xs text-blue-600 mt-1">AI Optimized</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹3L</div>
              <div className="text-sm text-muted-foreground">Maximum Coverage</div>
              <div className="text-xs text-green-600 mt-1">Per Acre: ₹60k</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">10 Days</div>
              <div className="text-sm text-muted-foreground">Fastest Settlement</div>
              <div className="text-xs text-orange-600 mt-1">AI Powered</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">92%</div>
              <div className="text-sm text-muted-foreground">Claim Success Rate</div>
              <div className="text-xs text-purple-600 mt-1">Industry Leading</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Risk Assessment</TabsTrigger>
            <TabsTrigger value="policies">Insurance Plans</TabsTrigger>
            <TabsTrigger value="claims">Claim History</TabsTrigger>
            <TabsTrigger value="apply">Apply & AI Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-red-500" />
                    <span>Real-time Risk Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {riskAssessments.map((risk, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="font-medium text-sm">{risk.factorName}</div>
                          {getTrendIcon(risk.historicalTrend)}
                        </div>
                        <Badge className={getRiskColor(risk.riskLevel)} size="sm">
                          {risk.riskLevel}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Risk Level: {risk.currentValue}%</span>
                          <span className={risk.impactOnPremium > 0 ? 'text-red-600' : 'text-green-600'}>
                            Premium Impact: {risk.impactOnPremium > 0 ? '+' : ''}{risk.impactOnPremium}%
                          </span>
                        </div>
                        <Progress value={risk.currentValue} className="h-2" />
                      </div>
                      
                      <div className="p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
                        💡 {risk.recommendation}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5 text-green-500" />
                    <span>Premium Calculation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">₹{calculateDynamicPremium().toLocaleString()}</div>
                    <div className="text-blue-700">AI-Optimized Premium</div>
                    <Badge className="mt-2 bg-green-100 text-green-800">Personalized Rate</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-secondary/10 rounded">
                      <span className="text-sm">Base Premium (5 acres)</span>
                      <span className="font-medium">₹6,250</span>
                    </div>
                    
                    {riskAssessments.map((risk, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-secondary/10 rounded text-sm">
                        <span>{risk.factorName}</span>
                        <span className={risk.impactOnPremium > 0 ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
                          {risk.impactOnPremium > 0 ? '+' : ''}₹{Math.round((risk.impactOnPremium / 100) * 6250)}
                        </span>
                      </div>
                    ))}
                    
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center font-bold">
                        <span>Final Premium</span>
                        <span className="text-lg text-blue-600">₹{calculateDynamicPremium().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Shield className="w-4 h-4 mr-2" />
                    Get Instant Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <div className="space-y-4">
              {insurancePolicies.map((policy, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-blue-500" />
                          {policy.policyName}
                        </h3>
                        <p className="text-sm text-muted-foreground">{policy.provider}</p>
                        <p className="text-sm text-blue-600">{policy.coverage}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₹{policy.premiumAmount.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Premium/Year</div>
                        <div className="text-xs text-green-600">{policy.premiumRate}% of Sum Insured</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">₹{(policy.sumInsured / 100000).toFixed(1)}L</div>
                        <div className="text-xs text-blue-700">Sum Insured</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{policy.claimSettlement}</div>
                        <div className="text-xs text-green-700">Claim Settlement</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{policy.tenure} Year</div>
                        <div className="text-xs text-purple-700">Policy Tenure</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{policy.riskFactors.length}</div>
                        <div className="text-xs text-orange-700">Risks Covered</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="font-medium text-sm mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {policy.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} className="bg-blue-100 text-blue-800">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-medium text-sm mb-2">Risk Factors Covered:</div>
                        <div className="flex flex-wrap gap-2">
                          {policy.riskFactors.map((risk, riskIndex) => (
                            <Badge key={riskIndex} variant="outline" className="text-xs">
                              {risk}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <FileText className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate
                      </Button>
                      <Button variant="outline">
                        <Info className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-purple-500" />
                  <span>Claim History & Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {claimHistory.map((claim, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{claim.claimType}</h3>
                            <p className="text-sm text-muted-foreground">Claim ID: {claim.claimId}</p>
                            <p className="text-sm text-blue-600">{claim.damageType}</p>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(claim.status)}>
                              {claim.status}
                            </Badge>
                            <div className="text-sm text-muted-foreground mt-1">{claim.date}</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-3 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">₹{claim.claimedAmount.toLocaleString()}</div>
                            <div className="text-xs text-orange-700">Claimed Amount</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">
                              ₹{claim.settledAmount ? claim.settledAmount.toLocaleString() : 'Pending'}
                            </div>
                            <div className="text-xs text-green-700">Settled Amount</div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{claim.settlementDays} Days</div>
                            <div className="text-xs text-blue-700">
                              {claim.status === 'Processing' ? 'Processing Time' : 'Settlement Days'}
                            </div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="text-sm font-bold text-purple-600">{claim.assessmentMethod}</div>
                            <div className="text-xs text-purple-700">Assessment Method</div>
                          </div>
                        </div>

                        {claim.status === 'Processing' && (
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="text-blue-800 text-sm">
                                <strong>Status Update:</strong> AI damage assessment in progress. 
                                Satellite imagery analysis completed. Field verification pending.
                              </div>
                              <Button variant="outline" size="sm">
                                <RefreshCw className="w-3 h-3 mr-1" />
                                Update
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Claims Performance</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-xs text-green-700">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">18 Days</div>
                      <div className="text-xs text-blue-700">Avg Settlement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">₹2.5L</div>
                      <div className="text-xs text-purple-700">Total Settled</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span>Insurance Application</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Farmer Name</label>
                      <Input placeholder="Enter full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Mobile Number</label>
                      <Input placeholder="Enter mobile number" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Farm Location</label>
                    <Input placeholder="Village, District, State" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Land Area</label>
                      <Input placeholder="Area in acres" type="number" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Crop Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="rice">Rice</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Insurance Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pmfby">PMFBY - Comprehensive</SelectItem>
                        <SelectItem value="wbcis">Weather Based</SelectItem>
                        <SelectItem value="hybrid">AI Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Shield className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-green-500" />
                    <span>AI Damage Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Upload photos of crop damage for instant AI analysis and claim processing
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {!claimImage ? (
                      <div>
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">Upload crop damage photos</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="damage-upload"
                        />
                        <label htmlFor="damage-upload">
                          <Button className="bg-green-600 hover:bg-green-700">
                            <Upload className="w-4 h-4 mr-2" />
                            Select Images
                          </Button>
                        </label>
                      </div>
                    ) : (
                      <div>
                        <img src={claimImage} alt="Damage assessment" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <div className="text-left space-y-2">
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                            <div className="font-medium text-blue-800 flex items-center">
                              <Bot className="w-4 h-4 mr-2" />
                              AI Analysis Results
                            </div>
                            <div className="text-sm text-blue-700 mt-2 space-y-1">
                              <div>• <strong>Damage Type:</strong> Hailstorm damage detected</div>
                              <div>• <strong>Severity:</strong> Moderate (65% crop loss)</div>
                              <div>• <strong>Affected Area:</strong> ~3.2 acres</div>
                              <div>• <strong>Estimated Claim:</strong> ₹1,25,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      <Satellite className="w-4 h-4 mr-2" />
                      Request Satellite Analysis
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Schedule Field Visit
                    </Button>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Quick Tips</span>
                    </div>
                    <div className="text-xs text-yellow-700 space-y-1">
                      <div>• Take photos in good lighting conditions</div>
                      <div>• Include GPS location data</div>
                      <div>• Capture multiple angles of damage</div>
                      <div>• Upload within 72 hours of damage</div>
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