
import React from 'react';
import { CustomerBriefing } from '@/components/features/customer/CustomerBriefing';
import { GeneratingBriefing } from '@/components/features/customer/GeneratingBriefing';
import { CustomerData } from './types/customer-types';

interface CustomerRightPanelProps {
  customer: CustomerData;
  isGenerated: boolean;
  isGenerating?: boolean;
  onRefresh?: () => void;
}

export const CustomerRightPanel: React.FC<CustomerRightPanelProps> = ({ 
  customer, 
  isGenerated
}) => {
  return (
    <div className="w-full md:w-3/4">
      {isGenerated ? (
        <CustomerBriefing customer={customer} />
      ) : (
        <GeneratingBriefing />
      )}
    </div>
  );
};
