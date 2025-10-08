
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface CustomerDetailsProps {
  name: string;
  businessType: string;
  revenue: string;
  products: Array<{
    onboardDate: string;
    status: 'active' | 'inactive';
  }>;
}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({ 
  name, 
  businessType, 
  revenue, 
  products 
}) => {
  // Get earliest onboard date to determine client since date
  const clientSinceDate = products.sort((a, b) => 
    new Date(a.onboardDate).getTime() - new Date(b.onboardDate).getTime()
  )[0]?.onboardDate;

  return (
    <Card className="animate-in border-border/60" style={{ animationDelay: '400ms' }}>
      <CardHeader className="border-b border-border/40">
        <CardTitle className="text-base">Customer Details</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 text-sm">
        <div className="space-y-2">
          <div>
            <span className="text-muted-foreground">Name:</span> {name}
          </div>
          <div>
            <span className="text-muted-foreground">Business Type:</span> {businessType}
          </div>
          <div>
            <span className="text-muted-foreground">Total Revenue:</span> {revenue}
          </div>
          <div>
            <span className="text-muted-foreground">Client Since:</span> {clientSinceDate}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
