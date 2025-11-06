
import React, { useState } from 'react';
import { SearchBox } from '@/components/features/customer/SearchBox';
import { DashboardCards } from '@/components/features/dashboard/DashboardCards';
import { Calendar, Bell, MapPin, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock news data
const newsItems = [
  {
    id: '1',
    title: 'Acme Corporation',
    timestamp: 'Today, 10:30 AM',
    type: 'success',
    description: 'Global manufacturing and distribution company specializing in industrial equipment and automation solutions.'
  },
  {
    id: '2',
    title: 'Dynamic Solutions Ltd',
    timestamp: 'Yesterday, 3:45 PM',
    type: 'risk',
    description: 'IT consulting and software development firm providing enterprise solutions for mid-sized businesses.'
  },
  {
    id: '3',
    title: 'Green Energy Partners',
    timestamp: '2 days ago',
    type: 'warning',
    description: 'Renewable energy provider focused on solar and wind power installations for commercial clients.'
  },
  {
    id: '4',
    title: 'Metro Hospitality Group',
    timestamp: '3 days ago',
    type: 'info',
    description: 'Hotel and restaurant chain operating premium properties across major metropolitan areas.'
  },
  {
    id: '5',
    title: 'Patterson Healthcare',
    timestamp: 'Last week',
    type: 'success',
    description: 'Private healthcare provider with a network of clinics and specialist medical facilities.'
  },
  {
    id: '6',
    title: 'Global Logistics Ltd',
    timestamp: 'Last week',
    type: 'info',
    description: 'International freight forwarding and supply chain management company with worldwide operations.'
  },
  {
    id: '7',
    title: 'TechVision Innovations',
    timestamp: '2 weeks ago',
    type: 'success',
    description: 'Technology startup developing AI-powered business intelligence and analytics platforms.'
  },
  {
    id: '8',
    title: 'Harrison Construction',
    timestamp: '2 weeks ago',
    type: 'info',
    description: 'Commercial construction company specializing in large-scale office and retail developments.'
  },
  {
    id: '9',
    title: 'Emerald Retail Group',
    timestamp: '3 weeks ago',
    type: 'risk',
    description: 'Multi-brand retail operator with stores in shopping centers and high streets across the region.'
  },
  {
    id: '10',
    title: 'Heritage Foods',
    timestamp: 'Last month',
    type: 'success',
    description: 'Food processing and distribution company focusing on organic and locally sourced products.'
  },
  {
    id: '11',
    title: 'Quantum Electronics',
    timestamp: 'Last month',
    type: 'warning',
    description: 'Electronics manufacturer producing components for telecommunications and consumer devices.'
  }
];

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedSector, setSelectedSector] = useState<string>('all');

  return (
    <div className="container max-w-full py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* News Feed Panel */}
        <div className="md:w-1/3 lg:w-1/4">
          <Card className="border-border/60 bg-card/90 h-fit">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Recently Viewed Companies
                <span className="text-xs text-muted-foreground font-normal ml-2">(14 days ago)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[760px] pr-4">
                <div className="space-y-4">
                  {newsItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-3 border border-border/50 rounded-lg bg-background/80 hover:bg-background transition-colors"
                    >
                      <div className="mb-1">
                        <h4 className="font-medium text-sm">{item.title}</h4>
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
            
            {/* Filters */}
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              {/* Region Filter */}
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full md:w-44 h-12 border-2 bg-card/90 shadow-sm z-40">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <SelectValue placeholder="Filter by region" />
                </SelectTrigger>
                <SelectContent className="bg-card border-2 z-50">
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="south-east">South East</SelectItem>
                  <SelectItem value="north-west">North West</SelectItem>
                  <SelectItem value="east-england">East of England</SelectItem>
                  <SelectItem value="west-midlands">West Midlands</SelectItem>
                  <SelectItem value="south-west">South West</SelectItem>
                  <SelectItem value="yorkshire">Yorkshire and The Humber</SelectItem>
                  <SelectItem value="east-midlands">East Midlands</SelectItem>
                  <SelectItem value="north-east">North East</SelectItem>
                  <SelectItem value="scotland">Scotland</SelectItem>
                  <SelectItem value="wales">Wales</SelectItem>
                  <SelectItem value="northern-ireland">Northern Ireland</SelectItem>
                </SelectContent>
              </Select>

              {/* Sector Filter */}
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-full md:w-44 h-12 border-2 bg-card/90 shadow-sm z-40">
                  <Building2 className="h-4 w-4 mr-1 text-muted-foreground" />
                  <SelectValue placeholder="Filter by sector" />
                </SelectTrigger>
                <SelectContent className="bg-card border-2 z-50">
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="professional-services">Professional Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-8">
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  );
};
