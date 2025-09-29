import React from 'react';
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
  ResponsiveContainer
} from 'recharts';
import {
  Droplets,
  Download,
  Calendar,
  CloudRain,
  Thermometer,
  Database,
  FileText,
  TrendingUp
} from 'lucide-react';
import { generatePDFReport, downloadData } from '@/utils/pdfUtils';

export const IrrigationScheduler = () => {
  // Sample data
  const irrigationSchedule = [
    { day: 'Mon', planned: 2.5, actual: 2.3, moisture: 65 },
    { day: 'Tue', planned: 0, actual: 0, moisture: 58 },
    { day: 'Wed', planned: 3.0, actual: 3.2, moisture: 72 },
    { day: 'Thu', planned: 0, actual: 0, moisture: 68 },
    { day: 'Fri', planned: 2.0, actual: 1.8, moisture: 63 },
    { day: 'Sat', planned: 0, actual: 0, moisture: 55 },
    { day: 'Sun', planned: 2.5, actual: 0, moisture: 52 },
  ];

  const moistureTrends = [
    { week: 'Week 1', moisture: 68, rainfall: 12, irrigation: 15 },
    { week: 'Week 2', moisture: 72, rainfall: 8, irrigation: 18 },
    { week: 'Week 3', moisture: 65, rainfall: 25, irrigation: 10 },
    { week: 'Week 4', moisture: 70, rainfall: 5, irrigation: 20 },
  ];

  const waterUsage = [
    { month: 'Jan', usage: 120, efficiency: 85 },
    { month: 'Feb', usage: 95, efficiency: 88 },
    { month: 'Mar', usage: 140, efficiency: 82 },
    { month: 'Apr', usage: 180, efficiency: 79 },
    { month: 'May', usage: 220, efficiency: 75 },
  ];

  const handleDownloadPDF = () => {
    generatePDFReport('irrigation-scheduler-report', 'irrigation-scheduler-report', 'Irrigation Management Report');
  };

  const handleDownloadData = () => {
    const reportData = {
      irrigationSchedule,
      moistureTrends,
      waterUsage,
      generatedOn: new Date().toISOString(),
    };
    downloadData(reportData, 'irrigation-scheduler-data');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="flex-1 p-6 space-y-6">
        <div id="irrigation-scheduler-report" className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Irrigation Scheduler</h1>
              <p className="text-muted-foreground">Smart water management and scheduling system</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleDownloadData} variant="outline" className="flex items-center space-x-2 touch-manipulation h-10 sm:h-auto">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </Button>
            <Button onClick={handleDownloadPDF} className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 touch-manipulation h-10 sm:h-auto">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF Report</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Water Efficiency</p>
                  <p className="text-2xl font-bold text-blue-600">87%</p>
                </div>
                <Droplets className="w-8 h-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Progress value={87} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Optimal: 90%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Soil Moisture</p>
                  <p className="text-2xl font-bold text-green-600">68%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800">Optimal range</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Water Saved</p>
                  <p className="text-2xl font-bold text-orange-600">2,400L</p>
                </div>
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-orange-100 text-orange-800">This month</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Next Irrigation</p>
                  <p className="text-2xl font-bold text-purple-600">18h</p>
                </div>
                <CloudRain className="w-8 h-8 text-purple-500" />
              </div>
              <div className="mt-2">
                <Badge className="bg-purple-100 text-purple-800">Weather adjusted</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Weekly Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Weekly Irrigation Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <BarChart data={irrigationSchedule}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" label={{ value: 'Water (L/m²)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Moisture (%)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="planned" fill="#3b82f6" name="Planned" />
                  <Bar yAxisId="left" dataKey="actual" fill="#06b6d4" name="Actual" />
                  <Line yAxisId="right" type="monotone" dataKey="moisture" stroke="#22c55e" strokeWidth={2} name="Soil Moisture %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Moisture Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Moisture & Water Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
                <AreaChart data={moistureTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="moisture" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} name="Soil Moisture" />
                  <Area type="monotone" dataKey="rainfall" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} name="Rainfall" />
                  <Area type="monotone" dataKey="irrigation" stackId="3" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} name="Irrigation" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Water Usage Efficiency */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Droplets className="w-5 h-5 text-cyan-600" />
              <span>Monthly Water Usage & Efficiency</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
              <LineChart data={waterUsage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" label={{ value: 'Usage (L/m²)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'Efficiency (%)', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="usage" stroke="#06b6d4" strokeWidth={3} name="Water Usage" />
                <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#f59e0b" strokeWidth={2} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Smart Irrigation Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">Today's Action</h4>
                <p className="text-sm text-blue-700">Skip morning irrigation due to 85% humidity. Schedule for 6 PM instead for better efficiency.</p>
              </div>
              <div className="p-4 border rounded-lg bg-green-50">
                <h4 className="font-semibold text-green-800 mb-2">Optimization Tip</h4>
                <p className="text-sm text-green-700">Install drip irrigation in zone 3 to improve efficiency by 25% and reduce water usage.</p>
              </div>
              <div className="p-4 border rounded-lg bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">Weather Alert</h4>
                <p className="text-sm text-orange-700">Rain expected tomorrow (15mm). Adjust schedule to reduce irrigation by 60%.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};
