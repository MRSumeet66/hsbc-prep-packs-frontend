
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface MarketplaceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
  onClick: () => void;
}

export const MarketplaceCard = ({ title, description, icon, tags = [], onClick }: MarketplaceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-border/60 bg-card/80 backdrop-blur-sm relative group">
      <CardHeader className="space-y-1 pb-2">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 w-12 h-12 flex items-center justify-center text-primary rounded-md">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative overflow-hidden rounded-md">
        {/* Dashboard preview with a realistic looking dashboard image */}
        <div className="h-48 w-full rounded-md overflow-hidden">
          <div className="w-full h-full bg-white flex items-center justify-center relative shadow-sm">
            {/* Create a mock dashboard image */}
            <div className="absolute inset-0 p-2">
              <div className="w-full h-full rounded bg-white">
                {/* Header */}
                <div className="bg-gray-100 h-6 w-full mb-2 rounded flex items-center px-2">
                  <div className="bg-gray-300 h-3 w-3 rounded-full mr-1"></div>
                  <div className="bg-gray-300 h-3 w-24 rounded"></div>
                </div>
                
                {/* Dashboard content */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-50 h-16 rounded flex items-center justify-center p-2">
                    <div className="w-full h-full">
                      <div className="bg-gray-200 h-2 w-2/3 mb-1.5 rounded"></div>
                      <div className="flex items-center justify-center">
                        <div className="h-9 w-9 rounded-full bg-hsbc-red/40 flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-hsbc-red/70"></div>
                        </div>
                        <div className="ml-2">
                          <div className="bg-gray-200 h-2 w-8 mb-1 rounded"></div>
                          <div className="bg-gray-200 h-2 w-12 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 h-16 rounded p-2">
                    <div className="bg-gray-200 h-2 w-3/4 mb-1 rounded"></div>
                    <div className="flex items-end justify-between h-10 mt-1">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-3 bg-hsbc-red/70 rounded-t"
                          style={{ height: `${20 + Math.random() * 60}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom section */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 h-20 rounded col-span-2 p-2">
                    <div className="bg-gray-200 h-2 w-2/3 mb-2 rounded"></div>
                    <div className="h-14 w-full">
                      <div className="h-full flex items-end">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-hsbc-red/60 mx-[1px] rounded-t"
                            style={{ height: `${30 + Math.random() * 60}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 h-20 rounded p-2">
                    <div className="bg-gray-200 h-2 w-3/4 mb-2 rounded"></div>
                    <div className="h-14 w-full flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <div style={{ height: '50%' }} className="bg-hsbc-red/80 w-full"></div>
                        <div style={{ height: '30%' }} className="bg-hsbc-red/60 w-full"></div>
                        <div style={{ height: '20%' }} className="bg-hsbc-red/40 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button 
              onClick={onClick}
              size="icon"
              variant="secondary" 
              className="bg-white/90 hover:bg-white text-foreground size-10"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Open Dashboard</span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-3">
        <div className="flex gap-2 flex-wrap">
          {tags.length > 0 ? tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-muted/50">
              {tag}
            </Badge>
          )) : (
            <Badge variant="outline" className="text-xs bg-muted/50">
              No tags
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
