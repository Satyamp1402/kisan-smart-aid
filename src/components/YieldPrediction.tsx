import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  TrendingUp,
  Download,
  Calendar,
  Target,
  Wheat,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  FileText,
  Database,
  BarChart3
} from 'lucide-react';
import { generatePDFReport, downloadData } from '@/utils/pdfUtils';

export const YieldPrediction = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');

  // Sample data for visualization
  const yieldHistoryData = [
    { year: '2020', wheat: 3.8, rice: 4.2, maize: 5.1, actual: 3.9 },
    { year: '2021', wheat: 4.1, rice: 4.5, maize: 5.3, actual: 4.0 },
    { year: '2022', wheat: 3.9, rice: 4.3, maize: 5.0, actual: 4.2 },
    { year: '2023', wheat: 4.3, rice: 4.6, maize: 5.4, actual: 4.1 },
    { year: '2024', wheat: 4.5, rice: 4.8, maize: 5.6, predicted: 4.7 },
  ];

  const monthlyPredictionData = [
    { month: 'Jan', prediction: 3.2, confidence: 85 },
    { month: 'Feb', prediction: 3.5, confidence: 88 },
    { month: 'Mar', prediction: 3.8, confidence: 90 },
    { month: 'Apr', prediction: 4.1, confidence: 92 },
    { month: 'May', prediction: 4.4, confidence: 89 },
    { month: 'Jun', prediction: 4.6, confidence: 87 },
    { month: 'Jul', prediction: 4.5, confidence: 85 },
    { month: 'Aug', prediction: 4.3, confidence: 88 },
    { month: 'Sep', prediction: 4.1, confidence: 90 },
    { month: 'Oct', prediction: 3.9, confidence: 91 },
    { month: 'Nov', prediction: 3.7, confidence: 89 },
    { month: 'Dec', prediction: 3.5, confidence: 86 },
  ];

  const factorsData = [
    { factor: 'Weather', impact: 35, color: '#3b82f6' },
    { factor: 'Soil Quality', impact: 25, color: '#10b981' },
    { factor: 'Irrigation', impact: 20, color: '#06b6d4' },
    { factor: 'Fertilizers', impact: 15, color: '#8b5cf6' },
    { factor: 'Seeds Quality', impact: 5, color: '#f59e0b' },
  ];

  const cropComparison = [
    { crop: 'Wheat', current: 4.2, predicted: 4.5, potential: 5.0, profit: 45000 },
    { crop: 'Rice', current: 4.5, predicted: 4.8, potential: 5.5, profit: 52000 },
    { crop: 'Maize', current: 5.1, predicted: 5.6, potential: 6.2, profit: 48000 },
    { crop: 'Barley', current: 3.8, predicted: 4.1, potential: 4.8, profit: 38000 },
  ];

  const riskFactors = [
    { risk: 'Weather Variability', probability: 25, impact: 'Medium', mitigation: 'Crop Insurance' },
    { risk: 'Pest Infestation', probability: 15, impact: 'High', mitigation: 'IPM Strategy' },
    { risk: 'Market Fluctuation', probability: 30, impact: 'Medium', mitigation: 'Contract Farming' },
    { risk: 'Water Scarcity', probability: 20, impact: 'High', mitigation: 'Efficient Irrigation' },
  ];

  const handleDownloadPDF = () => {
    generatePDFReport('yield-prediction-report', 'yield-prediction-report', 'Yield Prediction Analysis Report');
  };

  const handleDownloadData = () => {
    const reportData = {
      yieldHistory: yieldHistoryData,
      monthlyPredictions: monthlyPredictionData,
      impactFactors: factorsData,
      cropComparison: cropComparison,
      riskAnalysis: riskFactors,
      generatedOn: new Date().toISOString(),
    };
    downloadData(reportData, 'yield-prediction-data');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="flex-1 p-6 space-y-6">
        <div id="yield-prediction-report" className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Yield Prediction Analysis</h1>
                <p className="text-muted-foreground">AI-powered crop yield forecasting and recommendations</p>
              </div>
            </div>
          <div className="flex space-x-2">
            <Button onClick={handleDownloadData} variant="outline" className="flex items-center space-x-2 touch-manipulation h-10 sm:h-auto">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </Button>
            <Button onClick={handleDownloadPDF} className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-violet-600 touch-manipulation h-10 sm:h-auto">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF Report</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Season Prediction</p>
                  <p className="text-2xl font-bold text-purple-600">4.7 t/ha</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">85% confidence</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Expected Profit</p>
                  <p className="text-2xl font-bold text-green-600">₹58,000</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">+12% from last year</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Optimal Harvest</p>
                  <p className="text-2xl font-bold text-blue-600">Mar 15</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-blue-100 text-blue-800">45 days remaining</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <p className="text-2xl font-bold text-orange-600">Low</p>
                </div>
                <CheckCircle className="w-8 h-8 text-orange-500" />
              </div>
              <div className="mt-2">
                <Progress value={25} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">25% risk factor</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Yield History & Prediction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span>5-Year Yield Trend & Prediction</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <LineChart data={yieldHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Yield (tons/hectare)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="wheat" stroke="#8884d8" strokeWidth={2} name="Wheat" />
                  <Line type="monotone" dataKey="rice" stroke="#82ca9d" strokeWidth={2} name="Rice" />
                  <Line type="monotone" dataKey="maize" stroke="#ffc658" strokeWidth={2} name="Maize" />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#ff7300" 
                    strokeWidth={3} 
                    strokeDasharray="5 5" 
                    name="2024 Prediction" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Monthly Prediction Confidence */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Monthly Prediction Confidence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <AreaChart data={monthlyPredictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" label={{ value: 'Yield (t/ha)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Confidence (%)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="confidence" 
                    stackId="1"
                    stroke="#8884d8" 
                    fill="#8884d8" 
                    fillOpacity={0.3}
                    name="Confidence %"
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#ff7300" 
                    strokeWidth={2}
                    name="Predicted Yield"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Impact Factors & Crop Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Yield Impact Factors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wheat className="w-5 h-5 text-green-600" />
                <span>Yield Impact Factors</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <PieChart>
                  <Pie
                    data={factorsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({factor, impact}) => `${factor}: ${impact}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="impact"
                  >
                    {factorsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Crop Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                <span>Crop Yield Comparison</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <BarChart data={cropComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="crop" />
                  <YAxis label={{ value: 'Yield (tons/hectare)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="current" fill="#8884d8" name="Current Yield" />
                  <Bar dataKey="predicted" fill="#82ca9d" name="Predicted Yield" />
                  <Bar dataKey="potential" fill="#ffc658" name="Maximum Potential" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Risk Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Risk Analysis & Mitigation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskFactors.map((risk, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{risk.risk}</h4>
                      <p className="text-sm text-muted-foreground">Mitigation: {risk.mitigation}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold">{risk.probability}%</div>
                      <div className="text-xs text-muted-foreground">Probability</div>
                    </div>
                    <Badge 
                      className={`${
                        risk.impact === 'High' ? 'bg-red-100 text-red-800' :
                        risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {risk.impact} Impact
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
              <FileText className="w-5 h-5 text-blue-600" />
              <span>AI Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Optimal Timing</h4>
                <p className="text-sm text-green-700">Plant by February 15th for maximum yield potential. Current conditions are favorable.</p>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Fertilizer Strategy</h4>
                <p className="text-sm text-blue-700">Apply nitrogen-rich fertilizer in 3 phases: 40% at sowing, 35% at tillering, 25% at heading.</p>
              </div>
              <div className="p-4 border rounded-lg bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">Water Management</h4>
                <p className="text-sm text-orange-700">Schedule irrigation at critical growth stages. Monitor soil moisture levels weekly.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};
