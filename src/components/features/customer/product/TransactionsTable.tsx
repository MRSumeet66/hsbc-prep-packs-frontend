
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CustomerData } from '../types/customer-types';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TransactionsTableProps {
  customer: CustomerData;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({ customer }) => {
  // Create sample transaction data based on customer information
  const transactions = React.useMemo(() => {
    // If customer has actual transaction data, use that instead
    if (customer.transactions && customer.transactions.length) {
      return customer.transactions;
    }
    
    // Otherwise generate placeholder transactions based on customer data
    const productNames = customer.products.map(p => p.name);
    
    return [
      {
        id: 't1',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        product: productNames[0] || 'Business Banking',
        amount: Math.round(customer.productRevenue[0]?.revenue * 0.15) || 15000,
        status: 'completed',
      },
      {
        id: 't2',
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        product: productNames[1] || 'FX Services',
        amount: Math.round(customer.productRevenue[1]?.revenue * 0.1) || 8500,
        status: 'completed',
      },
      {
        id: 't3',
        date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        product: productNames[0] || 'Business Banking',
        amount: Math.round(customer.productRevenue[0]?.revenue * 0.12) || 12000,
        status: 'completed',
      },
      {
        id: 't4',
        date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        product: productNames[2] || 'Trade Services',
        amount: Math.round(customer.productRevenue[2]?.revenue * 0.08) || 5400,
        status: 'completed',
      },
      {
        id: 't5',
        date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        product: productNames[1] || 'FX Services',
        amount: Math.round(customer.productRevenue[1]?.revenue * 0.09) || 7800,
        status: 'completed',
      },
    ];
  }, [customer.id, customer.products, customer.productRevenue, customer.transactions]);

  return (
    <Card className="animate-in border-none shadow-md bg-white rounded-xl h-full" style={{ animationDelay: '700ms' }}>
      <CardHeader className="border-b border-gray-100 bg-white pb-3">
        <CardTitle className="text-lg font-semibold text-gray-800">Latest Transactions</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex-grow overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map(transaction => (
              <TableRow key={transaction.id}>
                <TableCell className="flex items-center gap-1 text-sm">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  {transaction.date}
                </TableCell>
                <TableCell className="text-sm font-medium">{transaction.product}</TableCell>
                <TableCell className="text-sm">£{transaction.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge 
                    variant={transaction.status === 'completed' ? 'outline' : 'secondary'}
                    className="text-xs"
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
