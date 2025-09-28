import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle,
  Cloud,
  CloudRain,
  Thermometer,
  Wind,
  Zap,
  Snowflake,
  Sun,
  Droplets,
  Bell,
  Clock,
  MapPin,
  Eye,
  Shield,
  Calendar,
  Phone,
  MessageSquare,
  Settings,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Info,
  Lightbulb,
  Target,
  BarChart3,
  Satellite,
  Navigation
} from "lucide-react";
import { Link } from "react-router-dom";

interface ClimateAlert {
  id: string;
  type: 'severe_weather' | 'drought' | 'flood' | 'frost' | 'heatwave' | 'pest_outbreak' | 'disease_risk';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  affectedArea: string;
  startTime: string;
  endTime: string;
  confidence: number;
  recommendations: string[];
  actionRequired: string;
  status: 'active' | 'warning' | 'watch' | 'expired';
  source: string;
}

interface WeatherWarning {
  id: string;
  event: string;
  severity: 'advisory' | 'watch' | 'warning' | 'emergency';
  description: string;
  areas: string[];
  validFrom: string;
  validUntil: string;
  impact: string;
  likelihood: number;
}

interface RiskMetric {
  name: string;
  currentLevel: number;
  riskLevel: 'low' | 'medium' | 'high';
  trend: 'increasing' | 'stable' | 'decreasing';
  nextAssessment: string;
  description: string;
}

