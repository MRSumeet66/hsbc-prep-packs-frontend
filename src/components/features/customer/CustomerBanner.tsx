import React from 'react';
import { CustomerData } from './types/customer-types';
import { Mail, Phone, ScrollText, Users, MessageSquare } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { CustomerKeyContacts } from './CustomerKeyContacts';
import { RefreshButton } from './RefreshButton';
import { Card, CardContent } from '@/components/ui/card';

interface CustomerBannerProps {
  customer: CustomerData;
  isGenerating: boolean;
  onRefresh: () => void;
}

export const CustomerBanner: React.FC<CustomerBannerProps> = ({ 
  customer, 
  isGenerating, 
  onRefresh 
}) => {
  const getChannelIcon = () => {
    switch (customer.channelPreference) {
      case 'email': return <Mail className="h-4 w-4" />;
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'letter': return <ScrollText className="h-4 w-4" />;
      default: return null;
    }
  };

  const clientSinceDate = customer.products.sort((a, b) => 
    new Date(a.onboardDate).getTime() - new Date(b.onboardDate).getTime()
  )[0]?.onboardDate.split(' ')[0];

  return (
    <div className="w-full bg-gradient-to-r from-background to-muted/30 border-b border-border/40 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-3">{customer.name} Summary</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden">
              <CardContent className="p-2">
                <div className="text-[10px] uppercase font-medium text-muted-foreground mb-0.5">Business Type</div>
                <div className="text-sm font-bold">{customer.businessType}</div>
              </CardContent>
            </Card>
            <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden">
              <CardContent className="p-2">
                <div className="text-[10px] uppercase font-medium text-muted-foreground mb-0.5">Client Since</div>
                <div className="text-sm font-bold">{clientSinceDate}</div>
              </CardContent>
            </Card>
            <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden">
              <CardContent className="p-2">
                <div className="text-[10px] uppercase font-medium text-muted-foreground mb-0.5">Customer Type</div>
                <div className="text-sm font-bold">{customer.customerType || 'N/A'}</div>
              </CardContent>
            </Card>
            <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden">
              <CardContent className="p-2">
                <div className="text-[10px] uppercase font-medium text-muted-foreground mb-0.5">Vulnerability / CCN</div>
                <div className="text-sm font-bold">{customer.vulnerability || 'None'}</div>
              </CardContent>
            </Card>
            <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden">
              <CardContent className="p-2">
                <div className="text-[10px] uppercase font-medium text-muted-foreground mb-0.5">BIB Status</div>
                <div className="text-sm font-bold">{customer.bibStatus || 'N/A'}</div>
              </CardContent>
            </Card>
            <Card className="animate-in border-none shadow-md bg-white rounded-xl overflow-hidden">
              <CardContent className="p-2">
                <div className="text-[10px] uppercase font-medium text-muted-foreground mb-0.5">Dormancy</div>
                <div className="text-sm font-bold">{customer.dormancy || 'N/A'}</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4 self-center mt-4">
          <RefreshButton 
            isGenerating={isGenerating} 
            onRefresh={onRefresh} 
          />
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center space-x-1 text-xs bg-background/80 hover:bg-background px-2 py-1 rounded-md border border-border/40">
                <Users className="h-4 w-4" />
                <span>Contact Details</span>
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
    </div>
  );
};
