import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { InternationalCustomersDialog } from './InternationalCustomersDialog';
import { getAllCustomers } from '@/data/mockCustomerData';

// UK Companies with regions and revenue data
const generateCompanies = () => {
  const regions = [
    'London',
    'South East',
    'North West',
    'East of England',
    'West Midlands',
    'South West',
    'Yorkshire and The Humber',
    'East Midlands',
    'North East',
    'Scotland',
    'Wales',
    'Northern Ireland'
  ];
  
  const baseCustomers = getAllCustomers();
  
  return baseCustomers.map(customer => ({
    name: customer.name,
    region: regions[Math.floor(Math.random() * regions.length)],
    revenue: Math.floor(Math.random() * 3000000) + 500000 // £500k to £3.5M
  })).sort((a, b) => b.revenue - a.revenue);
};

const allCompanies = generateCompanies();

export const RevenueChart = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            International Customers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {allCompanies.slice(0, 3).map((company, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-2 border border-border/50 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0 mr-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-medium text-sm truncate">{company.name}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{company.name}</p>
                    </TooltipContent>
                  </Tooltip>
                  <p className="text-xs text-muted-foreground">{company.region}</p>
                </div>
                <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 flex-shrink-0">
                  £{(company.revenue / 1000000).toFixed(2)}M
                </Badge>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4" onClick={() => setDialogOpen(true)}>
            View All International Customers
          </Button>
        </CardContent>
      </Card>
      
      <InternationalCustomersDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        companies={allCompanies}
      />
    </>
  );
};
