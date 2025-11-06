import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown } from 'lucide-react';

interface Company {
  name: string;
  region: string;
  revenue: number;
}

interface InternationalCustomersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  companies: Company[];
}

export const InternationalCustomersDialog: React.FC<InternationalCustomersDialogProps> = ({
  open,
  onOpenChange,
  companies,
}) => {
  const [sortBy, setSortBy] = useState<'revenue' | 'name'>('revenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedCompanies = [...companies].sort((a, b) => {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>UK Companies by Revenue (Last 12 Months)</DialogTitle>
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
                <TableHead>Region</TableHead>
                <TableHead className="cursor-pointer" onClick={() => toggleSort('revenue')}>
                  <div className="flex items-center gap-1">
                    Revenue (12M) <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCompanies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-medium">{company.name}</TableCell>
                  <TableCell>{company.region}</TableCell>
                  <TableCell>
                    <Badge className={index < 10 ? "bg-green-500/20 text-green-700 dark:text-green-400" : ""}>
                      £{(company.revenue / 1000000).toFixed(2)}M
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
