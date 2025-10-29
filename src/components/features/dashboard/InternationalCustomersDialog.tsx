import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Company {
  name: string;
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>All International Customers</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-2">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground w-8">
                    #{index + 1}
                  </span>
                  <span className="font-medium">{company.name}</span>
                </div>
                <span className="text-lg font-semibold text-primary">
                  £{(company.revenue / 1000).toFixed(0)}k
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
