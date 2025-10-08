
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CustomerInsights } from './CustomerInsights';
import { CustomerKeyMetrics } from './CustomerKeyMetrics';
import { ProductUtilization } from './ProductUtilization';
import { CustomerData } from './types/customer-types';
import { Mail, Phone, ScrollText, Users, MessageSquare } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { CustomerKeyContacts } from './CustomerKeyContacts';
import { RefreshButton } from './RefreshButton';
import { useCustomerBriefing } from '@/hooks/useCustomerBriefing';
import { useParams } from 'react-router-dom';

interface CustomerBriefingProps {
  customer: CustomerData;
}

export const CustomerBriefing = ({ customer }: CustomerBriefingProps) => {
  const { customerId } = useParams<{ customerId: string }>();
  const { isGenerating, handleGeneratePack } = useCustomerBriefing(customerId || '1');
  
  const getChannelIcon = () => {
    switch (customer.channelPreference) {
      case 'email': return <Mail className="h-4 w-4" />;
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'letter': return <ScrollText className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card/80 backdrop-blur-sm border-border/60 overflow-hidden animate-in">
        <CardHeader className="bg-gradient-to-r from-background to-muted/30 border-b border-border/40">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-semibold">{customer.name} Summary</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {customer.businessType} • Client since {customer.products.sort((a, b) => 
                  new Date(a.onboardDate).getTime() - new Date(b.onboardDate).getTime()
                )[0]?.onboardDate.split(' ')[0]}
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <RefreshButton 
                isGenerating={isGenerating} 
                onRefresh={handleGeneratePack} 
              />
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center space-x-1 text-xs bg-background/80 hover:bg-background px-2 py-1 rounded-md border border-border/40">
                    <Users className="h-4 w-4" />
                    <span>Key Contacts</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <CustomerKeyContacts contacts={customer.keyContacts} />
                </PopoverContent>
              </Popover>
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center space-x-1 text-xs bg-background/80 hover:bg-background px-2 py-1 rounded-md border border-border/40">
                    <MessageSquare className="h-4 w-4" />
                    <span>Preferred Channel</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72" align="end">
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Preferred Contact Channel</h4>
                    <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-md">
                      {getChannelIcon()}
                      <span className="font-medium">{customer.channelPreference ? 
                        customer.channelPreference.charAt(0).toUpperCase() + customer.channelPreference.slice(1) : 
                        'None specified'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {customer.channelPreference === 'email' && 'Customer prefers to be contacted via email for all communications.'}
                      {customer.channelPreference === 'phone' && 'Customer prefers to be contacted via phone for all communications.'}
                      {customer.channelPreference === 'letter' && 'Customer prefers to be contacted via postal mail for all communications.'}
                      {!customer.channelPreference && 'No preferred contact channel has been specified for this customer.'}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground leading-relaxed">{customer.description}</p>
          
          {/* AI Generated Insights Section */}
          <CustomerInsights customer={customer} />
        </CardContent>
      </Card>

      {/* Key metrics */}
      <CustomerKeyMetrics customer={customer} />

      {/* Product Utilization & Revenue */}
      <ProductUtilization customer={customer} />
    </div>
  );
};
