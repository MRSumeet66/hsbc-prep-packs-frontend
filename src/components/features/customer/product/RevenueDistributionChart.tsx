
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, TooltipProps } from 'recharts';
import { CustomerData } from '../types/customer-types';

interface RevenueDistributionChartProps {
  customer: CustomerData;
}

export const RevenueDistributionChart: React.FC<RevenueDistributionChartProps> = ({ customer }) => {
  // Use the monthlyProductRevenue data from customer object if available
  const chartData = useMemo(() => {
    if (customer.monthlyProductRevenue && customer.monthlyProductRevenue.length > 0) {
      return customer.monthlyProductRevenue;
    }
    
    // Fallback to generate data if monthlyProductRevenue is not available
    // This should not happen once all customer data is updated
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    
    const last12Months = Array.from({ length: 12 }, (_, i) => {
      const monthIndex = (currentMonth - i + 12) % 12;
      return months[monthIndex];
    }).reverse();
    
    // Calculate the target total revenue (£1,256,000)
    const targetTotalRevenue = 1256000;
    
    // Use customer's product data to create consistent stacked data
    return last12Months.map((month, monthIndex) => {
      const baseData = { month };
      
      // Calculate total for this month (somewhat consistent but with small variation by month)
      const monthlyTotal = targetTotalRevenue / 12 * (0.9 + (monthIndex % 3) * 0.1);
      
      // Track the running sum to ensure we distribute properly
      let runningSum = 0;
      
      // Add each product as a separate key in the data with consistent values
      customer.productRevenue.forEach((product, index, array) => {
        // For the last product, ensure we hit exactly the monthly target
        if (index === array.length - 1) {
          baseData[product.name] = Math.round(monthlyTotal - runningSum);
        } else {
          // Calculate a proportion based on the product's relative revenue (consistent)
          const totalProductRevenue = customer.productRevenue.reduce((sum, p) => sum + p.revenue, 0);
          const proportion = product.revenue / totalProductRevenue;
          // Use month index to create small variations that are consistent
          const multiplier = 0.95 + ((monthIndex + index) % 3) * 0.05;
          const value = Math.round(monthlyTotal * proportion * multiplier);
          baseData[product.name] = value;
          runningSum += value;
        }
      });
      
      return baseData;
    });
  }, [customer.id, customer.monthlyProductRevenue, customer.productRevenue]);

  // Different shades of the primary color #EE3524
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
                  {entry.name}: £{Number(entry.value).toLocaleString()}
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
    <Card className="animate-in border-none shadow-md bg-white rounded-xl" style={{ animationDelay: '500ms' }}>
      <CardHeader className="border-b border-gray-100 bg-white pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">Monthly Revenue Distribution</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: 10 }}
              iconSize={8}
              iconType="circle"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            />
            {customer.productRevenue.map((product, index) => (
              <Bar 
                key={product.name} 
                dataKey={product.name} 
                stackId="revenue" 
                fill={COLORS[index % COLORS.length]} 
                name={product.name}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
