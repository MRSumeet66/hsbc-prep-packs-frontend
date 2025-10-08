import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Company {
  name: string;
  industry: string;
  cagr: number;
  turnover: number;
}

const generateCompanies = (): Company[] => {
  const industries = ['Technology', 'Healthcare', 'Finance', 'Energy', 'Retail'];
  const companies: Company[] = [];
  
  for (let i = 0; i < 100; i++) {
    companies.push({
      name: `Growth Co ${i + 1}`,
      industry: industries[i % industries.length],
      cagr: Math.floor(Math.random() * 50) + 20,
      turnover: Math.floor(Math.random() * 5000000) + 1000000,
    });
  }
  
  return companies.sort((a, b) => b.cagr - a.cagr);
};

const companies = generateCompanies();

export const FastGrowthCompanies = () => {
  const [sortBy, setSortBy] = useState<'cagr' | 'turnover'>('cagr');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedCompanies = [...companies].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    return (a[sortBy] - b[sortBy]) * multiplier;
  });

  const toggleSort = (field: 'cagr' | 'turnover') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          Fast-Growth Companies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {companies.slice(0, 4).map((company, index) => (
            <div key={index} className="flex justify-between items-center p-2 border border-border/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">{company.name}</p>
                <p className="text-xs text-muted-foreground">{company.industry}</p>
              </div>
              <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                {company.cagr}% CAGR
              </Badge>
            </div>
          ))}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-4">View All 100 Companies</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Fast-Growth Companies (Top 100)</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('cagr')}>
                      <div className="flex items-center gap-1">
                        CAGR % <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('turnover')}>
                      <div className="flex items-center gap-1">
                        Turnover <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCompanies.map((company, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{company.name}</TableCell>
                      <TableCell>{company.industry}</TableCell>
                      <TableCell>
                        <Badge className={company.cagr > 50 ? "bg-green-500/20 text-green-700 dark:text-green-400" : ""}>
                          {company.cagr}%
                        </Badge>
                      </TableCell>
                      <TableCell>£{(company.turnover / 1000000).toFixed(2)}M</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};
