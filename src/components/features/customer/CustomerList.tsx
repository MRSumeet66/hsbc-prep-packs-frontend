
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, AlertCircle, TrendingUp, AlertTriangle, Mail, Phone, ScrollText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Tag {
  id: string;
  label: string;
  type: 'success' | 'warning' | 'danger';
  icon: React.ReactNode;
}

interface Customer {
  id: string;
  name: string;
  businessType: string;
  revenue: string;
  tags: Tag[];
  priority: number;
  bbrm?: string;
  channelPreference?: string;
}

interface CustomerListProps {
  customers: Customer[];
}

const CustomerListItem = ({ customer }: { customer: Customer }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/customer/${customer.id}`);
  };

  const getChannelIcon = () => {
    switch (customer.channelPreference) {
      case 'email': return <Mail className="h-3 w-3 text-blue-500" />;
      case 'phone': return <Phone className="h-3 w-3 text-green-500" />;
      case 'letter': return <ScrollText className="h-3 w-3 text-amber-500" />;
      default: return null;
    }
  };

  return (
    <Card 
      className="mb-3 p-5 hover:shadow-md transition-all duration-300 cursor-pointer border-border/60 bg-card/90 hover:bg-card group"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex-grow">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="font-medium text-lg">{customer.name}</h3>
                <div className="flex space-x-1.5">
                  {customer.tags.map(tag => (
                    <Badge 
                      key={tag.id} 
                      variant={tag.type === 'success' ? 'default' : tag.type === 'warning' ? 'secondary' : 'destructive'}
                      className="flex items-center gap-1.5 text-xs"
                    >
                      {tag.icon}
                      <span>{tag.label}</span>
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="text-sm text-muted-foreground flex flex-wrap gap-x-4 mt-1">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                  {customer.businessType}
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-400/40 mr-2"></span>
                  Revenue: {customer.revenue}
                </span>
                {customer.bbrm && (
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-400/40 mr-2"></span>
                    BBRM: {customer.bbrm}
                  </span>
                )}
                {customer.channelPreference && (
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400/40 mr-2"></span>
                    Channel: 
                    <span className="flex items-center ml-1">
                      {getChannelIcon()}
                      <span className="ml-1">{customer.channelPreference.charAt(0).toUpperCase() + customer.channelPreference.slice(1)}</span>
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </Card>
  );
};

export const CustomerList = ({ customers }: CustomerListProps) => {
  return (
    <div className="space-y-2 animate-in">
      {customers.map((customer, index) => (
        <div key={customer.id} className="animate-in" style={{ animationDelay: `${index * 75}ms` }}>
          <CustomerListItem customer={customer} />
        </div>
      ))}
    </div>
  );
};
