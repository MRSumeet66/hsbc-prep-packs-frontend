
import React from 'react';
import { RevenueDistributionChart } from './product/RevenueDistributionChart';
import { RevenueTrendChart } from './product/RevenueTrendChart';
import { TransactionsTable } from './product/TransactionsTable';
import { ProductUtilizationBarChart } from './product/ProductUtilizationBarChart';
import { CustomerData } from './types/customer-types';

interface ProductUtilizationProps {
  customer: CustomerData;
}

export const ProductUtilization: React.FC<ProductUtilizationProps> = ({ customer }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueDistributionChart customer={customer} />
        <RevenueTrendChart customer={customer} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionsTable customer={customer} />
        <ProductUtilizationBarChart customer={customer} />
      </div>
    </div>
  );
};
