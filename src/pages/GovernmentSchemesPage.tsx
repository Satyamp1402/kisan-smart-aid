import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Bell,
  CheckCircle,
  DollarSign,
  FileText,
  CreditCard,
  Shield,
  Zap,
  AlertTriangle,
  Info,
  Clock,
  Users,
  MapPin,
  Phone,
  ExternalLink,
  Download,
  Calendar,
  Banknote,
  Tractor,
  Droplets,
  Leaf,
  Home,
  Heart,
  GraduationCap,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

interface Scheme {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  icon: any;
  category: 'financial' | 'insurance' | 'subsidy' | 'welfare';
  amount: string;
  eligibility: string[];
  documents: string[];
  status: 'active' | 'pending' | 'closed';
  deadline?: string;
  beneficiaries: number;
}

interface Application {
  id: string;
  schemeName: string;
  status: 'approved' | 'pending' | 'rejected' | 'under-review';
  appliedDate: Date;
  amount: string;
  referenceId: string;
}

export const GovernmentSchemesPage = () => {
  const [selectedState, setSelectedState] = useState('uttar-pradesh');
  const [farmerDetails, setFarmerDetails] = useState({
    aadhar: '',
    phone: '',
    landSize: '',
    farmType: 'small'
  });
  const [eligibilityResults, setEligibilityResults] = useState<any[]>([]);

  const schemes: Scheme[] = [
    {
      id: 'pm-kisan',
      name: 'PM-KISAN Samman Nidhi',
      nameHindi: 'प्रधानमंत्री किसान सम्मान निधि',
      description: 'Direct income support of ₹6,000 per year to small and marginal farmers',
      icon: Award,
      category: 'financial',
      amount: '₹6,000/year',
      eligibility: [
        'Small and marginal farmers',
        'Landholding up to 2 hectares',
        'Valid Aadhar card required',
        'Bank account with Aadhar linking'
      ],
      documents: ['Aadhar Card', 'Bank Account Details', 'Land Records', 'Passport Photo'],
      status: 'active',
      beneficiaries: 11.5
    },
    {
      id: 'pmfby',
      name: 'Pradhan Mantri Fasal Bima Yojana',
      nameHindi: 'प्रधानमंत्री फसल बीमा योजना',
      description: 'Crop insurance scheme providing coverage against crop losses',
      icon: Shield,
      category: 'insurance',
      amount: 'Up to ₹2 lakh/hectare',
      eligibility: [
        'All farmers (owner/tenant)',
        'Notified crops coverage',
        'Premium payment required',
        'Enrollment during specified period'
      ],
      documents: ['Aadhar Card', 'Bank Account', 'Land Documents', 'Sowing Certificate'],
      status: 'active',
      deadline: '31st December 2024',
      beneficiaries: 5.5
    },
    {
      id: 'kcc',
      name: 'Kisan Credit Card',
      nameHindi: 'किसान क्रेडिट कार्ड',
      description: 'Credit facility for farmers to meet agricultural expenses',
      icon: CreditCard,
      category: 'financial',
      amount: 'Up to ₹3 lakh',
      eligibility: [
        'All farmers (individual/joint)',
        'Landowner or tenant farmers',
        'SHG members engaged in farming',
        'Good credit history preferred'
      ],
      documents: ['Application Form', 'Identity Proof', 'Address Proof', 'Land Documents'],
      status: 'active',
      beneficiaries: 6.95
    },
    {
      id: 'soil-health',
      name: 'Soil Health Card Scheme',
      nameHindi: 'मृदा स्वास्थ्य कार्ड योजना',
      description: 'Free soil testing and health cards for optimal fertilizer use',
      icon: Leaf,
      category: 'subsidy',
      amount: 'Free Service',
      eligibility: [
        'All farmers in India',
        'Individual or group applications',
        'Valid identity proof required',
        'Land ownership documents'
      ],
      documents: ['Aadhar Card', 'Land Records', 'Application Form'],
      status: 'active',
      beneficiaries: 22.5
    },
    {
      id: 'pm-kusum',
      name: 'PM-KUSUM Yojana',
      nameHindi: 'प्रधानमंत्री कुसुम योजना',
      description: 'Solar power scheme for farmers - pumps and grid connection',
      icon: Zap,
      category: 'subsidy',
      amount: '60% Central Subsidy',
      eligibility: [
        'Individual farmers',
        'Cooperative societies',
        'Farmer groups',
        'Minimum land requirement'
      ],
      documents: ['Land Documents', 'Electricity Bill', 'Bank Account', 'Project Report'],
      status: 'active',
      beneficiaries: 2.8
    },
    {
      id: 'pradhan-mantri-awas',
      name: 'PM Awas Yojana (Rural)',
      nameHindi: 'प्रधानमंत्री आवास योजना (ग्रामीण)',
      description: 'Housing scheme for rural poor including farmers',
      icon: Home,
      category: 'welfare',
      amount: 'Up to ₹1.30 lakh',
      eligibility: [
        'BPL families in rural areas',
        'Landless agricultural laborers',
        'No pucca house ownership',
        'Annual income below ₹2 lakh'
      ],
      documents: ['BPL Certificate', 'Income Certificate', 'Aadhar Card', 'Bank Account'],
      status: 'active',
      beneficiaries: 2.95
    }
  ];

  const myApplications: Application[] = [
    {
      id: '1',
      schemeName: 'PM-KISAN Samman Nidhi',
      status: 'approved',
      appliedDate: new Date('2024-01-15'),
      amount: '₹2,000',
      referenceId: 'PMK2024001234'
    },
    {
      id: '2',
      schemeName: 'Pradhan Mantri Fasal Bima Yojana',
      status: 'under-review',
      appliedDate: new Date('2024-09-10'),
      amount: '₹15,000',
      referenceId: 'PMFBY2024005678'
    },
    {
      id: '3',
      schemeName: 'Kisan Credit Card',
      status: 'pending',
      appliedDate: new Date('2024-08-25'),
      amount: '₹50,000',
      referenceId: 'KCC2024009876'
    }
  ];

  const checkEligibility = () => {
    // Simulate eligibility check
    const eligible = schemes.filter(scheme => {
      if (farmerDetails.landSize && parseFloat(farmerDetails.landSize) > 2 && scheme.id === 'pm-kisan') {
        return false; // Not eligible for PM-KISAN if land > 2 hectares
      }
      return true;
    });

    setEligibilityResults(eligible.map(scheme => ({
      ...scheme,
      eligible: true,
      score: Math.floor(Math.random() * 40) + 60 // 60-100% eligibility score
    })));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'under-review': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'financial': return DollarSign;
      case 'insurance': return Shield;
      case 'subsidy': return Award;
      case 'welfare': return Heart;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'financial': return 'bg-green-100 text-green-800';
      case 'insurance': return 'bg-blue-100 text-blue-800';
      case 'subsidy': return 'bg-orange-100 text-orange-800';
      case 'welfare': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalBeneficiaries = schemes.reduce((acc, scheme) => acc + scheme.beneficiaries, 0);

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
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Government Schemes</h1>
                  <p className="text-sm text-muted-foreground">Access government benefits and subsidies for farmers</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <Users className="w-3 h-3 mr-1" />
                {totalBeneficiaries}M+ Beneficiaries
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="schemes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schemes">Available Schemes</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility Check</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="updates">Updates & Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="schemes" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{schemes.length}</div>
                  <div className="text-sm text-muted-foreground">Active Schemes</div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{totalBeneficiaries}M+</div>
                  <div className="text-sm text-muted-foreground">Beneficiaries</div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">₹3.2L Cr</div>
                  <div className="text-sm text-muted-foreground">Total Disbursed</div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">89%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Schemes Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {schemes.map((scheme) => {
                const Icon = scheme.icon;
                const CategoryIcon = getCategoryIcon(scheme.category);
                
                return (
                  <Card key={scheme.id} className="border-border/50 bg-card/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-bold">{scheme.name}</div>
                            <div className="text-sm text-muted-foreground">{scheme.nameHindi}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge className={getCategoryColor(scheme.category)}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            {scheme.category}
                          </Badge>
                          <Badge className="bg-green-100 text-green-800">
                            {scheme.amount}
                          </Badge>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {scheme.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <div className="font-medium text-sm mb-2">Eligibility Criteria:</div>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {scheme.eligibility.slice(0, 3).map((criteria, index) => (
                              <li key={index}>• {criteria}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="text-muted-foreground">{scheme.beneficiaries}M beneficiaries</span>
                          </div>
                          {scheme.deadline && (
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-orange-500" />
                              <span className="text-orange-600 text-xs">Deadline: {scheme.deadline}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex space-x-2 pt-2">
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                          <Button size="sm" variant="outline">
                            <Info className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="eligibility" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Eligibility Checker</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Aadhar Number</label>
                      <Input
                        placeholder="Enter 12-digit Aadhar number"
                        value={farmerDetails.aadhar}
                        onChange={(e) => setFarmerDetails(prev => ({ ...prev, aadhar: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        placeholder="Enter mobile number"
                        value={farmerDetails.phone}
                        onChange={(e) => setFarmerDetails(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Land Size (Hectares)</label>
                      <Input
                        placeholder="Enter land size in hectares"
                        value={farmerDetails.landSize}
                        onChange={(e) => setFarmerDetails(prev => ({ ...prev, landSize: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Farm Type</label>
                      <select
                        className="w-full p-2 border border-border rounded-lg bg-background"
                        value={farmerDetails.farmType}
                        onChange={(e) => setFarmerDetails(prev => ({ ...prev, farmType: e.target.value }))}
                      >
                        <option value="small">Small Farmer (≤2 hectares)</option>
                        <option value="marginal">Marginal Farmer (≤1 hectare)</option>
                        <option value="medium">Medium Farmer (2-10 hectares)</option>
                        <option value="large">Large Farmer (&gt;10 hectares)</option>
                      </select>
                    </div>

                    <Button onClick={checkEligibility} className="w-full">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Check Eligibility
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Eligibility Results:</h4>
                    {eligibilityResults.length > 0 ? (
                      <div className="space-y-3">
                        {eligibilityResults.map((result) => (
                          <div key={result.id} className="p-3 border border-border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-sm">{result.name}</div>
                              <Badge className="bg-green-100 text-green-800">
                                {result.score}% Match
                              </Badge>
                            </div>
                            <Progress value={result.score} className="h-2 mb-2" />
                            <div className="text-xs text-muted-foreground">
                              Recommended: High eligibility for this scheme
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <p className="text-muted-foreground">Enter your details to check eligibility</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span>My Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {myApplications.length > 0 ? (
                  <div className="space-y-4">
                    {myApplications.map((application) => (
                      <div key={application.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold">{application.schemeName}</div>
                            <div className="text-sm text-muted-foreground">
                              Applied: {application.appliedDate.toLocaleDateString()}
                            </div>
                          </div>
                          <Badge className={`border ${getStatusColor(application.status)}`}>
                            {application.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Amount:</span>
                            <span className="ml-2 text-green-600">{application.amount}</span>
                          </div>
                          <div>
                            <span className="font-medium">Reference ID:</span>
                            <span className="ml-2 font-mono text-xs">{application.referenceId}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <FileText className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download Certificate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-muted-foreground">No applications found</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="updates" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Updates */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-orange-500" />
                    <span>Recent Updates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="font-medium text-green-900 text-sm">PM-KISAN 16th Installment</div>
                      <div className="text-green-800 text-xs mt-1">
                        Next installment of ₹2,000 will be credited on 28th October 2024
                      </div>
                      <div className="text-green-600 text-xs mt-2">2 days ago</div>
                    </div>

                    <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                      <div className="font-medium text-blue-900 text-sm">PMFBY Enrollment Extended</div>
                      <div className="text-blue-800 text-xs mt-1">
                        Last date for Kharif 2024 crop insurance extended to 31st December
                      </div>
                      <div className="text-blue-600 text-xs mt-2">5 days ago</div>
                    </div>

                    <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                      <div className="font-medium text-orange-900 text-sm">New KCC Guidelines</div>
                      <div className="text-orange-800 text-xs mt-1">
                        Updated interest rates and eligibility criteria for Kisan Credit Card
                      </div>
                      <div className="text-orange-600 text-xs mt-2">1 week ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Alerts */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>Important Alerts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span className="font-medium text-red-900 text-sm">Deadline Alert</span>
                      </div>
                      <div className="text-red-800 text-xs">
                        PMFBY crop insurance enrollment ends in 15 days. Don't miss out!
                      </div>
                    </div>

                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Info className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium text-yellow-900 text-sm">Document Update</span>
                      </div>
                      <div className="text-yellow-800 text-xs">
                        Please update your bank account details for PM-KISAN scheme
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Banknote className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">Payment Status</span>
                      </div>
                      <div className="text-blue-800 text-xs">
                        Your PM-KISAN payment of ₹2,000 has been processed successfully
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-orange-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Need Help? Contact Support
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    <div>
                      <div className="font-medium text-orange-900">PM-KISAN Helpline</div>
                      <div className="text-orange-700">155261 / 011-24300606</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-orange-600" />
                    <div>
                      <div className="font-medium text-orange-900">Crop Insurance</div>
                      <div className="text-orange-700">14447 (Toll Free)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-orange-600" />
                    <div>
                      <div className="font-medium text-orange-900">KCC Support</div>
                      <div className="text-orange-700">1800-180-1551</div>
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