
import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomerLeftPanel } from '@/components/features/customer/CustomerLeftPanel';
import { CustomerRightPanel } from '@/components/features/customer/CustomerRightPanel';
import { CustomerBanner } from '@/components/features/customer/CustomerBanner';
import { useCustomerBriefing } from '@/hooks/useCustomerBriefing';
import { getMockCustomerData } from '@/data/mockCustomerData';

export const CustomerDetailPage = () => {
  const { customerId } = useParams<{ customerId: string }>();
  const { isGenerating, isGenerated, handleGeneratePack } = useCustomerBriefing(customerId || '1');
  
  // Get mock customer data
  const customer = getMockCustomerData(customerId || '1');

  return (
    <div className="w-full">
      {/* Full-width banner */}
      <CustomerBanner 
        customer={customer}
        isGenerating={isGenerating}
        onRefresh={handleGeneratePack}
      />
      
      <div className="container max-w-full py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <CustomerLeftPanel customer={customer} />
          
          {/* Right Panel */}
          <CustomerRightPanel 
            customer={customer} 
            isGenerated={isGenerated} 
            isGenerating={isGenerating}
            onRefresh={handleGeneratePack}
          />
        </div>
      </div>
    </div>
  );
};
