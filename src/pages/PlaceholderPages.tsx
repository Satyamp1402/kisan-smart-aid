// This file contains all placeholder page components that will be developed later
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, CreditCard, Shield, Smartphone, Zap, Wifi, Cloud, AlertTriangle, 
  Calendar, Mic, Eye, Satellite, Bell, FileText, Droplets, BookOpen,
  DollarSign, Wheat, Calendar as CalendarIcon, CheckCircle
} from "lucide-react";

const PlaceholderPage = ({ icon: Icon, title, description, features, backLink = "/" }: any) => (
  <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
    <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to={backLink} className="text-muted-foreground hover:text-foreground">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">{title} - Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
            <Icon className="w-12 h-12 text-white" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          
          {features && (
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {features.map((feature: string, index: number) => (
                <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">This feature is under development and will be available soon.</p>
            <Link to="/">
              <Button>Return to Dashboard</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

// Marketplace Features
export const MarketplacePage = () => (
  <PlaceholderPage
    icon={DollarSign}
    title="Marketplace Intelligence"
    description="AI-powered price predictions and market analysis for better selling decisions"
    features={[
      "Real-time price tracking across multiple markets",
      "Seasonal price pattern analysis",
      "Supply-demand forecasting",
      "Regional market comparisons"
    ]}
  />
);


// Financial Features
export const CreditScoringPage = () => (
  <PlaceholderPage
    icon={CreditCard}
    title="AI Credit Scoring"
    description="Get loans based on AI predictions of your farm's potential rather than just credit history"
    features={[
      "Yield-based credit assessment",
      "Alternative credit scoring",
      "Micro-lending connections",
      "Flexible repayment terms"
    ]}
  />
);

export const InsurancePage = () => (
  <PlaceholderPage
    icon={Shield}
    title="Smart Crop Insurance"
    description="Dynamic insurance premiums based on real-time risk assessment"
    features={[
      "Real-time risk monitoring",
      "Satellite-based damage assessment",
      "Quick claim processing",
      "Personalized premium calculation"
    ]}
  />
);

export const FinancingPage = () => (
  <PlaceholderPage
    icon={DollarSign}
    title="Input Financing"
    description="Get financing for seeds, fertilizers, and equipment with ROI predictions"
    features={[
      "ROI-based financing",
      "Equipment leasing options",
      "Seasonal credit facilities",
      "Input cost optimization"
    ]}
  />
);

// IoT Features

export const DIYSensorPage = () => (
  <PlaceholderPage
    icon={Zap}
    title="DIY Sensor Building"
    description="Step-by-step guides to build affordable sensors for soil moisture, pH, and temperature"
    features={[
      "Low-cost sensor designs",
      "Assembly instructions",
      "Calibration guides",
      "Data interpretation help"
    ]}
  />
);

export const CommunityDataPage = () => (
  <PlaceholderPage
    icon={Wifi}
    title="Community Sensor Network"
    description="Share sensor data with neighbors for better regional insights and predictions"
    features={[
      "Neighborhood data sharing",
      "Regional trend analysis",
      "Collaborative monitoring",
      "Community alerts system"
    ]}
  />
);

// Climate Features
export const MicroWeatherPage = () => (
  <PlaceholderPage
    icon={Cloud}
    title="Micro Weather Forecasts"
    description="Get weather predictions with 100-meter resolution using satellite data and local sensors"
    features={[
      "Hyperlocal weather forecasts",
      "Satellite data integration",
      "Microclimate analysis",
      "Agricultural weather alerts"
    ]}
  />
);

export const ClimateAlertsPage = () => (
  <PlaceholderPage
    icon={AlertTriangle}
    title="Climate Alert System"
    description="Early warning system for droughts, floods, frost, and extreme weather events"
    features={[
      "Multi-hazard early warnings",
      "SMS/WhatsApp notifications",
      "Risk-based recommendations",
      "Emergency response guidance"
    ]}
  />
);

export const ClimateAdaptationPage = () => (
  <PlaceholderPage
    icon={Calendar}
    title="Climate Adaptation Planning"
    description="Long-term crop recommendations based on climate change projections"
    features={[
      "Climate-resilient crop varieties",
      "Adaptation strategies",
      "Future climate scenarios",
      "Sustainable farming practices"
    ]}
  />
);

// Advanced Features
export const VoiceAssistantPage = () => (
  <PlaceholderPage
    icon={Mic}
    title="Voice Assistant"
    description="WhatsApp and SMS-based voice assistant that works in local dialects"
    features={[
      "Local language support",
      "Voice queries and responses",
      "WhatsApp bot integration",
      "Offline capability"
    ]}
  />
);

export const ARScannerPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
    <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">AR Field Scanner</h1>
              <p className="text-sm text-muted-foreground">Augmented reality crop analysis</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* AR Scanner Interface */}
        <div className="space-y-6">
          <Card className="h-[500px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-purple-600" />
                <span>AR Field Scanner</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Camera View Simulation */}
              <div className="flex-1 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-purple-600" />
                    </div>
                    <p className="text-lg font-semibold text-gray-700">Point camera at your field</p>
                    <p className="text-sm text-gray-600">AR overlays will appear automatically</p>
                  </div>
                </div>
                
                {/* AR Overlays Simulation */}
                <div className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Soil Moisture: 72%
                </div>
                <div className="absolute top-4 right-4 bg-blue-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  pH Level: 6.8
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Pest Risk: Low
                </div>
                <div className="absolute bottom-4 right-4 bg-red-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Disease Alert: None
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <Eye className="w-4 h-4 mr-2" />
                  Start AR Scan
                </Button>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Save Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Results */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Field Health Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Overall Health</span>
                  <span className="text-green-600 font-bold">Good (85%)</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">72%</div>
                    <div className="text-sm text-blue-700">Soil Moisture</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">6.8</div>
                    <div className="text-sm text-orange-700">pH Level</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export const SatelliteMonitoringPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
    <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Satellite className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Satellite Monitoring</h1>
              <p className="text-sm text-muted-foreground">Space-based crop health analysis</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className="container mx-auto px-4 py-8">
      {/* Field Overview */}
      <Card className="mb-6 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-900">
            <Satellite className="w-5 h-5" />
            <span>Field Health Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-green-700">Crop Health</div>
              <div className="text-xs text-muted-foreground">Good condition</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">72%</div>
              <div className="text-sm text-blue-700">Soil Moisture</div>
              <div className="text-xs text-muted-foreground">Optimal level</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-orange-600">Low</div>
              <div className="text-sm text-orange-700">Disease Risk</div>
              <div className="text-xs text-muted-foreground">Monitor closely</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-purple-600">2 weeks</div>
              <div className="text-sm text-purple-700">Harvest Ready</div>
              <div className="text-xs text-muted-foreground">Optimal timing</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Satellite Imagery */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Satellite Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-green-200 to-green-400 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Satellite className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Field Satellite View</p>
                    <p className="text-sm opacity-90">Last updated: 2 hours ago</p>
                  </div>
                </div>
                {/* Simulated field zones */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-green-500/80 rounded-full"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-500/80 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-red-500/80 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500/80 rounded-full"></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Healthy Crop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Stress Zone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Problem Area</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Water Logged</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Results */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Field Analysis Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-800">Crop Growth</span>
                  </div>
                  <p className="text-sm text-green-700">Crops are growing well with 85% health score</p>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Irrigation Needed</span>
                  </div>
                  <p className="text-sm text-yellow-700">North-west corner shows water stress - irrigate within 2 days</p>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-800">Harvest Timing</span>
                  </div>
                  <p className="text-sm text-blue-700">Optimal harvest window: 2-3 weeks from now</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export const FarmingCalendarPage = () => (
  <PlaceholderPage
    icon={CalendarIcon}
    title="AI Farming Calendar"
    description="Personalized farming calendar that adapts to weather, market prices, and labor availability"
    features={[
      "Dynamic scheduling",
      "Weather-based adjustments",
      "Market timing optimization",
      "Resource planning"
    ]}
  />
);

// Government & Financial
export const GovernmentSchemesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
    <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Government Schemes</h1>
              <p className="text-sm text-muted-foreground">PM-KISAN & Subsidy Alert System</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className="container mx-auto px-4 py-8">
      {/* PM-KISAN Status */}
      <Card className="mb-6 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-900">
            <Bell className="w-5 h-5" />
            <span>PM-KISAN Payment Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">₹2,000</div>
              <div className="text-sm text-green-700">Last Payment</div>
              <div className="text-xs text-muted-foreground">15th March 2024</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">₹2,000</div>
              <div className="text-sm text-blue-700">Next Due</div>
              <div className="text-xs text-muted-foreground">15th July 2024</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-orange-600">Active</div>
              <div className="text-sm text-orange-700">Status</div>
              <div className="text-xs text-muted-foreground">All documents verified</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Schemes */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Government Schemes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-900">PM-KISAN</h4>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <p className="text-sm text-green-700 mb-2">₹6,000 per year in 3 installments</p>
                  <div className="text-xs text-green-600">Next payment: July 15, 2024</div>
                </div>
                
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-900">Fertilizer Subsidy</h4>
                    <Badge className="bg-blue-600">Available</Badge>
                  </div>
                  <p className="text-sm text-blue-700 mb-2">50% subsidy on urea, DAP, MOP</p>
                  <div className="text-xs text-blue-600">Apply before: June 30, 2024</div>
                </div>
                
                <div className="p-4 border border-purple-200 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-900">Crop Insurance</h4>
                    <Badge className="bg-purple-600">Open</Badge>
                  </div>
                  <p className="text-sm text-purple-700 mb-2">PMFBY - Premium subsidy up to 90%</p>
                  <div className="text-xs text-purple-600">Enrollment: Till July 31, 2024</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts & Notifications */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Important Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="font-medium text-red-800">Urgent</span>
                  </div>
                  <p className="text-sm text-red-700">Fertilizer subsidy application deadline approaching - June 30, 2024</p>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Reminder</span>
                  </div>
                  <p className="text-sm text-yellow-700">PM-KISAN next installment due in 45 days</p>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-800">Success</span>
                  </div>
                  <p className="text-sm text-green-700">Crop insurance claim approved - ₹15,000 credited</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export const KCCOptimizerPage = () => (
  <PlaceholderPage
    icon={CreditCard}
    title="KCC Optimizer"
    description="Optimize your Kisan Credit Card usage to minimize interest and maximize benefits"
    features={[
      "Interest calculation",
      "Optimal usage timing",
      "Repayment planning", 
      "Credit limit optimization"
    ]}
  />
);

export const InsuranceClaimPage = () => (
  <PlaceholderPage
    icon={FileText}
    title="Insurance Claim Assistant"
    description="AI-powered assistance for crop insurance claims with photo documentation and damage assessment"
    features={[
      "Automated damage assessment",
      "Photo documentation guide",
      "Claim form assistance",
      "Status tracking"
    ]}
  />
);

export const WaterManagementPage = () => (
  <PlaceholderPage
    icon={Droplets}
    title="Water Management"
    description="Predict water table levels, bore well success probability, and water-efficient crop recommendations"
    features={[
      "Groundwater level prediction",
      "Bore well success analysis",
      "Water-efficient crop suggestions",
      "Irrigation optimization"
    ]}
  />
);