
import React from 'react';
import { Card } from '@/components/ui/card';
import CustomerTimeline from '@/components/features/customer/CustomerTimeline';
import { CustomerData } from './types/customer-types';
import { TimelineEvent } from './CustomerTimeline';

interface CustomerLeftPanelProps {
  customer: CustomerData;
}

export const CustomerLeftPanel: React.FC<CustomerLeftPanelProps> = ({ customer }) => {
  return (
    <div className="w-full md:w-1/4 space-y-6 flex flex-col h-[calc(100vh-8rem)]">
      {/* Network Relationship Section - Now First */}
      <div className="space-y-6 flex-grow flex flex-col">
        {customer.networkRelationships && customer.networkRelationships.length > 0 && (
          <Card className="border-border/60 flex-grow">
            <div className="p-4 pb-3">
              <h3 className="text-lg font-medium">Network Relationship</h3>
            </div>
            <div className="px-4 pb-4 flex-grow overflow-y-auto">
              <div className="space-y-3 pr-1">
                {customer.networkRelationships.map((relationship, idx) => (
                  <div key={idx} className="p-3 rounded-md border border-border/40 text-sm space-y-2">
                    <div className="flex">
                      <span className="font-medium text-muted-foreground min-w-[60px]">CIN:</span>
                      <span>{relationship.cin}</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-muted-foreground min-w-[60px]">Parent:</span>
                      <span>{relationship.parent}</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-muted-foreground min-w-[60px]">MG:</span>
                      <span>{relationship.mg}</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-muted-foreground min-w-[60px]">Linked Businesses:</span>
                      <span>{relationship.linkedBusinesses}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
        
        {/* Inhibits Section */}
        {customer.inhibits && (
          <Card className="border-border/60">
            <div className="p-4">
              <h3 className="font-medium mb-3">Inhibits</h3>
              <p className="text-sm text-muted-foreground">{customer.inhibits}</p>
            </div>
          </Card>
        )}
        
        {/* Recent Activity Timeline */}
        {customer.timeline && (
          <CustomerTimeline events={customer.timeline as TimelineEvent[]} />
        )}
        
        {/* Complaints Section */}
        {customer.complaints.length > 0 && (
          <Card className="border-border/60 flex-grow">
            <div className="p-4 h-full flex flex-col">
              <h3 className="font-medium mb-3">Complaints</h3>
              <div className="space-y-3 flex-grow overflow-y-auto pr-1">
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
            </div>
          </Card>
        )}
        
        {customer.surveys.length > 0 && (
          <Card className="border-border/60 flex-grow">
            <div className="p-4 h-full flex flex-col">
              <h3 className="font-medium mb-3">ICS Results</h3>
              <div className="space-y-3 flex-grow overflow-y-auto pr-1">
                {customer.surveys
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((survey, idx) => (
                    <div key={idx} className="p-3 rounded-md border border-border/40 text-sm">
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
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
