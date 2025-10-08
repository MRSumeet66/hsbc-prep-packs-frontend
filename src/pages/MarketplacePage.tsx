
import React from 'react';
import { MarketplaceCard } from '@/components/features/marketplace/MarketplaceCard';
import { BarChart3, PieChart, LineChart, BarChart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const MarketplacePage = () => {
  const { toast } = useToast();
  
  const handleCardClick = (title: string) => {
    toast({
      title: "Dashboard Access",
      description: `The ${title} dashboard would open in a real application.`,
    });
  };
  
  const dashboards = [
    {
      id: '1',
      title: 'Revenue Analytics',
      description: 'Comprehensive analysis of revenue streams across customer segments',
      icon: <BarChart3 className="h-5 w-5" />,
      tags: ['Finance', 'Sales', 'Trending']
    },
    {
      id: '2',
      title: 'Product Utilization',
      description: 'Track usage patterns and adoption rates for banking products',
      icon: <PieChart className="h-5 w-5" />,
      tags: ['Products', 'Engagement']
    },
    {
      id: '3',
      title: 'Customer Satisfaction',
      description: 'NPS scores and customer feedback analysis dashboard',
      icon: <LineChart className="h-5 w-5" />,
      tags: ['Experience', 'NPS']
    },
    {
      id: '4',
      title: 'Market Opportunities',
      description: 'Identify growth potential and new business opportunities',
      icon: <BarChart className="h-5 w-5" />,
      tags: ['Growth', 'Strategy']
    },
    {
      id: '5',
      title: 'Risk Assessment',
      description: 'Monitor customer risk profiles and compliance metrics',
      icon: <BarChart3 className="h-5 w-5" />,
      tags: ['Risk', 'Compliance']
    },
    {
      id: '6',
      title: 'Trend Analysis',
      description: 'Industry and market trend comparisons for your customers',
      icon: <LineChart className="h-5 w-5" />,
      tags: ['Industry', 'Benchmarking']
    }
  ];

  return (
    <div className="container max-w-full py-6">
      <div>
        <h1 className="text-3xl font-bold mb-1">Data & Analytics Marketplace</h1>
        <p className="text-muted-foreground mb-8">
          Access advanced dashboards and analytics tools created by the CMB data and analytics teams.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard) => (
            <MarketplaceCard
              key={dashboard.id}
              title={dashboard.title}
              description={dashboard.description}
              icon={dashboard.icon}
              tags={dashboard.tags}
              onClick={() => handleCardClick(dashboard.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
