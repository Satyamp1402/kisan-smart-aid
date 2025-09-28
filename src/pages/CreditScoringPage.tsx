import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard,
  TrendingUp,
  DollarSign,
  Brain,
  Calculator,
  Shield,
  CheckCircle,
  AlertTriangle,
  Star,
  Users,
  Clock,
  Target,
  Award,
  Zap,
  FileText,
  Eye,
  Smartphone,
  BarChart3,
  PieChart,
  Lightbulb,
  Building,
  Banknote,
  Percent,
  Calendar,
  MapPin,
  Leaf,
  Tractor,
  Home,
  Phone,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

interface CreditProfile {
  farmerId: string;
  name: string;
  location: string;
  landSize: number;
  crops: string[];
  creditScore: number;
  yieldPrediction: number;
  riskLevel: 'low' | 'medium' | 'high';
  loanEligibility: number;
  interestRate: number;
  repaymentCapacity: number;
  assets: {
    land: number;
    equipment: number;
    livestock: number;
  };
  income: {
    agricultural: number;
    nonAgricultural: number;
    total: number;
  };
}

interface LoanOffer {
  id: string;
  lenderName: string;
  lenderType: 'Bank' | 'NBFC' | 'MFI' | 'Cooperative';
  amount: number;
  interestRate: number;
  tenure: number;
  processingFee: number;
  collateral: string;
  approvalTime: string;
  features: string[];
  eligibility: string;
  rating: number;
}

interface CreditFactor {
  factor: string;
  weight: number;
  score: number;
  impact: 'positive' | 'negative' | 'neutral';
  recommendation: string;
}