export const ClimateAlertsPage = () => {
  const [activeTab, setActiveTab] = useState('alerts');
  const [alertFilter, setAlertFilter] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const climateAlerts: ClimateAlert[] = [
    {
      id: 'alert-001',
      type: 'severe_weather',
      severity: 'high',
      title: 'Thunderstorm Warning',
      message: 'Severe thunderstorms with heavy rain and strong winds expected in your area',
      affectedArea: 'Hapur district and surrounding areas',
      startTime: '2024-04-15 18:00',
      endTime: '2024-04-16 02:00',
      confidence: 85,
      recommendations: [
        'Secure loose farm equipment and machinery',
        'Harvest ready crops if possible before evening',
        'Ensure proper drainage in fields',
        'Move livestock to sheltered areas'
      ],
      actionRequired: 'Immediate preparation required - 6 hours until event',
      status: 'active',
      source: 'IMD Weather Service'
    },
    {
      id: 'alert-002',
      type: 'pest_outbreak',
      severity: 'medium',
      title: 'Fall Armyworm Risk',
      message: 'Weather conditions favorable for fall armyworm outbreak in maize crops',
      affectedArea: 'Western UP - Maize growing regions',
      startTime: '2024-04-16 00:00',
      endTime: '2024-04-25 23:59',
      confidence: 72,
      recommendations: [
        'Increase field monitoring frequency',
        'Prepare pheromone traps',
        'Stock up on approved pesticides',
        'Monitor for early larval stages'
      ],
      actionRequired: 'Begin preventive measures within 24 hours',
      status: 'warning',
      source: 'Agricultural Pest Monitoring System'
    },
    {
      id: 'alert-003',
      type: 'frost',
      severity: 'medium',
      title: 'Frost Advisory',
      message: 'Frost conditions possible during early morning hours',
      affectedArea: 'Northern districts of UP',
      startTime: '2024-04-17 03:00',
      endTime: '2024-04-17 07:00',
      confidence: 68,
      recommendations: [
        'Cover sensitive crops with cloth or plastic',
        'Use smudge pots or frost protection systems',
        'Irrigate fields before nightfall',
        'Monitor temperature closely'
      ],
      actionRequired: 'Prepare frost protection measures',
      status: 'watch',
      source: 'Regional Weather Network'
    },
    {
      id: 'alert-004',
      type: 'drought',
      severity: 'low',
      title: 'Dry Spell Monitoring',
      message: 'Extended dry period possible - monitor soil moisture levels',
      affectedArea: 'Central and Eastern UP',
      startTime: '2024-04-20 00:00',
      endTime: '2024-05-05 23:59',
      confidence: 65,
      recommendations: [
        'Implement water conservation practices',
        'Consider drought-resistant crop varieties',
        'Plan irrigation schedule efficiently',
        'Monitor groundwater levels'
      ],
      actionRequired: 'Review water management strategy',
      status: 'watch',
      source: 'Drought Monitoring Cell'
    }
  ];

  const weatherWarnings: WeatherWarning[] = [
    {
      id: 'warning-001',
      event: 'Heavy Rainfall',
      severity: 'warning',
      description: 'Heavy to very heavy rainfall expected with thunderstorms',
      areas: ['Hapur', 'Ghaziabad', 'Meerut', 'Bulandshahr'],
      validFrom: '2024-04-15 15:00',
      validUntil: '2024-04-16 08:00',
      impact: 'Waterlogging in low-lying areas, temporary disruption of farm activities',
      likelihood: 80
    },
    {
      id: 'warning-002',
      event: 'Strong Winds',
      severity: 'watch',
      description: 'Gusty winds reaching 40-50 km/h possible',
      areas: ['Western UP districts'],
      validFrom: '2024-04-15 16:00',
      validUntil: '2024-04-15 22:00',
      impact: 'Risk of crop lodging, especially for tall crops like sugarcane',
      likelihood: 70
    }
  ];

  const riskMetrics: RiskMetric[] = [
    {
      name: 'Drought Risk',
      currentLevel: 25,
      riskLevel: 'low',
      trend: 'stable',
      nextAssessment: '2024-04-20',
      description: 'Based on soil moisture, rainfall patterns, and reservoir levels'
    },
    {
      name: 'Flood Risk',
      currentLevel: 65,
      riskLevel: 'medium',
      trend: 'increasing',
      nextAssessment: '2024-04-16',
      description: 'Heavy rainfall and river levels contributing to elevated risk'
    },
    {
      name: 'Extreme Heat Risk',
      currentLevel: 35,
      riskLevel: 'low',
      trend: 'increasing',
      nextAssessment: '2024-04-25',
      description: 'Seasonal temperature trends and heatwave probability'
    },
    {
      name: 'Pest Pressure',
      currentLevel: 55,
      riskLevel: 'medium',
      trend: 'stable',
      nextAssessment: '2024-04-18',
      description: 'Weather-driven pest activity and crop susceptibility'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-orange-100 text-orange-800';
      case 'watch': return 'bg-yellow-100 text-yellow-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getAlertIcon = (type: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'severe_weather': <Cloud className="w-5 h-5" />,
      'drought': <Sun className="w-5 h-5" />,
      'flood': <CloudRain className="w-5 h-5" />,
      'frost': <Snowflake className="w-5 h-5" />,
      'heatwave': <Thermometer className="w-5 h-5" />,
      'pest_outbreak': <AlertTriangle className="w-5 h-5" />,
      'disease_risk': <AlertTriangle className="w-5 h-5" />
    };
    return iconMap[type] || <AlertTriangle className="w-5 h-5" />;
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'decreasing': return <TrendingDown className="w-4 h-4 text-green-500" />;
      case 'stable': return <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>;
      default: return null;
    }
  };

  const filteredAlerts = climateAlerts.filter(alert => 
    alertFilter === 'all' || alert.severity === alertFilter
  );

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
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Climate Alerts</h1>
                  <p className="text-sm text-muted-foreground">Early warning system for climate risks and farming guidance</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-100 text-red-800">
                <Bell className="w-3 h-3 mr-1" />
                {climateAlerts.filter(a => a.status === 'active').length} Active
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Alert Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {climateAlerts.filter(a => a.status === 'active').length}
              </div>
              <div className="text-sm text-muted-foreground">Active Alerts</div>
              <div className="text-xs text-red-600 mt-1">Immediate Action</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Eye className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {climateAlerts.filter(a => a.status === 'warning').length}
              </div>
              <div className="text-sm text-muted-foreground">Warnings</div>
              <div className="text-xs text-yellow-600 mt-1">Monitor Closely</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {climateAlerts.filter(a => a.status === 'watch').length}
              </div>
              <div className="text-sm text-muted-foreground">Watches</div>
              <div className="text-xs text-blue-600 mt-1">Stay Informed</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {Math.round(climateAlerts.reduce((acc, alert) => acc + alert.confidence, 0) / climateAlerts.length)}%
              </div>
              <div className="text-sm text-muted-foreground">Avg Confidence</div>
              <div className="text-xs text-green-600 mt-1">AI Accuracy</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="warnings">Weather Warnings</TabsTrigger>
            <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
            <TabsTrigger value="settings">Alert Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <Button
                  variant={alertFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setAlertFilter('all')}
                  size="sm"
                >
                  All Alerts
                </Button>
                <Button
                  variant={alertFilter === 'critical' ? 'default' : 'outline'}
                  onClick={() => setAlertFilter('critical')}
                  size="sm"
                >
                  Critical
                </Button>
                <Button
                  variant={alertFilter === 'high' ? 'default' : 'outline'}
                  onClick={() => setAlertFilter('high')}
                  size="sm"
                >
                  High
                </Button>
                <Button
                  variant={alertFilter === 'medium' ? 'default' : 'outline'}
                  onClick={() => setAlertFilter('medium')}
                  size="sm"
                >
                  Medium
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredAlerts.map((alert, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getSeverityColor(alert.severity)} border`}>
                          {getAlertIcon(alert.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{alert.title}</h3>
                            <Badge className={getStatusColor(alert.status)}>
                              {alert.status.toUpperCase()}
                            </Badge>
                            <Badge className={getSeverityColor(alert.severity)}>
                              {alert.severity.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{alert.message}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Affected Area: </span>
                              <span className="font-medium">{alert.affectedArea}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Confidence: </span>
                              <span className="font-medium">{alert.confidence}%</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Valid Until: </span>
                              <span className="font-medium">{alert.endTime}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Source: </span>
                              <span className="font-medium">{alert.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-orange-600" />
                        <span className="font-medium text-orange-800">Action Required</span>
                      </div>
                      <p className="text-orange-700 text-sm">{alert.actionRequired}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium text-sm">Recommendations:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {alert.recommendations.map((rec, recIndex) => (
                          <div key={recIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 mt-4 pt-4 border-t border-border/30">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Share Alert
                      </Button>
                      <Button variant="outline" size="sm">
                        <Info className="w-4 h-4 mr-2" />
                        More Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="warnings" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="w-5 h-5 text-blue-500" />
                  <span>Weather Warnings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherWarnings.map((warning, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-lg">{warning.event}</h3>
                              <Badge className={`${
                                warning.severity === 'emergency' ? 'bg-red-100 text-red-800' :
                                warning.severity === 'warning' ? 'bg-orange-100 text-orange-800' :
                                warning.severity === 'watch' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {warning.severity.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{warning.description}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Areas: </span>
                                <span className="font-medium">{warning.areas.join(', ')}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Likelihood: </span>
                                <span className="font-medium">{warning.likelihood}%</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Valid From: </span>
                                <span className="font-medium">{warning.validFrom}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Valid Until: </span>
                                <span className="font-medium">{warning.validUntil}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">{warning.likelihood}%</div>
                            <div className="text-sm text-muted-foreground">Confidence</div>
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="font-medium text-blue-800 text-sm mb-1">Expected Impact:</div>
                          <div className="text-blue-700 text-sm">{warning.impact}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <span>Climate Risk Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {riskMetrics.map((metric, index) => (
                    <Card key={index} className="border border-border/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold">{metric.name}</h3>
                          <div className="flex items-center space-x-2">
                            {getTrendIcon(metric.trend)}
                            <Badge className={
                              metric.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                              metric.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }>
                              {metric.riskLevel.toUpperCase()}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm">Risk Level</span>
                              <span className={`text-sm font-bold ${getRiskColor(metric.riskLevel)}`}>
                                {metric.currentLevel}%
                              </span>
                            </div>
                            <Progress value={metric.currentLevel} className="h-3" />
                          </div>

                          <div className="text-sm text-muted-foreground">
                            {metric.description}
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Trend:</span>
                            <span className="font-medium capitalize">{metric.trend}</span>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Next Assessment:</span>
                            <span className="font-medium">{metric.nextAssessment}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="font-medium text-purple-800 mb-2">Risk Summary:</div>
                  <div className="text-sm text-purple-700 space-y-1">
                    <div>• Overall climate risk level is currently moderate</div>
                    <div>• Flood risk is elevated due to expected heavy rainfall</div>
                    <div>• Drought conditions remain low with adequate soil moisture</div>
                    <div>• Pest pressure monitoring shows seasonal increase</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-blue-500" />
                    <span>Notification Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Push Notifications</span>
                      <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">SMS Alerts</span>
                      <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Email Notifications</span>
                      <Badge className="bg-gray-100 text-gray-800">Disabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">WhatsApp Alerts</span>
                      <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/30">
                    <div className="space-y-2">
                      <div className="font-medium">Alert Frequency</div>
                      <div className="text-sm text-muted-foreground">
                        Current: Immediate for critical, hourly summary for others
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Update Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-green-500" />
                    <span>Emergency Contacts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">Local Weather Office</div>
                      <div className="text-sm text-muted-foreground">1800-180-1551</div>
                    </div>
                    <div>
                      <div className="font-medium">Agricultural Helpline</div>
                      <div className="text-sm text-muted-foreground">1800-180-1551</div>
                    </div>
                    <div>
                      <div className="font-medium">Emergency Services</div>
                      <div className="text-sm text-muted-foreground">108</div>
                    </div>
                    <div>
                      <div className="font-medium">Local Extension Office</div>
                      <div className="text-sm text-muted-foreground">+91-98765-43210</div>
                    </div>
                  </div>

                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="font-medium text-red-800 text-sm">Emergency Protocol:</div>
                    <div className="text-red-700 text-sm">
                      In case of severe weather alerts, immediately contact your local extension officer and secure farm assets.
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