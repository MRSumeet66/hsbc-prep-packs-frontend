
import React, { useState } from 'react';
import { SearchBox } from '@/components/features/customer/SearchBox';
import { DashboardCards } from '@/components/features/dashboard/DashboardCards';
import { Calendar, Bell } from 'lucide-react';
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

  return (
    <div className="container max-w-full py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* News Feed Panel */}
        <div className="md:w-1/3 lg:w-1/4">
          <Card className="border-border/60 bg-card/90 h-[calc(100vh-7rem)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Recent Activity
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-1">14 days ago</p>
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
          
          <div className="mt-8">
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  );
};
