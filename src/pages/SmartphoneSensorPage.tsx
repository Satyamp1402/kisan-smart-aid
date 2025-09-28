import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Thermometer,
  Droplets,
  Compass,
  Sun,
  Activity,
  Camera,
  Flashlight,
  Wifi,
  Battery,
  Zap,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Settings,
  Download,
  Share,
  Play,
  Pause,
  RotateCcw,
  Info,
  Leaf,
  Eye,
  Volume2,
  Calendar,
  Clock,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

interface SensorReading {
  id: string;
  type: 'temperature' | 'light' | 'moisture' | 'ph' | 'gps' | 'accelerometer';
  value: number;
  unit: string;
  timestamp: Date;
  quality: 'excellent' | 'good' | 'fair' | 'poor';
}

interface SensorTool {
  id: string;
  name: string;
  icon: any;
  description: string;
  accuracy: string;
  instructions: string[];
  active: boolean;
}

export const SmartphoneSensorPage = () => {
  const [activeTools, setActiveTools] = useState<string[]>([]);
  const [readings, setReadings] = useState<SensorReading[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const sensorTools: SensorTool[] = [
    {
      id: 'light-sensor',
      name: 'Light Meter',
      icon: Sun,
      description: 'Measure sunlight intensity for optimal crop growth',
      accuracy: '±5%',
      instructions: [
        'Point phone camera towards the sky',
        'Avoid shadows and reflections',
        'Take multiple readings for accuracy',
        'Best results in open field'
      ],
      active: false
    },
    {
      id: 'temperature',
      name: 'Temperature Monitor',
      icon: Thermometer,
      description: 'Monitor ambient temperature using phone sensors',
      accuracy: '±1°C',
      instructions: [
        'Keep phone in shade for 5 minutes',
        'Avoid direct sunlight on device',
        'Hold phone away from body heat',
        'Wait for temperature stabilization'
      ],
      active: false
    },
    {
      id: 'soil-moisture',
      name: 'Soil Moisture (Camera)',
      icon: Droplets,
      description: 'Estimate soil moisture using image analysis',
      accuracy: '±10%',
      instructions: [
        'Take photo of soil surface',
        'Ensure good lighting conditions',
        'Include reference objects if possible',
        'AI will analyze soil color and texture'
      ],
      active: false
    },
    {
      id: 'gps-mapper',
      name: 'Field GPS Mapper',
      icon: MapPin,
      description: 'Map field boundaries and create GPS coordinates',
      accuracy: '±3m',
      instructions: [
        'Walk around field perimeter',
        'Keep GPS signal strong',
        'Mark important locations',
        'Export coordinates for future use'
      ],
      active: false
    },
    {
      id: 'plant-height',
      name: 'Plant Height Meter',
      icon: BarChart3,
      description: 'Measure plant height using camera and accelerometer',
      accuracy: '±2cm',
      instructions: [
        'Stand 2 meters from plant',
        'Align phone vertically',
        'Tap base and top of plant',
        'Keep phone steady during measurement'
      ],
      active: false
    },
    {
      id: 'color-analyzer',
      name: 'Leaf Color Analyzer',
      icon: Leaf,
      description: 'Analyze leaf color for nutrient deficiency detection',
      accuracy: '85%',
      instructions: [
        'Take close-up photo of leaf',
        'Use white paper as background',
        'Ensure natural lighting',
        'AI analyzes color patterns for health'
      ],
      active: false
    }
  ];

  const mockReadings: SensorReading[] = [
    {
      id: '1',
      type: 'temperature',
      value: 28.5,
      unit: '°C',
      timestamp: new Date(),
      quality: 'excellent'
    },
    {
      id: '2',
      type: 'light',
      value: 45000,
      unit: 'lux',
      timestamp: new Date(Date.now() - 60000),
      quality: 'good'
    },
    {
      id: '3',
      type: 'moisture',
      value: 42,
      unit: '%',
      timestamp: new Date(Date.now() - 120000),
      quality: 'fair'
    },
    {
      id: '4',
      type: 'ph',
      value: 6.8,
      unit: 'pH',
      timestamp: new Date(Date.now() - 180000),
      quality: 'good'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
        
        // Simulate new sensor readings every 10 seconds
        if (recordingTime % 10 === 0) {
          const newReading: SensorReading = {
            id: Date.now().toString(),
            type: ['temperature', 'light', 'moisture'][Math.floor(Math.random() * 3)] as any,
            value: Math.random() * 100,
            unit: ['°C', 'lux', '%'][Math.floor(Math.random() * 3)],
            timestamp: new Date(),
            quality: ['excellent', 'good', 'fair'][Math.floor(Math.random() * 3)] as any
          };
          setReadings(prev => [newReading, ...prev.slice(0, 9)]);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording, recordingTime]);

  const toggleTool = (toolId: string) => {
    setActiveTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    setReadings(mockReadings);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const resetReadings = () => {
    setReadings([]);
    setRecordingTime(0);
    setIsRecording(false);
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'text-green-600 bg-green-100 border-green-200';
      case 'good': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'fair': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'poor': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getSensorIcon = (type: string) => {
    switch (type) {
      case 'temperature': return Thermometer;
      case 'light': return Sun;
      case 'moisture': return Droplets;
      case 'ph': return Activity;
      case 'gps': return MapPin;
      default: return Activity;
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
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Smartphone Sensors</h1>
                  <p className="text-sm text-muted-foreground">Turn your phone into agricultural measurement tools</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={`${isRecording ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                <Activity className="w-3 h-3 mr-1" />
                {isRecording ? 'Recording' : 'Standby'}
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                <Wifi className="w-3 h-3 mr-1" />
                Connected
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Sensor Interface */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="live" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="live">Live Sensors</TabsTrigger>
                <TabsTrigger value="tools">Measurement Tools</TabsTrigger>
                <TabsTrigger value="data">Recorded Data</TabsTrigger>
              </TabsList>

              <TabsContent value="live" className="space-y-6">
                {/* Live Sensor Dashboard */}
                <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-green-500" />
                        <span>Live Sensor Readings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant={isRecording ? "destructive" : "default"}
                          onClick={isRecording ? stopRecording : startRecording}
                          className="flex items-center space-x-2"
                        >
                          {isRecording ? (
                            <>
                              <Pause className="w-4 h-4" />
                              <span>Stop</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              <span>Start</span>
                            </>
                          )}
                        </Button>
                        <Button variant="outline" onClick={resetReadings}>
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Recording Status */}
                    {isRecording && (
                      <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-800 font-medium">Recording in progress...</span>
                          </div>
                          <div className="text-red-700 font-mono text-lg">
                            {formatTime(recordingTime)}
                          </div>
                        </div>
                        <Progress value={(recordingTime % 60) * 100 / 60} className="mt-2 h-1" />
                      </div>
                    )}

                    {/* Current Readings Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {mockReadings.map((reading) => {
                        const Icon = getSensorIcon(reading.type);
                        return (
                          <Card key={reading.id} className="text-center">
                            <CardContent className="p-4">
                              <Icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                              <div className="text-2xl font-bold text-foreground">
                                {reading.value}{reading.unit}
                              </div>
                              <div className="text-sm text-muted-foreground capitalize">
                                {reading.type}
                              </div>
                              <Badge className={`mt-2 text-xs ${getQualityColor(reading.quality)}`}>
                                {reading.quality}
                              </Badge>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    {/* Instructions */}
                    {!isRecording && readings.length === 0 && (
                      <div className="text-center py-12">
                        <Smartphone className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-lg font-semibold mb-2">Ready to Start Measuring</h3>
                        <p className="text-muted-foreground mb-6">
                          Use your smartphone's built-in sensors to gather agricultural data
                        </p>
                        <Button onClick={startRecording} className="bg-indigo-500 hover:bg-indigo-600">
                          <Play className="w-4 h-4 mr-2" />
                          Start Sensor Recording
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Sensor Calibration */}
                <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-orange-500" />
                      <span>Sensor Calibration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Temperature Accuracy</span>
                            <span className="text-sm text-green-600 font-semibold">95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Light Sensor Quality</span>
                            <span className="text-sm text-blue-600 font-semibold">88%</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Info className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-900">Calibration Tips:</span>
                        </div>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Calibrate sensors in stable environment</li>
                          <li>• Use reference measurements when possible</li>
                          <li>• Update calibration weekly for best accuracy</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tools" className="space-y-6">
                {/* Measurement Tools Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {sensorTools.map((tool) => {
                    const Icon = tool.icon;
                    const isActive = activeTools.includes(tool.id);
                    
                    return (
                      <Card key={tool.id} className={`border-border/50 bg-card/90 backdrop-blur-sm transition-all ${
                        isActive ? 'ring-2 ring-primary/50 bg-primary/5' : ''
                      }`}>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                              }`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-semibold">{tool.name}</div>
                                <Badge className="bg-green-100 text-green-800 text-xs">
                                  {tool.accuracy} accuracy
                                </Badge>
                              </div>
                            </div>
                            <Button
                              variant={isActive ? "default" : "outline"}
                              onClick={() => toggleTool(tool.id)}
                              size="sm"
                            >
                              {isActive ? 'Active' : 'Activate'}
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {tool.description}
                          </p>
                          
                          <div className="space-y-2">
                            <div className="font-medium text-sm">Instructions:</div>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {tool.instructions.map((instruction, index) => (
                                <li key={index}>• {instruction}</li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="data" className="space-y-6">
                {/* Recorded Data */}
                <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <span>Recorded Measurements</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {readings.length > 0 ? (
                      <div className="space-y-3">
                        {readings.map((reading) => {
                          const Icon = getSensorIcon(reading.type);
                          return (
                            <div key={reading.id} className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Icon className="w-5 h-5 text-blue-500" />
                                <div>
                                  <div className="font-medium capitalize">
                                    {reading.type}: {reading.value}{reading.unit}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {reading.timestamp.toLocaleTimeString()}
                                  </div>
                                </div>
                              </div>
                              <Badge className={`text-xs ${getQualityColor(reading.quality)}`}>
                                {reading.quality}
                              </Badge>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <p className="text-muted-foreground">No measurements recorded yet</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Tools */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>Active Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeTools.length > 0 ? (
                  <div className="space-y-2">
                    {activeTools.map(toolId => {
                      const tool = sensorTools.find(t => t.id === toolId);
                      if (!tool) return null;
                      const Icon = tool.icon;
                      
                      return (
                        <div key={toolId} className="flex items-center space-x-2 p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{tool.name}</span>
                          <Badge className="bg-green-100 text-green-800 ml-auto">Active</Badge>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No active tools</p>
                )}
              </CardContent>
            </Card>

            {/* Phone Status */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-blue-500" />
                  <span>Phone Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Battery Level</span>
                  <div className="flex items-center space-x-2">
                    <Battery className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">87%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">GPS Signal</span>
                  <Badge className="bg-green-100 text-green-800">Strong</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Camera Quality</span>
                  <Badge className="bg-blue-100 text-blue-800">HD Ready</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Sensor Accuracy</span>
                  <Badge className="bg-green-100 text-green-800">92%</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-indigo-50 border-indigo-200 border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <h4 className="font-semibold text-indigo-900 mb-2 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Sensor Tips:
                </h4>
                <ul className="text-sm text-indigo-800 space-y-1">
                  <li>• Keep phone steady during measurements</li>
                  <li>• Calibrate in known conditions</li>
                  <li>• Take multiple readings for accuracy</li>
                  <li>• Clean camera lens regularly</li>
                  <li>• Avoid extreme temperatures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span>Today's Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Measurements</span>
                  <span className="font-medium">{readings.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Active Time</span>
                  <span className="font-medium">{formatTime(recordingTime)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tools Used</span>
                  <span className="font-medium">{activeTools.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Accuracy</span>
                  <span className="font-medium text-green-600">91%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};