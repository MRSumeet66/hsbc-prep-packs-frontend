
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Circle } from 'lucide-react';

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type: 'onboard' | 'account' | 'product' | 'complaint' | 'survey' | 'closure';
  subtitle?: string;
  status?: 'completed' | 'current' | 'pending';
  time?: string;
}

interface CustomerTimelineProps {
  events: TimelineEvent[];
}

const CustomerTimeline: React.FC<CustomerTimelineProps> = ({ events }) => {
  // Sort events by date (most recent first)
  const sortedEvents = [...events].sort((a, b) => {
    // Convert date strings to comparable values (assuming date strings like "Apr 2024", "Sep 2019")
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Add status to events if not provided - default to completed for past events
  const eventsWithStatus = sortedEvents.map((event, index) => ({
    ...event,
    status: event.status || (index === 0 ? 'current' : 'completed'),
    time: event.time || '00:00'
  }));

  // Format the date to show month and year
  const formatDate = (dateString: string) => {
    const dateParts = dateString.split(' ');
    const month = dateParts[0];
    const year = dateParts[1] || new Date().getFullYear().toString();
    return `${month} ${year.slice(-2)}`;
  };

  return (
    <Card className="border-border/60">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Recent Activity (14 days ago)</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px] pr-4">
          <div className="p-6 pt-0 space-y-4">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-2 top-0 bottom-2 w-px bg-gray-200" />
              
              {/* Timeline events */}
              {eventsWithStatus.map((event, idx) => (
                <div 
                  key={event.id} 
                  className="mb-4 relative pl-16" 
                >
                  {/* Event marker */}
                  <div className={`absolute left-2 -ml-[9px] top-1.5 w-[18px] h-[18px] flex items-center justify-center rounded-full border-2
                    ${event.status === 'completed' ? 'bg-white border-hsbc-red text-hsbc-red' : 
                      event.status === 'current' ? 'bg-hsbc-red border-hsbc-red text-white' : 
                      'bg-gray-200 border-gray-200'}`}
                  >
                    {event.status === 'completed' ? <Check size={12} /> : null}
                  </div>
                  
                  {/* Date display - updated to show month and year */}
                  <div className="absolute left-7 text-xs font-medium text-gray-500 whitespace-nowrap">
                    {formatDate(event.date)}
                    <div className="text-[10px] leading-tight font-normal">{event.time}</div>
                  </div>
                  
                  {/* Event content styled to match complaint/survey cards */}
                  <div className="ml-4 p-2 rounded-md bg-muted/50 border border-border/40">
                    <div className="font-medium text-sm">{event.title}</div>
                    {event.subtitle && (
                      <div className="text-xs text-muted-foreground mt-0.5">{event.subtitle}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CustomerTimeline;
