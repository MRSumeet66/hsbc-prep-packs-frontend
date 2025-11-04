
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
    <div className="space-y-3">
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
            <div className="text-xs uppercase font-medium text-muted-foreground mb-1">ICS Score</div>
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

      <div className="grid grid-cols-5 gap-3">
        <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '600ms' }}>
          <div className="h-1.5 bg-[#EE3524] w-full"></div>
          <CardContent className="p-4">
            <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Current Account Tariffs</div>
            <div className="flex items-baseline">
              <div className="text-xl font-bold">£12.50</div>
              <div className="text-xs text-muted-foreground ml-2">/month</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">standard business plan</div>
          </CardContent>
        </Card>
        
        <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '700ms' }}>
          <div className="h-1.5 bg-[#EE3524] w-full"></div>
          <CardContent className="p-4">
            <div className="text-xs uppercase font-medium text-muted-foreground mb-1">BIB Payment Limit</div>
            <div className="flex items-baseline">
              <div className="text-xl font-bold">£25,000</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">per transaction limit</div>
          </CardContent>
        </Card>
        
        <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '800ms' }}>
          <div className="h-1.5 bg-[#EE3524] w-full"></div>
          <CardContent className="p-4">
            <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Complex Limit</div>
            <div className="flex items-baseline">
              <div className="text-xl font-bold">£150,000</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">approved facility</div>
          </CardContent>
        </Card>
        
        <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '900ms' }}>
          <div className="h-1.5 bg-[#EE3524] w-full"></div>
          <CardContent className="p-4">
            <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Credit Limit</div>
            <div className="flex items-baseline">
              <div className="text-xl font-bold">£75,000</div>
              <div className="text-xs text-emerald-500 ml-2">£22k used</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">70% available</div>
          </CardContent>
        </Card>
        
        <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden" style={{ animationDelay: '1000ms' }}>
          <div className="h-1.5 bg-[#EE3524] w-full"></div>
          <CardContent className="p-4">
            <div className="text-xs uppercase font-medium text-muted-foreground mb-1">Outstanding Folder Notes</div>
            <div className="flex items-baseline">
              <div className="text-xl font-bold">3</div>
              <div className="text-xs text-amber-500 ml-2">2 pending</div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">requires attention</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