export const CreditScoringPage = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');

  const creditProfile: CreditProfile = {
    farmerId: 'F001',
    name: 'Rajesh Kumar',
    location: 'Village Rampur, Haryana',
    landSize: 5.5,
    crops: ['Wheat', 'Rice', 'Mustard'],
    creditScore: 742,
    yieldPrediction: 85,
    riskLevel: 'low',
    loanEligibility: 350000,
    interestRate: 8.5,
    repaymentCapacity: 92,
    assets: {
      land: 2200000,
      equipment: 150000,
      livestock: 80000
    },
    income: {
      agricultural: 280000,
      nonAgricultural: 45000,
      total: 325000
    }
  };

  const loanOffers: LoanOffer[] = [
    {
      id: '1',
      lenderName: 'Punjab National Bank',
      lenderType: 'Bank',
      amount: 350000,
      interestRate: 8.5,
      tenure: 12,
      processingFee: 5000,
      collateral: 'Land documents',
      approvalTime: '7-10 days',
      features: ['No prepayment penalty', 'Flexible EMI', 'Digital processing'],
      eligibility: 'Land ownership, Good credit score',
      rating: 4.5
    },
    {
      id: '2',
      lenderName: 'Kisan Credit Cooperative',
      lenderType: 'Cooperative',
      amount: 250000,
      interestRate: 7.8,
      tenure: 10,
      processingFee: 2500,
      collateral: 'Crop insurance',
      approvalTime: '3-5 days',
      features: ['Lower interest', 'Community support', 'Quick approval'],
      eligibility: 'Cooperative member, Regular farming',
      rating: 4.2
    },
    {
      id: '3',
      lenderName: 'AgriFinance NBFC',
      lenderType: 'NBFC',
      amount: 300000,
      interestRate: 9.2,
      tenure: 18,
      processingFee: 7500,
      collateral: 'Equipment + Land',
      approvalTime: '5-7 days',
      features: ['Higher loan amount', 'Longer tenure', 'Equipment financing'],
      eligibility: 'Commercial farming, Asset backing',
      rating: 4.0
    }
  ];

  const creditFactors: CreditFactor[] = [
    {
      factor: 'Yield Prediction',
      weight: 25,
      score: 85,
      impact: 'positive',
      recommendation: 'Excellent predicted yield based on AI analysis'
    },
    {
      factor: 'Land Ownership',
      weight: 20,
      score: 95,
      impact: 'positive',
      recommendation: 'Clear land titles provide strong collateral'
    },
    {
      factor: 'Income Stability',
      weight: 20,
      score: 78,
      impact: 'positive',
      recommendation: 'Diversified crop portfolio ensures stable income'
    },
    {
      factor: 'Credit History',
      weight: 15,
      score: 88,
      impact: 'positive',
      recommendation: 'Good repayment track record'
    },
    {
      factor: 'Market Risk',
      weight: 10,
      score: 65,
      impact: 'neutral',
      recommendation: 'Monitor price volatility for selected crops'
    },
    {
      factor: 'Climate Risk',
      weight: 10,
      score: 72,
      impact: 'neutral',
      recommendation: 'Consider crop insurance for weather protection'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 750) return 'bg-green-100';
    if (score >= 650) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLenderTypeColor = (type: string) => {
    switch (type) {
      case 'Bank': return 'bg-blue-100 text-blue-800';
      case 'NBFC': return 'bg-green-100 text-green-800';
      case 'MFI': return 'bg-orange-100 text-orange-800';
      case 'Cooperative': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AI Credit Scoring</h1>
                  <p className="text-sm text-muted-foreground">Yield-based credit assessment for better loan access</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">
                <Brain className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Credit Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className={`border-border/50 backdrop-blur-sm text-center ${getScoreBg(creditProfile.creditScore)}`}>
            <CardContent className="p-6">
              <div className={`text-3xl font-bold ${getScoreColor(creditProfile.creditScore)} mb-2`}>
                {creditProfile.creditScore}
              </div>
              <div className="text-sm font-medium">AI Credit Score</div>
              <Badge className={getRiskColor(creditProfile.riskLevel)} size="sm">
                {creditProfile.riskLevel} risk
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Banknote className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{(creditProfile.loanEligibility / 1000)}K</div>
              <div className="text-sm text-muted-foreground">Max Loan Eligible</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Percent className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{creditProfile.interestRate}%</div>
              <div className="text-sm text-muted-foreground">Best Interest Rate</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{creditProfile.yieldPrediction}%</div>
              <div className="text-sm text-muted-foreground">Yield Prediction</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Credit Profile</TabsTrigger>
            <TabsTrigger value="offers">Loan Offers</TabsTrigger>
            <TabsTrigger value="analysis">Score Analysis</TabsTrigger>
            <TabsTrigger value="apply">Apply Now</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
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
                    <div className="col-span-2">
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {creditProfile.location}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Land Size</div>
                      <div className="font-medium">{creditProfile.landSize} acres</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Crops</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {creditProfile.crops.map((crop, index) => (
                          <Badge key={index} variant="secondary" size="sm">
                            {crop}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Profile */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <span>Financial Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Annual Income</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Agricultural Income</span>
                        <span className="font-medium">₹{(creditProfile.income.agricultural / 1000)}K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Non-Agricultural Income</span>
                        <span className="font-medium">₹{(creditProfile.income.nonAgricultural / 1000)}K</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold">
                        <span>Total Income</span>
                        <span className="text-green-600">₹{(creditProfile.income.total / 1000)}K</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Assets Value</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Land Value</span>
                        <span className="font-medium">₹{(creditProfile.assets.land / 100000)}L</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Equipment</span>
                        <span className="font-medium">₹{(creditProfile.assets.equipment / 1000)}K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Livestock</span>
                        <span className="font-medium">₹{(creditProfile.assets.livestock / 1000)}K</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Repayment Capacity</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={creditProfile.repaymentCapacity} className="flex-1" />
                      <span className="text-green-700 font-bold">{creditProfile.repaymentCapacity}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="offers" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Personalized Loan Offers</h2>
              <Badge className="bg-green-100 text-green-800">
                {loanOffers.length} offers available
              </Badge>
            </div>

            <div className="space-y-4">
              {loanOffers.map((offer) => (
                <Card key={offer.id} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {offer.lenderName.substring(0, 2)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{offer.lenderName}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getLenderTypeColor(offer.lenderType)}>
                              {offer.lenderType}
                            </Badge>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm">{offer.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₹{(offer.amount / 1000)}K</div>
                        <div className="text-sm text-muted-foreground">Max Amount</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{offer.interestRate}%</div>
                        <div className="text-xs text-muted-foreground">Interest Rate</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{offer.tenure}M</div>
                        <div className="text-xs text-muted-foreground">Tenure</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">₹{offer.processingFee}</div>
                        <div className="text-xs text-muted-foreground">Processing Fee</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{offer.approvalTime}</div>
                        <div className="text-xs text-muted-foreground">Approval Time</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {offer.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm font-medium text-blue-800">Collateral Required:</div>
                      <div className="text-sm text-blue-700">{offer.collateral}</div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <FileText className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        EMI Calculator
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
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
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <span>Credit Score Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {creditFactors.map((factor, index) => (
                    <div key={index} className="p-4 border border-border/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{factor.factor}</span>
                          <Badge variant="outline" className="text-xs">
                            {factor.weight}% weight
                          </Badge>
                        </div>
                        <div className={`font-bold ${getImpactColor(factor.impact)}`}>
                          {factor.score}/100
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <Progress value={factor.score} className="h-2" />
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {factor.recommendation}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">AI Recommendations</span>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Your yield prediction score is excellent, qualifying you for premium rates</li>
                    <li>• Consider diversifying crops to further reduce market risk</li>
                    <li>• Crop insurance can improve your credit profile by 15-20 points</li>
                    <li>• Your current score qualifies you for the best available interest rates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-green-500" />
                  <span>Quick Loan Application</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Loan Amount (₹)</label>
                    <Input 
                      placeholder="Enter desired loan amount"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      type="number"
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Maximum eligible: ₹{(creditProfile.loanEligibility / 1000)}K
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Loan Purpose</label>
                    <select 
                      value={loanPurpose} 
                      onChange={(e) => setLoanPurpose(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background"
                    >
                      <option value="">Select purpose</option>
                      <option value="seeds">Seeds & Fertilizers</option>
                      <option value="equipment">Farm Equipment</option>
                      <option value="irrigation">Irrigation Setup</option>
                      <option value="livestock">Livestock Purchase</option>
                      <option value="working-capital">Working Capital</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Preferred Tenure</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="18">18 months</option>
                      <option value="24">24 months</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Monthly Income (₹)</label>
                    <Input 
                      placeholder="Enter monthly income"
                      value={Math.round(creditProfile.income.total / 12)}
                      readOnly
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Documents Required:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-blue-800">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Land ownership documents
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Income proof (last 6 months)
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Bank statements
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      KYC documents
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Pre-approved Benefits</span>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Instant approval up to ₹{(creditProfile.loanEligibility / 1000)}K</li>
                    <li>• Best interest rate: {creditProfile.interestRate}% p.a.</li>
                    <li>• Zero processing fee for first loan</li>
                    <li>• Flexible repayment options</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                  <Button variant="outline" size="lg">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Apply via WhatsApp
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