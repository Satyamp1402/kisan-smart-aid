import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard,
  TrendingUp,
  Calculator,
  User,
  Building,
  MapPin,
  Star,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  DollarSign,
  Calendar,
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
  Clock,
  Leaf,
  Tractor,
  CloudRain,
  Zap,
  Eye,
  Users,
  Bell,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

interface CreditProfile {
  farmerId: string;
  name: string;
  farmSize: number;
  location: string;
  mainCrops: string[];
  experience: number;
  aiCreditScore: number;
  traditionalCreditScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  yieldPrediction: number;
  incomeStability: number;
  paymentHistory: number;
  collateralValue: number;
}

interface LoanOffer {
  lenderId: string;
  lenderName: string;
  loanType: string;
  maxAmount: number;
  interestRate: number;
  tenure: number;
  processingFee: number;
  collateralRequired: boolean;
  approvalTime: string;
  specialFeatures: string[];
  riskAssessment: string;
  emi: number;
}

interface YieldBasedAssessment {
  cropType: string;
  expectedYield: number;
  marketPrice: number;
  grossIncome: number;
  productionCost: number;
  netIncome: number;
  profitMargin: number;
  riskFactors: string[];
}

export const AICreditScoringPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [farmSize, setFarmSize] = useState('5');
  const [experience, setExperience] = useState('10');

  const creditProfile: CreditProfile = {
    farmerId: 'KSA-2024-7890',
    name: 'Rajesh Kumar Sharma',
    farmSize: 5,
    location: 'Hapur, Uttar Pradesh',
    mainCrops: ['Wheat', 'Rice', 'Sugarcane'],
    experience: 10,
    aiCreditScore: 748,
    traditionalCreditScore: 582,
    riskLevel: 'Low',
    yieldPrediction: 85,
    incomeStability: 78,
    paymentHistory: 92,
    collateralValue: 1250000
  };

  const loanOffers: LoanOffer[] = [
    {
      lenderId: 'HDFC-AGRI',
      lenderName: 'HDFC Bank - Agri Business',
      loanType: 'Crop Loan',
      maxAmount: 500000,
      interestRate: 7.5,
      tenure: 12,
      processingFee: 0.5,
      collateralRequired: false,
      approvalTime: '24 hours',
      specialFeatures: ['Flexible repayment', 'Crop insurance included', 'No prepayment penalty'],
      riskAssessment: 'Low Risk - AI Score Based',
      emi: 43200
    },
    {
      lenderId: 'SBI-AGRI',
      lenderName: 'State Bank of India - KCC',
      loanType: 'Kisan Credit Card',
      maxAmount: 750000,
      interestRate: 6.8,
      tenure: 60,
      processingFee: 0,
      collateralRequired: true,
      approvalTime: '3-5 days',
      specialFeatures: ['Government subsidy', 'Lower interest rate', 'Multi-purpose usage'],
      riskAssessment: 'Low Risk - Yield Based',
      emi: 15200
    },
    {
      lenderId: 'FINTECH-AGRI',
      lenderName: 'AgriFintech Solutions',
      loanType: 'Digital Farm Loan',
      maxAmount: 300000,
      interestRate: 9.2,
      tenure: 18,
      processingFee: 1,
      collateralRequired: false,
      approvalTime: '2 hours',
      specialFeatures: ['Instant approval', 'Digital documentation', 'Weekly EMI options'],
      riskAssessment: 'Medium Risk - Tech Enabled',
      emi: 18500
    },
    {
      lenderId: 'COOP-BANK',
      lenderName: 'District Cooperative Bank',
      loanType: 'Seasonal Crop Loan',
      maxAmount: 400000,
      interestRate: 8.5,
      tenure: 9,
      processingFee: 0.25,
      collateralRequired: false,
      approvalTime: '1-2 days',
      specialFeatures: ['Local bank support', 'Agricultural advisor', 'Seasonal flexibility'],
      riskAssessment: 'Low Risk - Community Based',
      emi: 46800
    }
  ];

  const yieldAssessments: YieldBasedAssessment[] = [
    {
      cropType: 'Wheat',
      expectedYield: 45,
      marketPrice: 2200,
      grossIncome: 198000,
      productionCost: 85000,
      netIncome: 113000,
      profitMargin: 57.1,
      riskFactors: ['Weather dependency', 'Price volatility']
    },
    {
      cropType: 'Rice',
      expectedYield: 55,
      marketPrice: 1900,
      grossIncome: 208500,
      productionCost: 95000,
      netIncome: 113500,
      profitMargin: 54.4,
      riskFactors: ['Water availability', 'Pest attacks']
    },
    {
      cropType: 'Sugarcane',
      expectedYield: 650,
      marketPrice: 350,
      grossIncome: 227500,
      productionCost: 125000,
      netIncome: 102500,
      profitMargin: 45.1,
      riskFactors: ['Processing delays', 'Market fluctuations']
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

  const getScoreColor = (score: number) => {
    if (score >= 700) return 'text-green-600';
    if (score >= 600) return 'text-yellow-600';
    return 'text-red-600';
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
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AI Credit Scoring</h1>
                  <p className="text-sm text-muted-foreground">Yield-based credit assessment and personalized loan offers</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">
                <TrendingUp className="w-3 h-3 mr-1" />
                AI Score: {creditProfile.aiCreditScore}
              </Badge>
              <Badge className={getRiskColor(creditProfile.riskLevel)}>
                {creditProfile.riskLevel} Risk
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Credit Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className={`text-2xl font-bold ${getScoreColor(creditProfile.aiCreditScore)}`}>
                {creditProfile.aiCreditScore}
              </div>
              <div className="text-sm text-muted-foreground">AI Credit Score</div>
              <div className="text-xs text-blue-600 mt-1">+166 vs Traditional</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Leaf className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{creditProfile.yieldPrediction}%</div>
              <div className="text-sm text-muted-foreground">Yield Confidence</div>
              <div className="text-xs text-green-600 mt-1">Above Average</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <DollarSign className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹7.5L</div>
              <div className="text-sm text-muted-foreground">Max Loan Eligible</div>
              <div className="text-xs text-purple-600 mt-1">Best Rate: 6.8%</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2 Hours</div>
              <div className="text-sm text-muted-foreground">Fastest Approval</div>
              <div className="text-xs text-orange-600 mt-1">Digital Process</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Credit Profile</TabsTrigger>
            <TabsTrigger value="assessment">Yield Assessment</TabsTrigger>
            <TabsTrigger value="offers">Loan Offers</TabsTrigger>
            <TabsTrigger value="analysis">Risk Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Farmer Profile */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span>Farmer Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Name</div>
                      <div className="font-medium">{creditProfile.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Farmer ID</div>
                      <div className="font-medium">{creditProfile.farmerId}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {creditProfile.location}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                      <div className="font-medium">{creditProfile.experience} years</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Farm Size</div>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl font-bold text-green-600">{creditProfile.farmSize}</div>
                      <div className="text-green-600">acres</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Main Crops</div>
                    <div className="flex flex-wrap gap-2">
                      {creditProfile.mainCrops.map((crop, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800">
                          {crop}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Collateral Value</div>
                    <div className="text-lg font-bold text-blue-600">
                      ₹{(creditProfile.collateralValue / 100000).toFixed(1)}L
                    </div>
                    <div className="text-xs text-muted-foreground">Land + Equipment</div>
                  </div>
                </CardContent>
              </Card>

              {/* Credit Score Breakdown */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <span>Credit Score Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(creditProfile.aiCreditScore)}`}>
                      {creditProfile.aiCreditScore}
                    </div>
                    <div className="text-sm text-muted-foreground">AI Credit Score</div>
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Excellent Rating
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Yield Prediction</span>
                        <span className="text-sm font-bold">{creditProfile.yieldPrediction}%</span>
                      </div>
                      <Progress value={creditProfile.yieldPrediction} className="h-3" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Income Stability</span>
                        <span className="text-sm font-bold">{creditProfile.incomeStability}%</span>
                      </div>
                      <Progress value={creditProfile.incomeStability} className="h-3" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Payment History</span>
                        <span className="text-sm font-bold">{creditProfile.paymentHistory}%</span>
                      </div>
                      <Progress value={creditProfile.paymentHistory} className="h-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{creditProfile.aiCreditScore}</div>
                      <div className="text-xs text-blue-700">AI Score</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-lg font-bold text-orange-600">{creditProfile.traditionalCreditScore}</div>
                      <div className="text-xs text-orange-700">Traditional Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-green-500" />
                  <span>Yield-Based Credit Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {yieldAssessments.map((assessment, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg flex items-center">
                            <Leaf className="w-5 h-5 mr-2 text-green-500" />
                            {assessment.cropType}
                          </h3>
                          <Badge className="bg-green-100 text-green-800">
                            {assessment.profitMargin.toFixed(1)}% Profit Margin
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{assessment.expectedYield} Q</div>
                            <div className="text-xs text-muted-foreground">Expected Yield/Acre</div>
                          </div>
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-green-600">₹{assessment.marketPrice.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Market Price/Quintal</div>
                          </div>
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">₹{assessment.grossIncome.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Gross Income/Acre</div>
                          </div>
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">₹{assessment.netIncome.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Net Income/Acre</div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="font-medium text-sm">Risk Factors:</div>
                          <div className="flex flex-wrap gap-2">
                            {assessment.riskFactors.map((risk, riskIndex) => (
                              <Badge key={riskIndex} variant="outline" className="text-xs">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                {risk}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="font-medium text-blue-800 text-sm mb-1">Credit Assessment:</div>
                          <div className="text-blue-700 text-sm">
                            Based on {assessment.cropType.toLowerCase()} yield prediction, loan repayment capacity is 
                            <strong> ₹{Math.round(assessment.netIncome * 0.6).toLocaleString()}/acre/season</strong>.
                            Recommended loan amount: <strong>₹{Math.round(assessment.netIncome * creditProfile.farmSize * 0.8).toLocaleString()}</strong>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offers" className="space-y-6">
            <div className="space-y-4">
              {loanOffers.map((offer, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg flex items-center">
                          <Building className="w-5 h-5 mr-2 text-blue-500" />
                          {offer.lenderName}
                        </h3>
                        <p className="text-sm text-muted-foreground">{offer.loanType}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₹{(offer.maxAmount / 100000).toFixed(1)}L</div>
                        <div className="text-sm text-muted-foreground">Max Amount</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{offer.interestRate}%</div>
                        <div className="text-xs text-green-700">Interest Rate</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{offer.tenure} months</div>
                        <div className="text-xs text-blue-700">Tenure</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">₹{offer.emi.toLocaleString()}</div>
                        <div className="text-xs text-purple-700">Monthly EMI</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{offer.approvalTime}</div>
                        <div className="text-xs text-orange-700">Approval Time</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="font-medium text-sm mb-2">Special Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {offer.specialFeatures.map((feature, featureIndex) => (
                            <Badge key={featureIndex} className="bg-blue-100 text-blue-800">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Shield className={`w-4 h-4 ${offer.collateralRequired ? 'text-orange-500' : 'text-green-500'}`} />
                        <span className="text-sm">
                          {offer.collateralRequired ? 'Collateral Required' : 'No Collateral Required'}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-purple-600">
                        {offer.riskAssessment}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <FileText className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <Info className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                      <Button variant="outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Risk Assessment */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-red-500" />
                    <span>Risk Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge className={getRiskColor(creditProfile.riskLevel)} size="lg">
                      {creditProfile.riskLevel} Risk Profile
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800">Strengths</span>
                      </div>
                      <div className="text-sm text-green-700 space-y-1">
                        <div>• High AI credit score (748)</div>
                        <div>• Strong yield prediction confidence (85%)</div>
                        <div>• Excellent payment history (92%)</div>
                        <div>• Diverse crop portfolio</div>
                        <div>• 10+ years farming experience</div>
                      </div>
                    </div>

                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Areas to Monitor</span>
                      </div>
                      <div className="text-sm text-yellow-700 space-y-1">
                        <div>• Weather dependency for crop yields</div>
                        <div>• Market price volatility</div>
                        <div>• Seasonal income fluctuations</div>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Recommendations</span>
                      </div>
                      <div className="text-sm text-blue-700 space-y-1">
                        <div>• Consider crop insurance for risk mitigation</div>
                        <div>• Maintain emergency fund equivalent to 3 months income</div>
                        <div>• Diversify with off-season crops</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI vs Traditional Comparison */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5 text-purple-500" />
                    <span>AI vs Traditional Scoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">{creditProfile.aiCreditScore}</div>
                      <div className="text-sm text-green-700">AI Credit Score</div>
                      <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                    </div>
                    <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600">{creditProfile.traditionalCreditScore}</div>
                      <div className="text-sm text-orange-700">Traditional Score</div>
                      <Badge className="mt-2 bg-orange-100 text-orange-800">Fair</Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">AI Score Advantages:</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-2 bg-secondary/10 rounded">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">Yield-Based Assessment</div>
                          <div className="text-xs text-muted-foreground">Considers future earning potential</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-2 bg-secondary/10 rounded">
                        <CloudRain className="w-4 h-4 text-blue-500" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">Weather & Climate Data</div>
                          <div className="text-xs text-muted-foreground">Real-time environmental factors</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-2 bg-secondary/10 rounded">
                        <BarChart3 className="w-4 h-4 text-purple-500" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">Market Intelligence</div>
                          <div className="text-xs text-muted-foreground">Price trends and demand analysis</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-2 bg-secondary/10 rounded">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">Alternative Data</div>
                          <div className="text-xs text-muted-foreground">IoT sensors, satellite imagery</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                    <div className="font-medium text-blue-800 mb-2">Score Impact:</div>
                    <div className="text-sm text-blue-700">
                      AI scoring increases loan eligibility by <strong>₹2.5L</strong> and 
                      reduces interest rates by up to <strong>1.8%</strong> compared to traditional scoring.
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