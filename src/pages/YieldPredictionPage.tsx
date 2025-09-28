import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Leaf, BarChart3, Calendar, MapPin, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const YieldPredictionPage = () => {
  const [formData, setFormData] = useState({
    crop: "",
    area: "",
    location: "",
    soilType: "",
    irrigation: ""
  });
  
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPrediction({
        estimatedYield: "28.5 quintals/acre",
        confidence: 89,
        marketValue: "₹71,250 per acre",
        factors: [
          { name: "Soil Quality", impact: "+15%", status: "Excellent" },
          { name: "Weather", impact: "-3%", status: "Moderate Risk" },
          { name: "Irrigation", impact: "+8%", status: "Good" },
          { name: "Seed Quality", impact: "+12%", status: "Premium" }
        ],
        recommendations: [
          "Apply potash fertilizer in week 6-8 for better grain filling",
          "Monitor for pest activity during flowering stage", 
          "Ensure adequate water during grain formation",
          "Consider early harvest if weather deteriorates"
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              ← Back to Dashboard
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AI Yield Prediction</h1>
                <p className="text-sm text-muted-foreground">Predict crop output with 90%+ accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Crop Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Crop Type</Label>
                  <Select value={formData.crop} onValueChange={(value) => setFormData({...formData, crop: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat (गेहूं)</SelectItem>
                      <SelectItem value="rice">Rice (चावल)</SelectItem>
                      <SelectItem value="corn">Corn (मक्का)</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane (गन्ना)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Field Area (Acres)</Label>
                  <Input 
                    type="number" 
                    placeholder="Enter area" 
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                  />
                </div>

                <div>
                  <Label>Location</Label>
                  <Input 
                    placeholder="Enter village/district" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>

                <div>
                  <Label>Soil Type</Label>
                  <Select value={formData.soilType} onValueChange={(value) => setFormData({...formData, soilType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Clay (चिकनी मिट्टी)</SelectItem>
                      <SelectItem value="loam">Loam (दोमट)</SelectItem>
                      <SelectItem value="sandy">Sandy (बलुई)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handlePredict}
                  disabled={isLoading || !formData.crop || !formData.area}
                >
                  {isLoading ? "Analyzing..." : "Predict Yield"}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {isLoading && (
              <Card>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 animate-pulse text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Analyzing Your Crop...</h3>
                  <Progress value={75} className="w-full max-w-md mx-auto" />
                </CardContent>
              </Card>
            )}

            {prediction && (
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-900">Yield Prediction Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{prediction.estimatedYield}</div>
                        <div className="text-green-700">Expected Yield</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{prediction.marketValue}</div>
                        <div className="text-blue-700">Market Value</div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <Badge className="bg-green-600">{prediction.confidence}% Confidence</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Yield Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {prediction.factors.map((factor: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                          <div>
                            <div className="font-medium">{factor.name}</div>
                            <div className="text-sm text-muted-foreground">{factor.status}</div>
                          </div>
                          <Badge variant={factor.impact.startsWith('+') ? 'default' : 'destructive'}>
                            {factor.impact}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {prediction.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {!prediction && !isLoading && (
              <Card>
                <CardContent className="p-12 text-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready for Prediction</h3>
                  <p className="text-muted-foreground">
                    Enter your crop details to get AI-powered yield predictions
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