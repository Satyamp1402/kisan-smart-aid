import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Camera, 
  Eye, 
  Scan,
  Target,
  Layers,
  Smartphone,
  Zap,
  Activity,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Settings,
  Download,
  Share,
  Maximize,
  Volume2,
  Info,
  Leaf,
  Droplets,
  Sun,
  Bug,
  Thermometer
} from "lucide-react";
import { Link } from "react-router-dom";

interface ScanResult {
  id: string;
  type: 'plant' | 'soil' | 'pest' | 'disease';
  confidence: number;
  position: { x: number; y: number };
  data: any;
  timestamp: Date;
}

interface AROverlay {
  id: string;
  type: 'info' | 'warning' | 'healthy' | 'measurement';
  position: { x: number; y: number };
  content: any;
  animated?: boolean;
}

export const ARScannerPage = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);
  const [arOverlays, setArOverlays] = useState<AROverlay[]>([]);
  const [selectedTool, setSelectedTool] = useState('plant-health');
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scanningTools = [
    { id: 'plant-health', name: 'Plant Health Analysis', icon: Leaf, color: 'text-green-500' },
    { id: 'soil-analysis', name: 'Soil Quality Check', icon: Layers, color: 'text-brown-500' },
    { id: 'pest-detection', name: 'Pest Detection', icon: Bug, color: 'text-red-500' },
    { id: 'growth-tracking', name: 'Growth Measurement', icon: BarChart3, color: 'text-blue-500' },
    { id: 'nutrient-scan', name: 'Nutrient Analysis', icon: Zap, color: 'text-yellow-500' },
    { id: 'water-stress', name: 'Water Stress Detection', icon: Droplets, color: 'text-cyan-500' }
  ];

  const mockDetections = [
    {
      id: '1',
      type: 'plant' as const,
      confidence: 94,
      position: { x: 45, y: 30 },
      data: {
        plantType: 'Wheat',
        health: 'Good',
        growthStage: 'Flowering',
        issues: ['Minor nitrogen deficiency'],
        recommendation: 'Apply 20kg urea per acre'
      },
      timestamp: new Date()
    },
    {
      id: '2',
      type: 'disease' as const,
      confidence: 87,
      position: { x: 65, y: 45 },
      data: {
        disease: 'Leaf Rust',
        severity: 'Mild',
        affectedArea: '15%',
        treatment: 'Fungicide spray recommended',
        urgency: 'Medium'
      },
      timestamp: new Date()
    },
    {
      id: '3',
      type: 'soil' as const,
      confidence: 91,
      position: { x: 25, y: 70 },
      data: {
        soilType: 'Clay Loam',
        moisture: '45%',
        pH: 6.8,
        organicMatter: '3.2%',
        status: 'Optimal for wheat'
      },
      timestamp: new Date()
    }
  ];

  useEffect(() => {
    // Simulate camera access
    if (cameraActive) {
      startCamera();
    }
    return () => {
      stopCamera();
    };
  }, [cameraActive]);

  const startCamera = async () => {
    try {
      // In a real app, this would access the actual camera
      // For demo purposes, we'll simulate this
      console.log('Camera started');
    } catch (error) {
      console.error('Camera access failed:', error);
    }
  };

  const stopCamera = () => {
    console.log('Camera stopped');
  };

  const startScanning = () => {
    setIsScanning(true);
    setCameraActive(true);
    
    // Simulate AR detection process
    setTimeout(() => {
      setScanResults(mockDetections);
      setArOverlays([
        {
          id: '1',
          type: 'info',
          position: { x: 45, y: 25 },
          content: { title: 'Healthy Wheat', subtitle: 'Growth Stage: Flowering' },
          animated: true
        },
        {
          id: '2', 
          type: 'warning',
          position: { x: 65, y: 40 },
          content: { title: 'Leaf Rust Detected', subtitle: '87% Confidence' },
          animated: true
        },
        {
          id: '3',
          type: 'healthy',
          position: { x: 25, y: 65 },
          content: { title: 'Soil: Good', subtitle: 'pH: 6.8' }
        }
      ]);
    }, 3000);

    // Stop scanning after 10 seconds
    setTimeout(() => {
      setIsScanning(false);
    }, 10000);
  };

  const stopScanning = () => {
    setIsScanning(false);
    setCameraActive(false);
    setArOverlays([]);
  };

  const getToolIcon = (toolId: string) => {
    const tool = scanningTools.find(t => t.id === toolId);
    return tool ? tool.icon : Camera;
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AR Field Scanner</h1>
                  <p className="text-sm text-muted-foreground">Augmented Reality crop analysis</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={`${cameraActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                <Camera className="w-3 h-3 mr-1" />
                {cameraActive ? 'Camera Active' : 'Camera Off'}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main AR View */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-purple-500" />
                    <span>AR Field View</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={isScanning ? "destructive" : "default"}
                      onClick={isScanning ? stopScanning : startScanning}
                      className="flex items-center space-x-2"
                    >
                      {isScanning ? (
                        <>
                          <Activity className="w-4 h-4 animate-pulse" />
                          <span>Stop Scanning</span>
                        </>
                      ) : (
                        <>
                          <Scan className="w-4 h-4" />
                          <span>Start Scanning</span>
                        </>
                      )}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* AR Camera View */}
                <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                  {/* Simulated Camera Feed */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-yellow-100 to-brown-100">
                    <div className="absolute inset-0 opacity-60" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 0 0-8 0-10s18.18-2.87 19.94-2.99c0 0-3.27 1.62-4 2-1.33-.72-10.84-.84-16-.84 8-2.34 16.05-4.08 22.54-5.07 5.43-.87 11.46-1.39 17.46-1.39v40c-6 0-12.07-.52-17.5-1.39C35.95 35.92 27.9 34.18 20 32c5.16 0 14.67-.12 16-.84.73.38 4 2 4 2-1.76-.12-19.94-2.99-19.94-2.99 0-2 0-10 0-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}>
                    </div>

                    {/* AR Overlays */}
                    {arOverlays.map((overlay) => (
                      <div
                        key={overlay.id}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${overlay.animated ? 'animate-pulse' : ''}`}
                        style={{ 
                          left: `${overlay.position.x}%`, 
                          top: `${overlay.position.y}%`,
                          zIndex: 10
                        }}
                      >
                        <div className={`p-3 rounded-lg border-2 text-sm font-medium ${
                          overlay.type === 'warning' 
                            ? 'bg-red-100 border-red-300 text-red-800'
                            : overlay.type === 'healthy' 
                            ? 'bg-green-100 border-green-300 text-green-800'
                            : 'bg-blue-100 border-blue-300 text-blue-800'
                        }`}>
                          <div className="font-bold">{overlay.content.title}</div>
                          <div className="text-xs">{overlay.content.subtitle}</div>
                        </div>
                        
                        {/* Target indicator */}
                        <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 rounded-full ${
                          overlay.type === 'warning' 
                            ? 'border-red-500 bg-red-500'
                            : overlay.type === 'healthy' 
                            ? 'border-green-500 bg-green-500'
                            : 'border-blue-500 bg-blue-500'
                        } ${overlay.animated ? 'animate-ping' : ''}`}></div>
                      </div>
                    ))}

                    {/* Scanning Grid Overlay */}
                    {isScanning && (
                      <div className="absolute inset-0 border-2 border-purple-500 border-dashed animate-pulse">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Target className="w-12 h-12 text-purple-500 animate-spin" />
                        </div>
                        {/* Scanning lines */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                      </div>
                    )}

                    {/* Instructions */}
                    {!isScanning && arOverlays.length === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-600 bg-white/80 rounded-lg p-6">
                          <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                          <h3 className="text-lg font-semibold mb-2">Ready to Scan</h3>
                          <p className="text-sm mb-4">Point your camera at plants, soil, or crops to analyze</p>
                          <Button onClick={startScanning} className="bg-purple-500 hover:bg-purple-600">
                            <Scan className="w-4 h-4 mr-2" />
                            Start AR Analysis
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Status indicator */}
                  {isScanning && (
                    <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span>Scanning...</span>
                      </div>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Maximize className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {isScanning && (
                  <div className="mt-4 bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                      <span className="text-sm font-medium text-blue-800">AI Analysis in Progress...</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <div className="text-xs text-blue-600 mt-1">
                      Identifying plants, analyzing health, detecting issues...
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Detection Results */}
            {scanResults.length > 0 && (
              <Card className="mt-6 border-border/50 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Detection Results</span>
                    <Badge className="bg-green-100 text-green-800">
                      {scanResults.length} detections
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scanResults.map((result) => (
                      <div key={result.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {result.type === 'plant' && <Leaf className="w-5 h-5 text-green-500" />}
                            {result.type === 'disease' && <Bug className="w-5 h-5 text-red-500" />}
                            {result.type === 'soil' && <Layers className="w-5 h-5 text-brown-500" />}
                            <div>
                              <div className="font-semibold">
                                {result.type === 'plant' && result.data.plantType}
                                {result.type === 'disease' && result.data.disease}
                                {result.type === 'soil' && 'Soil Analysis'}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Confidence: {result.confidence}%
                              </div>
                            </div>
                          </div>
                          <Badge className={`${
                            result.confidence >= 90 ? 'bg-green-100 text-green-800' :
                            result.confidence >= 70 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {result.confidence >= 90 ? 'High' :
                             result.confidence >= 70 ? 'Medium' : 'Low'} Confidence
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {result.type === 'plant' && (
                            <>
                              <div>
                                <span className="font-medium">Health Status:</span>
                                <span className="ml-2 text-green-600">{result.data.health}</span>
                              </div>
                              <div>
                                <span className="font-medium">Growth Stage:</span>
                                <span className="ml-2">{result.data.growthStage}</span>
                              </div>
                              <div className="col-span-2">
                                <span className="font-medium">Recommendation:</span>
                                <span className="ml-2 text-blue-600">{result.data.recommendation}</span>
                              </div>
                            </>
                          )}
                          
                          {result.type === 'disease' && (
                            <>
                              <div>
                                <span className="font-medium">Severity:</span>
                                <span className="ml-2 text-orange-600">{result.data.severity}</span>
                              </div>
                              <div>
                                <span className="font-medium">Affected Area:</span>
                                <span className="ml-2">{result.data.affectedArea}</span>
                              </div>
                              <div className="col-span-2">
                                <span className="font-medium">Treatment:</span>
                                <span className="ml-2 text-red-600">{result.data.treatment}</span>
                              </div>
                            </>
                          )}

                          {result.type === 'soil' && (
                            <>
                              <div>
                                <span className="font-medium">pH Level:</span>
                                <span className="ml-2 text-green-600">{result.data.pH}</span>
                              </div>
                              <div>
                                <span className="font-medium">Moisture:</span>
                                <span className="ml-2 text-blue-600">{result.data.moisture}</span>
                              </div>
                              <div>
                                <span className="font-medium">Type:</span>
                                <span className="ml-2">{result.data.soilType}</span>
                              </div>
                              <div>
                                <span className="font-medium">Status:</span>
                                <span className="ml-2 text-green-600">{result.data.status}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Tools and Settings */}
          <div className="space-y-6">
            {/* Scanning Tools */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>AR Scanning Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {scanningTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Button
                        key={tool.id}
                        variant={selectedTool === tool.id ? "default" : "ghost"}
                        onClick={() => setSelectedTool(tool.id)}
                        className="w-full justify-start h-auto p-3"
                      >
                        <Icon className={`w-4 h-4 mr-3 ${tool.color}`} />
                        <span className="text-sm">{tool.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* AR Features */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-purple-500" />
                  <span>AR Capabilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time Plant Recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Disease Detection & Diagnosis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Growth Measurement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Soil Quality Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Pest Identification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>3D Plant Visualization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <span>Scan Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Detection Accuracy</span>
                    <span className="text-sm text-green-600 font-semibold">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Processing Speed</span>
                    <span className="text-sm text-blue-600 font-semibold">2.3s</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Today's Scans</span>
                    <span className="text-sm font-semibold">12</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <div className="pt-2 text-xs text-muted-foreground">
                  Best performance with good lighting and stable camera position
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-purple-50 border-purple-200 border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  AR Scanning Tips:
                </h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Hold device steady for best results</li>
                  <li>• Ensure good lighting conditions</li>
                  <li>• Keep 1-2 feet distance from target</li>
                  <li>• Allow camera to focus before scanning</li>
                  <li>• Clean camera lens for clarity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};