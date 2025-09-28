import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar, 
  BarChart3,
  TrendingUp,
  Leaf,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

export const ReportPage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">कृषि रिपोर्ट</h1>
            <p className="text-muted-foreground">Detailed farming reports and analytics</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              रिपोर्ट डाउनलोड करें
            </Button>
            <Link to="/">
              <Button variant="outline">← डैशबोर्ड पर वापस</Button>
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">कुल क्षेत्रफल</p>
                  <p className="text-2xl font-bold text-green-600">15 एकड़</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">कुल उत्पादन</p>
                  <p className="text-2xl font-bold text-blue-600">42 टन</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">औसत उत्पादकता</p>
                  <p className="text-2xl font-bold text-orange-600">2.8 टन/एकड़</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">कुल आय</p>
                  <p className="text-2xl font-bold text-purple-600">₹12,60,000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Crop Health Report */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span>फसल स्वास्थ्य रिपोर्ट</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>गेहूं - खेत A</span>
                  <Badge className="bg-green-100 text-green-800">स्वस्थ</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>चावल - खेत B</span>
                  <Badge className="bg-yellow-100 text-yellow-800">निगरानी</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>मक्का - खेत C</span>
                  <Badge className="bg-green-100 text-green-800">स्वस्थ</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  विस्तृत रिपोर्ट देखें
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Yield Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span>उत्पादन विश्लेषण</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>इस वर्ष</span>
                    <span className="font-semibold">42 टन</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>पिछला वर्ष</span>
                    <span className="font-semibold">38 टन</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  +10.5% वृद्धि
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  ग्राफ देखें
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Financial Report */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <span>वित्तीय रिपोर्ट</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">कुल आय</span>
                  <span className="font-semibold text-green-600">₹12,60,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">कुल खर्च</span>
                  <span className="font-semibold text-red-600">₹8,40,000</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">शुद्ध लाभ</span>
                  <span className="font-bold text-green-600">₹4,20,000</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ROI: 50% (उत्कृष्ट)
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <DollarSign className="w-4 h-4 mr-2" />
                  विस्तृत खाता देखें
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Reports */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <span>मासिक रिपोर्ट</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { month: "फरवरी 2024", status: "पूर्ण", download: true },
                  { month: "जनवरी 2024", status: "पूर्ण", download: true },
                  { month: "दिसंबर 2023", status: "पूर्ण", download: true },
                  { month: "नवंबर 2023", status: "पूर्ण", download: true }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{report.month}</p>
                        <p className="text-sm text-muted-foreground">कृषि गतिविधि रिपोर्ट</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{report.status}</Badge>
                      {report.download && (
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
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
                  <p className="text-sm font-medium text-blue-800">उत्पादकता सुधार</p>
                  <p className="text-sm text-blue-600">जैविक खाद का उपयोग बढ़ाएं</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">लागत कमी</p>
                  <p className="text-sm text-green-600">ड्रिप सिंचाई अपनाएं</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">नई तकनीक</p>
                  <p className="text-sm text-purple-600">AI मॉनिटरिंग सिस्टम</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};