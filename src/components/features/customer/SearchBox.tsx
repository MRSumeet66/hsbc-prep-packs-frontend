
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { getMockCustomerData } from '@/data/mockCustomerData';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      // Try to find customer by name (simple search)
      const searchLower = value.toLowerCase();
      // Check customers 1-20 (expand as needed based on mock data)
      for (let i = 1; i <= 20; i++) {
        try {
          const customer = getMockCustomerData(i.toString());
          if (customer.name.toLowerCase().includes(searchLower)) {
            navigate(`/customer/${i}`);
            return;
          }
        } catch {
          // Customer doesn't exist, continue
        }
      }
    }
  };
  return (
    <div className="relative mb-6 animate-in">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground">
        <Search className="h-full w-full" />
      </div>
      
      <Input
        placeholder="Search for customers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-12 h-14 border-2 focus-visible:ring-hsbc-red shadow-sm bg-card/90 text-base"
      />
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-muted/70 text-xs text-muted-foreground px-2 py-1 rounded">
        {value ? 'Press Enter' : 'Type to search'}
      </div>
    </div>
  );
};
