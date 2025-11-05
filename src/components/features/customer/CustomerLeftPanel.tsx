
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomerTimeline from '@/components/features/customer/CustomerTimeline';
import { CustomerData } from './types/customer-types';
import { TimelineEvent } from './CustomerTimeline';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CustomerLeftPanelProps {
  customer: CustomerData;
}

export const CustomerLeftPanel: React.FC<CustomerLeftPanelProps> = ({ customer }) => {
  return (
    <div className="w-full md:w-1/4 space-y-6 flex flex-col h-[calc(100vh-8rem)]">
      {/* Network Relationship Section - Now First */}
      <div className="space-y-6 flex-grow flex flex-col">
        {customer.networkRelationships && customer.networkRelationships.length > 0 && (
          <Card className="border-border/60 flex-grow -ml-[1%]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Network Relationship</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[270px] pr-4">
                <div className="p-6 pt-0 space-y-4">
                  {customer.networkRelationships.map((relationship, idx) => (
                    <div key={idx} className="space-y-4">
                      {/* Section 1: Company Details */}
                      <div className="p-3 rounded-md bg-muted/50 border border-border/40 text-sm space-y-2">
                        <div className="flex">
                          <span className="font-medium text-muted-foreground min-w-[80px]">CIN:</span>
                          <span className="font-medium">{relationship.cin}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium text-muted-foreground min-w-[80px]">Parent:</span>
                          <span className="font-medium">{relationship.parent}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium text-muted-foreground min-w-[80px]">MG Name:</span>
                          <span className="font-medium">{relationship.mgName}</span>
                        </div>
                        <div className="flex">
                          <span className="font-medium text-muted-foreground min-w-[80px]">MG ID:</span>
                          <span className="font-medium">{relationship.mgId}</span>
                        </div>
                      </div>

                      {/* Section 2: Linked Businesses */}
                      <div className="p-3 rounded-md border border-border/40 text-sm">
                        <div className="font-medium text-muted-foreground mb-2">Linked Businesses</div>
                        <div className="space-y-1.5">
                          {relationship.linkedBusinesses.map((business, businessIdx) => (
                            <div key={businessIdx} className="text-sm py-1.5 px-2 rounded bg-muted/30">
                              <div className="font-medium">{business.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">CIN: {business.cin}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
        
        {/* Inhibits Section */}
        {customer.inhibits && customer.inhibits.length > 0 && (
          <Card className="border-border/60 -ml-[1%]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Inhibits</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[200px] pr-4">
                <div className="p-6 pt-0 space-y-3">
                  {customer.inhibits.map((inhibit, idx) => (
                    <div key={idx} className="p-3 rounded-md bg-muted/50 border border-border/40 text-sm">
                      <div className="font-medium mb-1">{inhibit.type}</div>
                      <div className="text-muted-foreground mb-1">{inhibit.description}</div>
                      <div className="text-xs text-muted-foreground">{inhibit.date}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
        
        {/* Recent Activity Timeline */}
        {customer.timeline && (
          <CustomerTimeline events={customer.timeline as TimelineEvent[]} />
        )}
        
        {/* Complaints Section */}
        {customer.complaints.length > 0 && (
          <Card className="border-border/60 flex-grow -ml-[1%]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Complaints</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[200px] pr-4">
                <div className="p-6 pt-0 space-y-3">
                  {customer.complaints
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((complaint) => (
                      <div key={complaint.id} className="p-3 rounded-md bg-muted/50 border border-border/40 text-sm">
                        <div className="flex justify-between">
                          <span className="text-xs font-medium">{complaint.date}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded ${complaint.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {complaint.status}
                          </span>
                        </div>
                        <p className="mt-1">{complaint.issue}</p>
                        {complaint.resolution && (
                          <div className="mt-1 pt-1 border-t border-border/30 text-xs text-muted-foreground">
                            <span className="font-medium">Resolution:</span> {complaint.resolution}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
        
        {customer.surveys.length > 0 && (
          <Card className="border-border/60 flex-grow -ml-[1%]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">ICS Results</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[200px] pr-4">
                <div className="p-6 pt-0 space-y-3">
                  {customer.surveys
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((survey, idx) => (
                      <div key={idx} className="p-3 rounded-md bg-muted/50 border border-border/40 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">{survey.date}</span>
                          <div className="flex items-center gap-1">
                            <span className={`text-xs px-1.5 py-0.5 rounded ${survey.score >= 7 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                              {survey.score}/10
                            </span>
                          </div>
                        </div>
                        <p className="mt-1 text-xs italic">"{survey.feedback}"</p>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
