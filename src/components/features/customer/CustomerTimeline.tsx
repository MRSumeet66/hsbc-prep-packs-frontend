
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type: 'onboard' | 'account' | 'product' | 'complaint' | 'survey' | 'closure';
  subtitle?: string;
  status?: 'completed' | 'open' | 'pending';
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
    status: event.status || (index === 0 ? 'open' : 'completed'),
    time: event.time || '00:00'
  }));

  // Format the date to show month and year
  const formatDate = (dateString: string) => {
    const dateParts = dateString.split(' ');
    const month = dateParts[0];
    const year = dateParts[1] || new Date().getFullYear().toString();
    return `${month} ${year.slice(-2)}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'open':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'pending':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    }
  };

  return (
    <Card className="border-border/60">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Journeys</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[200px] pr-4">
          <div className="p-6 pt-0 space-y-3">
            {eventsWithStatus.map((event) => (
              <div 
                key={event.id} 
                className="p-3 rounded-md bg-muted/50 border border-border/40"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{event.title}</div>
                    {event.subtitle && (
                      <div className="text-xs text-muted-foreground mt-0.5">{event.subtitle}</div>
                    )}
                    <div className="text-xs text-muted-foreground mt-1">
                      {formatDate(event.date)} • {event.time}
                    </div>
                  </div>
                  <span className={`text-xs px-1.5 py-0.5 rounded capitalize shrink-0 ${getStatusColor(event.status || 'completed')}`}>
                    {event.status || 'completed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CustomerTimeline;
