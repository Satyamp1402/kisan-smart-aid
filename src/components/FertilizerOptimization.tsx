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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import {
  Leaf,
  Download,
  Beaker,
  Zap,
  Target,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  FileText,
  Database,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { generatePDFReport, downloadData } from '@/utils/pdfUtils';

export const FertilizerOptimization = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');

  // Sample data for visualization
  const soilNutrientData = [
    { nutrient: 'Nitrogen (N)', current: 45, optimal: 60, excess: 80 },
    { nutrient: 'Phosphorus (P)', current: 25, optimal: 30, excess: 50 },
    { nutrient: 'Potassium (K)', current: 35, optimal: 40, excess: 65 },
    { nutrient: 'Sulfur (S)', current: 15, optimal: 20, excess: 35 },
    { nutrient: 'Calcium (Ca)', current: 55, optimal: 60, excess: 80 },
    { nutrient: 'Magnesium (Mg)', current: 12, optimal: 15, excess: 25 },
  ];

  const fertilizationSchedule = [
    { stage: 'Pre-Sowing', days: 0, nitrogen: 40, phosphorus: 100, potassium: 60, cost: 3200 },
    { stage: 'Tillering', days: 25, nitrogen: 35, phosphorus: 0, potassium: 25, cost: 2800 },
    { stage: 'Jointing', days: 45, nitrogen: 25, phosphorus: 0, potassium: 15, cost: 2100 },
    { stage: 'Heading', days: 65, nitrogen: 0, phosphorus: 0, potassium: 0, cost: 0 },
    { stage: 'Grain Fill', days: 85, nitrogen: 0, phosphorus: 0, potassium: 0, cost: 0 },
  ];

  const costBenefitData = [
    { method: 'Traditional', cost: 12000, yield: 4.2, profit: 48000 },
    { method: 'Soil Test Based', cost: 10500, yield: 4.5, profit: 52000 },
    { method: 'AI Optimized', cost: 9200, yield: 4.7, profit: 58000 },
    { method: 'Precision Farming', cost: 8800, yield: 4.9, profit: 61000 },
  ];

  const nutrientEfficiencyData = [
    { month: 'Jan', efficiency: 78, uptake: 85, loss: 15 },
    { month: 'Feb', efficiency: 82, uptake: 88, loss: 12 },
    { month: 'Mar', efficiency: 85, uptake: 90, loss: 10 },
    { month: 'Apr', efficiency: 88, uptake: 92, loss: 8 },
    { month: 'May', efficiency: 85, uptake: 89, loss: 11 },
    { month: 'Jun', efficiency: 80, uptake: 86, loss: 14 },
  ];

  const radarData = [
    { subject: 'Nitrogen Use Efficiency', current: 78, optimal: 95, fullMark: 100 },
    { subject: 'Phosphorus Recovery', current: 65, optimal: 85, fullMark: 100 },
    { subject: 'Potassium Utilization', current: 72, optimal: 88, fullMark: 100 },
    { subject: 'Soil Health Score', current: 68, optimal: 90, fullMark: 100 },
    { subject: 'Environmental Impact', current: 75, optimal: 95, fullMark: 100 },
    { subject: 'Cost Effectiveness', current: 82, optimal: 92, fullMark: 100 },
  ];

  const recommendations = [
    {
      priority: 'High',
      title: 'Nitrogen Split Application',
      description: 'Apply nitrogen in 3 splits: 40% at sowing, 35% at tillering, 25% at jointing',
      saving: '₹2,400',
      impact: '+8% yield'
    },
    {
      priority: 'Medium',
      title: 'Phosphorus Soil Test',
      description: 'Reduce phosphorus application by 20% based on current soil test results',
      saving: '₹1,800',
      impact: '+5% efficiency'
    },
    {
      priority: 'Low',
      title: 'Organic Matter Addition',
      description: 'Add 2 tons/hectare of compost to improve nutrient retention',
      saving: '₹1,200',
      impact: '+12% retention'
    },
  ];

  const handleDownloadPDF = () => {
    generatePDFReport('fertilizer-optimization-report', 'fertilizer-optimization-report', 'Fertilizer Optimization Analysis Report');
  };

  const handleDownloadData = () => {
    const reportData = {
      soilNutrients: soilNutrientData,
      fertilizationSchedule: fertilizationSchedule,
      costBenefit: costBenefitData,
      nutrientEfficiency: nutrientEfficiencyData,
      performanceMetrics: radarData,
      recommendations: recommendations,
      generatedOn: new Date().toISOString(),
    };
    downloadData(reportData, 'fertilizer-optimization-data');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="flex-1 p-6 space-y-6">
        <div id="fertilizer-optimization-report" className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Fertilizer Optimization</h1>
              <p className="text-muted-foreground">Smart nutrient management for maximum efficiency</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleDownloadData} variant="outline" className="flex items-center space-x-2 touch-manipulation h-10 sm:h-auto">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </Button>
            <Button onClick={handleDownloadPDF} className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 touch-manipulation h-10 sm:h-auto">
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
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
                  <p className="text-2xl font-bold text-green-600">₹5,400</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">-31% from traditional</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Nutrient Efficiency</p>
                  <p className="text-2xl font-bold text-blue-600">88%</p>
                </div>
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Progress value={88} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Optimal: 95%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Yield Increase</p>
                  <p className="text-2xl font-bold text-purple-600">+12%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-purple-100 text-purple-800">4.7 t/ha projected</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Environmental Score</p>
                  <p className="text-2xl font-bold text-orange-600">75</p>
                </div>
                <CheckCircle className="w-8 h-8 text-orange-500" />
              </div>
              <div className="mt-2">
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Good sustainability</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Soil Nutrient Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Beaker className="w-5 h-5 text-green-600" />
                <span>Soil Nutrient Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <BarChart data={soilNutrientData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="nutrient" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="current" fill="#ef4444" name="Current Level" />
                  <Bar dataKey="optimal" fill="#22c55e" name="Optimal Level" />
                  <Bar dataKey="excess" fill="#f97316" name="Excess Threshold" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Fertilization Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Recommended Application Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <LineChart data={fertilizationSchedule}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis yAxisId="left" label={{ value: 'Nutrients (kg/ha)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Cost (₹)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="nitrogen" stroke="#3b82f6" strokeWidth={2} name="Nitrogen" />
                  <Line yAxisId="left" type="monotone" dataKey="phosphorus" stroke="#ef4444" strokeWidth={2} name="Phosphorus" />
                  <Line yAxisId="left" type="monotone" dataKey="potassium" stroke="#8b5cf6" strokeWidth={2} name="Potassium" />
                  <Line yAxisId="right" type="monotone" dataKey="cost" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" name="Application Cost" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Cost-Benefit & Efficiency Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cost-Benefit Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span>Cost-Benefit Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costBenefitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="method" />
                  <YAxis yAxisId="left" label={{ value: 'Cost (₹)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Profit (₹)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="cost" fill="#ef4444" name="Total Cost" />
                  <Bar yAxisId="right" dataKey="profit" fill="#22c55e" name="Expected Profit" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Radar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-purple-600" />
                <span>Performance Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Current" dataKey="current" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  <Radar name="Optimal" dataKey="optimal" stroke="#22c55e" fill="#22c55e" fillOpacity={0.1} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Nutrient Efficiency Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-orange-600" />
              <span>Nutrient Efficiency Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
              <AreaChart data={nutrientEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Area type="monotone" dataKey="efficiency" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Efficiency %" />
                <Area type="monotone" dataKey="uptake" stackId="2" stroke="#22c55e" fill="#22c55e" fillOpacity={0.4} name="Uptake %" />
                <Area type="monotone" dataKey="loss" stackId="3" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} name="Loss %" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Optimization Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-start justify-between p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 mt-2"></div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">{rec.title}</h4>
                        <Badge className={`${
                          rec.priority === 'High' ? 'bg-red-100 text-red-800' :
                          rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {rec.priority} Priority
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600">{rec.saving} saved</div>
                    <div className="text-xs text-blue-600">{rec.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Next Steps</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">This Week</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Apply basal fertilizer (40% N, 100% P, 60% K)</li>
                  <li>• Collect soil samples for micronutrient analysis</li>
                  <li>• Calibrate fertilizer spreader equipment</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Next Month</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Monitor plant tissue nutrients at tillering</li>
                  <li>• Apply first nitrogen top-dressing</li>
                  <li>• Assess soil pH and adjust if needed</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">Long-term</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Build organic matter through cover crops</li>
                  <li>• Install precision fertilizer application system</li>
                  <li>• Develop nutrient management zones</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};
