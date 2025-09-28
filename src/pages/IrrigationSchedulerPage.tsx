import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Droplets,
  CloudRain,
  Sun,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Target,
  Activity,
  Thermometer,
  Wind,
  BarChart3,
  Info,
  Lightbulb,
  Bell,
  Settings,
  PlayCircle,
  PauseCircle,
  Zap,
  Timer,
  MapPin,
  Gauge,
  Leaf,
  Waves,
  Battery,
  Wifi,
  AlertCircle,
  StopCircle,
  RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";

interface IrrigationZone {
  id: string;
  zoneName: string;
  cropType: string;
  area: number;
  soilType: string;
  currentMoisture: number;
  optimalMoisture: number;
  irrigationMethod: string;
  flowRate: number;
  status: 'active' | 'scheduled' | 'offline' | 'maintenance';
  lastIrrigation: string;
  nextScheduled: string;
  waterApplied: number;
  efficiency: number;
}

interface IrrigationSchedule {
  id: string;
  zoneName: string;
  scheduledTime: string;
  duration: number;
  waterAmount: number;
  priority: 'high' | 'medium' | 'low';
  weatherAdjusted: boolean;
  reason: string;
  cropStage: string;
  soilMoisture: number;
  weatherFactor: string;
  autoAdjusted: boolean;
}

interface WeatherForecast {
  date: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  evapotranspiration: number;
  irrigationAdjustment: string;
  waterSaved: number;
  recommendation: string;
}

interface SoilSensor {
  id: string;
  zoneName: string;
  location: string;
  moistureLevel: number;
  temperature: number;
  salinity: number;
  ph: number;
  batteryLevel: number;
  signalStrength: number;
  lastReading: string;
  status: 'active' | 'low_battery' | 'offline' | 'error';
  trend: 'increasing' | 'decreasing' | 'stable';
}

interface WaterUsage {
  date: string;
  totalUsed: number;
  scheduled: number;
  emergency: number;
  efficiency: number;
  cost: number;
  saved: number;
}

