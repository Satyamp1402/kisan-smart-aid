import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Upload, 
  Leaf, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  MapPin,
  Thermometer,
  Droplets
} from "lucide-react";
import { Link } from "react-router-dom";

export const DiseaseDetectionPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult({
        disease: "Late Blight (पछेती अंगमारी)",
        confidence: 92,
        severity: "Moderate",
        affected_area: "25%",
        spread_risk: "High",
        treatment: {
          immediate: ["Remove affected leaves", "Apply copper fungicide", "Improve ventilation"],
          longterm: ["Use resistant varieties", "Crop rotation", "Drip irrigation"],
          cost: "₹800-1200 per acre",
          timeline: "7-14 days for improvement"
        },
        prevention: ["Weekly spraying schedule", "Monitor humidity levels", "Early morning inspection"]
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              ← Back to Dashboard
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AI Crop Disease Detection</h1>
                <p className="text-sm text-muted-foreground">Instant leaf analysis and treatment recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Upload Crop Image</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img 
                        src={selectedImage} 
                        alt="Uploaded crop" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => document.getElementById('image-upload')?.click()}
                      >
                        Choose Different Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Camera className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-lg font-medium">Upload Leaf Image</p>
                        <p className="text-sm text-muted-foreground">
                          Take a clear photo of affected leaves
                        </p>
                      </div>
                      <Button onClick={() => document.getElementById('image-upload')?.click()}>
                        <Upload className="w-4 h-4 mr-2" />
                        Select Image
                      </Button>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Tips */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Photography Tips:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Good lighting (natural sunlight preferred)</li>
                      <li>• Focus on affected areas</li>
                      <li>• Include healthy parts for comparison</li>
                      <li>• Avoid blurry or dark images</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Section */}
          <div className="lg:col-span-2">
            {isAnalyzing && (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Analyzing Your Crop...</h3>
                    <p className="text-muted-foreground">AI is examining the image for diseases and pests</p>
                    <Progress value={65} className="w-full max-w-md mx-auto" />
                    <div className="text-sm text-muted-foreground">
                      Processing... This may take a few moments
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {analysisResult && (
              <div className="space-y-6">
                {/* Disease Identification */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span>Disease Identified</span>
                      </div>
                      <Badge variant="destructive">{analysisResult.severity}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-destructive">{analysisResult.disease}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{analysisResult.confidence}% Confidence</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Leaf className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">{analysisResult.affected_area} Affected</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="text-sm font-medium text-red-900">Spread Risk</div>
                          <div className="text-red-700">{analysisResult.spread_risk}</div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm font-medium text-blue-900">Treatment Cost</div>
                          <div className="text-blue-700">{analysisResult.treatment.cost}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment Plan */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span>Treatment Recommendations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-red-900 mb-3">Immediate Action Required:</h4>
                        <ul className="space-y-2">
                          {analysisResult.treatment.immediate.map((action: string, index: number) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-blue-900 mb-3">Long-term Prevention:</h4>
                        <ul className="space-y-2">
                          {analysisResult.treatment.longterm.map((action: string, index: number) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-medium text-green-900">Expected Recovery Time</div>
                          <div className="text-green-700">{analysisResult.treatment.timeline}</div>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cost-Benefit Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <span>Cost vs. Potential Loss</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">₹1,000</div>
                        <div className="text-sm text-green-700">Treatment Cost</div>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">₹15,000</div>
                        <div className="text-sm text-red-700">Potential Crop Loss</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
                      <div className="text-lg font-semibold text-blue-900">
                        Save ₹14,000 by treating now!
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!selectedImage && !isAnalyzing && !analysisResult && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready for Analysis</h3>
                  <p className="text-muted-foreground">
                    Upload an image of your crop to get instant AI-powered disease detection
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};