import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 145000 },
  { month: 'Feb', revenue: 165000 },
  { month: 'Mar', revenue: 180000 },
  { month: 'Apr', revenue: 175000 },
  { month: 'May', revenue: 195000 },
  { month: 'Jun', revenue: 210000 },
  { month: 'Jul', revenue: 225000 },
  { month: 'Aug', revenue: 240000 },
  { month: 'Sep', revenue: 255000 },
  { month: 'Oct', revenue: 270000 },
  { month: 'Nov', revenue: 285000 },
  { month: 'Dec', revenue: 300000 },
];

export const RevenueChart = () => {
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Client Revenue Data
        </CardTitle>
        <p className="text-2xl font-bold text-primary">£{(totalRevenue / 1000000).toFixed(2)}M</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              formatter={(value: number) => `£${(value / 1000).toFixed(0)}k`}
              contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
            />
            <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
