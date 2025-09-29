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
  Mic,
  Download,
  MessageCircle,
  Volume2,
  TrendingUp,
  Clock,
  Database,
  Users,
  FileText,
  ArrowLeft
} from 'lucide-react';
import { generatePDFReport, downloadData } from '@/utils/pdfUtils';
import { Link } from 'react-router-dom';

export const VoiceAssistant = () => {
  // Sample data
  const usageData = [
    { category: 'Weather Queries', count: 45, color: '#3b82f6' },
    { category: 'Disease Help', count: 32, color: '#ef4444' },
    { category: 'Market Prices', count: 28, color: '#22c55e' },
    { category: 'Fertilizer Tips', count: 25, color: '#f59e0b' },
    { category: 'General Farming', count: 20, color: '#8b5cf6' },
  ];

  const interactionTrends = [
    { month: 'Jan', queries: 45, responses: 44, satisfaction: 92 },
    { month: 'Feb', queries: 52, responses: 51, satisfaction: 94 },
    { month: 'Mar', queries: 38, responses: 37, satisfaction: 89 },
    { month: 'Apr', queries: 67, responses: 65, satisfaction: 96 },
    { month: 'May', queries: 73, responses: 72, satisfaction: 95 },
  ];

  const recentInteractions = [
    { query: 'What is the best fertilizer for wheat?', response: 'For wheat, use NPK fertilizer...', satisfaction: 5 },
    { query: 'How to treat leaf spots?', response: 'Apply copper fungicide...', satisfaction: 4 },
    { query: 'Weather forecast for farming', response: 'Light rain expected...', satisfaction: 5 },
  ];

  const handleDownloadPDF = () => {
    generatePDFReport('voice-assistant-report', 'voice-assistant-report', 'Voice Assistant Analytics Report');
  };

  const handleDownloadData = () => {
    const reportData = {
      usageStatistics: usageData,
      interactionTrends,
      recentInteractions,
      generatedOn: new Date().toISOString(),
    };
    downloadData(reportData, 'voice-assistant-data');
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
        <div id="voice-assistant-report" className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Voice Assistant Analytics</h1>
              <p className="text-muted-foreground">AI-powered farming assistant interaction insights</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleDownloadData} variant="outline" className="flex items-center space-x-2 touch-manipulation h-10 sm:h-auto">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </Button>
            <Button onClick={handleDownloadPDF} className="flex items-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-500 touch-manipulation h-10 sm:h-auto">
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
                  <p className="text-sm text-muted-foreground">Total Interactions</p>
                  <p className="text-2xl font-bold text-purple-600">1,247</p>
                </div>
                <MessageCircle className="w-8 h-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-purple-100 text-purple-800">+18% this month</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-green-600">94%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-2">
                <Progress value={94} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Query resolution</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                  <p className="text-2xl font-bold text-blue-600">2.3s</p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-blue-100 text-blue-800">-0.5s improved</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-orange-600">342</p>
                </div>
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-orange-100 text-orange-800">Monthly active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Query Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-purple-600" />
                <span>Query Categories</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <PieChart>
                  <Pie
                    data={usageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({category, count}) => `${category}: ${count}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {usageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Interaction Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Monthly Interaction Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <LineChart data={interactionTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="queries" stroke="#3b82f6" strokeWidth={2} name="Queries" />
                  <Line type="monotone" dataKey="responses" stroke="#22c55e" strokeWidth={2} name="Responses" />
                  <Line type="monotone" dataKey="satisfaction" stroke="#f59e0b" strokeWidth={2} name="Satisfaction %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Usage Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>Category Usage Analytics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Interactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Recent Interactions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInteractions.map((interaction, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-purple-50">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <p className="font-medium text-foreground">Q: {interaction.query}</p>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < interaction.satisfaction ? 'bg-yellow-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">A: {interaction.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Performance Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Top Performing</h4>
                <p className="text-sm text-green-700">Weather queries have the highest satisfaction rate at 96%. Users appreciate real-time forecasts.</p>
              </div>
              <div className="p-4 border rounded-lg bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-2">Improvement Areas</h4>
                <p className="text-sm text-yellow-700">Market price queries need better real-time data integration for more accurate responses.</p>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Growth Opportunities</h4>
                <p className="text-sm text-blue-700">Add support for regional languages to increase user engagement by 30%.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};
