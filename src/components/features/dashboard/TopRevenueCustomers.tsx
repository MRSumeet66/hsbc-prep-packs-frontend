import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';

interface Customer {
  id: string;
  name: string;
  industry: string;
  revenue: number;
}

const generateCustomers = (): Customer[] => {
  const industries = ['Manufacturing', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Energy', 'Construction', 'Hospitality'];
  const customerNames = [
    'Acme Corporation', 'Dynamic Solutions Ltd', 'Green Energy Partners', 'Metro Hospitality Group',
    'Patterson Healthcare', 'Global Logistics Ltd', 'TechVision Innovations', 'Harrison Construction',
    'Emerald Retail Group', 'Quantum Technologies Inc', 'Sterling Finance Group', 'Apex Manufacturing Ltd',
    'Horizon Energy Solutions', 'Phoenix Retail Holdings', 'Stellar Healthcare Systems', 'Atlantic Logistics Corp',
    'Pinnacle Construction Group', 'Summit Technology Partners', 'Velocity Manufacturing Co', 'Zenith Financial Services',
    'Aurora Energy Holdings', 'Precision Engineering Ltd', 'Nexus Healthcare Group', 'Titan Construction Holdings',
    'Innovate Technology Solutions', 'Premier Logistics International', 'Evergreen Retail Corporation', 'Silverstone Financial Ltd',
    'Cascade Energy Partners', 'Cornerstone Manufacturing Group', 'Beacon Healthcare Services', 'Imperial Logistics Solutions',
    'Vanguard Technology Group', 'Redwood Retail Holdings', 'Crown Financial Partners', 'Element Energy Corporation',
    'Unified Manufacturing Systems', 'Pacific Logistics Group', 'Meridian Healthcare Partners', 'Skyline Construction Ltd',
  ];
  const customers: Customer[] = [];
  
  for (let i = 0; i < 100; i++) {
    customers.push({
      id: (i + 1).toString(),
      name: i < customerNames.length ? customerNames[i] : `${customerNames[i % customerNames.length]} ${Math.floor(i / customerNames.length) + 1}`,
      industry: industries[i % industries.length],
      revenue: Math.floor(Math.random() * 5000000) + 500000,
    });
  }
  
  return customers.sort((a, b) => b.revenue - a.revenue);
};

const customers = generateCustomers();

export const TopRevenueCustomers = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<'revenue' | 'name'>('revenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedCustomers = [...customers].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'revenue') {
      return (a.revenue - b.revenue) * multiplier;
    }
    return a.name.localeCompare(b.name) * multiplier;
  });

  const toggleSort = (field: 'revenue' | 'name') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder(field === 'revenue' ? 'desc' : 'asc');
    }
  };

  return (
    <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-blue-500" />
          Top Revenue Customers
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
              <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400 flex-shrink-0">
                £{(customer.revenue / 1000000).toFixed(2)}M
              </Badge>
            </div>
          ))}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-4">View Top 100 Customers</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Largest Customers by Revenue (Last 12 Months)</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('name')}>
                      <div className="flex items-center gap-1">
                        Company Name <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('revenue')}>
                      <div className="flex items-center gap-1">
                        Revenue (12M) <ArrowUpDown className="h-3 w-3" />
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
                        <Badge className={index < 10 ? "bg-blue-500/20 text-blue-700 dark:text-blue-400" : ""}>
                          £{(customer.revenue / 1000000).toFixed(2)}M
                        </Badge>
                      </TableCell>
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
