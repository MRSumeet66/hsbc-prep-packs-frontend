
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CustomerData } from '../types/customer-types';

interface RevenueTrendChartProps {
  customer: CustomerData;
}

export const RevenueTrendChart: React.FC<RevenueTrendChartProps> = ({ customer }) => {
  // Use the monthlyRevenue data from customer object if available
  const chartData = useMemo(() => {
    if (customer.monthlyRevenue && customer.monthlyRevenue.length > 0) {
      return customer.monthlyRevenue;
    }
    
    // Fallback to generate data if monthlyRevenue is not available
    // This should not happen once all customer data is updated
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    
    // Calculate target total revenue
    const targetTotalRevenue = 1256000;
    const monthlyAverage = targetTotalRevenue / 12;
    
    return Array.from({ length: 12 }, (_, i) => {
      const monthIndex = (currentMonth - i + 12) % 12;
      const monthName = months[monthIndex];
      
      // Create consistent values based on month index rather than random
      const position = i / 11; 
      const multiplier = 0.85 + (Math.sin(position * Math.PI * 2.5) * 0.3);
      const currentYearRevenue = Math.round(monthlyAverage * multiplier);
      
      // Previous year is always 80% of current year (consistent pattern)
      const previousYearRevenue = Math.round(currentYearRevenue * 0.8);
      
      return {
        month: monthName,
        currentYearRevenue,
        previousYearRevenue
      };
    }).reverse(); // Reverse to show oldest first
  }, [customer.id, customer.monthlyRevenue]);

  // Colors for the chart
  const currentYearColor = "#EE3524";
  const previousYearColor = "#F7D3D0";

  return (
    <Card className="animate-in border-none shadow-md bg-white rounded-xl" style={{ animationDelay: '500ms' }}>
      <CardHeader className="border-b border-gray-100 bg-white pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">Revenue Trend</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F0FB" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#8A898C', fontSize: 10 }} 
            />
            <YAxis 
              tick={{ fill: '#8A898C', fontSize: 10 }} 
              tickFormatter={(value) => `£${(value / 1000).toLocaleString()}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                borderColor: '#F7D3D0', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                borderRadius: '4px' 
              }}
              formatter={(value) => [`£${Number(value).toLocaleString()}`, 'Revenue']}
            />
            <Legend 
              wrapperStyle={{ fontSize: 10 }}
              iconSize={8}
              iconType="circle"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            />
            <Line 
              type="monotone" 
              dataKey="currentYearRevenue" 
              name="Current Year"
              stroke={currentYearColor} 
              strokeWidth={2}
              dot={{ fill: currentYearColor, r: 4 }}
              activeDot={{ r: 6, fill: currentYearColor, stroke: '#fff', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="previousYearRevenue" 
              name="Previous Year"
              stroke={previousYearColor} 
              strokeWidth={2}
              dot={{ fill: previousYearColor, r: 3 }}
              activeDot={{ r: 5, fill: previousYearColor, stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
