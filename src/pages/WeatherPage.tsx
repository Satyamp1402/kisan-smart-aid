import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Cloud, 
  Sun, 
  Droplets, 
  Wind, 
  Thermometer,
  Eye,
  Compass,
  CloudRain,
  CloudSnow,
  Zap,
  AlertTriangle,
  Calendar,
  MapPin,
  TrendingUp,
  TrendingDown,
  Activity,
  Umbrella,
  Navigation
} from "lucide-react";
import { Link } from "react-router-dom";

export const WeatherPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("Your Farm Location");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentWeather = {
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 6,
    dewPoint: 18,
    feelsLike: 31,
    icon: Sun
  };

  const weeklyForecast = [
    { day: "Today", date: "Sep 27", icon: Sun, high: 28, low: 18, condition: "Sunny", rain: 0, wind: 12 },
    { day: "Tomorrow", date: "Sep 28", icon: Cloud, high: 25, low: 16, condition: "Cloudy", rain: 10, wind: 15 },
    { day: "Monday", date: "Sep 30", icon: CloudRain, high: 22, low: 14, condition: "Light Rain", rain: 80, wind: 18 },
    { day: "Tuesday", date: "Oct 1", icon: CloudRain, high: 20, low: 12, condition: "Heavy Rain", rain: 95, wind: 22 },
    { day: "Wednesday", date: "Oct 2", icon: Cloud, high: 24, low: 15, condition: "Overcast", rain: 30, wind: 10 },
    { day: "Thursday", date: "Oct 3", icon: Sun, high: 27, low: 17, condition: "Sunny", rain: 5, wind: 8 },
    { day: "Friday", date: "Oct 4", icon: Sun, high: 29, low: 19, condition: "Clear", rain: 0, wind: 6 }
  ];

  const hourlyForecast = [
    { time: "Now", temp: 28, icon: Sun, rain: 0 },
    { time: "1 PM", temp: 30, icon: Sun, rain: 0 },
    { time: "2 PM", temp: 31, icon: Cloud, rain: 5 },
    { time: "3 PM", temp: 29, icon: Cloud, rain: 15 },
    { time: "4 PM", temp: 27, icon: CloudRain, rain: 60 },
    { time: "5 PM", temp: 25, icon: CloudRain, rain: 80 },
    { time: "6 PM", temp: 23, icon: Cloud, rain: 20 },
    { time: "7 PM", temp: 22, icon: Cloud, rain: 10 }
  ];

  const weatherAlerts = [
    {
      type: "warning",
      title: "Heavy Rain Alert",
      message: "Heavy rainfall expected on Oct 1-2. Consider postponing outdoor activities and protect your crops.",
      priority: "high",
      icon: AlertTriangle
    },
    {
      type: "info",
      title: "Irrigation Recommendation",
      message: "Good weather for irrigation today. Rain expected in 3 days, so plan accordingly.",
      priority: "medium",
      icon: Droplets
    }
  ];

  const cropRecommendations = [
    {
      activity: "Harvesting",
      recommendation: "Ideal conditions for harvesting today and tomorrow before the rain arrives",
      confidence: 95,
      icon: Sun
    },
    {
      activity: "Spraying",
      recommendation: "Avoid spraying on Oct 1-2 due to heavy rain. Complete applications by Sept 30",
      confidence: 90,
      icon: CloudRain
    },
    {
      activity: "Field Work",
      recommendation: "Complete field work by Sept 30 before rain. Good conditions for tillage today",
      confidence: 85,
      icon: Calendar
    }
  ];

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
                <div className="w-10 h-10 bg-gradient-sky rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Weather Intelligence</h1>
                  <p className="text-sm text-muted-foreground">AI-powered agricultural weather forecasting</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="current">Current Weather</TabsTrigger>
            <TabsTrigger value="forecast">7-Day Forecast</TabsTrigger>
            <TabsTrigger value="alerts">Weather Alerts</TabsTrigger>
            <TabsTrigger value="agricultural">Crop Insights</TabsTrigger>
          </TabsList>


          <TabsContent value="current" className="space-y-6">
            {/* Current Weather Hero */}
            <Card className="bg-gradient-sky text-white border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-6xl font-bold mb-2">{currentWeather.temperature}°C</div>
                    <div className="text-xl mb-2">{currentWeather.condition}</div>
                    <div className="text-sm opacity-90">Feels like {currentWeather.feelsLike}°C</div>
                  </div>
                  <div className="text-center">
                    <Sun className="w-24 h-24 mb-4 mx-auto" />
                    <div className="text-sm opacity-90">
                      {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{currentWeather.humidity}%</div>
                  <div className="text-sm text-muted-foreground">Humidity</div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Wind className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{currentWeather.windSpeed} km/h</div>
                  <div className="text-sm text-muted-foreground">Wind Speed</div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Compass className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{currentWeather.pressure}</div>
                  <div className="text-sm text-muted-foreground">Pressure (hPa)</div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Eye className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{currentWeather.visibility} km</div>
                  <div className="text-sm text-muted-foreground">Visibility</div>
                </CardContent>
              </Card>
            </div>

            {/* Hourly Forecast */}
            <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Hourly Forecast</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {hourlyForecast.map((hour, index) => {
                    const Icon = hour.icon;
                    return (
                      <div key={index} className="flex-shrink-0 text-center p-3 rounded-lg bg-secondary/20 min-w-[80px]">
                        <div className="text-sm font-medium mb-2">{hour.time}</div>
                        <Icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                        <div className="font-bold">{hour.temp}°</div>
                        <div className="text-xs text-blue-600">{hour.rain}%</div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-6">
            <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>7-Day Weather Forecast</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyForecast.map((day, index) => {
                    const Icon = day.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors">
                        <div className="flex items-center space-x-4">
                          <Icon className="w-8 h-8 text-blue-500" />
                          <div>
                            <div className="font-semibold">{day.day}</div>
                            <div className="text-sm text-muted-foreground">{day.date}</div>
                          </div>
                          <div className="text-sm">{day.condition}</div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Rain</div>
                            <div className="font-medium text-blue-600">{day.rain}%</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Wind</div>
                            <div className="font-medium">{day.wind} km/h</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">{day.high}°</div>
                            <div className="text-sm text-muted-foreground">{day.low}°</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            {weatherAlerts.map((alert, index) => {
              const Icon = alert.icon;
              const alertStyles = alert.priority === 'high' 
                ? 'border-red-200 bg-red-50 text-red-900'
                : 'border-yellow-200 bg-yellow-50 text-yellow-900';
              
              return (
                <Card key={index} className={`${alertStyles} border-2`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Icon className="w-6 h-6 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg">{alert.title}</h3>
                          <Badge variant={alert.priority === 'high' ? 'destructive' : 'secondary'}>
                            {alert.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed">{alert.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="agricultural" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>Agricultural Recommendations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cropRecommendations.map((rec, index) => {
                      const Icon = rec.icon;
                      return (
                        <div key={index} className="p-4 rounded-lg bg-secondary/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Icon className="w-5 h-5 text-green-600" />
                              <span className="font-semibold">{rec.activity}</span>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {rec.confidence}% confidence
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.recommendation}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Weather Impact Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Crop Growth Conditions</span>
                        <span className="text-sm text-green-600 font-semibold">Excellent</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Disease Risk</span>
                        <span className="text-sm text-orange-600 font-semibold">Moderate</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Irrigation Need</span>
                        <span className="text-sm text-red-600 font-semibold">High</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">AI Weather Insight:</h4>
                      <p className="text-sm text-blue-800">
                        Based on current weather patterns, your crops will benefit from the upcoming rain. 
                        Consider completing any pesticide applications before the rain arrives on Oct 1st.
                      </p>
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
