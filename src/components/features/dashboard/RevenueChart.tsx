import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { InternationalCustomersDialog } from './InternationalCustomersDialog';

// Generate 100 companies with mock data
const generateCompanies = () => {
  const prefixes = ['Global', 'Tech', 'Digital', 'Advanced', 'Prime', 'Elite', 'Smart', 'Vision', 'Innovation', 'Future'];
  const types = ['Solutions', 'Technologies', 'Industries', 'Systems', 'Enterprises', 'Group', 'Corp', 'International', 'Ventures', 'Partners'];
  const companies = [];
  
  for (let i = 0; i < 100; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const name = `${prefix} ${type} ${i > 9 ? '' : 'Ltd'}`.trim();
    const revenue = Math.floor(Math.random() * 500000) + 100000; // £100k to £600k
    companies.push({ name, revenue });
  }
  
  // Sort by revenue descending
  return companies.sort((a, b) => b.revenue - a.revenue);
};

const allCompanies = generateCompanies();

export const RevenueChart = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const topCompanies = allCompanies.slice(0, 3);
  const totalRevenue = allCompanies.reduce((sum, company) => sum + company.revenue, 0);

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
            {topCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    #{index + 1}
                  </span>
                  <span className="font-medium text-sm">{company.name}</span>
                </div>
                <span className="text-lg font-semibold text-primary">
                  £{(company.revenue / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setDialogOpen(true)}
            >
              View All 100 Companies
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
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
