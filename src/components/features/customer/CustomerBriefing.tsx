
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CustomerInsights } from './CustomerInsights';
import { CustomerKeyMetrics } from './CustomerKeyMetrics';
import { ProductUtilization } from './ProductUtilization';
import { CustomerData } from './types/customer-types';

interface CustomerBriefingProps {
  customer: CustomerData;
}

export const CustomerBriefing = ({ customer }: CustomerBriefingProps) => {
  return (
    <div className="space-y-8">
      <Card className="bg-card/80 backdrop-blur-sm border-border/60 overflow-hidden animate-in">
        <CardContent className="pt-6">
          <p className="text-muted-foreground leading-relaxed">{customer.description}</p>
          
          {/* AI Generated Insights Section */}
          <CustomerInsights customer={customer} />
        </CardContent>
      </Card>

      {/* Key metrics */}
      <CustomerKeyMetrics customer={customer} />

      {/* Product Utilization & Revenue */}
      <ProductUtilization customer={customer} />
    </div>
  );
};
