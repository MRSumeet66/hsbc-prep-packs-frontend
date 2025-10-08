
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Package } from 'lucide-react';
import { CustomerData } from '../types/customer-types';

interface ActiveProductsTableProps {
  customer: CustomerData;
}

export const ActiveProductsTable: React.FC<ActiveProductsTableProps> = ({ customer }) => {
  return (
    <Card className="animate-in border-none shadow-md bg-white rounded-xl" style={{ animationDelay: '500ms' }}>
      <CardHeader className="border-b border-gray-100 bg-white">
        <CardTitle className="text-lg font-semibold text-gray-800">Active Products & Services</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-sm font-medium mb-4 text-gray-700 flex items-center gap-2">
          <Package className="h-4 w-4 text-[#EE3524]" />
          Active Products & Services
        </h3>
        <div className="rounded-md border border-gray-200">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Since</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customer.products.map((product, idx) => (
                <TableRow key={idx} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.onboardDate}</TableCell>
                  <TableCell>£{product.revenue.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === 'active' ? 'default' : 'secondary'} className={product.status === 'active' ? 'bg-[#EE3524] hover:bg-[#DD2414]' : ''}>
                      {product.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
