import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cloud,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  CloudSnow,
  Zap,
  Eye,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Satellite,
  Navigation,
  BarChart3,
  LineChart,
  Target,
  Leaf,
  Gauge,
  Umbrella,
  Sunrise,
  Sunset,
  Compass
} from "lucide-react";
import { Link } from "react-router-dom";

interface WeatherData {
  location: string;
  coordinates: { lat: number; lon: number };
  currentTemp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  uvIndex: number;
  visibility: number;
  condition: string;
  icon: string;
  precipitationChance: number;
  soilTemp: number;
  soilMoisture: number;
  evapotranspiration: number;
}

interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
  precipChance: number;
  windSpeed: number;
  humidity: number;
}

interface DailyForecast {
  date: string;
  high: number;
  low: number;
  condition: string;
  precipChance: number;
  precipAmount: number;
  windSpeed: number;
  humidity: number;
  uvIndex: number;
}

interface MicrostationData {
  id: string;
  name: string;
  distance: number;
  temp: number;
  humidity: number;
  windSpeed: number;
  status: 'online' | 'offline' | 'maintenance';
}

export const MicroWeatherPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedMicrostation, setSelectedMicrostation] = useState('farm-center');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const currentWeather: WeatherData = {
    location: "Your Farm, Hapur, UP",
    coordinates: { lat: 28.7306, lon: 77.7757 },
    currentTemp: 28,
    feelsLike: 31,
    humidity: 68,
    windSpeed: 12,
    windDirection: "SW",
    pressure: 1013,
    uvIndex: 6,
    visibility: 8,
    condition: "Partly Cloudy",
    icon: "partly-cloudy",
    precipitationChance: 25,
    soilTemp: 24,
    soilMoisture: 72,
    evapotranspiration: 4.2
  };

  const hourlyForecast: HourlyForecast[] = [
    { time: "Now", temp: 28, condition: "Partly Cloudy", precipChance: 25, windSpeed: 12, humidity: 68 },
    { time: "2 PM", temp: 30, condition: "Sunny", precipChance: 10, windSpeed: 15, humidity: 62 },
    { time: "3 PM", temp: 32, condition: "Sunny", precipChance: 5, windSpeed: 18, humidity: 58 },
    { time: "4 PM", temp: 33, condition: "Partly Cloudy", precipChance: 15, windSpeed: 20, humidity: 60 },
    { time: "5 PM", temp: 31, condition: "Cloudy", precipChance: 35, windSpeed: 16, humidity: 65 },
    { time: "6 PM", temp: 29, condition: "Light Rain", precipChance: 70, windSpeed: 14, humidity: 78 },
    { time: "7 PM", temp: 27, condition: "Rain", precipChance: 85, windSpeed: 12, humidity: 82 },
    { time: "8 PM", temp: 25, condition: "Light Rain", precipChance: 60, windSpeed: 10, humidity: 80 }
  ];

  const dailyForecast: DailyForecast[] = [
    { date: "Today", high: 33, low: 24, condition: "Partly Cloudy", precipChance: 30, precipAmount: 2, windSpeed: 15, humidity: 65, uvIndex: 6 },
    { date: "Tomorrow", high: 31, low: 22, condition: "Rain", precipChance: 80, precipAmount: 8, windSpeed: 18, humidity: 75, uvIndex: 3 },
    { date: "Wed", high: 28, low: 20, condition: "Cloudy", precipChance: 45, precipAmount: 3, windSpeed: 12, humidity: 70, uvIndex: 4 },
    { date: "Thu", high: 30, low: 21, condition: "Sunny", precipChance: 15, precipAmount: 0, windSpeed: 14, humidity: 60, uvIndex: 7 },
    { date: "Fri", high: 32, low: 23, condition: "Partly Cloudy", precipChance: 25, precipAmount: 1, windSpeed: 16, humidity: 62, uvIndex: 6 },
    { date: "Sat", high: 34, low: 25, condition: "Sunny", precipChance: 10, precipAmount: 0, windSpeed: 18, humidity: 58, uvIndex: 8 },
    { date: "Sun", high: 35, low: 26, condition: "Hot", precipChance: 5, precipAmount: 0, windSpeed: 20, humidity: 55, uvIndex: 9 }
  ];

  const microstations: MicrostationData[] = [
    { id: 'farm-center', name: 'Farm Center', distance: 0, temp: 28, humidity: 68, windSpeed: 12, status: 'online' },
    { id: 'north-field', name: 'North Field', distance: 0.3, temp: 27, humidity: 70, windSpeed: 14, status: 'online' },
    { id: 'south-boundary', name: 'South Boundary', distance: 0.8, temp: 29, humidity: 65, windSpeed: 11, status: 'online' },
    { id: 'east-corner', name: 'East Corner', distance: 1.2, temp: 26, humidity: 72, windSpeed: 9, status: 'maintenance' },
    { id: 'west-gate', name: 'West Gate', distance: 0.6, temp: 28, humidity: 67, windSpeed: 13, status: 'online' },
    { id: 'neighbor-north', name: 'Neighbor North', distance: 1.8, temp: 27, humidity: 69, windSpeed: 15, status: 'offline' }
  ];

  const getConditionIcon = (condition: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      "Sunny": <Sun className="w-5 h-5 text-yellow-500" />,
      "Partly Cloudy": <Cloud className="w-5 h-5 text-gray-500" />,
      "Cloudy": <Cloud className="w-5 h-5 text-gray-600" />,
      "Rain": <CloudRain className="w-5 h-5 text-blue-600" />,
      "Light Rain": <Droplets className="w-5 h-5 text-blue-500" />,
      "Snow": <CloudSnow className="w-5 h-5 text-blue-300" />,
      "Hot": <Sun className="w-5 h-5 text-red-500" />
    };
    return iconMap[condition] || <Cloud className="w-5 h-5 text-gray-500" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-100 text-green-800';
      case 'offline': return 'bg-red-100 text-red-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUVIndexColor = (uvIndex: number) => {
    if (uvIndex <= 2) return 'text-green-600';
    if (uvIndex <= 5) return 'text-yellow-600';
    if (uvIndex <= 7) return 'text-orange-600';
    if (uvIndex <= 10) return 'text-red-600';
    return 'text-purple-600';
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
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Micro Weather</h1>
                  <p className="text-sm text-muted-foreground">Hyperlocal weather forecasting with 100m precision</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">
                <Satellite className="w-3 h-3 mr-1" />
                Live Data
              </Badge>
              <div className="text-sm text-muted-foreground">
                Updated: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Current Weather Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Thermometer className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{currentWeather.currentTemp}°C</div>
              <div className="text-sm text-muted-foreground">Temperature</div>
              <div className="text-xs text-red-600 mt-1">Feels like {currentWeather.feelsLike}°C</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{currentWeather.humidity}%</div>
              <div className="text-sm text-muted-foreground">Humidity</div>
              <div className="text-xs text-blue-600 mt-1">{currentWeather.precipitationChance}% Rain Chance</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Wind className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{currentWeather.windSpeed}</div>
              <div className="text-sm text-muted-foreground">km/h {currentWeather.windDirection}</div>
              <div className="text-xs text-green-600 mt-1">Wind Speed</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className={`text-2xl font-bold ${getUVIndexColor(currentWeather.uvIndex)}`}>
                {currentWeather.uvIndex}
              </div>
              <div className="text-sm text-muted-foreground">UV Index</div>
              <div className="text-xs text-yellow-600 mt-1">
                {currentWeather.uvIndex <= 5 ? 'Moderate' : 'High'}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="current">Current Conditions</TabsTrigger>
            <TabsTrigger value="hourly">Hourly Forecast</TabsTrigger>
            <TabsTrigger value="daily">7-Day Forecast</TabsTrigger>
            <TabsTrigger value="microstations">Micro Stations</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Detailed Current Weather */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cloud className="w-5 h-5 text-blue-500" />
                    <span>Current Conditions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getConditionIcon(currentWeather.condition)}
                      <div>
                        <div className="font-semibold">{currentWeather.condition}</div>
                        <div className="text-sm text-muted-foreground">{currentWeather.location}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{currentWeather.currentTemp}°C</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Feels like</span>
                        <span className="font-medium">{currentWeather.feelsLike}°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pressure</span>
                        <span className="font-medium">{currentWeather.pressure} hPa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Visibility</span>
                        <span className="font-medium">{currentWeather.visibility} km</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Soil Temp</span>
                        <span className="font-medium">{currentWeather.soilTemp}°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Soil Moisture</span>
                        <span className="font-medium">{currentWeather.soilMoisture}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Evapotranspiration</span>
                        <span className="font-medium">{currentWeather.evapotranspiration} mm</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agricultural Insights */}
              <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span>Agricultural Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-800">Good Conditions</span>
                    </div>
                    <div className="text-sm text-green-700 space-y-1">
                      <div>• Ideal temperature range for wheat growth</div>
                      <div>• Soil moisture levels are optimal</div>
                      <div>• Wind conditions favorable for pollination</div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Monitor Closely</span>
                    </div>
                    <div className="text-sm text-yellow-700 space-y-1">
                      <div>• UV levels getting high - consider shade cloth</div>
                      <div>• 25% rain chance - monitor for pest activity</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium text-sm">Today's Recommendations:</div>
                    <div className="text-sm space-y-1">
                      <div>• Morning irrigation recommended (6-8 AM)</div>
                      <div>• Apply foliar spray before 10 AM</div>
                      <div>• Avoid heavy machinery after 2 PM</div>
                      <div>• Check for aphids during cool evening</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hourly" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>24-Hour Forecast</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {hourlyForecast.map((hour, index) => (
                    <Card key={index} className="border border-border/30 text-center p-3">
                      <div className="space-y-2">
                        <div className="font-medium text-sm">{hour.time}</div>
                        {getConditionIcon(hour.condition)}
                        <div className="font-bold text-lg">{hour.temp}°</div>
                        <div className="text-xs text-blue-600">{hour.precipChance}%</div>
                        <div className="text-xs text-muted-foreground">
                          💨 {hour.windSpeed} km/h
                        </div>
                        <div className="text-xs text-muted-foreground">
                          💧 {hour.humidity}%
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium text-blue-800 mb-2">Hourly Summary:</div>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>• Temperature will peak at 33°C around 4 PM</div>
                    <div>• Rain expected from 6 PM with 85% chance at 7 PM</div>
                    <div>• Wind speeds will increase to 20 km/h in afternoon</div>
                    <div>• Best work window: 8 AM - 2 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span>7-Day Weather Forecast</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailyForecast.map((day, index) => (
                    <Card key={index} className="border border-border/30 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 text-center">
                              <div className="font-medium">{day.date}</div>
                              {getConditionIcon(day.condition)}
                            </div>
                            <div>
                              <div className="font-medium">{day.condition}</div>
                              <div className="text-sm text-muted-foreground">
                                💧 {day.precipChance}% • {day.precipAmount}mm
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="text-lg font-bold">{day.high}°</div>
                              <div className="text-sm text-muted-foreground">{day.low}°</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm">💨 {day.windSpeed}</div>
                              <div className="text-sm">💧 {day.humidity}%</div>
                            </div>
                            <div className="text-center">
                              <div className={`text-sm font-medium ${getUVIndexColor(day.uvIndex)}`}>
                                UV {day.uvIndex}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="font-medium text-purple-800 mb-2">Weekly Outlook:</div>
                  <div className="text-sm text-purple-700 space-y-1">
                    <div>• Heavy rain expected Tuesday - postpone spraying</div>
                    <div>• Hot weather from Saturday - increase irrigation</div>
                    <div>• Ideal harvest conditions Thursday-Friday</div>
                    <div>• Average rainfall this week: 14mm</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="microstations" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-green-500" />
                  <span>Micro Weather Stations Network</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {microstations.map((station, index) => (
                      <Card key={index} className={`border border-border/30 hover:shadow-md transition-shadow ${selectedMicrostation === station.id ? 'ring-2 ring-blue-500' : ''}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <div>
                                <div className="font-medium">{station.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {station.distance === 0 ? 'Your location' : `${station.distance}km away`}
                                </div>
                              </div>
                            </div>
                            <Badge className={getStatusColor(station.status)}>
                              {station.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-border/30">
                            <div className="text-center">
                              <div className="font-bold text-lg">{station.temp}°C</div>
                              <div className="text-xs text-muted-foreground">Temp</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">{station.humidity}%</div>
                              <div className="text-xs text-muted-foreground">Humidity</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">{station.windSpeed}</div>
                              <div className="text-xs text-muted-foreground">Wind km/h</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Card className="border-border/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Network Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">5</div>
                            <div className="text-xs text-green-700">Online</div>
                          </div>
                          <div className="text-center p-3 bg-red-50 rounded-lg">
                            <div className="text-2xl font-bold text-red-600">1</div>
                            <div className="text-xs text-red-700">Offline</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Network Coverage</span>
                              <span className="text-sm font-bold">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Data Accuracy</span>
                              <span className="text-sm font-bold">96%</span>
                            </div>
                            <Progress value={96} className="h-2" />
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="font-medium text-blue-800 text-sm">Next Maintenance:</div>
                          <div className="text-blue-700 text-sm">East Corner station on March 25</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Temperature Variation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Highest: South Boundary</span>
                            <span className="font-bold">29°C</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Lowest: East Corner</span>
                            <span className="font-bold">26°C</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Average across network</span>
                            <span className="font-bold">27.5°C</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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