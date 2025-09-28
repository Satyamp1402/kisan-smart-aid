import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings,
  CreditCard,
  Calculator,
  Smartphone,
  MessageSquare,
  DollarSign,
  Percent,
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
  Eye,
  Bell,
  Zap,
  Award,
  FileText,
  Phone,
  Users,
  Building,
  MapPin,
  Star,
  Leaf,
  Tractor,
  Banknote,
  Timer,
  ArrowRight,
  Info,
  Download,
  Share,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";

interface KCCAccount {
  accountNumber: string;
  sanctionedLimit: number;
  availableLimit: number;
  usedAmount: number;
  interestRate: number;
  lastPayment: string;
  nextDueDate: string;
  daysOverdue: number;
  creditScore: number;
  status: 'Active' | 'Overdue' | 'Blocked';
}

interface InterestCalculation {
  principal: number;
  rate: number;
  days: number;
  simpleInterest: number;
  compoundInterest: number;
  totalAmount: number;
  monthlyEMI?: number;
}

interface OptimalUsage {
  scenario: string;
  purpose: string;
  recommendedAmount: number;
  optimalTiming: string;
  expectedROI: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  savingsPotential: number;
  recommendation: string;
}

interface WhatsAppBot {
  message: string;
  response: string;
  timestamp: string;
  type: 'user' | 'bot';
}

