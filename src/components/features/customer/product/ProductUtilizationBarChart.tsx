
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, TooltipProps } from 'recharts';
import { CustomerData } from '../types/customer-types';

interface ProductUtilizationBarChartProps {
  customer: CustomerData;
}

export const ProductUtilizationBarChart: React.FC<ProductUtilizationBarChartProps> = ({ customer }) => {
  // Transform product data for the horizontal bar chart and calculate percentages
  const chartData = useMemo(() => {
    // Calculate total revenue
    const totalRevenue = customer.productRevenue.reduce((sum, product) => sum + product.revenue, 0);
    
    // Create data with percentages and sort from highest to lowest
    return customer.productRevenue
      .map(product => ({
        name: product.name,
        utilization: product.revenue,
        percentage: totalRevenue > 0 ? (product.revenue / totalRevenue) * 100 : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage);
  }, [customer.productRevenue]);

  // Different shades of the primary color #EE3524 - same as RevenueDistribution
  const COLORS = ['#EE3524', '#F05B4F', '#F2837A', '#F5ABA5', '#F7D3D0', '#FAE9E7'];

  // Custom tooltip component with proper label display
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
          <p className="font-medium text-sm">{`${label}`}</p>
          <div className="space-y-1 mt-1">
            {payload.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: entry.color }}
                />
                <p className="text-xs font-medium">
                  {entry.dataKey === 'percentage' 
                    ? `${Number(entry.value).toFixed(1)}%`
                    : `£${Number(entry.value).toLocaleString()}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="animate-in border-none shadow-md bg-white rounded-xl h-full" style={{ animationDelay: '600ms' }}>
      <CardHeader className="border-b border-gray-100 bg-white pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">Product Utilization</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex-grow overflow-auto">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F0FB" horizontal={false} />
            <XAxis 
              type="number" 
              tick={{ fill: '#8A898C', fontSize: 10 }} 
              tickFormatter={(value) => `${value.toFixed(1)}%`}
              domain={[0, 'dataMax']}
            />
            <YAxis 
              type="category"
              dataKey="name" 
              tick={{ fill: '#8A898C', fontSize: 10 }}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: 10 }}
              iconSize={8}
              iconType="circle"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            />
            <Bar 
              dataKey="percentage" 
              name="Product Utilization %" 
              fill="#EE3524"
              background={{ fill: '#F9F9F9' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
