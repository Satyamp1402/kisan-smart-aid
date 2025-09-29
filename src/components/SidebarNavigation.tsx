import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home,
  TrendingUp,
  Cloud,
  Camera,
  DollarSign,
  Users,
  CreditCard,
  Shield,
  Smartphone,
  Wifi,
  Zap,
  AlertTriangle,
  Calendar,
  Mic,
  Eye,
  Satellite,
  Bell,
  FileText,
  Droplets,
  BookOpen,
  HelpCircle,
  Navigation,
  Settings,
  Wheat,
  Leaf,
  Thermometer,
  BarChart3,
  MapPin,
  Award,
  Target,
  ChevronDown,
  ChevronRight
} from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface SidebarNavigationProps {
  selectedLanguage: Language;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const SidebarNavigation = ({ selectedLanguage, isMobileOpen = false, onMobileClose }: SidebarNavigationProps) => {
  // Start with all sections collapsed by default
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: "dashboard",
      title: "🏠 Farm Overview",
      icon: Home,
      route: "/",
      color: "bg-gradient-to-br from-sky-500 to-blue-600 text-white"
    },
    // Hero features - expose as top-level items (no dropdown)
    {
      id: "yield-prediction",
      title: "Yield Prediction",
      icon: TrendingUp,
      route: "/yield-prediction",
      color: "bg-gradient-to-br from-purple-500 to-violet-600 text-white"
    },
    {
      id: "fertilizer-optimization",
      title: "Fertilizer Optimization",
      icon: Leaf,
      route: "/fertilizer-optimization",
      color: "bg-gradient-to-br from-green-500 to-emerald-600 text-white"
    },
    {
      id: "pesticide-optimization",
      title: "Pesticide Optimization",
      icon: Shield,
      route: "/pesticide-optimization",
      color: "bg-gradient-to-br from-red-500 to-orange-600 text-white"
    },
    {
      id: "irrigation-scheduler",
      title: "Irrigation Scheduler",
      icon: Droplets,
      route: "/irrigation-scheduler",
      color: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
    },
    {
      id: "suggestions-schedules",
      title: "Suggestions & Schedules",
      icon: Calendar,
      route: "/suggestions-schedules",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
    },
    {
      id: "ai-features",
      title: "AI-Powered Features",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-crop-green to-crop-green-light text-white",
      children: [
        { title: "Crop Disease Detection", icon: Camera, route: "/disease-detection", badge: "Smart" },
        { title: "Voice Assistant", icon: Mic, route: "/voice-assistant", badge: "Voice" },
        { title: "AR Field Scanner", icon: Eye, route: "/ar-scanner", badge: "AR" },
        { title: "Satellite Monitoring", icon: Satellite, route: "/satellite-monitoring", badge: "Satellite" }
      ]
    },
    {
      id: "marketplace",
      title: "Community Marketplace",
      icon: Users,
      color: "bg-gradient-to-br from-sage-green to-mint-green text-white",
      children: [
        { title: "Buyer Connection", icon: Users, route: "/buyer-connection", badge: "Connect" },
        { title: "Cooperative Farming", icon: Wheat, route: "/cooperative-farming", badge: "Unity" },
        { title: "Mandi Predictor", icon: Navigation, route: "/mandi-predictor", badge: "Route" },
        { title: "Price Intelligence", icon: BarChart3, route: "/marketplace", badge: "Price" }
      ]
    },
    {
      id: "financial",
      title: "Financial Intelligence",
      icon: CreditCard,
      color: "bg-gradient-to-br from-harvest-gold to-amber-500 text-white",
      children: [
        { title: "Credit Scoring", icon: CreditCard, route: "/credit-scoring", badge: "Credit" },
        { title: "Crop Insurance", icon: Shield, route: "/insurance", badge: "Secure" },
        { title: "KCC Optimizer", icon: Settings, route: "/kcc-optimizer", badge: "Optimize" }
      ]
    },
    {
      id: "iot-sensors",
      title: "📱 Smart IoT Solutions",
      icon: Smartphone,
      color: "bg-gradient-to-br from-indigo-500 to-purple-500 text-white",
      children: [
        { title: "Smartphone Sensors", icon: Smartphone, route: "/smartphone-sensor", badge: "Smart" },
        { title: "DIY Sensor Guide", icon: Zap, route: "/diy-sensor", badge: "DIY" },
        { title: "Community Data", icon: Wifi, route: "/community-data", badge: "Share" }
      ]
    },
    {
      id: "climate",
      title: "🌦️ Climate Intelligence",
      icon: Cloud,
      color: "bg-gradient-to-br from-sky-blue to-cyan-500 text-white",
      children: [
        { title: "Micro Weather", icon: Cloud, route: "/micro-weather", badge: "Precision" },
        { title: "Climate Alerts", icon: AlertTriangle, route: "/climate-alerts", badge: "Alert" },
        { title: "Climate Planning", icon: Calendar, route: "/climate-adaptation", badge: "Plan" },
        { title: "Weather Forecast", icon: Thermometer, route: "/weather", badge: "Weather" }
      ]
    },
    {
      id: "government",
      title: "🎯 Government Benefits",
      icon: Award,
      color: "bg-gradient-to-br from-orange-500 to-amber-500 text-white",
      children: [
        { title: "PM-KISAN Schemes", icon: Bell, route: "/government-schemes", badge: "Gov" },
        { title: "Insurance Claims", icon: FileText, route: "/insurance-claim", badge: "Claim" },
        { title: "Water Management", icon: Droplets, route: "/water-management", badge: "Water" },
        { title: "Subsidy Alerts", icon: Bell, route: "/government-schemes", badge: "Subsidy" }
      ]
    },
    {
      id: "learning",
      title: "📚 Learning & Tips",
      icon: BookOpen,
      color: "bg-gradient-to-br from-emerald-500 to-teal-500 text-white",
      children: [
        { title: "Pro Tips", icon: BookOpen, route: "/pro-tips", badge: "Pro" },
        { title: "Farming Calendar", icon: Calendar, route: "/farming-calendar", badge: "Schedule" },
        { title: "Modern Techniques", icon: Leaf, route: "/pro-tips", badge: "Modern" },
        { title: "Help Center", icon: HelpCircle, route: "/help", badge: "Help" }
      ]
    }
  ];

  const isActive = (route: string) => {
    if (route === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(route);
  };

  return (
    <div className={`
      w-80 bg-card/95 backdrop-blur-sm border-r border-border/30 h-screen overflow-y-auto 
      fixed lg:sticky top-0 shadow-medium z-50 
      transition-transform duration-300 ease-in-out
      ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Header */}
      <div className="p-6 border-b border-border/30 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-soft overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500">
            <img src="/gardener.png" alt="Gardener" className="w-10 h-10 rounded-lg object-contain" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">Kisan Smart Aid</h2>
            <p className="text-xs text-muted-foreground">AI Agriculture Assistant</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-muted-foreground">Language:</span>
            <Badge variant="outline" className="text-xs">
              {selectedLanguage.flag} {selectedLanguage.nativeName}
            </Badge>
          </div>
          <Button 
            variant="default" 
            size="sm" 
            className="text-sm font-semibold h-8 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200 border-0"
            onClick={() => {
              localStorage.removeItem('selectedLanguage');
              window.location.reload();
            }}
          >
            Change Language
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-2">
        {navigationSections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSections.includes(section.id);
          
          return (
            <div key={section.id}>
              {/* Section Header */}
              {section.children ? (
                <Button
                  variant="ghost"
                  className="w-full justify-between p-3 h-auto text-left hover:bg-accent/50"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg ${section.color} flex items-center justify-center shadow-soft transition-all duration-200 group-hover:scale-105`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-sm">{section.title}</span>
                  </div>
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Button>
              ) : (
                <Link to={section.route} onClick={onMobileClose}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start p-3 h-auto text-left hover:bg-accent/50 touch-manipulation ${
                      isActive(section.route) ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg ${section.color} flex items-center justify-center shadow-soft`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-sm">{section.title}</span>
                    </div>
                  </Button>
                </Link>
              )}

              {/* Section Children */}
              {section.children && isExpanded && (
                <div className="ml-4 space-y-1 mt-2">
                  {section.children.map((child, index) => {
                    const ChildIcon = child.icon;
                    return (
                      <Link key={index} to={child.route} onClick={onMobileClose}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start p-2 h-auto text-left hover:bg-accent/50 touch-manipulation ${
                            isActive(child.route) ? 'bg-primary/10 text-primary' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <ChildIcon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm flex-1">{child.title}</span>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                              {child.badge}
                            </Badge>
                          </div>
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-t border-border/20 mt-4">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-sm mb-3 text-foreground">Today's Insights</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Crop Health</span>
                <span className="font-medium text-green-600">Good</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weather</span>
                <span className="font-medium text-blue-600">Sunny</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Market Price</span>
                <span className="font-medium text-orange-600">₹2,400/qtl</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact */}
      <div className="p-4">
        <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-xs font-medium text-red-800">Emergency Support</span>
            </div>
            <p className="text-xs text-red-700 mt-1">Call: 1800-180-1551</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
