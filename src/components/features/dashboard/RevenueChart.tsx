import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { InternationalCustomersDialog } from './InternationalCustomersDialog';

// UK Regions with mock revenue data
const generateRegions = () => {
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
  
  return regions.map(name => ({
    name,
    revenue: Math.floor(Math.random() * 3000000) + 500000 // £500k to £3.5M per region
  })).sort((a, b) => b.revenue - a.revenue);
};

const allRegions = generateRegions();

export const RevenueChart = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const topRegions = allRegions.slice(0, 3);
  const totalRevenue = allRegions.reduce((sum, region) => sum + region.revenue, 0);

  return (
    <>
      <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            International Customers
          </CardTitle>
          <p className="text-2xl font-bold text-primary">£{(totalRevenue / 1000000).toFixed(2)}M</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topRegions.map((region, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    #{index + 1}
                  </span>
                  <span className="font-medium text-sm">{region.name}</span>
                </div>
                <span className="text-lg font-semibold text-primary">
                  £{(region.revenue / 1000000).toFixed(2)}M
                </span>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setDialogOpen(true)}
            >
              View All Regions
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <InternationalCustomersDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        companies={allRegions}
      />
    </>
  );
};
