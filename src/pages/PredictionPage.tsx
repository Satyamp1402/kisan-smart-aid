import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Calendar, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export const PredictionPage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">फसल भविष्यवाणी</h1>
            <p className="text-muted-foreground">AI-powered crop yield and market predictions</p>
          </div>
          <Link to="/">
            <Button variant="outline">← डैशबोर्ड पर वापस</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Yield Prediction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>उत्पादन पूर्वानुमान</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>गेहूं - अनुमानित उत्पादन</span>
                    <span className="font-semibold">2.8 टन/एकड़</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>चावल - अनुमानित उत्पादन</span>
                    <span className="font-semibold">3.2 टन/एकड़</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="text-sm text-green-600 font-medium">
                  +15% पिछले साल से अधिक
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Price Prediction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span>बाजार मूल्य पूर्वानुमान</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>गेहूं (30 दिन)</span>
                  <span className="font-semibold text-green-600">₹2,400/क्विंटल</span>
                </div>
                <div className="flex justify-between">
                  <span>चावल (30 दिन)</span>
                  <span className="font-semibold text-green-600">₹3,200/क्विंटल</span>
                </div>
                <div className="text-sm text-blue-600">
                  अनुशंसा: 15 दिन बाद बेचें
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Harvest Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span>कटाई समयसारणी</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>गेहूं</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    15 मार्च
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>चावल</span>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    20 अप्रैल
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  मौसम के अनुसार समायोजित
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-red-600" />
                <span>जोखिम मूल्यांकन</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">रोग जोखिम</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">गेहूं - रस्ट</span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">मध्यम</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">चावल - ब्लास्ट</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">कम</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">मौसम जोखिम</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">सूखा</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">कम</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">अतिवृष्टि</span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">मध्यम</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>सुझाव</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">सिंचाई</p>
                  <p className="text-sm text-blue-600">अगले 5 दिनों में 2 बार सिंचाई करें</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">उर्वरक</p>
                  <p className="text-sm text-green-600">यूरिया 50 किग्रा/एकड़ डालें</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};