
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend
} from 'recharts';
import { 
  dailySalesData, 
  monthlySalesData, 
  categorySalesData, 
  comparisonData 
} from '@/data/mockData';

interface SalesChartProps {
  className?: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ className }) => {
  const [period, setPeriod] = useState("weekly");
  const [chartType, setChartType] = useState("area");
  
  const data = period === "daily" ? dailySalesData : monthlySalesData;
  
  // Colors
  const primaryColor = "#3b82f6";
  const secondaryColor = "#1d4ed8";
  const lightPrimaryColor = "#93c5fd";
  const pieColors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#f43f5e"];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const renderComparisonChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={comparisonData.thisYear} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis 
          stroke="#94a3b8"
          tickFormatter={(value) => formatCurrency(value)}
        />
        <Tooltip 
          formatter={(value: number) => formatCurrency(value)}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="amount" 
          name="This Year" 
          stroke={primaryColor} 
          strokeWidth={3}
          dot={{ stroke: primaryColor, strokeWidth: 2, r: 4, fill: "white" }}
          activeDot={{ r: 6, stroke: primaryColor, strokeWidth: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey={(_, index) => comparisonData.lastYear[index]?.amount}
          name="Last Year" 
          stroke="#cbd5e1" 
          strokeWidth={3}
          dot={{ stroke: "#94a3b8", strokeWidth: 2, r: 4, fill: "white" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderCategoryChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={categorySalesData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={4}
          dataKey="value"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {categorySalesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          iconSize={10}
        />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderAreaChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={primaryColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={primaryColor} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis 
          stroke="#94a3b8"
          tickFormatter={(value) => formatCurrency(value)}
        />
        <Tooltip 
          formatter={(value: number) => formatCurrency(value)}
        />
        <Area 
          type="monotone" 
          dataKey="amount" 
          name="Sales" 
          stroke={primaryColor} 
          strokeWidth={3}
          fill="url(#colorSales)" 
          activeDot={{ r: 6, stroke: primaryColor, strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis 
          stroke="#94a3b8"
          tickFormatter={(value) => formatCurrency(value)}
        />
        <Tooltip 
          formatter={(value: number) => formatCurrency(value)}
        />
        <Bar 
          dataKey="amount" 
          name="Sales" 
          fill={primaryColor} 
          radius={[4, 4, 0, 0]}
          maxBarSize={60}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis 
          stroke="#94a3b8"
          tickFormatter={(value) => formatCurrency(value)}
        />
        <Tooltip 
          formatter={(value: number) => formatCurrency(value)}
        />
        <Line 
          type="monotone" 
          dataKey="amount" 
          name="Sales" 
          stroke={primaryColor} 
          strokeWidth={3}
          dot={{ stroke: primaryColor, strokeWidth: 2, r: 4, fill: "white" }}
          activeDot={{ r: 6, stroke: primaryColor, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <CardTitle>Sales Overview</CardTitle>
          <div className="flex flex-wrap gap-2">
            <Tabs defaultValue="weekly" className="w-auto" onValueChange={setPeriod}>
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Tabs defaultValue="area" className="w-auto" onValueChange={setChartType}>
              <TabsList>
                <TabsTrigger value="area">Area</TabsTrigger>
                <TabsTrigger value="bar">Bar</TabsTrigger>
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="comparison">YoY</TabsTrigger>
                <TabsTrigger value="category">Category</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        {chartType === "area" && renderAreaChart()}
        {chartType === "bar" && renderBarChart()}
        {chartType === "line" && renderLineChart()}
        {chartType === "comparison" && renderComparisonChart()}
        {chartType === "category" && renderCategoryChart()}
      </CardContent>
    </Card>
  );
};

export default SalesChart;
