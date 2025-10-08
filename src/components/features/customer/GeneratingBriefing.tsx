
import React from 'react';
import { BarChart3 } from 'lucide-react';

export const GeneratingBriefing: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
      <div className="text-center">
        <BarChart3 className="h-12 w-12 mx-auto mb-4 text-muted-foreground animate-pulse" />
        <h3 className="text-lg font-medium">Generating Briefing Pack...</h3>
        <p className="text-muted-foreground mt-2">
          Please wait while we analyze the customer data.
        </p>
      </div>
    </div>
  );
};
