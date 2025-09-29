import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import {
  Camera,
  Download,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  Database,
  Eye,
  Scan
} from 'lucide-react';
import { generatePDFReport, downloadData } from '@/utils/pdfUtils';

export const DiseaseDetection = () => {
  // Sample data
  const detectionResults = [
    { disease: 'Leaf Blight', probability: 85, severity: 'High', action: 'Immediate treatment required' },
    { disease: 'Rust', probability: 15, severity: 'Low', action: 'Monitor closely' },
    { disease: 'Healthy', probability: 75, severity: 'Good', action: 'Continue regular care' },
  ];

  const diseaseData = [
    { name: 'Healthy', value: 75, color: '#22c55e' },
    { name: 'Leaf Blight', value: 20, color: '#ef4444' },
    { name: 'Rust', value: 5, color: '#f59e0b' },
  ];

  const treatmentProgress = [
    { week: 'Week 1', effectiveness: 20 },
    { week: 'Week 2', effectiveness: 45 },
    { week: 'Week 3', effectiveness: 70 },
    { week: 'Week 4', effectiveness: 85 },
  ];

  const handleDownloadPDF = () => {
    generatePDFReport('disease-detection-report', 'disease-detection-report', 'Disease Detection Analysis Report');
  };

  const handleDownloadData = () => {
    const reportData = {
      detectionResults,
      diseaseDistribution: diseaseData,
      treatmentProgress,
      generatedOn: new Date().toISOString(),
    };
    downloadData(reportData, 'disease-detection-data');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="flex-1 p-6 space-y-6">
        <div id="disease-detection-report" className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Disease Detection</h1>
              <p className="text-muted-foreground">AI-powered crop disease identification and treatment recommendations</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleDownloadData} variant="outline" className="flex items-center space-x-2 touch-manipulation h-10 sm:h-auto">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </Button>
            <Button onClick={handleDownloadPDF} className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 touch-manipulation h-10 sm:h-auto">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF Report</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Detection Accuracy</p>
                  <p className="text-2xl font-bold text-green-600">94%</p>
                </div>
                <Eye className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-2">
                <Progress value={94} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">AI confidence level</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Images Scanned</p>
                  <p className="text-2xl font-bold text-blue-600">148</p>
                </div>
                <Scan className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-blue-100 text-blue-800">Last 30 days</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Diseases Detected</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-red-100 text-red-800">2 active, 1 treated</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Treatment Success</p>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                </div>
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Recovery rate</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Disease Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-5 h-5 text-amber-600" />
                <span>Crop Health Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <PieChart>
                  <Pie
                    data={diseaseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {diseaseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Treatment Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Treatment Effectiveness</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <LineChart data={treatmentProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis label={{ value: 'Effectiveness (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="effectiveness" stroke="#22c55e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detection Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-green-600" />
              <span>Recent Detection Results</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detectionResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-green-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{result.disease}</h4>
                      <p className="text-sm text-muted-foreground">{result.action}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold">{result.probability}%</div>
                      <div className="text-xs text-muted-foreground">Confidence</div>
                    </div>
                    <Badge className={`${
                      result.severity === 'High' ? 'bg-red-100 text-red-800' :
                      result.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {result.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>Treatment Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-red-50">
                <h4 className="font-semibold text-red-800 mb-2">Immediate Action</h4>
                <p className="text-sm text-red-700">Apply fungicide spray for leaf blight. Use copper-based solution every 7 days.</p>
              </div>
              <div className="p-4 border rounded-lg bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-2">Preventive Care</h4>
                <p className="text-sm text-yellow-700">Improve air circulation and reduce humidity around plants. Remove affected leaves.</p>
              </div>
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Long-term Strategy</h4>
                <p className="text-sm text-green-700">Plant disease-resistant varieties next season. Maintain proper plant spacing.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};