export const KCCOptimizerPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loanAmount, setLoanAmount] = useState('50000');
  const [loanDuration, setLoanDuration] = useState('90');
  const [chatMessage, setChatMessage] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const kccAccount: KCCAccount = {
    accountNumber: 'KCC-2023-001234',
    sanctionedLimit: 300000,
    availableLimit: 180000,
    usedAmount: 120000,
    interestRate: 7.0,
    lastPayment: '2024-03-15',
    nextDueDate: '2024-04-15',
    daysOverdue: 0,
    creditScore: 742,
    status: 'Active'
  };

  const optimalUsageScenarios: OptimalUsage[] = [
    {
      scenario: 'Seed Purchase',
      purpose: 'Buy seeds for Kharif season',
      recommendedAmount: 45000,
      optimalTiming: 'Wait 2 weeks (Lower interest rates expected)',
      expectedROI: 18,
      riskLevel: 'Low',
      savingsPotential: 3200,
      recommendation: 'Delay purchase by 2 weeks to take advantage of seasonal rate reduction'
    },
    {
      scenario: 'Fertilizer Purchase',
      purpose: 'Buy fertilizers for wheat crop',
      recommendedAmount: 30000,
      optimalTiming: 'Buy immediately (Prices increasing)',
      expectedROI: 15,
      riskLevel: 'Medium',
      savingsPotential: 2800,
      recommendation: 'Purchase now to avoid 8% price increase next month'
    },
    {
      scenario: 'Equipment Repair',
      purpose: 'Tractor maintenance before harvest',
      recommendedAmount: 25000,
      optimalTiming: 'After harvest (Better cash flow)',
      expectedROI: 22,
      riskLevel: 'Low',
      savingsPotential: 1500,
      recommendation: 'Wait for harvest income to reduce interest burden'
    },
    {
      scenario: 'Emergency Fund',
      purpose: 'Keep aside for unforeseen expenses',
      recommendedAmount: 50000,
      optimalTiming: 'Maintain current reserve',
      expectedROI: 0,
      riskLevel: 'Low',
      savingsPotential: 0,
      recommendation: 'Keep 20% of limit as emergency buffer'
    }
  ];

  const whatsappChats: WhatsAppBot[] = [
    {
      message: 'Hi! Should I buy seeds now or wait?',
      response: '🌱 Based on your KCC analysis:\n\n💡 *Wait 2 weeks*\n📉 Interest rates dropping by 0.5%\n💰 You\'ll save ₹3,200\n📅 Best time: After April 30th\n\nWant detailed calculation? Reply "CALC"',
      timestamp: '2024-04-10 09:30 AM',
      type: 'user'
    },
    {
      message: 'CALC',
      response: '🧮 *Seed Purchase Calculation*\n\nAmount: ₹45,000\nCurrent rate: 7.0%\nExpected rate: 6.5%\n\n*If you buy now:*\n3 months interest: ₹787.5\n\n*If you wait 2 weeks:*\n2.5 months at 6.5%: ₹609.4\n\n💵 *You save: ₹178.1*\n\nUse code WAIT2W for reminder!',
      timestamp: '2024-04-10 09:32 AM',
      type: 'user'
    },
    {
      message: 'What about fertilizer?',
      response: '🌾 *Fertilizer Alert!*\n\n⚠️ *Buy IMMEDIATELY*\n📈 Prices rising 8% next month\n💰 Cost now: ₹30,000\n📅 After May 1st: ₹32,400\n\n*Net Savings:* ₹2,400\n*Interest cost:* ₹525\n*Final benefit:* ₹1,875\n\n🚀 Ready to proceed? Reply "BUY"',
      timestamp: '2024-04-10 10:15 AM',
      type: 'user'
    }
  ];

  const calculateInterest = (): InterestCalculation => {
    const principal = parseFloat(loanAmount) || 50000;
    const rate = kccAccount.interestRate;
    const days = parseFloat(loanDuration) || 90;
    
    const simpleInterest = (principal * rate * days) / (365 * 100);
    const compoundInterest = principal * Math.pow((1 + rate / (365 * 100)), days) - principal;
    
    return {
      principal,
      rate,
      days,
      simpleInterest: Math.round(simpleInterest),
      compoundInterest: Math.round(compoundInterest),
      totalAmount: Math.round(principal + simpleInterest),
      monthlyEMI: Math.round((principal + simpleInterest) / (days / 30))
    };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Blocked': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const utilizationPercentage = ((kccAccount.usedAmount / kccAccount.sanctionedLimit) * 100);
  const interestCalc = calculateInterest();

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
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">KCC Optimizer</h1>
                  <p className="text-sm text-muted-foreground">Smart Kisan Credit Card management with WhatsApp bot</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-orange-100 text-orange-800">
                <MessageSquare className="w-3 h-3 mr-1" />
                WhatsApp Bot Active
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* KCC Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <CreditCard className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{(kccAccount.sanctionedLimit / 1000)}K</div>
              <div className="text-sm text-muted-foreground">Sanctioned Limit</div>
              <Badge className={getStatusColor(kccAccount.status)} size="sm">
                {kccAccount.status}
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Banknote className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹{(kccAccount.availableLimit / 1000)}K</div>
              <div className="text-sm text-muted-foreground">Available Limit</div>
              <div className="text-xs text-green-600 mt-1">
                {Math.round((kccAccount.availableLimit / kccAccount.sanctionedLimit) * 100)}% Available
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Percent className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{kccAccount.interestRate}%</div>
              <div className="text-sm text-muted-foreground">Interest Rate</div>
              <div className="text-xs text-orange-600 mt-1">Per Annum</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{Math.round(utilizationPercentage)}%</div>
              <div className="text-sm text-muted-foreground">Utilization</div>
              <Progress value={utilizationPercentage} className="w-full h-2 mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Account Overview</TabsTrigger>
            <TabsTrigger value="calculator">Interest Calculator</TabsTrigger>
            <TabsTrigger value="optimizer">Smart Optimizer</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp Bot</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Account Details */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    <span>KCC Account Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Account Number</div>
                      <div className="font-medium">{kccAccount.accountNumber}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Credit Score</div>
                      <div className="font-medium text-green-600">{kccAccount.creditScore}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Last Payment</div>
                      <div className="font-medium">{kccAccount.lastPayment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Next Due Date</div>
                      <div className="font-medium">{kccAccount.nextDueDate}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Limit Utilization</span>
                        <span className="text-sm font-bold">{Math.round(utilizationPercentage)}%</span>
                      </div>
                      <Progress value={utilizationPercentage} className="h-3" />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Used: ₹{kccAccount.usedAmount.toLocaleString()}</span>
                        <span>Available: ₹{kccAccount.availableLimit.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Account Health</span>
                    </div>
                    <div className="text-sm text-blue-700">
                      ✅ Account in good standing<br />
                      ✅ No overdue payments<br />
                      ⚠️ Utilization at {Math.round(utilizationPercentage)}% - Consider reducing usage below 70%
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Withdrawal</div>
                        <div className="text-xs text-muted-foreground">Fertilizer purchase - 15 Mar 2024</div>
                      </div>
                      <div className="text-red-600 font-bold">-₹25,000</div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Withdrawal</div>
                        <div className="text-xs text-muted-foreground">Seed purchase - 10 Mar 2024</div>
                      </div>
                      <div className="text-red-600 font-bold">-₹35,000</div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Interest Payment</div>
                        <div className="text-xs text-muted-foreground">Monthly interest - 05 Mar 2024</div>
                      </div>
                      <div className="text-green-600 font-bold">+₹4,200</div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">Withdrawal</div>
                        <div className="text-xs text-muted-foreground">Equipment repair - 01 Mar 2024</div>
                      </div>
                      <div className="text-red-600 font-bold">-₹15,000</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    <Eye className="w-4 h-4 mr-2" />
                    View All Transactions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Calculator Input */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-blue-500" />
                    <span>Interest Calculator</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Loan Amount (₹)</label>
                    <Input 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="Enter loan amount"
                      type="number"
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Max available: ₹{kccAccount.availableLimit.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Duration (Days)</label>
                    <Input 
                      value={loanDuration}
                      onChange={(e) => setLoanDuration(e.target.value)}
                      placeholder="Enter duration in days"
                      type="number"
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Recommended: 30-365 days
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Interest Rate</label>
                    <Input 
                      value={`${kccAccount.interestRate}% per annum`}
                      readOnly
                      className="bg-secondary/20"
                    />
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Pro Tip</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      KCC interest is calculated on daily basis. Pay back as soon as possible to minimize interest costs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Calculator Results */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5 text-green-500" />
                    <span>Calculation Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">₹{interestCalc.principal.toLocaleString()}</div>
                      <div className="text-sm text-blue-700">Principal Amount</div>
                    </div>

                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">₹{interestCalc.simpleInterest.toLocaleString()}</div>
                      <div className="text-sm text-orange-700">Interest Amount</div>
                    </div>

                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">₹{interestCalc.totalAmount.toLocaleString()}</div>
                      <div className="text-sm text-green-700">Total Repayment</div>
                    </div>

                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">₹{interestCalc.monthlyEMI?.toLocaleString()}</div>
                      <div className="text-sm text-purple-700">Monthly Repayment</div>
                    </div>
                  </div>

                  <div className="p-4 border border-border/30 rounded-lg">
                    <h4 className="font-semibold mb-3">Calculation Breakdown:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Principal:</span>
                        <span>₹{interestCalc.principal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest ({kccAccount.interestRate}% p.a. for {interestCalc.days} days):</span>
                        <span>₹{interestCalc.simpleInterest.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee (if any):</span>
                        <span>₹0</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between font-bold">
                        <span>Total Amount:</span>
                        <span>₹{interestCalc.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-medium text-green-800 mb-1">Cost Analysis:</div>
                    <div className="text-sm text-green-700">
                      Daily interest cost: ₹{Math.round(interestCalc.simpleInterest / interestCalc.days)}<br />
                      Effective rate: {((interestCalc.simpleInterest / interestCalc.principal) * 100).toFixed(2)}% for {interestCalc.days} days
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="optimizer" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  <span>Smart Usage Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {optimalUsageScenarios.map((scenario, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{scenario.scenario}</h3>
                            <p className="text-sm text-muted-foreground">{scenario.purpose}</p>
                          </div>
                          <Badge className={getRiskColor(scenario.riskLevel)}>
                            {scenario.riskLevel} Risk
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">₹{scenario.recommendedAmount.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Recommended Amount</div>
                          </div>
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{scenario.expectedROI}%</div>
                            <div className="text-xs text-muted-foreground">Expected ROI</div>
                          </div>
                          <div className="text-center p-3 bg-secondary/10 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">₹{scenario.savingsPotential.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Potential Savings</div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="font-medium text-sm">Optimal Timing:</div>
                          <div className="text-sm bg-blue-50 p-2 rounded border border-blue-200">
                            {scenario.optimalTiming}
                          </div>
                        </div>

                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <Lightbulb className="w-4 h-4 text-green-600 mt-0.5" />
                            <div>
                              <div className="font-medium text-green-800 text-sm">AI Recommendation:</div>
                              <div className="text-green-700 text-sm">{scenario.recommendation}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Optimization Summary</span>
                  </div>
                  <div className="text-sm text-yellow-700">
                    Following these recommendations could save you approximately <strong>₹10,300</strong> in interest and opportunity costs over the next 6 months.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* WhatsApp Bot Interface */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-green-500" />
                    <span>WhatsApp KCC Bot</span>
                    <Badge className="bg-green-100 text-green-800">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      Online
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Chat Messages */}
                  <div className="h-64 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-lg">
                    {whatsappChats.map((chat, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-end">
                          <div className="bg-green-500 text-white p-3 rounded-l-lg rounded-tr-lg max-w-xs">
                            <div className="text-sm">{chat.message}</div>
                            <div className="text-xs opacity-80 mt-1">{chat.timestamp}</div>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white p-3 rounded-r-lg rounded-tl-lg max-w-xs border">
                            <div className="text-sm whitespace-pre-line">{chat.response}</div>
                            <div className="text-xs text-muted-foreground mt-1">KCC Bot</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Type your KCC query..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-800">Quick Commands</span>
                    </div>
                    <div className="text-sm text-blue-700 space-y-1">
                      <div>💰 Type "BALANCE" - Check available limit</div>
                      <div>📊 Type "CALC [amount]" - Calculate interest</div>
                      <div>⏰ Type "TIMING" - Get optimal usage timing</div>
                      <div>📈 Type "SAVE" - Get money-saving tips</div>
                      <div>🔔 Type "ALERT" - Set up notifications</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bot Features */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-blue-500" />
                    <span>Bot Features & Setup</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">Real-time Balance Updates</div>
                        <div className="text-xs text-muted-foreground">Get instant KCC balance notifications</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">Interest Calculator</div>
                        <div className="text-xs text-muted-foreground">Calculate interest for any amount instantly</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">Smart Recommendations</div>
                        <div className="text-xs text-muted-foreground">AI-powered usage timing suggestions</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-sm">Payment Reminders</div>
                        <div className="text-xs text-muted-foreground">Never miss a due date with smart alerts</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <Timer className="w-5 h-5 text-yellow-600" />
                      <div>
                        <div className="font-medium text-sm">Seasonal Analysis (Coming Soon)</div>
                        <div className="text-xs text-muted-foreground">Crop season based optimal timing</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border">
                    <div className="font-medium text-center mb-3">Connect to WhatsApp Bot</div>
                    <div className="text-center space-y-3">
                      <div className="text-sm text-muted-foreground">
                        Add our bot to get instant KCC insights on WhatsApp
                      </div>
                      <div className="font-mono text-lg bg-white p-2 rounded border">
                        +91-98765-43210
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Send "START" to begin using the bot
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Add to WhatsApp
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share className="w-4 h-4 mr-2" />
                      Share Bot
                    </Button>
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