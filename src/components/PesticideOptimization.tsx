import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import {
  Shield,
  Download,
  Bug,
  Leaf,
  Calendar,
  Database,
  FileText,
  TrendingDown,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';
import { generatePDFReport, downloadData } from '@/utils/pdfUtils';
import { Link } from 'react-router-dom';

export const PesticideOptimization = () => {
  // Sample data
  const pestData = [
    { pest: 'Aphids', severity: 65, treatment: 'Neem oil', effectiveness: 85 },
    { pest: 'Thrips', severity: 40, treatment: 'Insecticidal soap', effectiveness: 78 },
    { pest: 'Whiteflies', severity: 25, treatment: 'Yellow sticky traps', effectiveness: 92 },
    { pest: 'Spider mites', severity: 15, treatment: 'Predatory mites', effectiveness: 88 },
  ];

  const treatmentSchedule = [
    { week: 'Week 1', chemical: 45, biological: 30, organic: 25 },
    { week: 'Week 2', chemical: 35, biological: 40, organic: 25 },
    { week: 'Week 3', chemical: 25, biological: 45, organic: 30 },
    { week: 'Week 4', chemical: 20, biological: 50, organic: 30 },
  ];

  const reductionData = [
    { method: 'Traditional', usage: 100, resistance: 45 },
    { method: 'IPM Approach', usage: 65, resistance: 25 },
    { method: 'Biological Control', usage: 30, resistance: 10 },
    { method: 'Smart Optimization', usage: 45, resistance: 15 },
  ];

  const pestDistribution = [
    { name: 'Beneficial Insects', value: 60, color: '#22c55e' },
    { name: 'Minor Pests', value: 25, color: '#f59e0b' },
    { name: 'Major Pests', value: 15, color: '#ef4444' },
  ];

  const handleDownloadPDF = () => {
    generatePDFReport('pesticide-optimization-report', 'pesticide-optimization-report', 'Pesticide Optimization Report');
  };

  const handleDownloadData = () => {
    const reportData = {
      pestData,
      treatmentSchedule,
      reductionData,
      pestDistribution,
      generatedOn: new Date().toISOString(),
    };
    downloadData(reportData, 'pesticide-optimization-data');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header with Navigation */}
      <header className="bg-card/95 backdrop-blur-sm shadow-medium border-b border-border/30 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground flex items-center space-x-2 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </header>
      
      <div className="flex-1 p-6 space-y-6">
        <div id="pesticide-optimization-report" className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Pesticide Optimization</h1>
              <p className="text-muted-foreground">Smart pest management and chemical reduction strategies</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleDownloadData} variant="outline" className="flex items-center space-x-2 touch-manipulation h-10 sm:h-auto">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </Button>
            <Button onClick={handleDownloadPDF} className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-600 touch-manipulation h-10 sm:h-auto">
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
                  <p className="text-sm text-muted-foreground">Chemical Reduction</p>
                  <p className="text-2xl font-bold text-green-600">42%</p>
                </div>
                <TrendingDown className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-2">
                <Progress value={42} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">vs last season</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Treatment Effectiveness</p>
                  <p className="text-2xl font-bold text-blue-600">88%</p>
                </div>
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-blue-100 text-blue-800">Above target</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pest Resistance</p>
                  <p className="text-2xl font-bold text-orange-600">15%</p>
                </div>
                <Bug className="w-8 h-8 text-orange-500" />
              </div>
              <div className="mt-2">
                <Progress value={15} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Reduced risk</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
                  <p className="text-2xl font-bold text-purple-600">₹8,400</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-purple-100 text-purple-800">This season</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Pest Management Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bug className="w-5 h-5 text-red-600" />
                <span>Current Pest Situation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <BarChart data={pestData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="pest" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="severity" fill="#ef4444" name="Severity Level" />
                  <Bar dataKey="effectiveness" fill="#22c55e" name="Treatment Effectiveness" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Ecosystem Balance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span>Farm Ecosystem Balance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <PieChart>
                  <Pie
                    data={pestDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, value}) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pestDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Strategy Evolution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>Treatment Strategy Evolution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
              <LineChart data={treatmentSchedule}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis label={{ value: 'Usage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="chemical" stroke="#ef4444" strokeWidth={2} name="Chemical" />
                <Line type="monotone" dataKey="biological" stroke="#22c55e" strokeWidth={2} name="Biological" />
                <Line type="monotone" dataKey="organic" stroke="#f59e0b" strokeWidth={2} name="Organic" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Method Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <span>Treatment Method Comparison</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
              <BarChart data={reductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="method" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="#f59e0b" name="Pesticide Usage %" />
                <Bar dataKey="resistance" fill="#ef4444" name="Resistance Risk %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Current Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Smart Treatment Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-gradient-to-r from-red-50 to-orange-50">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Immediate Action Required</h4>
                    <p className="text-sm text-red-700 mb-2">Aphid population exceeding threshold in zone 3. Apply neem oil spray within 24 hours.</p>
                    <Badge className="bg-red-100 text-red-800">High Priority</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">IPM Strategy Update</h4>
                    <p className="text-sm text-green-700 mb-2">Introduce beneficial ladybugs to control aphid population naturally. Reduce chemical dependency by 30%.</p>
                    <Badge className="bg-green-100 text-green-800">Recommended</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Preventive Measures</h4>
                    <p className="text-sm text-blue-700 mb-2">Install yellow sticky traps around field perimeter. Monitor weekly for early pest detection.</p>
                    <Badge className="bg-blue-100 text-blue-800">Preventive</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Action Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>This Week's Action Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-red-50">
                <h4 className="font-semibold text-red-800 mb-2">Monday - Wednesday</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Apply neem oil to zone 3</li>
                  <li>• Install 20 yellow sticky traps</li>
                  <li>• Scout for new pest colonies</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Thursday - Friday</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Release 500 ladybugs in zone 3</li>
                  <li>• Monitor beneficial insect activity</li>
                  <li>• Document treatment effectiveness</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Weekend</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Assess treatment outcomes</li>
                  <li>• Plan next week's interventions</li>
                  <li>• Update pest management records</li>
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
