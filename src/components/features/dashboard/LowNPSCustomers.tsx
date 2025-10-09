import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertCircle, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';

interface Customer {
  id: string;
  name: string;
  npsScore: number;
  lastInteraction: string;
  note: string;
}

const generateCustomers = (): Customer[] => {
  const notes = [
    'Service delay complaints',
    'Product quality issues',
    'Poor communication',
    'Pricing concerns',
    'Technical difficulties'
  ];
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
  const today = new Date();
  
  for (let i = 0; i < 100; i++) {
    const daysAgo = Math.floor(Math.random() * 90);
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    
    customers.push({
      id: (i + 1).toString(),
      name: i < customerNames.length ? customerNames[i] : `${customerNames[i % customerNames.length]} ${Math.floor(i / customerNames.length) + 1}`,
      npsScore: Math.floor(Math.random() * 40) + 1,
      lastInteraction: date.toISOString().split('T')[0],
      note: notes[i % notes.length],
    });
  }
  
  return customers.sort((a, b) => a.npsScore - b.npsScore);
};

const customers = generateCustomers();

export const LowNPSCustomers = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<'npsScore' | 'lastInteraction'>('npsScore');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedCustomers = [...customers].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'npsScore') {
      return (a.npsScore - b.npsScore) * multiplier;
    }
    return (new Date(a.lastInteraction).getTime() - new Date(b.lastInteraction).getTime()) * multiplier;
  });

  const toggleSort = (field: 'npsScore' | 'lastInteraction') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder(field === 'npsScore' ? 'asc' : 'desc');
    }
  };

  return (
    <Card className="border-border/60 bg-card/90 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          Low NPS Customers
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
                <p className="text-xs text-muted-foreground">{customer.note}</p>
              </div>
              <Badge variant="destructive" className="ml-2 flex-shrink-0">
                NPS: {customer.npsScore}
              </Badge>
            </div>
          ))}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full mt-4">View All Low NPS Customers</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Low NPS Customer List</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[60vh]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('npsScore')}>
                      <div className="flex items-center gap-1">
                        NPS Score <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => toggleSort('lastInteraction')}>
                      <div className="flex items-center gap-1">
                        Last Interaction <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Note</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCustomers.map((customer, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">
                          {customer.npsScore}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.lastInteraction}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{customer.note}</TableCell>
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
