
import React, { useState, useEffect } from 'react';
import { SearchBox } from '@/components/features/customer/SearchBox';
import { CustomerList } from '@/components/features/customer/CustomerList';
import { TrendingUp, AlertTriangle, AlertCircle, Calendar, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

// Mock news data
const newsItems = [
  {
    id: '1',
    title: 'Acme Corporation Expands Operations',
    timestamp: 'Today, 10:30 AM',
    type: 'success',
    description: 'Acme Corporation has announced plans to expand operations into new markets, with expected revenue growth of 15% next quarter.'
  },
  {
    id: '2',
    title: 'Dynamic Solutions Ltd Complaint Filed',
    timestamp: 'Yesterday, 3:45 PM',
    type: 'risk',
    description: 'A complaint has been filed against Dynamic Solutions Ltd regarding service delivery delays.'
  },
  {
    id: '3',
    title: 'Green Energy Partners Risk Assessment Update',
    timestamp: '2 days ago',
    type: 'warning',
    description: 'Updated risk assessment for Green Energy Partners shows increased exposure in renewable energy sector.'
  },
  {
    id: '4',
    title: 'Metro Hospitality Group Product Interest',
    timestamp: '3 days ago',
    type: 'info',
    description: 'Metro Hospitality Group has expressed interest in our new business banking product suite.'
  },
  {
    id: '5',
    title: 'Patterson Healthcare Quarterly Review',
    timestamp: 'Last week',
    type: 'success',
    description: 'Quarterly review completed for Patterson Healthcare shows strong financial performance and growth potential.'
  },
  {
    id: '6',
    title: 'Global Logistics Ltd FX Volume Increase',
    timestamp: 'Last week',
    type: 'info',
    description: 'Global Logistics Ltd has increased their foreign exchange volume by 25% this quarter.'
  },
  {
    id: '7',
    title: 'TechVision Innovations Expansion Plans',
    timestamp: '2 weeks ago',
    type: 'success',
    description: 'TechVision Innovations has shared plans to expand into Asian markets with our support.'
  },
  {
    id: '8',
    title: 'Harrison Construction Funding Request',
    timestamp: '2 weeks ago',
    type: 'info',
    description: 'Harrison Construction has requested additional project financing for their new commercial development.'
  },
  {
    id: '9',
    title: 'Emerald Retail Group Payment Issue',
    timestamp: '3 weeks ago',
    type: 'risk',
    description: 'Emerald Retail Group has reported ongoing issues with their payment processing system integration.'
  },
  {
    id: '10',
    title: 'Heritage Foods Export Success',
    timestamp: 'Last month',
    type: 'success',
    description: 'Heritage Foods has successfully entered three new export markets using our trade finance solutions.'
  },
  {
    id: '11',
    title: 'Quantum Electronics Supply Chain Review',
    timestamp: 'Last month',
    type: 'warning',
    description: 'Quantum Electronics has requested a review of their global supply chain financing arrangements.'
  }
];

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState<any[]>([]);
  
  // Mock customer data - in a real app, this would come from an API
  const customers = [
    {
      id: '1',
      name: 'Acme Corporation',
      businessType: 'Manufacturing',
      revenue: '£1,256,000',
      priority: 1,
      teamLead: 'Sarah Johnson',
      channelPreference: 'email',
      tags: [
        { id: '1', label: 'Growth Opportunity', type: 'success', icon: <TrendingUp className="h-3 w-3" /> }
      ]
    },
    {
      id: '2',
      name: 'Dynamic Solutions Ltd',
      businessType: 'Technology',
      revenue: '£2,345,000',
      priority: 3,
      teamLead: 'Thomas Miller',
      channelPreference: 'phone',
      tags: [
        { id: '2', label: 'Recent Complaint', type: 'risk', icon: <AlertCircle className="h-3 w-3" /> }
      ]
    },
    {
      id: '3',
      name: 'Green Energy Partners',
      businessType: 'Energy',
      revenue: '£987,000',
      priority: 2,
      teamLead: 'Rebecca Taylor',
      channelPreference: 'letter',
      tags: [
        { id: '3', label: 'High Risk', type: 'warning', icon: <AlertTriangle className="h-3 w-3" /> }
      ]
    },
    {
      id: '4',
      name: 'Metro Hospitality Group',
      businessType: 'Hospitality',
      revenue: '£3,421,000',
      priority: 4,
      teamLead: 'Andrew Wilson',
      channelPreference: 'email',
      tags: [
        { id: '4', label: 'Growth Opportunity', type: 'success', icon: <TrendingUp className="h-3 w-3" /> }
      ]
    },
    {
      id: '5',
      name: 'Patterson Healthcare',
      businessType: 'Healthcare',
      revenue: '£5,678,000',
      priority: 5,
      teamLead: 'Jennifer Adams',
      channelPreference: 'phone',
      tags: []
    },
    {
      id: '6',
      name: 'Global Logistics Ltd',
      businessType: 'Transport',
      revenue: '£4,127,000',
      priority: 6,
      teamLead: 'Michael Roberts',
      channelPreference: 'letter',
      tags: [
        { id: '5', label: 'Growth Opportunity', type: 'success', icon: <TrendingUp className="h-3 w-3" /> }
      ]
    },
    {
      id: '7',
      name: 'TechVision Innovations',
      businessType: 'Technology',
      revenue: '£2,865,000',
      priority: 7,
      teamLead: 'David Thompson',
      channelPreference: 'email',
      tags: [
        { id: '6', label: 'Growth Opportunity', type: 'success', icon: <TrendingUp className="h-3 w-3" /> }
      ]
    },
    {
      id: '8',
      name: 'Harrison Construction',
      businessType: 'Construction',
      revenue: '£6,215,000',
      priority: 8,
      teamLead: 'Elizabeth Cooper',
      channelPreference: 'phone',
      tags: []
    },
    {
      id: '9',
      name: 'Emerald Retail Group',
      businessType: 'Retail',
      revenue: '£3,750,000',
      priority: 9,
      teamLead: 'Robert Jackson',
      channelPreference: 'letter',
      tags: [
        { id: '7', label: 'Recent Complaint', type: 'risk', icon: <AlertCircle className="h-3 w-3" /> }
      ]
    },
    {
      id: '10',
      name: 'Heritage Foods Ltd',
      businessType: 'Food & Beverage',
      revenue: '£1,980,000',
      priority: 10,
      teamLead: 'Alice Palmer',
      channelPreference: 'email',
      tags: []
    },
    {
      id: '11',
      name: 'Quantum Electronics',
      businessType: 'Manufacturing',
      revenue: '£3,250,000',
      priority: 11,
      teamLead: 'George Williams',
      channelPreference: 'phone',
      tags: [
        { id: '8', label: 'High Risk', type: 'warning', icon: <AlertTriangle className="h-3 w-3" /> }
      ]
    }
  ];

  // Filter customers based on search query
  useEffect(() => {
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.businessType.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Sort by priority
    const sorted = [...filtered].sort((a, b) => a.priority - b.priority);
    setFilteredCustomers(sorted);
  }, [searchQuery]);

  return (
    <div className="container max-w-full py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* News Feed Panel */}
        <div className="md:w-1/3 lg:w-1/4">
          <Card className="border-border/60 bg-card/90 h-[calc(100vh-7rem)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Customer Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
                <div className="space-y-4">
                  {newsItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-3 border border-border/50 rounded-lg bg-background/80 hover:bg-background transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <Badge 
                          variant={
                            item.type === 'success' ? 'default' : 
                            item.type === 'warning' ? 'secondary' : 
                            item.type === 'risk' ? 'destructive' : 
                            'outline'
                          }
                          className="text-[10px]"
                        >
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                      <div className="text-xs flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        
        {/* Customer List and Search */}
        <div className="flex-1">
          <div>
            <h1 className="text-3xl font-bold mb-1">Book Overview</h1>
          </div>
          
          <div className="mt-6">
            <SearchBox value={searchQuery} onChange={setSearchQuery} />
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4"></h2>
            <CustomerList customers={filteredCustomers} />
          </div>
        </div>
      </div>
    </div>
  );
};
