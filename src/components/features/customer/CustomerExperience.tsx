
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { CustomerData } from './types/customer-types';

interface CustomerExperienceProps {
  customer: CustomerData;
}

export const CustomerExperience: React.FC<CustomerExperienceProps> = ({ customer }) => {
  return (
    <Card className="animate-in border-border/60" style={{ animationDelay: '600ms' }}>
      <CardHeader className="border-b border-border/40">
        <CardTitle>Customer Experience Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              Complaints & Feedback
            </h3>
            {customer.complaints.length > 0 ? (
              <div className="space-y-4">
                {customer.complaints.map((complaint) => (
                  <div key={complaint.id} className="p-3 rounded-md bg-muted/50 border border-border/40">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{complaint.date}</span>
                      <Badge variant={complaint.status === 'resolved' ? 'outline' : 'destructive'}>
                        {complaint.status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm">{complaint.issue}</p>
                    {complaint.resolution && (
                      <div className="mt-2 border-t border-border/30 pt-2 text-xs text-muted-foreground">
                        <span className="font-medium">Resolution:</span> {complaint.resolution}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No complaints recorded.</p>
            )}
            
            {customer.surveys.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  Recent Survey Feedback
                </h3>
                <div className="space-y-3">
                  {customer.surveys.map((survey, idx) => (
                    <div key={idx} className="p-3 rounded-md border border-border/40">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{survey.date}</span>
                        <div className="flex items-center gap-1">
                          {survey.score >= 7 ? (
                            <ThumbsUp className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <ThumbsDown className="h-4 w-4 text-red-500" />
                          )}
                          <span className="text-sm font-medium">{survey.score}/10</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm italic">"{survey.feedback}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Star className="h-4 w-4 text-muted-foreground" />
              NPS History
            </h3>
            <div className="h-[300px]">
              <ChartContainer 
                config={{
                  score: { color: "#db0011" }
                }} 
                className="h-full"
              >
                <LineChart
                  data={customer.npsHistory}
                  margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis domain={[0, 10]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#db0011" 
                    strokeWidth={2}
                    dot={{ fill: '#db0011', r: 4 }}
                    activeDot={{ r: 6, fill: '#db0011', stroke: '#fff', strokeWidth: 2 }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                <div className="text-2xl font-bold text-green-600">9.2</div>
                <div className="text-xs text-muted-foreground mt-1">Product Satisfaction</div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                <div className="text-2xl font-bold text-blue-600">8.7</div>
                <div className="text-xs text-muted-foreground mt-1">Service Quality</div>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
                <div className="text-2xl font-bold text-amber-600">7.8</div>
                <div className="text-xs text-muted-foreground mt-1">Digital Experience</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
