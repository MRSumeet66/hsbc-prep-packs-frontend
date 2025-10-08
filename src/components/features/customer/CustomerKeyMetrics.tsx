
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CustomerData } from './types/customer-types';

interface CustomerKeyMetricsProps {
  customer: CustomerData;
}

export const CustomerKeyMetrics: React.FC<CustomerKeyMetricsProps> = ({ customer }) => {
  // Calculate active products count
  const activeProductsCount = customer.products.filter(product => product.status === 'active').length;
  
  // Calculate average product utilization (mockup value for this example)
  const avgProductUtilization = 78.5; // This would normally be calculated from actual data
  
  // Sustainability score (mockup value)
  const sustainabilityScore = 8.2; // This would normally come from customer data
  
  return (
    <div className="grid grid-cols-5 gap-3">
      <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '100ms' }}>
        <div className="h-1.5 bg-[#EE3524] w-full"></div>
        <CardContent className="p-4">
          <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Total Revenue</div>
          <div className="flex items-baseline">
            <div className="text-xl font-bold">{customer.revenue}</div>
            <div className="text-xs text-emerald-500 ml-2">+5.2%</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">from previous quarter</div>
        </CardContent>
      </Card>
      
      <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '200ms' }}>
        <div className="h-1.5 bg-[#EE3524] w-full"></div>
        <CardContent className="p-4">
          <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Active Products</div>
          <div className="flex items-baseline">
            <div className="text-xl font-bold">{activeProductsCount}</div>
            <div className="text-xs text-emerald-500 ml-2">+1</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">since last quarter</div>
        </CardContent>
      </Card>
      
      <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '300ms' }}>
        <div className="h-1.5 bg-[#EE3524] w-full"></div>
        <CardContent className="p-4">
          <div className="text-xs uppercase font-medium text-muted-foreground mb-1">NPS Score</div>
          <div className="flex items-baseline">
            <div className="text-xl font-bold">{customer.npsScore}</div>
            <div className="text-xs text-emerald-500 ml-2">+0.7</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">from last assessment</div>
        </CardContent>
      </Card>
      
      <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '400ms' }}>
        <div className="h-1.5 bg-[#EE3524] w-full"></div>
        <CardContent className="p-4">
          <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Avg. Product Utilization</div>
          <div className="flex items-baseline">
            <div className="text-xl font-bold">{avgProductUtilization}%</div>
            <div className="text-xs text-emerald-500 ml-2">+3.1%</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">from previous quarter</div>
        </CardContent>
      </Card>
      
      <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '500ms' }}>
        <div className="h-1.5 bg-[#EE3524] w-full"></div>
        <CardContent className="p-4">
          <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Sustainability Score</div>
          <div className="flex items-baseline">
            <div className="text-xl font-bold">{sustainabilityScore}</div>
            <div className="text-xs text-emerald-500 ml-2">+0.5</div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">ESG rating improvement</div>
        </CardContent>
      </Card>
    </div>
  );
};
