import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Brain, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { getAllCustomers } from '@/data/mockCustomerData';

interface Customer {
  id: string;
  name: string;
  industry: string;
  lendingScore: number;
  loanInterest: number;
}

const generateCustomers = (): Customer[] => {
  const baseCustomers = getAllCustomers();
  return baseCustomers.map(customer => ({
    ...customer,
    lendingScore: Math.floor(Math.random() * 40) + 60,
    loanInterest: Math.floor(Math.random() * 500000) + 50000,
  })).sort((a, b) => b.lendingScore - a.lendingScore);
};

const customers = generateCustomers();

export const LendingPropensity = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<'lendingScore' | 'loanInterest'>('lendingScore');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedCustomers = [...customers].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    return (a[sortBy] - b[sortBy]) * multiplier;
  });

  const toggleSort = (field: 'lendingScore' | 'loanInterest') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "bg-green-500/20 text-green-700 dark:text-green-400";
    if (score >= 70) return "bg-amber-500/20 text-amber-700 dark:text-amber-400";
    return "bg-red-500/20 text-red-700 dark:text-red-400";
  };

  return (
    <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-500" />
          Lending Propensity <span className="text-sm">({`AI-Driven`})</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {customers.slice(0, 3).map((customer, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-2 border border-border/50 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => navigate(`/customer/${customer.id}`)}
            >
              <div className="flex-1 min-w-0 mr-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-medium text-sm truncate">{customer.name}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{customer.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-xs text-muted-foreground">{customer.industry}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <Badge className={getScoreColor(customer.lendingScore)}>
                  Score: {customer.lendingScore}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">£{(customer.loanInterest / 1000).toFixed(0)}k</p>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-4">View All 100 Customers</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Customers with Lending Propensity (Top 100)</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('lendingScore')}>
                      <div className="flex items-center gap-1">
                        Lending Score <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('loanInterest')}>
                      <div className="flex items-center gap-1">
                        Loan Interest <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCustomers.map((customer, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.industry}</TableCell>
                      <TableCell>
                        <Badge className={getScoreColor(customer.lendingScore)}>
                          {customer.lendingScore}
                        </Badge>
                      </TableCell>
                      <TableCell>£{(customer.loanInterest / 1000).toFixed(0)}k</TableCell>
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
