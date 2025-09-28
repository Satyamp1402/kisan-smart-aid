import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  AlertTriangle, 
  CheckCircle, 
  Camera,
  TrendingUp,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export const CropHealthPage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">फसल स्वास्थ्य मॉनिटरिंग</h1>
            <p className="text-muted-foreground">AI-powered crop health analysis and disease detection</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-green-600 hover:bg-green-700">
              <Camera className="w-4 h-4 mr-2" />
              फोटो अपलोड करें
            </Button>
            <Link to="/">
              <Button variant="outline">← डैशबोर्ड पर वापस</Button>
            </Link>
          </div>
        </div>

        {/* Overall Health Score */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-600">85%</h2>
                  <p className="text-muted-foreground">समग्र फसल स्वास्थ्य स्कोर</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 mb-2">स्वस्थ</Badge>
                <p className="text-sm text-muted-foreground">पिछले सप्ताह से +5% सुधार</p>
              </div>
            </div>
            <div className="mt-4">
              <Progress value={85} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Field-wise Health Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            { 
              field: "खेत A - गेहूं", 
              health: 92, 
              status: "उत्कृष्ट", 
              statusColor: "green",
              issue: "कोई समस्या नहीं",
              recommendation: "वर्तमान देखभाल जारी रखें"
            },
            { 
              field: "खेत B - चावल", 
              health: 78, 
              status: "अच्छा", 
              statusColor: "yellow",
              issue: "पत्तियों पर हल्के धब्बे",
              recommendation: "कवकनाशी का छिड़काव करें"
            },
            { 
              field: "खेत C - मक्का", 
              health: 85, 
              status: "स्वस्थ", 
              statusColor: "green",
              issue: "सामान्य वृद्धि",
              recommendation: "नियमित निगरानी करें"
            }
          ].map((field, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{field.field}</span>
                  <Badge className={`${
                    field.statusColor === 'green' ? 'bg-green-100 text-green-800' : 
                    field.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {field.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>स्वास्थ्य स्कोर</span>
                      <span className="font-semibold">{field.health}%</span>
                    </div>
                    <Progress value={field.health} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">स्थिति</p>
                        <p className="text-sm text-muted-foreground">{field.issue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">सुझाव</p>
                        <p className="text-sm text-muted-foreground">{field.recommendation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    विस्तृत विश्लेषण देखें
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disease Detection Results */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>हाल की रोग जांच</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  image: "/placeholder-crop1.jpg",
                  crop: "गेहूं की पत्ती",
                  disease: "कोई रोग नहीं मिला",
                  confidence: 95,
                  status: "स्वस्थ",
                  color: "green",
                  date: "2 घंटे पहले"
                },
                {
                  image: "/placeholder-crop2.jpg",
                  crop: "चावल की पत्ती",
                  disease: "पत्ती धब्बा रोग (संभावित)",
                  confidence: 78,
                  status: "निगरानी",
                  color: "yellow",
                  date: "5 घंटे पहले"
                }
              ].map((result, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{result.crop}</h4>
                      <p className="text-sm text-muted-foreground">{result.date}</p>
                    </div>
                    <Badge className={`${
                      result.color === 'green' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">निदान</p>
                      <p className="text-sm text-muted-foreground">{result.disease}</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>विश्वसनीयता</span>
                        <span>{result.confidence}%</span>
                      </div>
                      <Progress value={result.confidence} className="h-2 mt-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>स्वास्थ्य ट्रेंड (पिछले 30 दिन)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                <p className="text-sm text-muted-foreground">स्वस्थ जांच</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">3</div>
                <p className="text-sm text-muted-foreground">निगरानी आवश्यक</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">1</div>
                <p className="text-sm text-muted-foreground">उपचार आवश्यक</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">मुख्य सुझाव</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• नियमित रूप से पत्तियों की जांच करते रहें</li>
                <li>• मिट्टी की नमी का स्तर बनाए रखें</li>
                <li>• जैविक कवकनाशी का उपयोग करें</li>
                <li>• खरपतवार नियंत्रण पर ध्यान दें</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};