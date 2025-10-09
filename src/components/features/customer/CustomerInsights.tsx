
import React from 'react';
import { CustomerData } from './types/customer-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Sparkles } from 'lucide-react';

interface CustomerInsightsProps {
  customer: CustomerData;
}

export const CustomerInsights: React.FC<CustomerInsightsProps> = ({ customer }) => {
  // Generate insights based on customer data
  const generateInsights = () => {
    const insights = [];
    
    // Revenue trend insight
    try {
      if (customer.revenueHistory && customer.revenueHistory.length >= 2) {
        const revenueData = [...customer.revenueHistory];
        // Get the most recent months if we have more than 3 months of data
        const lastThreeMonths = revenueData.length >= 3 
          ? revenueData.slice(-3) 
          : revenueData.slice(-2).concat(revenueData.slice(-2)[0]); // Duplicate last month if we don't have enough data
        
        const firstMonth = lastThreeMonths[0];
        const lastMonth = lastThreeMonths[lastThreeMonths.length - 1];
        const isGrowing = lastMonth.revenue > firstMonth.revenue;
        const percentChange = firstMonth.revenue > 0 
          ? Math.round((lastMonth.revenue - firstMonth.revenue) / firstMonth.revenue * 100) 
          : 0;
        
        insights.push(
          isGrowing 
            ? `${customer.name} shows a positive revenue trend, with ${lastMonth.month} revenue increasing by ${percentChange}% compared to ${firstMonth.month}.`
            : `${customer.name} shows a decreasing revenue trend of ${Math.abs(percentChange)}% in the last quarter, requiring attention.`
        );
      }
    } catch (error) {
      insights.push(`Revenue trend analysis could not be completed due to insufficient data.`);
    }
    
    // Product insight
    try {
      const activeProducts = customer.products.filter(p => p.status === 'active');
      const activeProductCount = activeProducts.length;
      
      if (customer.productRevenue && customer.productRevenue.length > 0) {
        const sortedProducts = [...customer.productRevenue].sort((a, b) => b.revenue - a.revenue);
        const topProduct = sortedProducts[0];
        
        insights.push(
          `Customer is currently using ${activeProductCount} active product${activeProductCount !== 1 ? 's' : ''}, with ${topProduct.name} being the highest revenue generator at £${topProduct.revenue.toLocaleString()}.`
        );
      }
    } catch (error) {
      insights.push(`Product utilization analysis could not be completed due to insufficient data.`);
    }
    
    // NPS insight with Global Wallet recommendation
    try {
      if (customer.npsHistory && customer.npsHistory.length >= 2) {
        // Simplified the NPS insight to just show the Global Wallet recommendation
        insights.push("Customer has 95% score recommendation for the Global Wallet Product.");
      }
    } catch (error) {
      insights.push(`NPS trend analysis could not be completed due to insufficient data.`);
    }
    
    // Complaint insight
    try {
      const pendingComplaints = customer.complaints.filter(c => c.status === 'pending');
      const pendingCount = pendingComplaints.length;
      
      if (pendingCount > 0) {
        const complaintText = pendingCount === 1 
          ? `There is 1 pending customer complaint that requires immediate attention.` 
          : `There are ${pendingCount} pending customer complaints that require immediate attention.`;
        
        insights.push(complaintText);
      } else {
        insights.push(`All customer complaints have been resolved, indicating strong customer service.`);
      }
    } catch (error) {
      insights.push(`Complaint analysis could not be completed due to insufficient data.`);
    }
    
    return insights;
  };
  
  const insights = generateInsights();

  return (
    <div className="mt-6 pt-6 border-t border-border/40">
      <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-hsbc-red" />
        AI Generated Insights
        <span className="text-xs text-muted-foreground font-normal ml-2">(Will develop under Phase 2)</span>
      </h3>
      <div className="space-y-3">
        {insights.map((insight, idx) => (
          <div key={idx} className="flex items-start gap-2 p-3 rounded-md bg-muted/30">
            <AlertCircle className="h-5 w-5 text-hsbc-red mt-0.5 flex-shrink-0" />
            <p className="text-sm">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
