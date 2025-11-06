import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Clock, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { getAllCustomers } from '@/data/mockCustomerData';

interface Customer {
  id: string;
  name: string;
  lastContactDate: string;
  daysSinceContact: number;
  interactionFrequency: string;
}

const generateCustomers = (): Customer[] => {
  const frequencies = ['Weekly', 'Bi-weekly', 'Monthly', 'Quarterly', 'Rarely'];
  const baseCustomers = getAllCustomers();
  const today = new Date();
  
  return baseCustomers.map((customer, i) => {
    const daysAgo = Math.floor(Math.random() * 365) + 30;
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    
    return {
      id: customer.id,
      name: customer.name,
      lastContactDate: date.toISOString().split('T')[0],
      daysSinceContact: daysAgo,
      interactionFrequency: frequencies[Math.floor(i / 20) % frequencies.length],
    };
  }).sort((a, b) => b.daysSinceContact - a.daysSinceContact);
};

const customers = generateCustomers();

export const LongInactiveCustomers = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<'daysSinceContact' | 'lastContactDate'>('daysSinceContact');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedCustomers = [...customers].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'daysSinceContact') {
      return (a.daysSinceContact - b.daysSinceContact) * multiplier;
    }
    return (new Date(a.lastContactDate).getTime() - new Date(b.lastContactDate).getTime()) * multiplier;
  });

  const toggleSort = (field: 'daysSinceContact' | 'lastContactDate') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getDaysColor = (days: number) => {
    if (days > 180) return "bg-red-500/20 text-red-700 dark:text-red-400";
    if (days > 90) return "bg-amber-500/20 text-amber-700 dark:text-amber-400";
    return "bg-muted";
  };

  return (
    <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-5 w-5 text-amber-500" />
          Long Inactive Customers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[240px]">
          <div className="space-y-3 pr-4">
            {customers.slice(0, 10).map((customer, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-2 border border-border/50 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => navigate(`/customer/${customer.id}`)}
              >
                <div className="flex-1 min-w-0 mr-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-medium text-sm truncate">{customer.name}</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{customer.name}</p>
                    </TooltipContent>
                  </Tooltip>
                  <p className="text-xs text-muted-foreground">Last contact: {customer.lastContactDate}</p>
                </div>
                <Badge className={`${getDaysColor(customer.daysSinceContact)} flex-shrink-0`}>
                  {customer.daysSinceContact} days
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-4">View All 100 Customers</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Customers Not Contacted in Longest Time</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('lastContactDate')}>
                      <div className="flex items-center gap-1">
                        Last Contact <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('daysSinceContact')}>
                      <div className="flex items-center gap-1">
                        Days Since <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Frequency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCustomers.map((customer, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.lastContactDate}</TableCell>
                      <TableCell>
                        <Badge className={getDaysColor(customer.daysSinceContact)}>
                          {customer.daysSinceContact} days
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{customer.interactionFrequency}</TableCell>
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
