import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { getAllCustomers } from '@/data/mockCustomerData';

interface Company {
  id: string;
  name: string;
  industry: string;
  cagr: number;
  turnover: number;
}

const generateCompanies = (): Company[] => {
  const baseCustomers = getAllCustomers();
  return baseCustomers.map(customer => ({
    ...customer,
    cagr: Math.floor(Math.random() * 50) + 20,
    turnover: Math.floor(Math.random() * 5000000) + 1000000,
  })).sort((a, b) => b.cagr - a.cagr);
};

const companies = generateCompanies();

export const FastGrowthCompanies = () => {
  const navigate = useNavigate();
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
        <ScrollArea className="h-[264px]">
          <div className="space-y-3 pr-4">
            {companies.slice(0, 10).map((company, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-2 border border-border/50 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => navigate(`/customer/${company.id}`)}
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
                  <p className="text-xs text-muted-foreground">{company.industry}</p>
                </div>
                <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 flex-shrink-0">
                  {company.cagr}% CAGR
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-4">View Top 100 Companies</Button>
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
