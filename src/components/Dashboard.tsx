import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Cloud, 
  Droplets, 
  Thermometer, 
  Sun, 
  AlertTriangle,
  Leaf,
  BarChart3,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Zap,
  Shield,
  Bell,
  Camera,
  Mic,
  Eye,
  Navigation,
  Target
} from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface DashboardProps {
  selectedLanguage: Language;
}

export const Dashboard = ({ selectedLanguage }: DashboardProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data - in a real app, this would come from APIs
  const dashboardData = {
    cropHealth: {
      status: "Good",
      score: 85,
      issues: 2,
      color: "text-green-600"
    },
    weather: {
      temperature: "28°C",
      humidity: "65%",
      condition: "Sunny",
      forecast: "Clear skies for next 3 days"
    },
    soilMoisture: {
      level: 72,
      status: "Optimal",
      recommendation: "No irrigation needed"
    },
    marketPrices: {
      wheat: "₹2,400/qtl",
      rice: "₹3,200/qtl",
      maize: "₹1,800/qtl",
      trend: "Rising"
    },
    predictions: {
      yield: "4.2 tons/hectare",
      profit: "₹45,000",
      risk: "Low"
    },
    alerts: [
      { type: "weather", message: "Rain expected in 2 days", priority: "medium" },
      { type: "market", message: "Wheat prices up 5% this week", priority: "high" },
      { type: "irrigation", message: "Schedule irrigation for tomorrow", priority: "low" }
    ],
    recommendations: [
      { title: "Apply fertilizer", description: "Nitrogen levels are low", priority: "high" },
      { title: "Harvest timing", description: "Optimal harvest in 2 weeks", priority: "medium" },
      { title: "Pest control", description: "Monitor for aphids", priority: "low" }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const quickActions = [
    { title: "Scan Crop", icon: Camera, color: "bg-gradient-primary", route: "/disease-detection" },
    { title: "Voice Assistant", icon: Mic, color: "bg-gradient-sky", route: "/voice-assistant" },
    { title: "Optimization", icon: Target, color: "bg-gradient-to-br from-purple-500 to-indigo-500", route: "/fertilizer-optimization" },
    { title: "Market Prices", icon: DollarSign, color: "bg-gradient-harvest", route: "/marketplace" },
    { title: "Weather Alert", icon: Cloud, color: "bg-gradient-to-br from-cyan-500 to-blue-500", route: "/weather" },
    { title: "Pro Tips", icon: Leaf, color: "bg-gradient-sage", route: "/pro-tips" }
  ];

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 shadow-medium">
              <img src="/sprout.png" alt="Sprout" className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-3xl font-bold text-foreground bg-gradient-primary text-white px-4 py-2 rounded-lg shadow-medium">Farm Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Welcome back! Here's your farm overview</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">
            {currentTime.toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="text-lg font-semibold text-foreground">
            {currentTime.toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={index} to={action.route}>
              <Card className="group hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{action.title}</h3>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Crop Health */}
        <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-green-600" />
              <span>Crop Health</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">{dashboardData.cropHealth.score}%</span>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {dashboardData.cropHealth.status}
                </Badge>
              </div>
              <Progress value={dashboardData.cropHealth.score} className="h-2" />
              <p className="text-sm text-muted-foreground">
                {dashboardData.cropHealth.issues} issues detected
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weather */}
        <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-blue-600" />
              <span>Weather</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{dashboardData.weather.temperature}</span>
                <Sun className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-sm text-muted-foreground">
                Humidity: {dashboardData.weather.humidity}
              </p>
              <p className="text-sm text-blue-600 font-medium">
                {dashboardData.weather.forecast}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Soil Moisture */}
        <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Droplets className="w-5 h-5 text-cyan-600" />
              <span>Soil Moisture</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-600">{dashboardData.soilMoisture.level}%</span>
                <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">
                  {dashboardData.soilMoisture.status}
                </Badge>
              </div>
              <Progress value={dashboardData.soilMoisture.level} className="h-2" />
              <p className="text-sm text-muted-foreground">
                {dashboardData.soilMoisture.recommendation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Market Prices */}
        <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-orange-600" />
              <span>Market Prices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">{dashboardData.marketPrices.wheat}</span>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rice:</span>
                  <span className="font-medium">{dashboardData.marketPrices.rice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maize:</span>
                  <span className="font-medium">{dashboardData.marketPrices.maize}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Predictions and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yield Predictions */}
        <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span>Yield Predictions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">{dashboardData.predictions.yield}</div>
                  <div className="text-sm text-muted-foreground">Expected Yield</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{dashboardData.predictions.profit}</div>
                  <div className="text-sm text-muted-foreground">Expected Profit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{dashboardData.predictions.risk}</div>
                  <div className="text-sm text-muted-foreground">Risk Level</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>AI Recommendation:</strong> Your crops are performing well. Consider harvesting in 2 weeks for optimal yield.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-red-600" />
              <span>Important Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dashboardData.alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getPriorityColor(alert.priority)}`}>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">{alert.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span>Smart Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dashboardData.recommendations.map((rec, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(rec.priority)}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className={getPriorityColor(rec.priority)}>
                    {rec.priority.toUpperCase()}
                  </Badge>
                </div>
                <h4 className="font-semibold text-sm mb-1">{rec.title}</h4>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Crop health scan completed - All good</span>
              <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Weather alert: Rain expected in 2 days</span>
              <span className="text-xs text-muted-foreground ml-auto">4 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm">Market price update: Wheat +5%</span>
              <span className="text-xs text-muted-foreground ml-auto">6 hours ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};