export const IrrigationSchedulerPage = () => {
  const [activeTab, setActiveTab] = useState('zones');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const irrigationZones: IrrigationZone[] = [
    {
      id: 'zone-001',
      zoneName: 'North Field - Rice',
      cropType: 'Paddy Rice',
      area: 5.2,
      soilType: 'Clay loam',
      currentMoisture: 65,
      optimalMoisture: 80,
      irrigationMethod: 'Flood irrigation',
      flowRate: 120,
      status: 'scheduled',
      lastIrrigation: '2024-04-14 18:00',
      nextScheduled: '2024-04-16 06:00',
      waterApplied: 2800,
      efficiency: 78
    },
    {
      id: 'zone-002',
      zoneName: 'South Field - Wheat',
      cropType: 'Winter Wheat',
      area: 3.8,
      soilType: 'Sandy loam',
      currentMoisture: 45,
      optimalMoisture: 70,
      irrigationMethod: 'Sprinkler',
      flowRate: 85,
      status: 'active',
      lastIrrigation: '2024-04-15 07:30',
      nextScheduled: '2024-04-15 19:00',
      waterApplied: 1950,
      efficiency: 85
    },
    {
      id: 'zone-003',
      zoneName: 'East Plot - Vegetables',
      cropType: 'Mixed Vegetables',
      area: 2.1,
      soilType: 'Loam',
      currentMoisture: 55,
      optimalMoisture: 75,
      irrigationMethod: 'Drip irrigation',
      flowRate: 45,
      status: 'offline',
      lastIrrigation: '2024-04-14 16:45',
      nextScheduled: '2024-04-16 08:00',
      waterApplied: 890,
      efficiency: 92
    },
    {
      id: 'zone-004',
      zoneName: 'West Field - Sugarcane',
      cropType: 'Sugarcane',
      area: 4.5,
      soilType: 'Clay',
      currentMoisture: 70,
      optimalMoisture: 85,
      irrigationMethod: 'Furrow irrigation',
      flowRate: 95,
      status: 'maintenance',
      lastIrrigation: '2024-04-13 20:15',
      nextScheduled: 'Pending repair',
      waterApplied: 3200,
      efficiency: 72
    }
  ];

  const irrigationSchedules: IrrigationSchedule[] = [
    {
      id: 'schedule-001',
      zoneName: 'North Field - Rice',
      scheduledTime: 'Today 6:00 AM',
      duration: 45,
      waterAmount: 480,
      priority: 'high',
      weatherAdjusted: true,
      reason: 'Soil moisture below optimal, no rain forecast',
      cropStage: 'Tillering stage',
      soilMoisture: 65,
      weatherFactor: 'Clear sky, high ET',
      autoAdjusted: true
    },
    {
      id: 'schedule-002',
      zoneName: 'South Field - Wheat',
      scheduledTime: 'Today 7:00 PM',
      duration: 30,
      waterAmount: 285,
      priority: 'high',
      weatherAdjusted: true,
      reason: 'Critical moisture level, flowering stage',
      cropStage: 'Flowering stage',
      soilMoisture: 45,
      weatherFactor: 'Hot, dry conditions',
      autoAdjusted: false
    },
    {
      id: 'schedule-003',
      zoneName: 'East Plot - Vegetables',
      scheduledTime: 'Tomorrow 8:00 AM',
      duration: 25,
      waterAmount: 125,
      priority: 'medium',
      weatherAdjusted: true,
      reason: 'Preventive irrigation before stress',
      cropStage: 'Vegetative growth',
      soilMoisture: 55,
      weatherFactor: 'Stable conditions',
      autoAdjusted: true
    },
    {
      id: 'schedule-004',
      zoneName: 'West Field - Sugarcane',
      scheduledTime: 'Postponed',
      duration: 0,
      waterAmount: 0,
      priority: 'low',
      weatherAdjusted: false,
      reason: 'Equipment maintenance required',
      cropStage: 'Grand growth',
      soilMoisture: 70,
      weatherFactor: 'System offline',
      autoAdjusted: false
    }
  ];

  const weatherForecast: WeatherForecast[] = [
    {
      date: '2024-04-15',
      temperature: 32,
      humidity: 65,
      rainfall: 0,
      windSpeed: 8,
      evapotranspiration: 6.2,
      irrigationAdjustment: '+15% water needed',
      waterSaved: 0,
      recommendation: 'Increase irrigation duration by 15%'
    },
    {
      date: '2024-04-16',
      temperature: 28,
      humidity: 75,
      rainfall: 12,
      windSpeed: 5,
      evapotranspiration: 4.1,
      irrigationAdjustment: '-40% water needed',
      waterSaved: 350,
      recommendation: 'Skip morning irrigation, reduce evening by 40%'
    },
    {
      date: '2024-04-17',
      temperature: 30,
      humidity: 70,
      rainfall: 25,
      windSpeed: 12,
      evapotranspiration: 3.8,
      irrigationAdjustment: '-60% water needed',
      waterSaved: 520,
      recommendation: 'Cancel scheduled irrigations, monitor soil moisture'
    },
    {
      date: '2024-04-18',
      temperature: 29,
      humidity: 80,
      rainfall: 5,
      windSpeed: 6,
      evapotranspiration: 4.5,
      irrigationAdjustment: '-20% water needed',
      waterSaved: 180,
      recommendation: 'Light irrigation if soil moisture drops below 60%'
    }
  ];

  const soilSensors: SoilSensor[] = [
    {
      id: 'sensor-001',
      zoneName: 'North Field - Rice',
      location: 'Center plot',
      moistureLevel: 65,
      temperature: 24,
      salinity: 0.8,
      ph: 6.5,
      batteryLevel: 85,
      signalStrength: 92,
      lastReading: '2024-04-15 14:30',
      status: 'active',
      trend: 'decreasing'
    },
    {
      id: 'sensor-002',
      zoneName: 'South Field - Wheat',
      location: 'South corner',
      moistureLevel: 45,
      temperature: 26,
      salinity: 1.2,
      ph: 7.1,
      batteryLevel: 45,
      signalStrength: 88,
      lastReading: '2024-04-15 14:25',
      status: 'low_battery',
      trend: 'decreasing'
    },
    {
      id: 'sensor-003',
      zoneName: 'East Plot - Vegetables',
      location: 'Near drip lines',
      moistureLevel: 55,
      temperature: 23,
      salinity: 0.6,
      ph: 6.8,
      batteryLevel: 78,
      signalStrength: 95,
      lastReading: '2024-04-15 14:32',
      status: 'active',
      trend: 'stable'
    },
    {
      id: 'sensor-004',
      zoneName: 'West Field - Sugarcane',
      location: 'Field entrance',
      moistureLevel: 70,
      temperature: 25,
      salinity: 1.0,
      ph: 6.9,
      batteryLevel: 0,
      signalStrength: 0,
      lastReading: '2024-04-13 16:20',
      status: 'offline',
      trend: 'stable'
    }
  ];

  const waterUsageData: WaterUsage[] = [
    {
      date: '2024-04-11',
      totalUsed: 4200,
      scheduled: 3800,
      emergency: 400,
      efficiency: 82,
      cost: 315,
      saved: 0
    },
    {
      date: '2024-04-12',
      totalUsed: 3600,
      scheduled: 3600,
      emergency: 0,
      efficiency: 85,
      cost: 270,
      saved: 180
    },
    {
      date: '2024-04-13',
      totalUsed: 2800,
      scheduled: 2400,
      emergency: 400,
      efficiency: 78,
      cost: 210,
      saved: 320
    },
    {
      date: '2024-04-14',
      totalUsed: 4800,
      scheduled: 4500,
      emergency: 300,
      efficiency: 80,
      cost: 360,
      saved: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-300';
      case 'scheduled': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'offline': return 'bg-red-100 text-red-800 border-red-300';
      case 'maintenance': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'low_battery': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'error': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'increasing': return 'text-green-600';
      case 'decreasing': return 'text-red-600';
      case 'stable': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return <TrendingUp className="w-4 h-4" />;
      case 'decreasing': return <Activity className="w-4 h-4 rotate-180" />;
      case 'stable': return <Activity className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
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
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Irrigation Scheduler</h1>
                  <p className="text-sm text-muted-foreground">Smart water management with weather-based automation</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">
                <Droplets className="w-3 h-3 mr-1" />
                Auto-Smart
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <PlayCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Active Zones</div>
              <div className="text-xs text-green-600 mt-1">Running</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Timer className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Scheduled Today</div>
              <div className="text-xs text-blue-600 mt-1">Auto-Adjusted</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <CloudRain className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹1,050</div>
              <div className="text-sm text-muted-foreground">Water Saved</div>
              <div className="text-xs text-purple-600 mt-1">This Week</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">83%</div>
              <div className="text-sm text-muted-foreground">Efficiency</div>
              <div className="text-xs text-orange-600 mt-1">Average</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="zones">Irrigation Zones</TabsTrigger>
            <TabsTrigger value="schedule">Smart Schedule</TabsTrigger>
            <TabsTrigger value="sensors">Soil Sensors</TabsTrigger>
            <TabsTrigger value="analytics">Water Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="zones" className="space-y-6">
            <div className="space-y-4">
              {irrigationZones.map((zone, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${getStatusColor(zone.status)}`}>
                          <Droplets className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{zone.zoneName}</h3>
                            <Badge className={getStatusColor(zone.status)}>
                              {zone.status.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{zone.cropType} • {zone.area} acres • {zone.soilType}</p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Method: </span>
                              <span className="font-medium">{zone.irrigationMethod}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Flow Rate: </span>
                              <span className="font-medium">{zone.flowRate} L/min</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Last Irrigation: </span>
                              <span className="font-medium">{zone.lastIrrigation}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Next Scheduled: </span>
                              <span className="font-medium">{zone.nextScheduled}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-medium text-blue-800 text-sm mb-2">Soil Moisture</div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-700 text-sm">Current: {zone.currentMoisture}%</span>
                          <span className="text-blue-600 text-xs">Target: {zone.optimalMoisture}%</span>
                        </div>
                        <Progress value={(zone.currentMoisture / zone.optimalMoisture) * 100} className="h-2" />
                      </div>

                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-green-800 text-sm mb-1">Water Applied</div>
                        <div className="text-green-700 text-lg font-bold">{zone.waterApplied.toLocaleString()}L</div>
                        <div className="text-green-600 text-xs">This season</div>
                      </div>

                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="font-medium text-purple-800 text-sm mb-1">Efficiency</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={zone.efficiency} className="h-2 flex-1" />
                          <span className="text-purple-700 text-sm font-bold">{zone.efficiency}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      {zone.status === 'scheduled' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Start Now
                        </Button>
                      )}
                      {zone.status === 'active' && (
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          <PauseCircle className="w-4 h-4 mr-2" />
                          Pause
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        History
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CloudRain className="w-5 h-5 text-blue-500" />
                  <span>Weather-Smart Irrigation Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {weatherForecast.map((forecast, index) => (
                    <Card key={index} className="border border-border/30">
                      <CardContent className="p-4">
                        <div className="text-center mb-3">
                          <div className="font-bold text-lg">{forecast.date}</div>
                          <div className="text-sm text-muted-foreground">
                            {forecast.temperature}°C • {forecast.humidity}% RH
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Rainfall:</span>
                            <span className="font-medium">{forecast.rainfall}mm</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">ET:</span>
                            <span className="font-medium">{forecast.evapotranspiration}mm</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Adjustment:</span>
                            <span className={`font-medium ${forecast.waterSaved > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {forecast.irrigationAdjustment}
                            </span>
                          </div>
                          {forecast.waterSaved > 0 && (
                            <div className="text-green-600 text-xs">
                              ₹{forecast.waterSaved} saved
                            </div>
                          )}
                        </div>

                        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
                          {forecast.recommendation}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {irrigationSchedules.map((schedule, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${getPriorityColor(schedule.priority)}`}>
                          <Timer className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{schedule.zoneName}</h3>
                            <Badge className={getPriorityColor(schedule.priority)}>
                              {schedule.priority.toUpperCase()}
                            </Badge>
                            {schedule.weatherAdjusted && (
                              <Badge className="bg-blue-100 text-blue-800">
                                <CloudRain className="w-3 h-3 mr-1" />
                                Weather Adjusted
                              </Badge>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                              <span className="text-muted-foreground">Scheduled: </span>
                              <span className="font-medium">{schedule.scheduledTime}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Duration: </span>
                              <span className="font-medium">{schedule.duration} minutes</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Water Amount: </span>
                              <span className="font-medium">{schedule.waterAmount}L</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Crop Stage: </span>
                              <span className="font-medium">{schedule.cropStage}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="font-medium text-yellow-800 text-sm mb-1">Reason:</div>
                        <div className="text-yellow-700 text-sm">{schedule.reason}</div>
                      </div>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="font-medium text-purple-800 text-sm mb-1">Weather Factor:</div>
                        <div className="text-purple-700 text-sm">{schedule.weatherFactor}</div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-blue-800 text-sm font-medium">Soil Moisture: {schedule.soilMoisture}%</span>
                          {schedule.autoAdjusted && (
                            <Badge className="bg-green-100 text-green-800 ml-2">
                              <Zap className="w-3 h-3 mr-1" />
                              Auto-Optimized
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      {schedule.duration > 0 && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Confirm Schedule
                          </Button>
                          <Button variant="outline" size="sm">
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reschedule
                          </Button>
                        </>
                      )}
                      {schedule.duration === 0 && (
                        <Button variant="outline" size="sm" className="text-orange-600">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Needs Attention
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Alert
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sensors" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {soilSensors.map((sensor, index) => (
                <Card key={index} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(sensor.status)}`}>
                          <Gauge className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-bold">{sensor.zoneName}</h3>
                            <Badge className={getStatusColor(sensor.status)}>
                              {sensor.status.replace('_', ' ').toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{sensor.location}</p>
                          <p className="text-xs text-muted-foreground">Last reading: {sensor.lastReading}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-800 text-sm font-medium">Soil Moisture</span>
                          <div className={`flex items-center space-x-1 ${getTrendColor(sensor.trend)}`}>
                            {getTrendIcon(sensor.trend)}
                            <span className="text-xs">{sensor.trend}</span>
                          </div>
                        </div>
                        <div className="text-blue-700 text-2xl font-bold">{sensor.moistureLevel}%</div>
                      </div>

                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-green-800 text-sm font-medium mb-2">Temperature</div>
                        <div className="text-green-700 text-2xl font-bold">{sensor.temperature}°C</div>
                      </div>

                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="text-purple-800 text-sm font-medium mb-2">Salinity</div>
                        <div className="text-purple-700 text-lg font-bold">{sensor.salinity} dS/m</div>
                      </div>

                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="text-orange-800 text-sm font-medium mb-2">pH Level</div>
                        <div className="text-orange-700 text-lg font-bold">{sensor.ph}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <Battery className={`w-5 h-5 ${sensor.batteryLevel > 50 ? 'text-green-500' : sensor.batteryLevel > 20 ? 'text-yellow-500' : 'text-red-500'}`} />
                        <div>
                          <div className="text-sm font-medium">Battery</div>
                          <div className="text-xs text-muted-foreground">{sensor.batteryLevel}%</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Wifi className={`w-5 h-5 ${sensor.signalStrength > 80 ? 'text-green-500' : sensor.signalStrength > 50 ? 'text-yellow-500' : 'text-red-500'}`} />
                        <div>
                          <div className="text-sm font-medium">Signal</div>
                          <div className="text-xs text-muted-foreground">{sensor.signalStrength}%</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border/30">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Activity className="w-4 h-4 mr-2" />
                        View History
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Calibrate
                      </Button>
                      {sensor.status === 'low_battery' && (
                        <Button variant="outline" size="sm" className="text-yellow-600">
                          <Battery className="w-4 h-4 mr-2" />
                          Replace Battery
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <span>Water Usage Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {waterUsageData.map((usage, index) => (
                    <Card key={index} className="border border-border/30">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-bold">{usage.date}</h3>
                            <Badge className={`${usage.efficiency > 80 ? 'bg-green-100 text-green-800' : usage.efficiency > 70 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                              {usage.efficiency}% Efficient
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">{usage.totalUsed.toLocaleString()}L</div>
                            <div className="text-xs text-muted-foreground">Total Used</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-2 bg-blue-50 rounded-lg">
                            <div className="text-blue-700 font-bold">{usage.scheduled.toLocaleString()}L</div>
                            <div className="text-blue-600 text-xs">Scheduled</div>
                          </div>
                          <div className="text-center p-2 bg-red-50 rounded-lg">
                            <div className="text-red-700 font-bold">{usage.emergency.toLocaleString()}L</div>
                            <div className="text-red-600 text-xs">Emergency</div>
                          </div>
                          <div className="text-center p-2 bg-green-50 rounded-lg">
                            <div className="text-green-700 font-bold">₹{usage.cost}</div>
                            <div className="text-green-600 text-xs">Cost</div>
                          </div>
                          <div className="text-center p-2 bg-purple-50 rounded-lg">
                            <div className="text-purple-700 font-bold">₹{usage.saved}</div>
                            <div className="text-purple-600 text-xs">Saved</div>
                          </div>
                        </div>

                        <Progress value={usage.efficiency} className="h-3" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium text-green-800 mb-2">Smart Irrigation Benefits:</div>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Weather-based scheduling saves 25-40% water</div>
                    <div>• Automated moisture monitoring reduces over-irrigation</div>
                    <div>• Crop stage-specific irrigation improves yields by 15-20%</div>
                    <div>• Real-time adjustments based on ET and rainfall</div>
                    <div>• Total water cost reduction: ₹1,050 this week</div>
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